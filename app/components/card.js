import * as Styles from './index.css';
import HeartFill from '../svgs/heart-fill.svg';
import HeartEmpty from '../svgs/heart-empty.svg';

export default function ({ title, image, description, like, size, onClick, onLike }) {
  return (
    <div className={Styles.cardBox({ size })}>
      <img src={image} alt={title} className={Styles.cardImg} />
      <button className={`${Styles.iconBtn} ${Styles.cardIcon}`}>
        {
          like ?
            <HeartFill className={Styles.icon({ color: "primary" })} />
            : <HeartEmpty className={Styles.icon({ strokeColor: "white" })} />
        }
      </button>
      <div>
        <p className={Styles.cardTitle}>{title}</p>
        <p className={Styles.cardDesc}>{description}</p>
      </div>
    </div>
  )
}