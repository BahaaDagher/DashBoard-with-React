import styled from "@emotion/styled";
import { Colors } from "../../theme";
import { Fragment } from "react";
import Researchers from "./Researchers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getResearches } from "../../store/slices/researchesSlice";

const Container = styled("div")(({ theme }) => ({
  textAlign: "center",
  maxHeight: `calc(100vh - ${Colors.height} - 70px)` ,
  overflow: "auto",
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

const FailButton = styled("div")(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#aaaaaa4a",
  color: Colors.main[5],
  border: `2px solid ${Colors.main[5]}`,
  borderRadius: "10px",
  margin: "auto",
  padding: "3px",
}));
const Title = styled("h1")(({ theme }) => ({
  padding : "10px ",
}));

const MyResearches = () => {

  const researches = useSelector((state) => state.researchesData.researches ) ; 
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getResearches()) ; 
    console.log(researches);
  },[])

  const pdfLink = (pdf) =>{
    window.open(pdf);
  }

  return (
    <>
    <Title>أبحاثي : </Title>
      <Container>
        <GrantStyledTable>
          <thead>
            <tr>
              <GrantTableHead>الرقم</GrantTableHead>
              <GrantTableHead>عنوان البحث</GrantTableHead>
              <GrantTableHead>حالة البحث</GrantTableHead>
              <GrantTableHead>البحث</GrantTableHead>
            </tr>
          </thead>
          <tbody>
            {researches.map((obj, i) => {
              return (
                <Fragment key={i}>
                  <tr>
                    <TableData>{obj.id}</TableData>
                    <TableData>{obj.name}</TableData>
                    <TableData>
                      {
                        obj.status==0 ? "غير جاهز" : "جاهز" 
                      }
                    </TableData>
                    <TableData>
                      {
                        obj.status==0 ? 
                        <FailButton>اظهار</FailButton> : 
                        <GrantButton onClick={()=>pdfLink(obj.pdf)}>اظهار</GrantButton> 
                      }
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

export default MyResearches;
