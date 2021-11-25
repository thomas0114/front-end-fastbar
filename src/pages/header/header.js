/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from 'react'
import { Box, Modal} from '@material-ui/core'
import styled from 'styled-components';
import { MdMenuOpen } from "react-icons/md";
import {
    injected,
    walletConnect,
    trustWallet,
    binance_wallet,
} from "../../utils/connectors";
import _ from "lodash";
import { useWeb3React } from '@web3-react/core'
import metamask from '../../images/MetaMask.png'
import walletconnect from '../../images/WalletConnect.png'
import binance from '../../images/BinanceWallet.png'
import trust from '../../images/TrustWallet.png'
import img_logo from '../../images/logo_mark1.png';
import { lightTheme, darkTheme } from "../../theme/theme";
// import { useHistory } from "react-router";

const Header = ({ flag_sidebar, set_sidebar, ctheme }) => {
    // const history = useHistory()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20%',
        height: '50%',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        backgroundColor: '#2BA55D',
        display: "flex",
        flexDirection: 'column',
    };
    const DESKTOP_CONNECTORS = {
        MetaMask: injected,
        WalletConnect: walletConnect,
        BinanceWallet: binance_wallet,
        TrustWallet: trustWallet,
    };

    const MOBILE_CONNECTORS = {
        MetaMask: injected,
        TrustWallet: trustWallet,
        BinanceWallet: binance_wallet,
    };
    const walletConnectors = DESKTOP_CONNECTORS;
    const { connector, activate } = useWeb3React();
    const handleConnect = (currentConnector) => {
        setOpen(false);
        activate(currentConnector);
    }
    const getShortTxHash = (txHash, margin = 4) => {
        if (_.isEmpty(txHash)) {
            return "";
        }
        return txHash.replace(
            txHash.substring(margin + 2, txHash.length - margin),
            "....",
        );
    }

    return (
        <StyledContainer ctheme={ctheme?1:0} ltheme={lightTheme} dtheme={darkTheme}>
            {/* {theme? <div>123</div>:<div>KKK</div>} */}
            <Box display="flex" flex="1.3" alignItems="center" justifyContent="center" marginLeft="5%" marginRight="5%" fontWeight="bold" fontSize="20px" color={ctheme?lightTheme.font_color1: darkTheme.font_color1}>
                <MdMenuOpen onClick={() => set_sidebar(!flag_sidebar)} fontSize="30px" color="#2BA55D"/>
                <Logo_img>
                <img src={img_logo} width="55px" height="35px" style={{ marginLeft: "30px" }}></img>

                FASTSWAP
                </Logo_img>
            </Box>
            <Box display="flex" flex="3"></Box>
            <Box display="flex" flex="1" alignItems="center" justifyContent="center">
                <Btn_connect onClick={handleOpen}>Connect</Btn_connect>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style1}>
                    <Box sx={{
                        height: '68px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        lineHeight: 'initial',
                    }}>
                        <Box fontSize='28px' fontWeight='bold' color='white'>Select a Wallet</Box>
                    </Box>
                    <Box display='flex' flexDirection='column' height="100%" width='100%'>
                        <Box display='flex' alignItems="center" height="100%" flex='1' >
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['MetaMask']) }}>
                                <img src={metamask} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>MetaMask</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['WalletConnect']) }}>
                                <img src={walletconnect} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>WalletConnect</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['BinanceWallet']) }}>
                                <img src={binance} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>BinanceWallet</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['TrustWallet']) }}>
                                <img src={trust} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>TrustWallet</Connect_btn_letter>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </StyledContainer>
    );
};

const Connect_btn_letter = styled(Box)`
@media (max-width: 400px) {
    font-size:0.75rem !important;
    
}
`

const Logo_img = styled(Box)`
    display: flex;
    @media (max-width: 600px) {
        display: none;
        
    }

`
const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    height: 64px;
    background: ${({ ctheme, ltheme, dtheme}) => ctheme ? ltheme.bgcolor_bar : dtheme.bgcolor_bar};
    border-bottom: ${({ ctheme}) => ctheme ? '2px solid #F0F0F0' : '2px solid #2ba55d'};
    //#564a4a
    // box-shadow: 0px 4px 3px -4px rgba(0, 0, 0, 0.08);
`

const Btn_connect = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 32px;
    background: #2BA55D;
    border-radius: 8px;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    &:hover{
        cursor: pointer;
        box-shadow:
        inset 0 -3em 3em rgba(0,0,0,0.1),
              0 0  0 0px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
    }
    @media (max-width: 800px) {
        font-size: 12px;
        
    }
    @media (max-width: 600px) {
        font-size: 8px;
        
    }
`


export default Header;