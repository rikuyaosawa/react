import { Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function MyComponent() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    const [carList, setCarList] = useState(["Mustang", "Camaro", "Charger"]);

    function handleAddCar() {
        const newCar = document.getElementById("add-car").value;
        document.getElementById("add-car").value = "";
        setCarList((c) => [...c, newCar]);
    }

    function handleUpdateYear(event) {
        setCar((c) => ({ ...c, year: event.target.value }));
    }
    function handleUpdateMake(event) {
        setCar((c) => ({ ...c, make: event.target.value }));
    }
    function handleUpdateModel(event) {
        setCar((c) => ({ ...c, model: event.target.value }));
    }

    return (
        <div>
            <Heading>
                Your car: {car.year} {car.make} {car.model}
            </Heading>
            <ul>
                {carList.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
            <Input type="text" id="add-car" placeholder="Enter new car..." />
            <Button onClick={handleAddCar}>Add Car</Button>
            <br />
            <label>Year:</label>
            <Input type="number" onChange={handleUpdateYear} />
            <label>Make:</label>
            <Input type="text" onChange={handleUpdateMake} />
            <label>Model:</label>
            <Input type="text" onChange={handleUpdateModel} />
        </div>
    );
}

export default MyComponent;
