import { createStyles } from '@mantine/core';

const useStyle = createStyles(()=>({
  "ImageArea":  {
    backgroundColor: "rgb(14, 14, 70)",
    "p": {
      textAlign: "center"
    }
  }
}));

export default function ImageArea(props: any) {
  const { classes } = useStyle();

  return (
    <div className={classes.ImageArea}>
      <p>Helooobbbbbbbbbbbbbbbbbbbbbbbbbbbboooo</p>
    </div>
  )
}
