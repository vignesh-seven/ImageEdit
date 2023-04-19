import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useRef, useState } from 'react'

import { Button, createStyles, FileButton } from '@mantine/core'
import { userAgent } from 'next/server'
import SliderContainer from '../components/SliderContainer'

const inter = Inter({ subsets: ['latin'] })

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
    backgroundColor: "rgb(14, 14, 70)",
    "p": {
      textAlign: "center"
    },
    "canvas": {
      maxWidth: "90%",
      maxHeight: "100%",
    }
  },

  "SettingsPanel": {
    backgroundColor: "brown"
  },

  "Settings": {
    height: "max-content",
    padding: "1em"
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

  const [imageData, setImageData] = useState("")

  const [config, setConfig] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0
  })

  const canvasRef = useRef<HTMLCanvasElement>(null); //changing back
  // either way. So we just saying the above one is a <HTMLCanvasElement> thingy not anyother. 
  // here, instead of <HTMLCanvasElement>, ill use <string>
  const imgRef = useRef<HTMLImageElement>(null); 
  const [context, setContext] = useState(null)

  const [file, setFile] = useState(null)

  function handleFileSelect(e: any) {
    setFile(e)
  }

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   const ctx = canvas.getContext('2d')
  //   setContext(ctx)
  // }, [])

  // const draw = (ctx: any) => {
  //   // ctx.fillStyle = "green"
  //   // ctx.fillRect(10, 10, 150, 100)
  //   ctx.drawImage(imgRef.current, 200, 200)
  // }

  // useEffect(() => {
  //   if (context) {
  //     draw(context)
  //   }
  // }, [context])



  // console.log(config)

  function changeConfig(name: string, newValue: number) {
    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [name]: newValue
      }
    })
  }

  // const handleImageChange = (event: any) => {
  //   if (event && imgRef) {
  //     const fileReader = new FileReader()

  //     fileReader.onload = (e) => {
  //       const { result } = e.target
  //       console.log(result)
  //       imgRef.current.src = result
  //       // let newImageData = result
  //       setImageData(result)
  //     }

  //     fileReader.readAsDataURL(event)
  //   }
  // }

  useEffect(() => {
    if (file) {
      
      const reader = new FileReader()
      
      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target?.result as string; // this... I just moved it up. cause u are rendering a empty image and setting the img src after that.
        img.onload = function () {
          // console.log("here we are.... end of sanity");
          const canvas = canvasRef.current as HTMLCanvasElement;

          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext("2d");
          
          if(!ctx) return;

          ctx.filter = `brightness(${(config.brightness+100)/100})
                        contrast(${(config.contrast+100) / 100})
                        saturate(${config.saturation + 100}%)`

          // ctx.filter = ``

          ctx.drawImage(img, 0, 0);
          // console.log(img)
        }

        if (!img.src) return
      }
      reader.readAsDataURL(file)
    }
  }, [file, config])


  return (
    <>
      <Head>
        <title>Image Editor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        {/* <Button name="hello" onClick={changeConfig}>Increment Brightness</Button> */}

        {/* {CANVAS AREA} */}
        <div className={classes.ImageArea}>
          <canvas ref={canvasRef} width={500} height={500}></canvas>
          <img ref={imgRef} className={classes.hidden} />
        </div>


        {/* <SettingsPanel config={config} changeConfig={changeConfig} handleimageFile={(e: File) => { handleimageFile(e) }} /> */}
        <div className={classes.SettingsPanel}>
          <div className={classes.Settings}>
            <SliderContainer value={config.brightness} changeConfig={changeConfig} name="brightness" label="Brightness" />
            <SliderContainer value={config.contrast} changeConfig={changeConfig} name="contrast" label="Contrast" />
            <SliderContainer value={config.saturation} changeConfig={changeConfig} name="saturation" label="Saturation" />
          </div>

          <div className={classes.BottomButtons}>
            {/* <Button className={classes.button} onChange={() => console.log("change")}>
              Open
            </Button> */}
            <FileButton onChange={handleFileSelect} accept="image/png,image/jpeg">
              {(props) => <Button className={classes.button} {...props}>Open</Button>}
            </FileButton>
            <Button className={`${classes.button} ${classes.right}`}>
              Save
            </Button>
            <Button className={`${classes.button} ${classes.right}`}>
              Save As
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}