import styled from "@emotion/styled";
import { Colors } from "../../theme";
import { Fragment } from "react";
import Projects from "./Projects";

const Container = styled("div")(({ theme }) => ({
  maxHeight: "100vh",
  overflow: "auto",
  textAlign: "center",
}));

const GrantStyledTable = styled("table")(({ theme }) => ({
  margin: "auto",
  minWidth: "600px",
  width: "99%",
  border: "1px solid #e4e5e5",
  tbody: {
    "& tr:nth-of-type(even)": {
      backgroundColor: Colors.main[6],
    },
  },
}));

const GrantTableHead = styled("th")(({ theme }) => ({
  color: "#fff",
  backgroundColor: Colors.main[5],
  padding: "10px",
}));

const TableData = styled("td")(({ theme }) => ({
  borderLeft: "1px solid #e4e5e5",
  padding: "10px",
}));

const GrantButton = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: Colors.main[5],
  border: `2px solid ${Colors.main[5]}`,
  borderRadius: "10px",
  margin: "auto",
  "&:hover": {
    backgroundColor: Colors.main[5],
    cursor: "pointer",
    color: "#fff",
  },
  transition: "all 0.3s ease-in-out",
  padding: "3px",
}));

const Title = styled("h1")(({ theme }) => ({
  padding : "10px ",
}));

const MyProjects = () => {
  return (
    <>
    <Title>مشاريعي : </Title>
      <Container>
        <GrantStyledTable>
          <thead>
            <tr>
              <GrantTableHead>الرقم</GrantTableHead>
              <GrantTableHead>عنوان المشروع</GrantTableHead>
              <GrantTableHead>حالة المشروع</GrantTableHead>
              <GrantTableHead>المشروع</GrantTableHead>
            </tr>
          </thead>
          <tbody>
            {Projects.map((obj, i) => {
              return (
                <Fragment key={i}>
                  <tr>
                    <TableData>{obj.id}</TableData>
                    <TableData>{obj.title}</TableData>
                    <TableData>{obj.status}</TableData>
                    <TableData>
                      <GrantButton>اظهار</GrantButton>
                    </TableData>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </GrantStyledTable>
      </Container>
    </>
  );
};

export default MyProjects;
