import {
    Button,
    Box,
    Center,
    Heading,
    Input,
    Flex,
    useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Task from "./Task.jsx";

function Todo() {
    const [task, setTask] = useState([]);
    const toast = useToast();

    const handleAddTask = () => {
        const newTask = document.getElementById("add-task").value;

        if (newTask.trim() === "") {
            toast({
                title: "Task not added.",
                description: "Empty task is not accepted.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        document.getElementById("add-task").value = "";

        const newId = createNewRandomId();
        console.log("New ID", newId, "for the new task:", newTask);

        setTask((t) => [...t, { id: newId, name: newTask }]);

        console.log("Task updated:", {
            type: "add",
            taskId: newId,
            taskName: newTask,
            updatedAt: new Date().toLocaleTimeString(),
        });

        toast({
            title: "Task successfully added.",
            status: "success",
            duration: 3000,
            isClosable: false,
        });
    };

    useEffect(() => {
        console.log("Task:", task);
    }, [task]); // Logs every time `task` changes

    function createNewRandomId() {
        let newId;
        const existingIdList = task.map((t) => t.id);

        if (existingIdList.length > 1000) {
            throw new Error("ID List max reached");
        }

        let isUniqueIdFound = false;
        while (!isUniqueIdFound) {
            newId = Math.floor(Math.random() * 1000);
            if (!existingIdList.includes(newId)) {
                isUniqueIdFound = true;
            }
        }

        return newId;
    }

    return (
        <Center minHeight="100vh">
            <Box textAlign="center" width="450px">
                <Heading mb={8}>To-Do-List</Heading>
                <Flex>
                    <Input
                        type="text"
                        id="add-task"
                        placeholder="Enter a task..."
                        mb={6}
                    />
                    <Button
                        onClick={() => handleAddTask()}
                        bg="green.400"
                        color="white"
                        _hover={{ bg: "green.500" }}
                        mb={4}
                    >
                        Add
                    </Button>
                </Flex>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {task.map((t) => (
                        <li key={t.id}>
                            <Task task={t} setTask={setTask} />
                        </li>
                    ))}
                </ul>
            </Box>
        </Center>
    );
}

export default Todo;
