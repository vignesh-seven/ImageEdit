import { useState } from 'react';
import styles from '../styles/MyCanvas.module.css'

export default function MyCanvas(props) {
  let size = {x: "500px", y: "500px"}

  const [position, setPosition] = useState({
     x: 0,
     y: 0 
    });
  const [isMouseMoving, setIsMouseMoving] = useState(false)


  const handleMouseDown = (e) => {
    setIsMouseMoving(true);
    console.log("mouse down")
  };

  const handleMouseMove = (e) => {
    if (!props.isDragging || !isMouseMoving) {
      return;
    }
    let newPosition = {
      x: position.x + e.movementX,
      y: position.y + e.movementY
    }
    setPosition(newPosition);
  };

  const handleMouseUp = (e) => {
    console.log("mouse up")
    setIsMouseMoving(false);
  };


  return (
    <canvas className={styles.MyCanvas}
      style={{
        position: 'absolute',
        backgroundColor: "red",
        left: position.x,
        top: position.y,
        width: size.x,
        height: size.y,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
    </canvas>
  );
}

// export default DraggableDiv;
