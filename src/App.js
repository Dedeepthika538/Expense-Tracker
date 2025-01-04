
import './App.css';

import { GlobalProvider} from './context/GlobalState';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <ExpenseTracker/>
      </div>
    </GlobalProvider>
  );
}

export default App;
