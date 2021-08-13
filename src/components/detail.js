import React from 'react';

const Detail = (props) => {
    return <div className="detail_beer">
        <h4>{props.name}</h4>
        <p className="tagline">{props.tagline}</p>
        <img className="beer_img" src={props.image} />
    </div>
}
export default Detail;