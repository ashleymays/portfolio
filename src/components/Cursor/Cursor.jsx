import { useRef, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import './Cursor.scss';

function Cursor() {
    const cursorPositionX = useRef(0);
    const cursorPositionY = useRef(0);
    const requestRef = useRef(null);
    let mousePositionX = useRef(0);
    let mousePositionY = useRef(0);

    useEffect(() => {
        const mouseMove = (e) => {
            mousePositionX.current = e.pageX;
            mousePositionY.current = e.pageY;
        }
        const animation = () => {
            cursorPositionX.current += (mousePositionX.current - cursorPositionX.current) / 10;
            cursorPositionY.current += (mousePositionY.current - cursorPositionY.current) / 10;

            document.getElementById('custom-cursor').style.left = `${cursorPositionX.current}px`;
            document.getElementById('custom-cursor').style.top = `${cursorPositionY.current}px`;

            requestRef.current = requestAnimationFrame(animation);
        }

        document.addEventListener('mousemove', mouseMove);
        animation();
        return () => {
            document.removeEventListener('mousemove', mouseMove);
            cancelAnimationFrame(requestRef.current);
        }
    }, [])

    return (
        <div id="custom-cursor" />
    )
}

export default Cursor;