import { FC } from "react";
import styles from './style.module.css'

const TotalTax: FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>あなたが支払った税金</p>
      <p className={styles.amount}>5000<span className={styles.unit}>円</span></p>
    </div>
  );
};

export default TotalTax;
