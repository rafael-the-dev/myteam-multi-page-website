import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/base.css';
import '../../assets/css/general.css';
import '../../assets/css/typography.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from '../Home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;