import { useTheme } from "@emotion/react"
import React from "react"
import { CenteredDiv, Container } from "./components"

const EmptyChat = () => {
  const theme = useTheme()
  return (
    <Container sx={{ display: { xs: "none", chatSmall: "flex" } }}>
      <CenteredDiv>
        <div
          style={{
            // backgroundColor: "transparent",
            // color: theme.palette.chat.outerText,
            fontSize: "30px",
            padding: "10px",
            backgroundColor: "black",
            opacity: "0.7",
            color: "white",
          }}
        >
          Select person to start chat with!
        </div>
      </CenteredDiv>
    </Container>
  )
}

export default EmptyChat
