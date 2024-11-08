import { center, checklistComparePageLayout, centerWrapper } from '../components/index.css'
import CompareIcon from '../components/CompareIcon';
import CompareList from '../components/CompareList';
import CompareMemo from '../components/CompareMemo';
import { useEffect, useState } from 'react';
import { reqGetChecklist } from '../apis/checklist';
import { reqGetTag } from '../apis/tag'

export default function ({ ids }) {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const [compareDatas, setCompareDatas] = useState([]);
  const tagCategories = [
    {
      name: "편의 시설",
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
      name: "채광",
      id: "lighting"
    },
    {
      name: "수압",
      id: "water_pressure"
    },
    {
      name: "곰팡이",
      id: "mold"
    },
    {
      name: "냉난방",
      id: "havc"
    },
    {
      name: "주변 소음",
      id: "noise"
    },
  ]
  const getTags = async () => {
    const res = await reqGetTag();
    if (res.status === 200) {
      setTags(res.data);
    }
  }
  const getChecklist = async () => {
    ids.forEach(async (id) => {
      const res = await reqGetChecklist({ id });
      if (res.status === 200) {
        setData((prev) => [...prev, res.data]);
      }
    })
  }

  useEffect(() => {
    getTags();
    getChecklist();
  }, []);

  useEffect(() => {
    if (!tags.length || data.length < 2) return;
    const tagCategoriesCompareDatas = tagCategories.map((category => ({
      title: category.name,
      list: category.subCategories.map((subCategory => ({
        name: subCategory.name,
        list: tags.filter(tag => tag.category === subCategory.id).map(tag => ({
          name: tag.name,
          data: [
            data[0].tags.findIndex(t => t.name === tag.name) !== -1,
            data[1].tags.findIndex(t => t.name === tag.name) !== -1
          ]
        }))
      })))
    })))
    const detailCompareData = {
      title: '세부 사항',
      list: [{
        name: '',
        list: detailTags.map(tag => ({
          name: tag.name,
          data: [
            data[0][tag.id] || 0,
            data[1][tag.id] || 0
          ]
        }))
      }]
    }
    setCompareDatas([
      ...tagCategoriesCompareDatas,
      detailCompareData
    ])
  }, [tags, data])
  return (
    <>
      {
        data.length < 2 ? <div>데이터를 불러오는 중입니다.</div> :
          <div className={checklistComparePageLayout}>
            <div className={center} style={{
              width: '100%',
              padding: '0 90px',
              justifyContent: 'space-between',
            }}>
              {
                data.map((item) => {
                  return (
                    <div key={item.id} className={centerWrapper}>
                      <CompareIcon title={item.title} />
                    </div>
                  )
                })}
            </div>
            {
              compareDatas.map((item) => (
                <CompareList key={item.title} title={item.title} list={item.list} />
              ))
            }
            <CompareMemo title="메모" data1={data[0].memo} data2={data[1].memo} />
          </div>
      }
    </>
  )
}