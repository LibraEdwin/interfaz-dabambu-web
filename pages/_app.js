import { PublicLayout } from 'components/Layouts'
import { LayoutAdmin } from '../layout'
import '../styles/global.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../theme/global'
import theme from '../theme/theme'
import { AppProvider } from '../context/GlobalContext'

// This default export is required in a new `pages/_app.js` file.

const layouts = {
  Admin: LayoutAdmin,
  Public: PublicLayout
}

export default function MyApp ({ Component, pageProps }) {
  const Layout = layouts[Component.layout || 'Public'] || ((children) => (<>{children}</>))

  // Para nuestros Providers - Context/Providers, Theme
  // Layout
  // Props adcionales:   return <Component {...pageProps} title={''} />

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  )
}
