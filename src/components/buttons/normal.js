import React from "react";
import { Box } from '@material-ui/core'
import styled from 'styled-components';

const Btn_normal1 = ({ cwidth,cheight,cbgcolor,ccolor,cborder, cfsize,cfbold, cradius, str}) => {
    return (
        <Btn_Cus display="flex" justifyContent="center" alignItems="center" width={cwidth} height={cheight} color={ccolor}
            bgcolor={cbgcolor} border={cborder} borderRadius={cradius}
            sx={{
                fontSize: `${cfsize}`,
                fontWeight: `${cfbold}`,
            }}
        > {str}</Btn_Cus >
    );
};

const Btn_Cus = styled(Box)`

    &:hover{
        cursor: pointer;
        box-shadow:
        inset 0 -3em 3em rgba(0,0,0,0.1),
              0 0  0 0px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
        }
    }
`

export default Btn_normal1;