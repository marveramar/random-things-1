import React from 'react';
import Detail from './detail';


const List = (props) => {
    console.log(props)

    return <div>
        <ul className="list">
            {props.elements.map((element) => {
                return <li className="list_item">
                    <Detail
                        name={element.name}
                        image={element.image_url}
                        tagline={element.tagline} />
                </li>

            })}

        </ul>
    </div>

}
export default List;
