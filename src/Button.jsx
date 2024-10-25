import { Button } from "@chakra-ui/react";

let count = 0;

function BasicButton() {
    return <Button onClick={handleClick}>Click Me</Button>;
}

function handleClick() {
    count++;
    console.log("Count:", count);
}

export default BasicButton;
