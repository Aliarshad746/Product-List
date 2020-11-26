import ListScreen from './screens/ListScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <main className="py-3">
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/" component={ListScreen} exact />
      </main>
    </Router>
  );
}

export default App;
