import { Button } from '@mantine/core'
import styles from '../styles/SettingsPanel.module.css'

export default function SettingsPanel() {
  return (
  <div className={styles.SettingsPanel}>
    <div className={styles.Settings}>
      <p>brightness</p>
      <p>contrast</p>
      <p>saturation</p>
      <p>quality</p>
    </div>
    <div className={styles.BottomButtons}>
      <Button className={styles.button}>
        Hello
      </Button>
      <Button className={`${styles.button} ${styles.right}`}>
        Hellowww
      </Button>
    </div>
  </div>
)
}