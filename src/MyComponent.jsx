import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const updateName = () => {
        setName("Rikuya");
    };
    const resetName = () => {
        setName("Guest");
    };
    return (
        <>
            <Heading>Name: {name}</Heading>
            <Button onClick={updateName} onDoubleClick={resetName}>
                Click Me!
            </Button>
        </>
    );
}

export default MyComponent;
