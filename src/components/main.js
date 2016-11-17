import App from './App/App.jsx';
import ReactDOM from 'react-dom';

require('bootstrap/dist/css/bootstrap.css');
require('./App/styles.css');
require('./App/Ga_Gear.png');
require('./App/GA_logo.png');
require('./App/favicon.ico');

ReactDOM.render(<App />, document.querySelector('#container'));
