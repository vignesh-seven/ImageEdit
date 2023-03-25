import { Slider, Text, Button, createStyles } from '@mantine/core'


const useStyle = createStyles(() => ({
  "SliderContainer": {
    margin: "0.5em",
    display: "flex",
    flexDirection: "column",
    height: "3em",
  },
  "Slider": {
    display: "grid", 
    gridAutoColumns: "1fr", 
    gridTemplateColumns: "1fr 2em 2em", 
    gridTemplateRows: "1fr", 
    gap: "0.2em 0.2em", 
    gridTemplateAreas: 
      ". . .", 
    alignItems: "center", 
  },
  "flexChild": {
    flex: "1"
  },
}))

export default function SliderContainer(props: any) {

  const { classes } = useStyle();
  return (
    <div className={classes.SliderContainer}>
      <Text fz="md" className={classes.flexChild}>{props.label}</Text>

      <div className={classes.Slider}>

        <Slider 
          min={-50}
          max={50}
          label={(value) => value.toFixed(1)}
          styles={{ markLabel: { display: 'none' } }}
          className={classes.flexChild}
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