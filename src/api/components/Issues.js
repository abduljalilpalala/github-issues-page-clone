import { List } from "@mui/material";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";
import IssueItem from "./IssueItem";

const Issues = () => {
    const { issues } = useContext(IssuesContext);
    return (
        <List
            xs={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
                padding: 0,
            }}
        >
            {issues &&
                issues.map((issue) => (
                    <div key={issue.id}>
                        <IssueItem issue={issue}/>
                    </div>
                ))}
        </List>
    );
};

export default Issues;
