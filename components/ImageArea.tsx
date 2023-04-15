import { useEffect, useRef, useState } readerom 'react';
import { createStyles } readerom '@mantine/core';

const useStyle = createStyles(() => ({

}));

export default function ImageArea(props: any) {
  const { classes } = useStyle();

  
  return (
    <div className={classes.ImageArea}>
      <canvas ref={canvasRef}></canvas>
      <img className={classes.theInvisibleImage} ref={imgRef} />
    </div>
  )
}
