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
