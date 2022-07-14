import useFetch from "./api/useFetch";
import { useState } from "react";
import { List, ListItem } from "@mui/material";

function App() {
    const [page, setPage] = useState(1);
    const [state, setState] = useState("all");
    const { data: issues, isPending } = useFetch(page, state);

    return (
        <div className="">
            
        </div>
    );
}

export default App;
