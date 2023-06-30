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
    gridTemplateColumns: "2em 1fr 2em 2em", 
    gridTemplateRows: "1fr", 
    gap: "0.7em 0.7em", 
    gridTemplateAreas: 
      ". . .", 
    alignItems: "center", 
  },
  "flexChild": {
    flex: "1",
    lineHeight: "1em",
  },
}))

export default function SliderContainer(props: any) {

  const { classes } = useStyle()
  return (
    <div className={classes.SliderContainer}>
      <Text fz="md" className={classes.flexChild}>{props.label}</Text>

      <div className={classes.Slider}>
      <Button compact 
          disabled={props.isImageEmpty}
          onClick={() => {
            props.changeConfig(props.name, 0)
          }}
          >⟲</Button>
        <Slider 
          disabled={props.isImageEmpty}
          min={-100}
          max={100}
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
          disabled={props.isImageEmpty}
          onClick={() => {
            props.changeConfig(props.name, props.value + 1)
          }}
          >+</Button>
        <Button compact 
          disabled={props.isImageEmpty}
          onClick={() => {
            props.changeConfig(props.name, props.value - 1)
          }}
        >-</Button>
      </div>
    </div>
  )
}