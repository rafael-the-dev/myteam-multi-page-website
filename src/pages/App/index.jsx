import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/base.css';
import '../../assets/css/general.css';
import '../../assets/css/typography.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;