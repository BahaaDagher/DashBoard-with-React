import styled from '@emotion/styled';
import { Box } from '@mui/system'
import React from 'react'
import { Colors } from '../../theme';

const BoxContainer = styled(Box)(({ theme }) => ({
    border: `1px solid ${Colors.main[3]}` ,
    height: `calc(100vh - ${Colors.height} - 76px)`,
}));  

const Iframe = styled("iframe")(({ theme }) => ({
    width: "100%",
    height: '100%',
    border: '1px solid #ccc' , 
}));  
const Title = styled("h1")(({ theme }) => ({
    margin: '10px auto' ,
    padding : '10px' ,  
    textAlign: 'center' ,
    backgroundColor: Colors.main[6] ,
    width: '100%' ,
    color: Colors.main[1] ,
    fontWeight: 'bold' ,
}));  
const IframeSite = ({url, title}) => {
  return (
    <>
        <Title>{title}</Title>
        <BoxContainer>
            <Iframe
                src={url}
                title="بيت العلم"
            />
        </BoxContainer>
    </>
  )
}

export default IframeSite