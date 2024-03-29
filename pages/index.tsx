import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import { Button, createStyles, FileButton } from '@mantine/core'
import SliderContainer from '../components/SliderContainer'


const useStyle = createStyles(() => ({
  "main": {
    padding: "0",
    margin: "0",

    width: "100%",

    display: "grid",
    gridTemplateColumns: "1fr 25%",
    gridTemplateRows: "1fr",
    gap: "0px 0px",
    gridAutoFlow: "row",
    gridTemplateAreas:
      ". .",
    height: "100vh",
  },
  "ImageArea": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222527",
    color: "white",
    "p": {
      textAlign: "center"
    },
    "canvas": {
      maxHeight: "90vh",
      maxWidth: "90%",
      border: "2px solid blue",
    }
  },

  "SettingsPanel": {
    backgroundColor: "#283E34"
  },

  "Settings": {
    height: "max-content",
    padding: "1em",
    color: "#FAF3DD"
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
  "hidden": {
    display: "none"
  }

}))


export default function App() {

  const { classes } = useStyle()

  const [config, setConfig] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    angle: 0,
    flipX: 1,
    flipY: 1
  })

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [file, setFile] = useState(null)


  function handleFileSelect(e: any) {
    setFile(e)
  }

  function changeConfig(name: string, newValue: any) {
    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [name]: newValue
      }
    })
  }

  function rotateImage() {
    let newAngle = config.angle
    if (config.angle == 360) {
      newAngle = 90
    } else {
      newAngle += 90
    }
    changeConfig("angle", newAngle)
  }

  const saveFile = () => {
    if (!canvasRef.current) return
    canvasRef.current.toBlob((f) => {
      if (!f) return
      const link = document.createElement("a");
      link.href = URL.createObjectURL(f);
      link.download = "new_image.jpg";
      link.click();
      URL.revokeObjectURL(link.href);
    }, "image/jpeg");
  };

  // console.log("hey", canvasRef)

  useEffect(() => {
    if (file) {
      // console.log("hey2", canvasRef)

      const reader = new FileReader()

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target?.result as string;


        img.onload = function () {
          const canvas = canvasRef.current as HTMLCanvasElement;

          const ctx = canvas.getContext("2d");

          canvas.width = img.width;
          canvas.height = img.height;

          if (!ctx) return;
          
          // ctx.scale(config.flipH, config.flipV)
          
          if (config.angle != 0) {
            if (config.angle == 90) {
              canvas.width = img.height
              canvas.height = img.width
              
              ctx.rotate((config.angle * Math.PI) / 180);
              ctx.translate(0, -canvas.width);
            }
            
            if (config.angle == 270) {
              canvas.width = img.height
              canvas.height = img.width
              
              ctx.rotate((config.angle * Math.PI) / 180);
              ctx.translate(-canvas.height, 0);
            }
            
            if (config.angle == 180) {
              ctx.rotate((config.angle * Math.PI) / 180);
              ctx.translate(-canvas.width, -canvas.height);
            }
          }
          
          
          ctx.filter = `brightness(${(config.brightness + 100) / 100})
          contrast(${(config.contrast + 100) / 100})
          saturate(${config.saturation + 100}%)`
          
          
          ctx.drawImage(img, 0, 0, img.width, img.height);
        
          ctx.scale(config.flipX, config.flipY)  // set scale values according to flip values
          ctx.drawImage(img, 0, 0, (config.flipX * img.width), (config.flipY * img.height));

          // console.log(config.angle)
        }

        if (!img.src) return
      }
      reader.readAsDataURL(file)


    }
  }, [file, config])

  let isImageEmpty = !file ? true : false

  let imageArea = (
    <div className={classes.ImageArea}>
      { // display text instead of a canvas if there's no image
        isImageEmpty ?
          (<><h2>No file selected!<br />Click &quot;Open&quot; to load an image!</h2></>)
          :
          (<canvas ref={canvasRef} width={500} height={500}></canvas>)}

      <img ref={imgRef} className={classes.hidden} />
    </div>
  )
  function flipImageHorizontal() {
    changeConfig("flipX", config.flipX  == 1 ? -1 : 1)
  }
  function flipImageVertical() {
    changeConfig("flipY", config.flipY  == 1 ? -1 : 1)
  }

  return (
    <>
      <Head>
        <title>Image Editor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>

        {/* <Cropper canvasRef={canvasRef.current}/> */}

        {/* {CANVAS AREA} */}

        {imageArea}

        <div className={classes.SettingsPanel}>
          <div className={classes.Settings}>
            <SliderContainer value={config.brightness} changeConfig={changeConfig} name="brightness" label="Brightness" isImageEmpty={isImageEmpty} />
            <SliderContainer value={config.contrast} changeConfig={changeConfig} name="contrast" label="Contrast" isImageEmpty={isImageEmpty} />
            <SliderContainer value={config.saturation} changeConfig={changeConfig} name="saturation" label="Saturation" isImageEmpty={isImageEmpty} />
            <Button disabled={isImageEmpty} onClick={rotateImage}>Rotate ⟳</Button>
            <Button disabled={isImageEmpty} onClick={flipImageHorizontal}>Flip H</Button>
            <Button disabled={isImageEmpty} onClick={flipImageVertical}>Flip V</Button>
          </div>

          <div className={classes.BottomButtons}>
            <FileButton onChange={handleFileSelect} accept="image/png,image/jpeg">
              {(props) => <Button className={classes.button} {...props}>Open</Button>}
            </FileButton>
            <Button className={`${classes.button} ${classes.right}`} onClick={saveFile}>
              Save
            </Button>
            {/* <Button className={`${classes.button} ${classes.right}`}>
              Save As
            </Button> */}
          </div>
        </div>
      </main>
    </>
  )
}

// hello 
