import { LoadingButton } from "@mui/lab";
import { IssuesContext } from "../context/IssuesContext";
import { useContext } from "react";

const PaginationButton = ({ btnLoading, setBtnLoading, btnText }) => {
    const { page, setPage } = useContext(IssuesContext);
    return (
        <LoadingButton
            loading={btnLoading}
            variant="outlined"
            disabled={btnText === "PREVIOUS" ? page <= 1 : page >= 3}
            onClick={() => {
                btnText === "PREVIOUS" ? setPage(page - 1) : setPage(page + 1);
                setBtnLoading(true);
            }}
            sx={{ mr: 2 }}
        >
            {btnText}
        </LoadingButton>
    );
};

export default PaginationButton;
