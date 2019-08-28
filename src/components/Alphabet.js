import React from 'react'

const Alphabet = () => {
    return (
        <div className="container-fluid p-0">
            <div className="bg-success col-md-12 pt-4" style={{ height: '30vh' }}>
                <h1 className="text-center text-white mb-5">ABECEDARIO</h1>
                <div className="card container p-3">
                    <div style={{ width: '100%', height: '0', paddingBottom: '76%', position: 'relative' }}>
                        <iframe title="This is a unique title" src="https://giphy.com/embed/5QRv76tgvPK4YznLov" width="25%" height="25%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alphabet;