import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// To Auto suggetions for bootstrap classes :- 
// intall following extension :- 
// IntelliSense for CSS class names in HTML
let BootCardData =
    [
        {
            id : 1,
            isrc : "https://picsum.photos/250/200",
            ctitle : "Python" ,
            ctext : " python is easiest programming language , we don't use semicolon in python",
            
        },
        {
            id : 2,
            isrc : "https://picsum.photos/251/200",
            ctitle : "C programming" ,
            ctext : "C programming is high level procedure language",
            
        },
        {
            id : 3,
            isrc : "https://picsum.photos/252/200",
            ctitle : "C++ programming" ,
            ctext : " C++ programming is object oriented programming language",
            
        },
    ]

let BootCard = (props) => {
    return (
        <>
            <div className="col-sm " id={props.id}>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={props.isrc} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">{props.ctitle}</h5>
                        <p className="card-text">{props.ctext}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

let Boot5Use = () => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center text-danger my-5">Welocome To My OSM Card</h1>
                <div class="container">
                    <div class="row">
                      { BootCardData.map((value,index)=>{
                              return (
                                  <BootCard Key={index} isrc={value.isrc} ctitle={value.ctitle} ctext={value.ctext}/>
                              )
                       })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Boot5Use;