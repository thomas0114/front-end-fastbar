import React from "react";
import { useState } from 'react'
import { Box, Input } from '@material-ui/core'
import styled from 'styled-components';

import Btn_normal1 from '../../components/buttons/normal';
import Btn_Stake from "../../components/buttons/stake";

import sushi_img1 from '../../images/xsushi-sign.png';
import bnb from '../../images/bnb.png';
import leopard1 from '../../images/leopard1.png';

import Web3 from 'web3'
import { ethers } from 'ethers'
import Token from '../../hardhat/artifacts/contracts/Token.sol/FastBar.json'


const Mainpage = () => {
    let web3;
    const [stake, set_stake] = useState(false)
    const [amount, set_amount] = useState('');

    const account_address = '0xde261e19d5b2Ba774E60570645A95e7B2f9250b5';
    const token_address = '0xbddf561c0db7bd4cca663540747d531307c206c6';


    const ethEnabled = () => {
        if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(window.ethereum);
            try {

                window.ethereum.enable();
                return true
            } catch (e) {
                return false
            }

        }

        return false
    }

    const staking_unstaking = async() => {
        if (!ethEnabled()) {
            alert("Please install Metamask.");
        }
        var web31 = require('web3');
        var web31 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
        var stake_fast = new web31.eth.Contract(Token.abi, token_address)
        //await stake_fast.methods.approve(account_address, amount);
        // console.log(stake_fast)
        var stake_fast = new web31.eth.Contract(Token.abi, token_address)
        var stake_fast1 = new web31.eth.Contract(Token.abi, token_address)
        // await stake_fast.methods.leave(amount).call();
        // await stake_fast.methods.approve(account_address, amount).call();
        if(!stake)
        {
            // let amountapprove= parseInt(amount)/1.1972;
            await stake_fast.methods.leave(amount.toString()).send({from : account_address});
            await stake_fast1.methods.enter(amount.toString()).send({from : account_address});

        }
        else{
            // let amountapprove = parseInt(amount)*1.1972;
            await stake_fast.methods.enter(amount.toString()).send({from : account_address});
            await stake_fast1.methods.leave(parseInt(amount)).send({from : account_address});
        }

    }

    return (
        <StyledContainer>
            <Box width="50%" display="flex" flexDirection="column" alignItems="center" bgcolor="white" borderRadius="30px">
                {/* <Box display="flex" marginTop="5%" alignItems="center" width="90%">
                    <Box display="flex" flex="2" flexDirection="column">
                        <Box display="flex" color="rgb(25, 19, 38)" fontSize="1.5rem" fontWeight="bold">
                            Maximize yield by staking SUSHI for xSUSHI
                        </Box>
                        <Box display="flex" marginTop="5%">
                            For every swap on the exchange on every chain, 0.05% of the swap<br />
                            fees are distributed as SUSHI\nproportional to your share of the <br />
                            SushiBar. When your SUSHI is staked into the SushiBar, you<br />
                            recieve\nxSUSHI in return for voting rights and a fully composable <br />
                            token that can interact with other protocols.\nYour xSUSHI is <br />
                            continuously compounding, when you unstake you will receive all the <br />
                            originally deposited\nSUSHI and any additional from fees.
                        </Box>
                    </Box>
                    <Box display="flex" flex="1" height="224px" justifyContent="center" alignItems="center">
                        <img src={sushi_img1} width="70%" height="100%"></img>
                    </Box>
                </Box> */}
                <Box display="flex" marginTop="5%" alignItems="center" width="90%" marginBottom="5%">
                    <Box display="flex" flex="2" flexDirection="column" width="100%">
                        <Box display="flex" flexDirection="column" width="100%" bgcolor="rgb(110, 160, 190)" borderRadius="8px" width="100%" alignItems="center">
                            <Box display="flex" flex="1" width="90%" marginTop="3%">
                                <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontWeight="bold" fontSize="1.5rem">Staking APR</Box>
                                <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center" color="black" fontWeight="bold" fontSize="1.9rem">14.17%</Box>
                            </Box>
                            <Box display="flex" flex="1" width="90%" marginTop="3%" marginBottom="3%">
                                <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center">
                                    <Btn_normal1 cwidth={"60%"} cheight={"35px"} cbgcolor={"rgb(0, 110, 150)"} ccolor={"white"} cborder={"none"} cradius={"8px"} cfsize={"16px"} cfbold={"bold"} str={"View States"}></Btn_normal1>
                                </Box>
                                <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center" color="black" fontWeight="bold" fontSize="1rem">Yesterday's APR</Box>
                            </Box>
                        </Box>
                        <Box display="flex" marginTop="3%" flexDirection="column" width="100%" alignItems="center" borderRadius="8px" bgcolor="rgb(110, 200, 150)" height="300px">
                            <Box display="flex" flex="1" width="90%" marginTop="3%" bgcolor="rgb(160, 250, 185)" borderRadius="8px">
                                <Box display="flex" flex="1" onClick={() => {
                                    set_stake(false); set_amount('')
                                }}>
                                    <Btn_Stake str={'Stake FAST'} cbgcolor={!stake ? 'rgb(43, 165, 100)' : ''}></Btn_Stake>
                                </Box>
                                <Box display="flex" flex="1" onClick={() => { set_stake(true); set_amount('') }}>
                                    <Btn_Stake str={'Unstake'} cbgcolor={stake ? 'rgb(43, 165, 100)' : ''}></Btn_Stake>
                                </Box>

                            </Box>
                            <Box display="flex" flex="1" width="90%" marginTop="3%">
                                <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontWeight="bold" fontSize="1.5rem">{!stake ? 'Stake FAST' : 'Unstake'}</Box>
                                <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center">
                                    <Box display="flex" width="80%" justifyContent="center" alignItems="center" borderRadius="30px" bgcolor="rgb(250, 249, 250)" border="1px solid #cd8a8a" fontWeight="bold">
                                        1 xFAST = 1.1972 FAST
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" flex="1" width="90%" marginTop="3%" position="relative">
                                <Box display="flex" flex="1" color="black" borderRadius="8px" bgcolor="rgb(160, 250, 185)" component="input" border="none" fontSize="20px" fontWeight="bold"
                                    sx={{
                                        'outline': 'none'
                                    }} paddingLeft="3%" paddingRight="3%" onChange={(e) => {
                                        set_amount(e.target.value);
                                    }} value={amount} placeholder={!stake ? '0 FAST' : '0 xFAST'}>
                                </Box>
                                <Box display="flex" position="absolute" width="30%" right="3%" alignItems="center" justifyContent="center" height="100%">
                                    <Box display="flex" flex="1" alignItems="center" justifyContent="center">Balance:</Box>
                                    <Box display="flex" flex="1" component="button" height="50%" borderRadius="20px" bgcolor="rgb(43, 165, 100)" color="white" alignItems="center" fontWeight="bold" justifyContent="center" sx={{
                                        'cursor': 'pointer'
                                    }}>MAX</Box>
                                </Box>
                            </Box>

                            <Box display="flex" flex="1" width="90%" marginTop="3%" marginBottom="3%" alignItems="center" justifyContent="center" onClick={() => staking_unstaking()}>
                                <Btn_normal1 cwidth={"100%"} cheight={"60px"} cbgcolor={"rgb(43, 165, 100)"} ccolor={"white"} cborder={"none"} cradius={"8px"} cfsize={"20px"} cfbold={"bold"} str={"Enter Amount"} ></Btn_normal1>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flex="1" flexDirection="column" bgcolor="rgb(110, 200, 150)" borderRadius="8px" width="100%" height="100%" alignItems="center" marginLeft="2%">
                        <Box display="flex" flex="4" flexDirection="column" marginTop="5%" width="80%">
                            <Box displya="flex" flex="1" flexDirection="column" justifyContent="flex-start">
                                <Box display="flex" flex="1" color="black" fontSize="1.9rem" fontWeight="bold">Balance</Box>
                                <Box display="flex" flex="1" marginTop="5%" alignItems="center">
                                    <Box display="flex" flex="1" >
                                        <img src={bnb} width="100%" height="100%" style={{ borderRadius: '8px' }}></img>
                                    </Box>
                                    <Box display="flex" flex="2" flexDirection="column" marginLeft="5%">
                                        <Box display="flex" flex="1" color="black" fontWeight="bold" fontSize="1.5rem">-</Box>
                                        <Box display="flex" flex="1" color="black" fontWeight="bold" fontSize="1.5rem">FAST</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flex="4" flexDirection="column" marginTop="5%" width="80%">
                            <Box displya="flex" flex="1" flexDirection="column" justifyContent="flex-start">
                                <Box display="flex" flex="1" color="black" fontSize="1.9rem" fontWeight="bold">Unstaked</Box>
                                <Box display="flex" flex="1" marginTop="5%" alignItems="center">
                                    <Box display="flex" flex="1" >
                                        <img src={leopard1} width="100%" height="100%" style={{ borderRadius: '8px' }}></img>
                                    </Box>
                                    <Box display="flex" flex="2" flexDirection="column" marginLeft="5%">
                                        <Box display="flex" flex="1" color="black" fontWeight="bold" fontSize="1.5rem">-</Box>
                                        <Box display="flex" flex="1" color="black" fontWeight="bold" fontSize="1.5rem">xFAST</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flex="1" alignItems="center" width="80%" alignItems="center" justifyContent="center" marginBottom="5%">
                            <Btn_normal1 cwidth={"100%"} cheight={"60px"} cbgcolor={"rgb(43, 165, 100)"} ccolor={"white"} cborder={"none"} cradius={"8px"} cfsize={"20px"} cfbold={"bold"} str={"Your FastBar States"}></Btn_normal1>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </StyledContainer>
    );
};


const StyledContainer = styled(Box)`
    width: 100%;
    height: 100vh;
    background-color: rgb(173, 173, 173);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default Mainpage;