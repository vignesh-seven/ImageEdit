import React, { useState } from 'react';

export default function MyCanvas() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    console.log("mouse down")
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      return;
    }
    console.log(e)
    let newPosition = {
      x: position.x + e.movementX,
      y: position.y + e.movementY
    }
    setPosition(newPosition);
  };

  const handleMouseUp = (e) => {
    console.log("mouse up")
    setIsDragging(false);
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
