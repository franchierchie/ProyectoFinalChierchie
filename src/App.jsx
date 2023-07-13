import { NavBar } from './components';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
  <>
    <NavBar />
    <ItemListContainer message="Mensaje con props" />
  </>
  )
}

export default App
