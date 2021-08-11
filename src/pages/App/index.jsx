import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/base.css';
import '../../assets/css/general.css';
import '../../assets/css/typography.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;