import { useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((c) => c + 1);
    }
    function reset() {
        setCount((c) => c - c);
    }
    function decrement() {
        setCount((c) => c - 1);
    }
    return (
        <div>
            <Heading>Count: {count}</Heading>
            <Button onClick={increment} variant="outline">
                Increment
            </Button>
            <Button onClick={reset} colorScheme="red">
                Reset
            </Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

export default MyComponent;
