import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const OneVehicle = () => {

    const params= useParams();

    return (
        <div>
            I am the div {params.uid}

        </div>
    )
};
