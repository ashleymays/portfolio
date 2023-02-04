// Credit: https://plainenglish.io/blog/how-to-create-a-custom-cursor-in-react-272314682285

import { useRef, useEffect } from 'react';
import './Cursor.scss';

function Cursor() {
    const cursorPosition = useRef({ x: 0, y: 0 })
    const mousePosition = useRef({ x: 0, y: 0 })
    const requestRef = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            mousePosition.current.x = e.pageX;
            mousePosition.current.y = e.pageY;
        }

        const animation = () => {
            cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) / 10;
            cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) / 10;

            document.getElementById('custom-cursor').style.left = `${cursorPosition.current.x}px`;
            document.getElementById('custom-cursor').style.top = `${cursorPosition.current.y}px`;

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