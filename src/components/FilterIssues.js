import { ButtonGroup, Button } from "@mui/material";
import FilterButton from "./FillterButton";

const FilterIssues = ({ state, setState, setPage }) => {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <FilterButton
                currentState={state}
                newState="all"
                setCurrentState={setState}
                setPage={setPage}
                btnText="All"
            />
            <FilterButton
                currentState={state}
                newState="open"
                setCurrentState={setState}
                setPage={setPage}
                btnText="Open Issues"
            />
            <FilterButton
                currentState={state}
                newState="closed"
                setCurrentState={setState}
                setPage={setPage}
                btnText="Closed Issues"
            />
        </ButtonGroup>
    );
};

export default FilterIssues;
