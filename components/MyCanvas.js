import { useState } from 'react';
import styles from '../styles/MyCanvas.module.css'

export default function MyCanvas(props) {
  let size = {width: "500px", height: "500px"}

  const [position, setPosition] = useState({
     x: 0,
     y: 0
    });
  // const [isMouseMoving, setIsMouseMoving] = useState(false)


  // const handleMouseDown = (e) => {
  //   setIsMouseMoving(true);
  //   console.log("mouse down")
  // };

  const handleMouseMove = (e) => {
    if (!props.isHoldingSpace) {
      return;
    }
    let newPosition = {
      x: position.x + e.movementX,
      y: position.y + e.movementY
    }
    setPosition(newPosition);
  };

  // const handleMouseUp = (e) => {
  //   console.log("mouse up")
  //   setIsMouseMoving(false);
  // };


  return (
    <canvas className={styles.MyCanvas}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
      }}
      // onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
    >
    </canvas>
  );
}

// export default DraggableDiv;
