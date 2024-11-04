import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";

function DigitalClock() {
    const [date, setDate] = useState(
        new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        })
    );

    setInterval(() => {
        setDate(
            new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            })
        );
    }, 1000);

    return (
        <>
            <Center>
                <Heading>{date}</Heading>
            </Center>
        </>
    );
}

export default DigitalClock;
