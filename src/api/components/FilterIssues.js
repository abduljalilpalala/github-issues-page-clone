import { ButtonGroup, Button } from "@mui/material";

const FilterIssues = ({ state, setState }) => {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
                variant={state === "all" ? "contained" : ""}
                onClick={() => setState("all")}
            >
                All
            </Button>
            <Button
                variant={state === "open" ? "contained" : ""}
                onClick={() => setState("open")}
            >
                Opened Issues
            </Button>
            <Button
                variant={state === "closed" ? "contained" : ""}
                onClick={() => setState("closed")}
            >
                Closed Issues
            </Button>
        </ButtonGroup>
    );
};

export default FilterIssues;
