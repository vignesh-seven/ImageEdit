import { useState, useEffect, useRef } from 'react';
import styles from '../styles/MyCanvas.module.css'
import { fabric } from "fabric";




export default function MyCanvas(props) {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Render image or perform manipulation here
    
  }, []);

  let size = {width: "500px", height: "500px"}

  const [position, setPosition] = useState({
     x: 0,
     y: 0
    });

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

  return (
    <canvas className={styles.MyCanvas} ref={canvasRef}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
      }}
      onMouseMove={handleMouseMove}
    >
    </canvas>
  );
}
