import { center, vars, icon } from "../../components/index.css";
import EmptyHeartIcon from "../../svgs/heart-empty.svg";
import Card from "../../components/Card";

export default function () {
  const list = [
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: true
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: true
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: true
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: true
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    },
    {
      title: '인하주택',
      image: '',
      description: '평균 별점 4.7',
      like: false
    }
  ];
  return (
    <>
      {
        list.length === 0
          ?
          <div className={center} style={{ flex: 1, flexDirection: 'column', gap: 15 }}>
            <EmptyHeartIcon className={icon({ strokeColor: 'lightGray' })} />
            <span style={{ ...vars.font.bodyM16, color: vars.color.gray[400] }}>위시리스트가 비어있어요!</span>
          </div>
          : <div style={{
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'repeat(3, min-content)',
            gridRowGap: 40,
            padding: '0 16px',
          }}>
            {
              list.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  like={item.like}
                  size={'small'}
                />
              ))
            }
          </div>
      }
    </>
  )
}