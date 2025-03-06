import Layout from './layout/Layout';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  useLocalStorage();
  return <Layout />;
}
export default App;
