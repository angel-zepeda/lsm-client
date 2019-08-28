import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from './assets/imgs/b6.png';

const Header = () => {
    return (
        <div style={{
            width: '100%',
            height: '40vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${bgImage})`,
            backgroundColor: '#fff'
        }}>
        </div>
    );
}

const App = () => {
    const BG_PWA = {
        height: '60vh',
    }
    return (
        <div>
            <Header />
            <div style={BG_PWA}>
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="mt-4 text-center col-md-12 text-success">Aprende Lenguaje de Señas Mexicano!</h1>
                    </div>
                    <div className="row">
                        <h3 className="col-md-12 mb-5 text-center text-info">Disfruta jugando y aprendiendo</h3>
                    </div>
                    <div className="row mt-1 mb-5">
                        <div className="mx-auto">
                            <Link
                                to="/temario"
                                style={{ fontSize: '2em' }}
                                className="btn btn-warning mb-2 col-md-12"
                            >
                                Iniciar ahora!
                <i className="material-icons ml-3">forward</i>
                            </Link>
                            <Link
                                to="/pwa"
                                style={{ fontSize: '2em' }}
                                className="btn btn-danger col-md-12"
                            >
                                Descarga el APP!
                <i className="material-icons ml-3">get_app</i>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-md-12 text-center">Copyright &copy; Angel Zepeda 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;