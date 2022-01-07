import {Container} from './components/styles/Container.styled'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header.js'
import GlobalStyles from './components/styles/Global'


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
          </Container>
        </>
    </ThemeProvider>
  );
}

export default App;
