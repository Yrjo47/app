import {Container} from './components/styles/Invisible.styled'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header.jsx'
import GlobalStyles from './components/styles/Global'
import Router from './router'

const theme = {
  colors: {
    header: '#000',
    body: '#fff',
    footer: '#eee',
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
        <>
          <GlobalStyles />
          <Header />
          <Container>
            <Router/>
          </Container>
        </>
    </ThemeProvider>
  );
}

export default App;
