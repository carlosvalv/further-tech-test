import ListRefunds from './components/ListRefunds';
import MainProvider from './providers/main';

function App() {
  return (
    <MainProvider>
      <ListRefunds />
    </MainProvider>
  );
}

export default App;
