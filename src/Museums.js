import React from "react"

const Museums = ({museums}) => {
    return (
        <ul>
           {museums.map(museum=> {
               return (<li>{museum.name}</li>);
           })} 
        </ul>
    )
};

export default Museums