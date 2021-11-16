import React from "react";
import { Box } from '@material-ui/core'
import styled from 'styled-components';

const Btn_Stake = ({ cbgcolor,str}) => {
    return (
        <Btn_Cus display="flex"  flex="1" justifyContent="center" alignItems="center" borderRadius="8px" color="white" fontSize="18px"   fontWeight="bold"  border="2px solid rgb(160, 250, 185)" bgcolor={cbgcolor}>
             {str}</Btn_Cus >
    );
};

const Btn_Cus = styled(Box)`
    &:hover{
        cursor: pointer;
        // box-shadow:
        // inset 0 -3em 3em rgba(0,0,0,0.1),
        //       0 0  0 0px rgb(255,255,255),
        //       0.3em 0.3em 1em rgba(0,0,0,0.3);
        // }
    }
`

export default Btn_Stake;