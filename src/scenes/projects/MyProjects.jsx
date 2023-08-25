import styled from "@emotion/styled";
import { Colors } from "../../theme";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import  Title  from "../../components/Title";
import { getProjects } from "../../store/slices/projectsSlice";

const Container = styled("div")(({ theme }) => ({
  textAlign: "center",
  maxHeight: `calc(100vh - ${Colors.height} - ${Colors.mobile}- 70px)` ,
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



const MyProjects = () => {

  const projects = useSelector((state) => state.projectsData.projects ) ; 
  const loading = useSelector((state) => state.projectsData.loading ) ;
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getProjects()) ; 
    console.log("projects ",projects);
  },[])

  const pdfLink = (pdf) =>{
    window.open(pdf);
  }

  return (
    <>
     { loading ? <CircularProgress/> :
     (projects.length==0) ? <Title>لا يوجد مشاريع</Title> :
    <Box>
    <Title> مشاريعي </Title>
      <Container>
        <GrantStyledTable>
          <thead>
            <tr>
            <GrantTableHead> الرقم</GrantTableHead>
              <GrantTableHead>عنوان المشروع</GrantTableHead>
              <GrantTableHead> المادة </GrantTableHead>
              <GrantTableHead>حالة المشروع</GrantTableHead>
              <GrantTableHead>اظهار </GrantTableHead>
              <GrantTableHead>تنزيل</GrantTableHead>
            </tr>
          </thead>
          <tbody>
            {projects.map((obj, i) => {
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
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          ...
                        </div>
                      </div>
                    </div>
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

export default MyProjects;
