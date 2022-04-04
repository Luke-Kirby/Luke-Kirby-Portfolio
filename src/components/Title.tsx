import React from "react";

type Props = {title:string}
function Title(props:Props) {
    return (

        <div>
        <h1>
           {props.title}
        </h1>
        </div>
    );
}

export default Title;