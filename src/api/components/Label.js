import Chip from "@mui/material/Chip";

const Label = ({ name, color }) => {
    return (
        <Chip
            label={name}
            style={{
                backgroundColor: `#${color}`,
                color: "white",
            }}
            sx={{ marginRight: 1 }}
        />
    );
};

export default Label;
