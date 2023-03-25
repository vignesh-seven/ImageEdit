import { Button } from '@mantine/core'
import styles from '../styles/SettingsPanel.module.css'

import SliderContainer from './SliderContainer'

export default function SettingsPanel(props: any) {
  return (

  <div className={styles.SettingsPanel}>
    <div className={styles.Settings}>
      <SliderContainer value={props.config.brightness} changeConfig={props.changeConfig} name="brightness" label="Brightness"/>
      <SliderContainer value={props.config.contrast} changeConfig={props.changeConfig} name="contrast" label="Contrast"/> 
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