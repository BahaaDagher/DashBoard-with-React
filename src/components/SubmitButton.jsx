import styled from "@emotion/styled";
import { Colors } from "../theme";

const SubmitButton = styled("div")(({ theme }) => ({
  padding: "10px 30px",
  backgroundColor: Colors.main[3] ,
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.main[2],
  },
  transition: "background-color 0.3s",
  margin: "10px auto",
  textAlign: "center",
}));

export default SubmitButton ; 