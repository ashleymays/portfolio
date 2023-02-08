// Credit: https://plainenglish.io/blog/how-to-create-a-custom-cursor-in-react-272314682285

import { useRef, useEffect } from 'react';
import './Cursor.scss';

function Cursor() {
    const cursorPosition = useRef({ x: 0, y: 0 })
    const mousePosition = useRef({ x: 0, y: 0 })
    const distance = useRef({ x: 0, y: 0 })
    const requestRef = useRef(null);

    const updateMousePosition = (event) => {
        mousePosition.current.x = event.pageX;
        mousePosition.current.y = event.pageY;
    }

    const updateDistance = () => {
        distance.current.x = mousePosition.current.x - cursorPosition.current.x;
        distance.current.y = mousePosition.current.y - cursorPosition.current.y;
    }

    const updateCustomCursorPosition = () => {
        const drag = 5;
        cursorPosition.current.x += distance.current.x / drag;
        cursorPosition.current.y += distance.current.y / drag;
    }

    const moveCustomCursor = () => {
        document.getElementById('custom-cursor').style.left = `${cursorPosition.current.x}px`;
        document.getElementById('custom-cursor').style.top = `${cursorPosition.current.y}px`;
    }

    useEffect(() => {
        const cursorFollowAnimation = () => {
            updateDistance();
            updateCustomCursorPosition();
            moveCustomCursor();
            requestRef.current = requestAnimationFrame(cursorFollowAnimation);
        }

        document.addEventListener('mousemove', updateMousePosition);
        cursorFollowAnimation();

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
            cancelAnimationFrame(requestRef.current);
        }
    }, [])

    return (
        <div id="custom-cursor" />
    )
}

export default Cursor;