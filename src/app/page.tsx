import clsx from 'clsx';
import styles from './page.module.css';

export default function Home() {
  // コメント
  return (
    <main className={styles['main']}>
      <div className={clsx(styles['wrapper'],styles['wrapper-freeza'])}>
        <div className={styles['freezer']}>私のz-indexは53万です</div>
      </div>
      <div className={clsx(styles['wrapper'],styles['wrapper-mob'])}>
        <div className={styles['mob']}>z-indexたったの5</div>
      </div>
    </main>
  );
}
