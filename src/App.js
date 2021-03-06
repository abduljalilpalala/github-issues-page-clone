import useFetch from "./api/useFetch";
import { useState } from "react";
import { IssuesContext } from "./context/IssuesContext";
import Issues from "./components/Issues";
import { Container, Box } from "@mui/material";
import FilterIssues from "./components/FilterIssues";
import Pagination from "./components/Pagination";

function App() {
    const [page, setPage] = useState(1);
    const [state, setState] = useState("all");
    const {
        data: issues,
        nextBtnLoading,
        setNextBtnLoading,
        previousBtnLoading,
        setPreviousBtnLoading,
    } = useFetch(page, state);

    return (
        <IssuesContext.Provider
            value={{
                issues,
                page,
                setPage,
                nextBtnLoading,
                setNextBtnLoading,
                previousBtnLoading,
                setPreviousBtnLoading,
            }}
        >
            <Container maxWidth="md" sx={{ marginTop: 6 }}>
                <Box sx={{ height: "90vh" }}>
                    <FilterIssues  state={state} setState={setState} setPage={setPage} />
                        <Issues />
                    <Pagination />
                </Box>
            </Container>
        </IssuesContext.Provider>
    );
}

export default App;
