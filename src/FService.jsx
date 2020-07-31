import React from 'react';
import Card from './FCard';
import Cdata from './FCardData';
let Service = () => {

     return (
         <>
            <div className="my-5">
                <h1 className="text-center"> Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {Cdata.map((val,index)=>{
                               return( <Card Key={index} isrc={val.isrc} title={val.title} text={val.text}/>)
                            })}
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;