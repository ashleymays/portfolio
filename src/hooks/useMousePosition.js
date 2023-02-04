import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

    const changeMousePosition = (e) => {
        setMousePosition({
            x: e.pageX,
            y: e.pageY
        });
    }

    useEffect(() => {
        document.addEventListener('mousemove', changeMousePosition);
        return () => {
            document.removeEventListener('mousemove', changeMousePosition);
        }
    }, [])

    return mousePosition;
}

export default useMousePosition;