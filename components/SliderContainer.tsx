import { Slider, Text, Button } from '@mantine/core'

import styles from '../styles/SettingsPanel.module.css'


export default function SliderContainer(props: any) {

  // function handleChange(event) {
  //   props.changeConfig(props.name, event)
  //   console.log(event)
  //   // console.log(event)   //// THE NEW VALUE IS BEING PASSES TO THE PARENT BUT ITS NOT UPDATING THE STATE
  // }
  return (
    <div className={styles.SliderContainer}>
      <Text fz="md" className={styles.flexChild}>{props.label}</Text>

      <div className={styles.Slider}>

        <Slider 
          min={-50}
          max={50}
          label={(value) => value.toFixed(1)}
          styles={{ markLabel: { display: 'none' } }}
          className={styles.flexChild}
          onChange={(newValue) => {
            props.changeConfig(props.name, newValue)
          }}
          name={props.name}
          value={props.value}
        />
        <Button compact 
          onClick={() => {
            props.changeConfig(props.name, props.value + 1)
          }}
          >+</Button>
        <Button compact 
          onClick={() => {
            props.changeConfig(props.name, props.value - 1)
          }}
        >-</Button>
      </div>
    </div>
  )
}