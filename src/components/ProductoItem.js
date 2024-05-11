import React from 'react'

export const ProductoItem = (props) => {
    const { NombreProducto, Medidas, Descripcion, imagen, body } = props;

    return (
        <div className='novedades'>
            <h2>{NombreProducto}</h2>
            <h3>{Medidas}</h3>
            <img src={imagen} alt={NombreProducto} />
            <p>{Descripcion}</p>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    )
}
