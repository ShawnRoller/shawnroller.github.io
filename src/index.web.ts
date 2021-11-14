import { AppRegistry } from 'react-native';
import App from './app/App';

AppRegistry.registerComponent('appName', () => App);

AppRegistry.runApplication('appName', {
  rootTag: document.getElementById('root'),
});


