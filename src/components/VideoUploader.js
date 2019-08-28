import React from 'react'

const VideoUploader = () => {
    return (

        <div className="container bg-info p-5">
            <div className="col-md-12">
                <h1 className="text-center text-white">Administrador de videos</h1>
                <div className="d-flex justify-content-center">
                    <form className="form-group col-md-12" >
                        <input
                            type="text"
                            placeholder="Video URL"
                            className="col-md-6 form-control mb-4"
                        />
                        <select className="form-control col-md-6">
                            <option>--Categoria--</option>
                            <option>Escuela</option>
                            <option>Números</option>
                            <option>Colores</option>
                            <option>Abecedario</option>
                            <option>Animales</option>
                            <option>Cuerpo Humano</option>
                            <option>Saludos</option>
                        </select>
                        <input
                            type="submit"
                            value="Subir video"
                            className="col-md-6 mt-3 btn btn-primary"
                        />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default VideoUploader;