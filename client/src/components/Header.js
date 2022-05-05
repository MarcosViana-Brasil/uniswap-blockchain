import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import { TransactionContext } from '../../context/TransactionContext'
import uniswapLogo from '../assets/uniswap.png'
import ethLogo from '../assets/eth.png'

const style = {
    wrapper: `p-4 w-screen flex items-center justify-between`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#191b1f] rounded-3xl`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#20242a]`,
    buttonsContainer: `flex w-1/4 justify-end items-center`,
    button: `flex items-center bg-[#191b1f] rounded-2xl mx-2 text-[0.9] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#172a42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4f90ea]`,
}

const Header = () => {
    const [selectNav, setSelectNav] = useState('swap')
    const [userName, setUserName] = useState()
    const { connectWallet, currentAccount } = useContext(TransactionContext)

    useEffect(() => {
        if (!currentAccount) return
        setUserName(
            `${currentAccount.slice(0, 5)}...${currentAccount.slice(38)}`
        )
    }, [currentAccount])

    // console.log({ connectWallet, currentAccount })

    return (
        <div className={style.wrapper}>
            <div className={style.headerLogo}>
                <Image
                    src={uniswapLogo}
                    alt="uniswapLogo"
                    height={100}
                    width={100}
                    priority
                />
            </div>
            <div className={style.nav}>
                <div className={style.navItemsContainer}>
                    <div
                        onClick={() => setSelectNav('swap')}
                        className={`${style.navItem} ${
                            selectNav === 'swap' && style.activeNavItem
                        }`}
                    >
                        Swap
                    </div>
                    <div
                        onClick={() => setSelectNav('pool')}
                        className={`${style.navItem} ${
                            selectNav === 'pool' && style.activeNavItem
                        }`}
                    >
                        Pool
                    </div>
                    <div
                        onClick={() => setSelectNav('vote')}
                        className={`${style.navItem} ${
                            selectNav === 'vote' && style.activeNavItem
                        }`}
                    >
                        Vote
                    </div>
                    <a
                        href="https://info.uniswap.org/#/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={style.navItem}>
                            Charts
                            <FiArrowUpRight />
                        </div>
                    </a>
                </div>
            </div>

            <div className={style.buttonsContainer}>
                <div className={`${style.button} ${style.buttonPadding}`}>
                    <div className={style.buttonIconContainer}>
                        <Image
                            src={ethLogo}
                            alt="ethlogo"
                            height={20}
                            width={20}
                        />
                    </div>
                    <p>Ethereum</p>
                    <div className={style.buttonIconContainer}>
                        <AiOutlineDown />
                    </div>
                </div>

                {currentAccount ? (
                    <div className={`${style.button} ${style.buttonPadding}`}>
                        <div className={style.buttonTextContainer}>
                            {userName}
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={() => connectWallet()}
                        className={`${style.button} ${style.buttonPadding}`}
                    >
                        <div
                            className={`${style.buttonAccent} ${style.buttonPadding}`}
                        >
                            Connect Wallet
                        </div>
                    </div>
                )}

                <div className={`${style.button} ${style.buttonPadding}`}>
                    <HiOutlineDotsVertical />
                </div>
            </div>
        </div>
    )
}

export default Header
