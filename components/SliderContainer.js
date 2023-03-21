import { Slider, Text} from '@mantine/core'

import styles from '../styles/SettingsPanel.module.css'


export default function SliderContainer(props) {
  return (
    <div className={styles.SliderContainer}>
      <Text fz="md" className={styles.flexChild}>{props.name}</Text>

      <Slider 
      
        defaultValue={0}
        min={-50}
        max={50}
        label={(value) => value.toFixed(1)}
        styles={{ markLabel: { display: 'none' } }}
        className={styles.flexChild}
      />
    </div>
  )
}