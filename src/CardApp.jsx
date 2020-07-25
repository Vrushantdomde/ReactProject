import React from 'react';
import Card from './Cards'
import Cdata from './CardData';

var CardApp = () => {
    return (
        <>
            <h1 className="heading_style">List Of UNknown Pictures</h1>
            <div className="cards">
            {Cdata.map((val) => {
                return (
                    <Card
                        key={val.id}
                        imgUrl={val.imgUrl}
                        category={val.category}
                        title={val.title}
                        btnLink={val.btnLink}
                    />
                )
            })}
            </div>
        </>
    )
}

export default CardApp;