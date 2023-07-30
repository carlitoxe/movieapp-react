import ColorThief from '/node_modules/colorthief/dist/color-thief.mjs';
import { useState } from 'react';


function useGetColor({url}) {

    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;

    const colorDefault = ['0', '0', '0'];
    const [colors, setColors] = useState(colorDefault);
    
    function getColor() {
        console.log(img.src);
        colorThief
        return setColors(colorThief.getColor(img));
    }


    // console.log(poster);
    // [0, 0, 0], [150, 10, 0], [0, 0, 0]
    
    //color default is black

    return [colors, getColor, img]
}

export { useGetColor }