import styled from "@emotion/styled";

const LabelFile = styled("label")(({ theme }) => ({
    display: "inline-block" , 
    textTransform: "uppercase",
    color: "#fff",
    background: "#c0392b",
    textAlign: "center",
    padding: "15px 40px",
    fontSize: "18px",
    letterSpacing: "1.5px",
    userSelect: "none",
    cursor: "pointer",
    boxShadow: "5px 15px 25px rgba(0, 0, 0, 0.35)",
    bordeRadius: "3px",
    "&:active": {
        transform: "scale(0.9)",
    }
  })) 

export default LabelFile ;