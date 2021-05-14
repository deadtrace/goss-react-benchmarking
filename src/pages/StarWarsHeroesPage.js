import { Table, Tbody, Tr, Td, Thead, Th } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let results = [];
            let next = "https://swapi.dev/api/people/?page=1";
            while (next) {
                const resp = await fetch(next);
                const respData = await resp.json();
                results = results.concat(respData.results);
                next = respData.next;
                setData(results);
            }
        };
        fetchData();
    }, []);

    if (data.length === 0) return null;

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Height</Th>
                    <Th isNumeric>Mass</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((item) => (
                    <Tr key={item.url}>
                        <Td>{item.name}</Td>
                        <Td isNumeric>{item.height}</Td>
                        <Td isNumeric>{item.mass}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}

export default App;
