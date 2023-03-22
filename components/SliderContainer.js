import { Slider, Text, Button } from '@mantine/core'

import styles from '../styles/SettingsPanel.module.css'


export default function SliderContainer(props) {


  return (
    <div className={styles.SliderContainer}>
      <Text fz="md" className={styles.flexChild}>{props.label}</Text>

      <div className={styles.Slider}>

        <Slider 
          
          defaultValue={props.value}
          min={-50}
          max={50}
          label={(value) => value.toFixed(1)}
          styles={{ markLabel: { display: 'none' } }}
          className={styles.flexChild}
        />
        <Button compact >+</Button>
        <Button compact >-</Button>
      </div>
    </div>
  )
}