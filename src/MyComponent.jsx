import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <Heading>Name: {name}</Heading>
            <Input
                name={name}
                onChange={handleNameChange}
                placeholder="Type in name..."
            />
        </div>
    );
}

export default MyComponent;
