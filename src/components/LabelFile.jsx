import styled from "@emotion/styled";
import { Colors } from "../theme";

const LabelFile = styled("label")(({ theme }) => ({
    margin: "20px",
    display: "inline-block" , 
    textTransform: "uppercase",
    color: "#fff",
    background: Colors.main[1],
    textAlign: "center",
    padding: "15px 40px",
    fontSize: "18px",
    letterSpacing: "1.5px",
    userSelect: "none",
    cursor: "pointer",
    boxShadow: "0px 7px 10px rgba(0, 0, 0, 0.35)",
    borderRadius: "3px",
    "&:active": {
        transform: "scale(0.9)",
    }
  })) 

export default LabelFile ;