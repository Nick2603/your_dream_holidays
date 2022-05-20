import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

export const CardContentCustomStyles = styled(CardContent)(`
display: flex;
align-content: center;
justify-content: center;
padding: 5px;
&:last-child {
  padding-bottom: 5px;
};
`);
