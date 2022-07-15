import React from "react";

import {
    ListItem,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Typography,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Label from "./Label";

import moment from "moment";

const IssueItem = (props) => {
    const { issue } = props;
    const { title, number, created_at, labels, state, user, comments } = issue;
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <ChatBubbleOutlineIcon sx={{ mr: 1 }} />
                    {comments}
                </IconButton>
            }
            alignItems="flex-start"
            sx={{ border: 1 }}
        >
            <ListItemAvatar>
                {state === "open" ? (
                    <RadioButtonCheckedIcon color="success" />
                ) : (
                    <TaskAltIcon color="secondary" />
                )}
            </ListItemAvatar>
            <ListItemText
                primary={
                    <React.Fragment>
                        {title}{" "}
                        {labels &&
                            labels.map(({ name, color }) => (
                                <Label key={name} name={name} color={color}/>
                            ))}
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: "inline", mr: 2 }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            #{number} {`${state} `}
                            {moment(created_at, "YYYYMMDD").fromNow()} by{" "}
                            {user.login}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default IssueItem;
