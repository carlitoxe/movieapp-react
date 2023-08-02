import ColorThief from '/node_modules/colorthief/dist/color-thief.mjs';
import { useState, useRef, useEffect } from 'react';


function useGetColor({url}) {
    // console.log(imgRef.current);
    const colorDefault = ['0', '0', '0'];
    const [colors, setColors] = useState(colorDefault);
    
    const img = new Image();
    img.src = url
    img.crossOrigin = 'Anonymous';
    // img.setAttribute('ref', imgRef.current);
    console.log(img);
    const colorThief = new ColorThief();
    function getColor() {
        try {
            const color = colorThief.getColor(img);
            setColors(color)
        } catch (e) {
            console.log(e);
        }
        // console.log(img.src);
        
    }




    // console.log(poster);
    // [0, 0, 0], [150, 10, 0], [0, 0, 0]
    
    //color default is black

    return [colors, getColor, img]
}

export { useGetColor }