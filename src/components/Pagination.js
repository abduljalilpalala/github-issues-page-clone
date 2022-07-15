import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useContext } from "react";
import { IssuesContext } from "../context/IssuesContext";
import Stack from "@mui/material/Stack";

const Pagination = () => {
    const { page, setPage, isPending } = useContext(IssuesContext);

    return (
        <Box sx={{ py: 2 }}>
            <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}
            >
                <LoadingButton
                    variant="outlined"
                    disabled={page <= 1}
                    onClick={() => {
                        setPage(page - 1);
                    }}
                    sx={{ mr: 2 }}
                >
                    Previous
                </LoadingButton>
                <LoadingButton
                    loading={isPending}
                    disabled={page > 3}
                    variant="outlined"
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    Next
                </LoadingButton>
            </Stack>
        </Box>
    );
};

export default Pagination;
