import { Box } from "@mui/material";

import { useContext } from "react";
import { IssuesContext } from "../context/IssuesContext";
import Stack from "@mui/material/Stack";
import PaginationButton from "./PaginationButton";

const Pagination = () => {
    const {
        nextBtnLoading,
        setNextBtnLoading,
        previousBtnLoading,
        setPreviousBtnLoading,
    } = useContext(IssuesContext);

    return (
        <Box sx={{ py: 2 }}>
            <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}
            >
                <PaginationButton
                    btnLoading={previousBtnLoading}
                    setBtnLoading={setPreviousBtnLoading}
                    btnText="PREVIOUS"
                />
                <PaginationButton
                    btnLoading={nextBtnLoading}
                    setBtnLoading={setNextBtnLoading}
                    btnText="NEXT"
                />
            </Stack>
        </Box>
    );
};

export default Pagination;
