import { getData } from "./helpers/data";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getData();
            setData(fetchedData);
        };
        fetchData();
    }, []);

    if (data.length === 0) return null;

    return (
        <ChakraProvider>
            <Table>
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.FirstName}</Td>
                            <Td>{item.LastName}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </ChakraProvider>
    );
}

export default App;
