import React from 'react'
import { editChecklistLayout, titleInput, vars, checklistWrapper, tag } from '../components/index.css'
import Accordion from '../components/Accordion'
import Check from '../components/Check'
import Range from '../components/Range'
import TextArea from '../components/TextArea'
import { useEffect, useState } from 'react'
import { reqGetChecklist } from '../apis/checklist'
import { reqGetTag } from '../apis/tag'
import { reqPatchChecklist, reqPostChecklist } from '../apis/checklist'
import { useRouter } from 'next/navigation'

export default function ({ id }) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    const res = await reqGetTag();
    if (res.status === 200) {
      setTags(res.data);
    }
  }
  const getChecklist = async () => {
    const res = await reqGetChecklist({ id });
    if (res.status === 200) {
      setData(res.data);
    }
  }
  const tagCategories = [
    {
      name: "편의 시설",
      description: "걸어서 5분 거리에 있는 편의 시설을 체크해보세요",
      subCategories: [{
        id: "amenities",
        name: ''
      }],
    },
    {
      name: "건물 환경",
      subCategories: [{
        id: "environment",
        name: ''
      }]
    },
    {
      name: "기본 옵션",
      subCategories: [
        {
          id: "appliances",
          name: '가전제품'
        },
        {
          id: "furniture",
          name: '가구'
        },
      ]
    },
  ]
  const detailTags = [
    {
      name: "채광 🌤️",
      id: "lighting",
      lowText: "완전 암막",
      highText: "햇빛 쨍쨍"
    },
    {
      name: "수압 💧",
      id: "water_pressure",
      lowText: "매우 약함",
      highText: "매우 강함"
    },
    {
      name: "곰팡이 🍄",
      id: "mold",
      lowText: "관리 필요",
      highText: "매우 깨끗"
    },
    {
      name: "냉난방 🌡️",
      id: "havc",
      lowText: "조절 불가",
      highText: "완벽 온도"
    },
    {
      name: "주변 소음 📢",
      id: "noise",
      lowText: "매우 높음",
      highText: "완전 방음"
    },
  ]
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      tag_ids: [],
    };
    formData.forEach((value, key) => {
      if (key === 'tag_ids') data.tag_ids.push(value);
      else if (detailTags.some(tag => tag.id === key)) data[key] = +value;
      else data[key] = value;
    });

    let res;
    if (id === '-1') res = await reqPostChecklist(data);
    else res = await reqPatchChecklist({ id, ...data });
    if (res.status === 200 || res.status === 201) {
      alert('저장되었습니다');
      router.push('/checklist');
    }
  }

  useEffect(() => {
    getTags();
    if (id && id !== '-1') getChecklist({ id });
  }, []);
  return (
    <form id="checklist" className={editChecklistLayout} onSubmit={onSubmitHandler}>
      <input name="title" className={titleInput} type="text" defaultValue={data.title} placeholder='제목을 적어주세요' />
      {
        tagCategories.map((category, index) => {
          return (
            <Accordion key={index} title={category.name} description={category.description || ''}>
              <div className={checklistWrapper}>
                {
                  category.subCategories.map((subCategory, index) => {
                    return (
                      <React.Fragment key={index}>
                        {subCategory.name && <h3 style={{ ...vars.font.bodyM16, color: vars.color.blue }}>{subCategory.name}</h3>}
                        {
                          tags.filter(tag => tag.category === subCategory.id).map((tag, index) => {
                            return (
                              <Check key={tag.id} variant="default" checkboxVisible name="tag_ids" value={tag.id} defaultChecked={data.tags?.some?.(t => t.id === tag.id)}>
                                {tag.name}
                              </Check>
                            )
                          })
                        }
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </Accordion>
          )
        })
      }
      <Accordion title="세부 사항">
        <div className={checklistWrapper} style={{ gap: 49 }}>
          {
            detailTags.map((tag, index) => {
              return (
                <div className={checklistWrapper} key={tag.id}>
                  <span style={{ ...vars.font.bodyM18, color: vars.color.gray[700] }}>
                    {tag.name}
                  </span>
                  <Range lowText={tag.lowText} highText={tag.highText} name={tag.id} defaultValue={data[tag.id]} />
                </div>
              )
            })
          }
        </div>
      </Accordion>
      <Accordion title="메모">
        <TextArea style={{ width: '100%', height: 300, resize: 'none' }} name="memo" defaultValue={data.memo} />
      </Accordion>
    </form>
  )
}