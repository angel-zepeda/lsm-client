import React from 'react';
import { Link } from 'react-router-dom';
import Alphabet from '../assets/imgs/icons/alphabet.svg';
import Animals from '../assets/imgs/icons/animals.svg';
import Body from '../assets/imgs/icons/body.svg';
import Colors from '../assets/imgs/icons/colors.svg';
import Games from '../assets/imgs/icons/games.svg';
import Numbers from '../assets/imgs/icons/numbers.svg';
import School from '../assets/imgs/icons/school.svg';
import Entertaiment from '../assets/imgs/icons/entertaiment.svg';

const Topics = () => {
    return (
        <div
            style={{ height: '30vh' }}
            className="container-fluid bg-info pt-4"
        >
            <h1 className="text-center text-white">TEMARIO BÁSICO</h1>
            <div className="container card mt-5">
                <div className="row p-4">
                    <div className="card col-md-6 p-2">
                        <div className="bg-warning text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Alphabet}>
                            </img>
                        </div>
                        <Link
                            to="/temario/abecedario"
                            className="btn btn-danger"
                        >COMENZAR!</Link>
                    </div>
                    <div className="card col-md-6 p-2">
                        <div className="bg-danger text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Animals}>
                            </img>
                        </div>
                        <Link
                            to="/temario/animales"
                            className="btn btn-warning"
                        >COMENZAR!</Link>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="card col-md-6 p-2">
                        <div className="bg-success text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Body}>
                            </img>
                        </div>
                        <Link
                            to="/temario/cuerpo-humano"
                            className="btn btn-info"
                        >COMENZAR!</Link>
                    </div>
                    <div className="card col-md-6 p-2">
                        <div className="bg-info text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Colors}>
                            </img>
                        </div>

                        <Link
                            to="/temario/colores"
                            className="btn btn-success"
                        >COMENZAR!</Link>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="card col-md-6 p-2">
                        <div className="bg-danger text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Games}>
                            </img>
                        </div>

                        <Link
                            to="/juegos"
                            className="btn btn-warning"
                        >COMENZAR!</Link>
                    </div>
                    <div className="card col-md-6 p-2">
                        <div className="bg-warning text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Numbers}>
                            </img>
                        </div>

                        <Link
                            to="/temario/numeros"
                            className="btn btn-danger"
                        >COMENZAR!</Link>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="card col-md-6 p-2">
                        <div className="bg-success text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={Entertaiment}>
                            </img>
                        </div>

                        <Link
                            to="/entretenimiento"
                            className="btn btn-info"
                        >COMENZAR!</Link>
                    </div>
                    <div className="card col-md-6 p-2">
                        <div className="bg-info text-center rounded mb-1">
                            <img
                                alt="No se pudo mostrar la imágen"
                                className="col-md-10"
                                src={School}>
                            </img>
                        </div>

                        <Link
                            to="/temario/escuela"
                            className="btn btn-success"
                        >COMENZAR!</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Topics;