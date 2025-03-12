import Layout from './layout/Layout';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  useLocalStorage();
  return (
    <ErrorBoundary>
      <Layout />;
    </ErrorBoundary>
  );
}
export default App;
