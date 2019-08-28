import React from 'react'
import IMG1 from '../assets/imgs/pwa.jpeg';
import IMG2 from '../assets/imgs/pwa1.jpeg';
import IMG3 from '../assets/imgs/pwa2.jpeg';


const PWA = () => {
    const BG_PWA = {
        backgroundImage: "url('https://images.vexels.com/media/users/17482/121371/raw/3640d78d51f04c0f5446e023620c030c-diseno-de-salpicaduras-de-colores.png')"
    }

    return (
        <div style={BG_PWA}>
            <div className="card pl-5 pr-5 pt-3 bg-info container pb-5" style={{ height: '100%' }}>
                <h1 className="text-center text-white">Usa el APP</h1>
                <div className="row">
                    <div className="col-md-4 card float-left p-3 mr-5">
                        <p
                            style={{ fontSize: '1.5em' }}
                        >Las aplicaciones web progresivas están a medio camino entre las aplicaciones nativas y las aplicaciones web
                                                                                                                                                                        , son básicamente páginas web, pero mediante el uso de Service Workers y otras tecnologías se comportan más
                    como aplicaciones nativas o normales que como aplicaciones web.</p>
                    </div>
                    <div className="col-md-7">
                        <img
                            alt="No se pudo mostrar la imagen"
                            className="col-md-12"
                            src="https://miro.medium.com/max/2800/1*hWVmsnBY6Fr6OoNvIU5pmg.png"></img>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 p-5">
                        <h1 className="text-white text-center">Paso N° 1</h1>
                        <p style={{ fontSize: '1.5em' }} className="text-center text-white">Crear aplicación web progresiva</p>
                    </div>
                    <div className="col-md-6">
                        <img
                            alt="No se pudo mostrar la imagen"
                            src={IMG1} width="300px" height="500px" ></img>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img
                            alt="No se pudo mostrar la imagen"
                            src={IMG2} width="300px" height="500px" ></img>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="text-white text-center">Paso N° 2</h1>
                        <p style={{ fontSize: '1.5em' }} className="text-center text-white">Dar nombre al lanzadaor del app</p>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-md-6 p-5">
                        <h1 className="text-white text-center">Paso N° 3</h1>
                        <p style={{ fontSize: '1.5em' }} className="text-center text-white">Icono de la apliacción en la pantalla principal lista para su uso.</p>
                    </div>
                    <div className="col-md-6">
                        <img
                            alt="No se pudo mostrar la imagen"
                            src={IMG3} width="300px" height="500px" ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PWA;
