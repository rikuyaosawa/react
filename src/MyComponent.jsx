import { Button, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    const addCount = () => {
        setCount((c) => c + 1);
    };

    const subtractCount = () => {
        setCount((c) => c - 1);
    };

    const changeColor = () => {
        setColor((c) => (c === "green" ? "red" : "green"));
    };

    return (
        <>
            <Heading style={{ color: color }}>Count: {count}</Heading>
            <Button onClick={addCount}>Add</Button>
            <Button onClick={subtractCount}>Subtract</Button>
            <br />
            <Button onClick={changeColor}>Change Color</Button>
        </>
    );
}

export default MyComponent;
