import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/base.css';
import '../../assets/css/general.css';
import '../../assets/css/typography.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from '../Home';
import loadable from '@loadable/component'

const App = () => {
    const AboutComponent = loadable(() => import('../About'));
    const ContactComponent = loadable(() => import('../Contact'));
    
    return (
        <Router>
            <Switch>
                <Route exact path='/about' component={AboutComponent} />
                <Route exact path='/contact' component={ContactComponent} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;