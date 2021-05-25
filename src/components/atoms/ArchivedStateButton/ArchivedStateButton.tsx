import * as React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { ButtonProps, IconButton } from "@material-ui/core";
import styled from "styled-components";
import UnarchiveIcon from "@material-ui/icons/Unarchive";

const Button = styled(IconButton)`
  padding: 9px;
`;

interface Props extends ButtonProps {
  iconType: "archive" | "unarchive";
}

const ArchivedStateButton: React.FC<Props> = (props) => {
  return (
    <Button aria-label="delete">
      {props.iconType === "archive" ? <DeleteOutlineIcon /> : <UnarchiveIcon />}
    </Button>
  );
};

export default ArchivedStateButton;
