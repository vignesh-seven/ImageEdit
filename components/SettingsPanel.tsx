import { Button , createStyles } from '@mantine/core'

import SliderContainer from './SliderContainer'

const useStyle = createStyles(() => ({
  "SettingsPanel": {
    backgroundColor: "brown"
  },

  "Settings": {
    height: "max-content",
    padding: "1em"
  },
  

  "BottomButtons": {
  marginBottom: "0%",
  height: "auto",
},

  "button": {
  width: "fit-content",
  margin: "1em",
  float: "inline-start",
},

  "right": {
  float: "inline-end",
},


}))


export default function SettingsPanel(props: any) {

  const { classes } = useStyle();

  return (

  <div className={classes.SettingsPanel}>
    <div className={classes.Settings}>
      <SliderContainer value={props.config.brightness} changeConfig={props.changeConfig} name="brightness" label="Brightness"/>
      <SliderContainer value={props.config.contrast} changeConfig={props.changeConfig} name="contrast" label="Contrast"/> 
    </div>

    <div className={classes.BottomButtons}>
      <Button className={classes.button}>
        Open
      </Button>
      <Button className={`${classes.button} ${classes.right}`}>
        Save
      </Button>
      <Button className={`${classes.button} ${classes.right}`}>
        Save As
      </Button>
    </div>
  </div>
)
}