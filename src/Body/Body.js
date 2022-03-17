import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toast'
import { Container, Navbar, Image  } from "react-bootstrap";
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import { AiOutlineSetting } from "react-icons/ai";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AiOutlineClose } from "react-icons/ai";
import {ethers } from "ethers"
// const Web3 = require('web3')
function Content() {
    
    const [visible, setVisible] = useState(true);
    const togleSidebar = () => {
        setVisible(!visible);
    }

    const [shown, setShow] = useState(false);
    const sethide = (a) => {
        setShow(a);
    }

    const [recentPlayer, setRecentPlayer] = useState(false);
    const setplayerlist = () => {
        setRecentPlayer(!recentPlayer);
    }

    const [walletconnect, setWalletconnect] = useState(true);

    const [gamebtnShow, setGamebtnShow ] = useState(false);

    const ConnectMeta = async () => {
        const metamaskProvider = window.ethereum
        const validation = await metamaskProvider.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: "0xA86A",
                rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                chainName: "Avalanche Mainnet",
                nativeCurrency: {
                    name: "AVAX",
                    symbol: "AVAX",
                    decimals: 18
                },
                blockExplorerUrls: ["https://snowtrace.io/"]
            }]
        });

        await metamaskProvider.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(metamaskProvider);
        const signer_metamask = provider.getSigner();
        const { chainId } = await provider.getNetwork();
        setShow(false);
        setGamebtnShow(true);
        setWalletconnect(false);
    }

    useEffect(() => {
        const connectValidate = window.ethereum.isConnected();
        console.log(connectValidate);
        if (connectValidate == true) {
            setShow(false);
            setGamebtnShow(true);
            setWalletconnect(false);
        } else {
            return false;
        }
    }, [])

    return (
        <div className={visible?'App-light':'App-dark'}>
            <Navbar expand="lg" sticky="top">
                <Container className='navigation-container'>
                    <Button className={visible?'soundbutton-light':'soundbutton-dark'}><VolumeUpIcon className={visible?'sound-light':'sound-dark'}/></Button>
                    <Button className={visible?'show settingbutton-light':'hide'} onClick={() => togleSidebar()}>LIGHT <AiOutlineSetting className='setting-icon'/></Button>
                    <Button className={visible?'hide':'show moonbutton-light'} onClick={() => togleSidebar()}>DARK <DarkModeIcon className='moon-icon'/></Button>
                    <div className='players-button-container'>
                        <Button className={visible?'recent-button-light':'recent-button-dark'} onClick={() => setplayerlist()}>RECENT <ArrowDropDownIcon className={visible?'arrow-light':'arrow-dark' }/> </Button>
                        <a href='#' className={visible?'liveplay-button-light':'liveplay-button-dark'} >LIVEPLAYS <CallMissedOutgoingIcon className={visible?'switch-light':'switch-dark'} /></a>
                    </div>
                </Container>
            </Navbar>

            {/* Recen player list */}
            <div className={recentPlayer?'show recent-player-list-light':'hide'}>
                        <ul className='list-group'>
                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>
                            
                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}> flipped 0.05 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (Hg2f) and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (Hg2f) flipped 0.05 and got rugged..</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (EPmS) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>
                        </ul>
                    </div>


            <Container className='mainbody-container'>
                <div className='main-body'>
                    <Image src='https://i.imgur.com/896fn7R.png' className='coin-light'/>
                    <div className='sellect-wallet-container'>
                        <button className={walletconnect?'sellect-wallet-light':'hide'} onClick ={ () => sethide(true)}>Sellect Wallet</button>
                    </div>

                        {/* Game button component */}
                    <div className={gamebtnShow?'game-button-component show':'hide'}>
                        <p className={visible?"":'font-light'}>1 LIKE</p>
                        <div className='hero-trils-button-container'>
                            <Button>HEROES</Button>
                            <Button>TRILS</Button>
                        </div>

                        <p className={visible?"":'font-light'}>FOR</p>

                        <div className='pricebutton-container'>
                            <Button>.05 AVAX</Button>
                            <Button>0.1 AVAX</Button>
                            <Button>.25 AVAX</Button>
                        </div>
                        <div className='pricebutton-container'>
                            <Button>0.5 AVAX</Button>
                            <Button>1 AVAX</Button>
                            <Button>2 AVAX</Button>
                        </div>

                        <div className='double-nothing-button-container'>
                            <Button>DOUBLE OR NOTHING</Button>
                        </div>
                        <p className={visible?"":'font-light'}>CLICK TO SEE OPTIONS</p>

                    </div>

                    <h2 className={visible?'recent-player':'font-light recent-player'}>RECENT PLAYS</h2>
                    <div className='player-list-light'>
                        <ul className='list-group'>
                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>
                            
                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}> flipped 0.05 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (Hg2f) and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (Hg2f) flipped 0.05 and got rugged..</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (EPmS) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>

                            <li className={visible?'list-group-item d-flex':'list-group-item d-flex dark'}>
                                <a className='d-flex'>
                                    <div className='profile-picture'>
                                        <img class="image rounded-circle" src="https://i.imgur.com/OjGFzTQ.png" alt="" />
                                    </div>
                                    <div class={visible?"title":'title font-light'}>Wallet (G74w) flipped 0.1 and doubled.</div>
                                    <small class={visible?"time-in-row":'time-in-row font-light'}>8 hours ago</small>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

                {/* Footer */}
            <div className={visible?'footer-container footer-link-light':'footer-container footer-link-dark'}>
                <a>STATS</a><span className='seprate'>|</span>
                <a>ABOUT</a><span className='seprate'>|</span>
                <a>FAO</a><span className='seprate'>|</span>
                <a>HOW TO PLAY</a><span className='seprate'>|</span>
                <a>FLIP RESPOSIBILY</a>
            </div>

                {/* Dialog */}
            <Container className={ shown?"dialog-container show":'hide'}>
                <div className="backg"></div>
                <button className="closebtn" onClick= {() => sethide(false)} >
                    <AiOutlineClose />
                </button>
                <div className="connectwalletcard">
                    <div className="cardtitle">Connect Wallet</div>
                    <div className="cardcontent-container">
                        <a>
                            <div className="walletchose" onClick={() => ConnectMeta() }>
                                <p className='walletname'>MetaMask</p>
                                <Image className='walleticon' src='https://registry.walletconnect.com/api/v1/logo/lg/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96' />
                            </div>
                        </a>

                        <a>
                            <div className="walletchose">
                                <p className='walletname'>Trust</p>
                                <Image className='walleticon' src='https://registry.walletconnect.com/api/v1/logo/lg/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0' />
                            </div>
                        </a>
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default Content;