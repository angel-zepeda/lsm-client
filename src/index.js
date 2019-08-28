import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Topics from './components/Topics';
import PWA from './components/PWA';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Alphabet from './components/Alphabet';
import Animals from './components/Animals';
import Body from './components/Body';
import Colors from './components/Colors';
import Numbers from './components/Numbers';
import School from './components/School';
import Games from './components/Games';
import Entertaiment from './components/Entertaiment';
import VideoUploader from './components/VideoUploader';
import GameOne from './components/Games/GameOne/GameOne';

const RouterComponent = (
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/pwa" component={PWA} />
        <Route exact path="/temario" component={Topics} />
        <Route exact path="/temario/abecedario" component={Alphabet} />
        <Route exact path="/temario/animales" component={Animals} />
        <Route exact path="/temario/cuerpo-humano" component={Body} />
        <Route exact path="/temario/colores" component={Colors} />
        <Route exact path="/temario/numeros" component={Numbers} />
        <Route exact path="/temario/escuela" component={School} />
        <Route exact path="/juegos" component={Games} />
        <Route exact path="/juegos/memorama" component={GameOne} />
        <Route exact path="/entretenimiento" component={Entertaiment} />
        <Route exact path="/admin/video-upload" component={VideoUploader} />
    </Router>
)

ReactDOM.render(RouterComponent, document.getElementById('root'));
serviceWorker.unregister();
