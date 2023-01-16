import React, { useState } from 'react';

export default function MyCanvas(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
    <canvas
      style={{
        position: 'absolute',
        width: "500px",
        height: "500px",
        backgroundColor: "red",
        left: position.x,
        top: position.y,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
    </canvas>
  );
}

// export default DraggableDiv;
