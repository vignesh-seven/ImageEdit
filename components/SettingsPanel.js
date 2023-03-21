import { Button } from '@mantine/core'
import styles from '../styles/SettingsPanel.module.css'

import SliderContainer from './SliderContainer'

export default function SettingsPanel() {
  return (

  <div className={styles.SettingsPanel}>
    <div className={styles.Settings}>
      <SliderContainer name="Brightness"/>
      <SliderContainer name="Contrast"/>
      
    </div>

    <div className={styles.BottomButtons}>
      <Button className={styles.button}>
        Open
      </Button>
      <Button className={`${styles.button} ${styles.right}`}>
        Save
      </Button>
      <Button className={`${styles.button} ${styles.right}`}>
        Save As
      </Button>
    </div>
  </div>
)
}