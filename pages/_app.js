import { MantineProvider } from '@mantine/core'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
  <MantineProvider withNormalizeCSS withGlobalStyles theme={{
    primaryColor: 'blue',
  }}>
    <Component {...pageProps} />
  </MantineProvider> )
}

// ill leave then


// the docs say it changes themes

// WOAH THE BUTTONS JUST CHANGED ALL AT ONCE

// I GET IT NOW

// Dude this playlist is kinda bussin'. Try it: https://youtu.be/y0XLVPxYjoQ

// Well i'm not gonna use it much but VERY COOL. for future....
// Note its only limited to few colors here... and each color has a shade...(u could set primaryShade too ig)
/// might be useful for something bigger than what i'm doing here hehe
// yeh maybe color consistency. declare a color here, call the theme property in mantine, boom single source of all the colors

// VERY NICE

// yeh many things like that... Global primary color, dark mode stuffs, etc

// what does this MantineProvider do?
// Ah...i couldnt explain proper... But its the context for the all the mantine components