import React from "react";

export default function Error(prop){
    return  (<div className="alert alert-danger">
                <strong>{prop.desc} : </strong> {prop.msg}
            </div>)
}