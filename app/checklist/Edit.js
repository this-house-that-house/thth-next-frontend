import React from 'react'
import { editChecklistLayout, titleInput, vars, checklistWrapper, tag } from '../components/index.css'
import Accordion from '../components/Accordion'
import Check from '../components/Check'
import Range from '../components/Range'
import TextArea from '../components/TextArea'

export default function ({ id }) {
  const data = {
    id: 1,
    user: 'user1',
    title: '인하주택',
    lighting: 1,
    water_pressure: 1,
    mold: 1,
    havc: 1,
    noise: 1,
    tags: [{
      id: 1,
      name: '매매',
      category: 'type'
    }],
    memo: '메모1'
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
  const tags = [
    {
      "id": "b5f3d3ec-9fab-4d14-b84c-810ab254be5d",
      "name": "편의점",
      "category": "amenities"
    },
    {
      "id": "9896a492-2aa2-4ad1-9ca9-bb873e5763a8",
      "name": "마트",
      "category": "amenities"
    },
    {
      "id": "ed7fcb57-ef5a-43e8-b444-c9bda4b7aaf8",
      "name": "카페",
      "category": "amenities"
    },
    {
      "id": "c7abc0a0-56b4-4e99-a0c5-07dfc9367ad6",
      "name": "세탁소",
      "category": "amenities"
    },
    {
      "id": "449c0743-a043-4000-8a62-4ec9a29d7646",
      "name": "버스정류장",
      "category": "amenities"
    },
    {
      "id": "699730f0-61bb-4931-8c40-70ccf7c6bcf3",
      "name": "지하철",
      "category": "amenities"
    },
    {
      "id": "c2f95b73-5fad-4780-bbeb-6014a321be40",
      "name": "주차장",
      "category": "environment"
    },
    {
      "id": "64e21311-3d27-42ca-804e-c0409a6f1e9b",
      "name": "CCTV",
      "category": "environment"
    },
    {
      "id": "e986ed4e-4022-4f11-9e6f-e2caa8980f7d",
      "name": "경비원 상주",
      "category": "environment"
    },
    {
      "id": "3bb291b0-85c9-4f4e-bafa-213a1972e3ca",
      "name": "엘레베이터",
      "category": "environment"
    },
    {
      "id": "b98ffc98-a93e-433c-aed0-5db3553f1a78",
      "name": "옥상 출입가능",
      "category": "environment"
    },
    {
      "id": "ff3f2934-f55d-420a-9fc5-f582d267dae8",
      "name": "에어컨",
      "category": "appliances"
    },
    {
      "id": "ab2088bc-f4c7-4722-89bc-385ae9e15590",
      "name": "냉장고",
      "category": "appliances"
    },
    {
      "id": "1667b51f-26e9-4bbc-91af-d7547cacd116",
      "name": "전자레인지",
      "category": "appliances"
    },
    {
      "id": "17e857d9-9c7b-423d-a2f9-673a14256259",
      "name": "TV",
      "category": "appliances"
    },
    {
      "id": "79cde191-127c-462d-b4d7-6e00c99b7f95",
      "name": "세탁기",
      "category": "appliances"
    },
    {
      "id": "f700c873-cf32-47f1-b2b2-5b9b4c8af222",
      "name": "가스레인지",
      "category": "appliances"
    },
    {
      "id": "925afd95-4794-4a84-afa8-0cd0388af6e6",
      "name": "인덕션",
      "category": "appliances"
    },
    {
      "id": "649e2794-0465-416a-b9f7-808a2edbc558",
      "name": "보일러",
      "category": "appliances"
    },
    {
      "id": "3b8e2566-4c8f-4e2d-a314-5e536a564896",
      "name": "와이파이 공유기",
      "category": "appliances"
    },
    {
      "id": "e25c357f-76ff-43fa-9968-7f3f53cbb748",
      "name": "책상",
      "category": "furniture"
    },
    {
      "id": "558d7fb8-64a3-4ef4-af40-2545ef1f0ec1",
      "name": "책장",
      "category": "furniture"
    },
    {
      "id": "11771610-e17f-459b-830a-71fc42ff6a35",
      "name": "침대",
      "category": "furniture"
    },
    {
      "id": "4bf244d5-2f7e-4393-b800-b582955b6159",
      "name": "의자",
      "category": "furniture"
    },
    {
      "id": "2d3ecc7a-b72f-4da7-b297-07c28c7d9361",
      "name": "옷장",
      "category": "furniture"
    },
    {
      "id": "a63e8c06-5a10-454a-ab1a-36db2c6769d2",
      "name": "신발장",
      "category": "furniture"
    },
    {
      "id": "3a3d6e75-d54d-4cd9-931c-6a054c4568ba",
      "name": "행거",
      "category": "furniture"
    },
    {
      "id": "35b838db-9192-45dc-85e5-3f4d5047b27a",
      "name": "커튼",
      "category": "furniture"
    },
    {
      "id": "03720591-6cdc-4615-82e7-f3c1c41a52ed",
      "name": "주방용품",
      "category": "furniture"
    },
    {
      "id": "76925314-ee7e-41da-a403-b3900ef2c4b4",
      "name": "채광",
      "category": "pros"
    },
    {
      "id": "722e8214-e996-4ef3-b670-f005a51090e7",
      "name": "수압",
      "category": "pros"
    },
    {
      "id": "1413b12b-c33b-430b-8316-b622b2bf9bfe",
      "name": "편의 시설 인접",
      "category": "pros"
    },
    {
      "id": "5513d13e-f499-41e5-8aff-75b5462b3280",
      "name": "방음",
      "category": "pros"
    },
    {
      "id": "577632fb-40f7-4783-8a8e-07c5d7fad430",
      "name": "방의 상태",
      "category": "pros"
    },
    {
      "id": "09185972-b142-4fca-97ab-85e85e3a671e",
      "name": "교통 환경",
      "category": "pros"
    },
    {
      "id": "5c0a4805-368f-414a-ad9d-c1d5a8f39aeb",
      "name": "건물 관리",
      "category": "pros"
    },
    {
      "id": "a7feb16f-3cfb-478d-93b3-3924d4e51307",
      "name": "냉난방",
      "category": "pros"
    },
    {
      "id": "0c1d7b7f-abde-4354-a437-44191c584e6b",
      "name": "보안",
      "category": "pros"
    },
    {
      "id": "ab88a640-b64a-4ff3-991f-251ee51862fd",
      "name": "학교 근접",
      "category": "pros"
    },
    {
      "id": "df1049cd-3c92-412e-857a-d4706105379a",
      "name": "환기",
      "category": "pros"
    },
    {
      "id": "5a9d5455-f05e-4204-a2c0-b3659a08dbad",
      "name": "조용한 환경",
      "category": "pros"
    },
    {
      "id": "192b77aa-266c-4193-86b3-d59c670ea1df",
      "name": "기본 옵션 제공",
      "category": "pros"
    },
    {
      "id": "907af666-2402-4a34-bafe-b0c5001ff95f",
      "name": "집주인과의 소통",
      "category": "pros"
    },
    {
      "id": "0715997a-5d72-451d-912d-f0652087bb37",
      "name": "채광",
      "category": "cons"
    },
    {
      "id": "9250446f-556c-4489-b88b-60116b18ec82",
      "name": "수압",
      "category": "cons"
    },
    {
      "id": "9d1f864e-9586-4a2e-99c3-916b5aad4972",
      "name": "편의 시설 부족",
      "category": "cons"
    },
    {
      "id": "74512121-a097-4192-b665-314f700dc55b",
      "name": "방음",
      "category": "cons"
    },
    {
      "id": "bc815e5a-9bd6-4e81-9b1d-d022352964cd",
      "name": "방의 상태",
      "category": "cons"
    },
    {
      "id": "df92d0fc-0aaa-47c5-9f73-e815adef9815",
      "name": "교통 환경",
      "category": "cons"
    },
    {
      "id": "17fda8e9-9a8f-47e1-8daf-d3214764e9bf",
      "name": "건물 관리",
      "category": "cons"
    },
    {
      "id": "0ff82e5e-a08d-443c-b46e-6f83fd578a05",
      "name": "냉난방",
      "category": "cons"
    },
    {
      "id": "52ee06ef-ebeb-469c-a45a-9b256eaf1f6e",
      "name": "보안",
      "category": "cons"
    },
    {
      "id": "76775d57-d7d5-4e86-89fd-172f2e311344",
      "name": "통학 불편",
      "category": "cons"
    },
    {
      "id": "c0f3b32e-3b8d-4474-bb0a-6eee9b1a3b1d",
      "name": "환기",
      "category": "cons"
    },
    {
      "id": "2b805728-7754-4870-baa0-b6bec48cdcb6",
      "name": "시끄러운 환경",
      "category": "cons"
    },
    {
      "id": "ac288da4-e754-474f-b7a2-0fd6d2ce64a5",
      "name": "기본 옵션 부족",
      "category": "cons"
    },
    {
      "id": "2e6efef8-54c1-438e-bb25-9ed1f5e1fc4d",
      "name": "벌레",
      "category": "cons"
    },
    {
      "id": "68c0b44c-9d0c-4678-9bf6-1c87de47c608",
      "name": "집주인과의 소통",
      "category": "cons"
    },
    {
      "id": "2717d64c-2539-4a8f-bf4c-68d926a1edc5",
      "name": "습기 및 곰팡이",
      "category": "cons"
    },
    {
      "id": "d5f8abbf-0417-44be-893b-49a3adefbff4",
      "name": "친절해요",
      "category": "landlord"
    },
    {
      "id": "d56dd209-ffea-401b-8b21-e5cbde3b39c9",
      "name": "친근해요",
      "category": "landlord"
    },
    {
      "id": "60b74066-4757-49ac-94f9-1a0f55980e0f",
      "name": "간섭이 없어요",
      "category": "landlord"
    },
    {
      "id": "23cc0896-b144-4799-88fc-7db0d0b7249d",
      "name": "소통이 잘됐어요",
      "category": "landlord"
    },
    {
      "id": "9f282c93-97f8-4346-b153-f8bf918c7310",
      "name": "깔끔하게 관리해요",
      "category": "landlord"
    },
    {
      "id": "44f28163-0b2d-47ac-8ffe-70f38c6d464b",
      "name": "수리에 적극적이에요",
      "category": "landlord"
    },
    {
      "id": "2212719a-574c-417a-a044-5f4cf0d07f76",
      "name": "엄격해요",
      "category": "landlord"
    },
    {
      "id": "57824cae-2b72-4e7c-95b1-45f547611b7f",
      "name": "무관심해요",
      "category": "landlord"
    },
    {
      "id": "27111fab-8413-43fe-91d1-b4ccb76f4bf9",
      "name": "작은 문제에도 민감해요",
      "category": "landlord"
    }
  ]
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submit', e);
  }
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
                              <Check key={tag.id} variant="default" checkboxVisible>
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
                  <Range lowText={tag.lowText} highText={tag.highText} />
                </div>
              )
            })
          }
        </div>
      </Accordion>
      <Accordion title="메모">
        <TextArea style={{ width: '100%', height: 300, resize: 'none' }} />
      </Accordion>
    </form>
  )
}