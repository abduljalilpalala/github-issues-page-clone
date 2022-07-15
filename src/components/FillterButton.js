import Button from "@mui/material/Button";

const FilterButton = ({
    currentState,
    newState,
    setCurrentState,
    setPage,
    btnText,
}) => {
    return (
        <Button
            variant={currentState === newState ? "contained" : ""}
            onClick={() => {
                setCurrentState(newState);
                setPage(1);
            }}
        >
            {btnText}
        </Button>
    );
};

export default FilterButton;
