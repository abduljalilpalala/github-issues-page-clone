import useFetch from "./api/useFetch";
import { useState } from "react";
import { IssuesContext } from "./context/IssuesContext";
import Issues from "./api/components/Issues";
import { Container, Box } from "@mui/material";
import FilterIssues from "./api/components/FilterIssues";
import Pagination from "./api/components/Pagination";

function App() {
    const [page, setPage] = useState(1);
    const [state, setState] = useState("all");
    const { data: issues, isPending } = useFetch(page, state);

    return (
        <IssuesContext.Provider value={{ issues, page, setPage }}>
            <Container maxWidth="md" sx={{ marginTop: 6 }}>
                <Box sx={{ height: "90vh" }}>
                    <FilterIssues setState={setState} state={state} />
                    <Issues />
					<Pagination />
                </Box>
            </Container>
        </IssuesContext.Provider>
    );
}

export default App;
