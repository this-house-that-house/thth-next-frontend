import * as Styles from "./index.css";

export default function ({ activeIndex, setActiveIndex, children }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: 35
    }}>
      <div
        className={Styles.slider}
      >
        {children.map((item, index) => {
          return (
            <div
              className={Styles.sliderItem({ index: activeIndex })}
              key={index}
            >
              <div className={Styles.sliderItemWrapper}>
                {item}
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.sliderLinks}>
        {children.map((_, index) => {
          return (
            <button
              key={index}
              className={Styles.sliderLink({ isActive: activeIndex === index })}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
