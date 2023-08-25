import styled from "@emotion/styled";
import { Colors } from "../../theme";
import { Fragment } from "react";
import Researchers from "./Researchers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getResearches } from "../../store/slices/researchesSlice";
import { Box, CircularProgress } from "@mui/material";
import  Title  from "../../components/Title";

const Container = styled("div")(({ theme }) => ({
  textAlign: "center",
  maxHeight: `calc(100%  - 60px) ` ,
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



const MyResearches = () => {

  const researches = useSelector((state) => state.researchesData.researches ) ; 
  const loading = useSelector((state) => state.researchesData.loading ) ;
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getResearches()) ; 
  },[])

  const pdfLink = (pdf) =>{
    window.open(pdf);
  }

  return (
    <>
    {loading? <CircularProgress/>:  (researches.length == 0) ? <Title>لا يوجد بحوث</Title> :
    <Box>
    <Title>أبحاثي  </Title>
      <Container>
        <GrantStyledTable>
          <thead>
            <tr>
              <GrantTableHead> الرقم</GrantTableHead>
              <GrantTableHead>عنوان البحث</GrantTableHead>
              <GrantTableHead> المادة </GrantTableHead>
              <GrantTableHead>حالة البحث</GrantTableHead>
              <GrantTableHead>تنزيل</GrantTableHead>
            </tr>
          </thead>
          <tbody>
            {researches.map((obj, i) => {
              return (
                <Fragment key={i}>
                  <tr>
                    <TableData>{i+1}</TableData>
                    <TableData>{obj.name}</TableData>
                    <TableData>{obj.subjecetName}</TableData>
                    <TableData>
                      {
                        obj.status==1 ? "جاهز" : "غير جاهز" 
                      }
                    </TableData>
    
                    <TableData>
                      {
                        obj.status==1 ? 
                        <GrantButton onClick={()=>pdfLink(obj.pdf)}>تنزيل</GrantButton>  : 
                        <FailButton>تنزيل</FailButton> 
                      }
                    </TableData>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </GrantStyledTable>
      </Container>
    </Box>
    }
    </>
  );
};

export default MyResearches;
