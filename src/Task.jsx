import {
    Center,
    Flex,
    Spacer,
    Button,
    Heading,
    Card,
    CardBody,
    useToast,
} from "@chakra-ui/react";

function Task({ task, setTask }) {
    const toast = useToast();
    const handleDeleteTask = (taskId, taskName) => {
        setTask((t) => t.filter((task) => task.id !== taskId));
        console.log("Task updated:", {
            type: "delete",
            taskId: taskId,
            taskName: taskName,
            updatedAt: new Date().toLocaleTimeString(),
        });

        toast({
            title: "Task successfully deleted.",
            status: "success",
            duration: 5000,
            isClosable: false,
        });
    };

    return (
        <Center>
            <Card mb={4} width="70%">
                <CardBody>
                    <Flex>
                        <Center>
                            <Heading as="h3" size="md" m={2}>
                                {task.name}
                            </Heading>
                        </Center>
                        <Spacer />
                        <Center>
                            <Button
                                onClick={() =>
                                    handleDeleteTask(task.id, task.name)
                                }
                                size="sm"
                                bg="red.300"
                                color="white"
                                _hover={{ bg: "red.500" }}
                            >
                                Delete
                            </Button>
                        </Center>
                    </Flex>
                </CardBody>
            </Card>
        </Center>
    );
}

export default Task;
