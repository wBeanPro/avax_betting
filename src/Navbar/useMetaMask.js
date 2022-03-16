import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { injected } from '../components/wallet/connectors'
import { useWeb3React } from '@web3-react/core';

export const MetaMaskContext = React.createContext(null)

export const MetaMaskProvider = ({ children }) => {

    const { activate, account, library, connector, active, deactivate } = useWeb3React()

    const [isActive, setIsActive] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        connect().then(val=>{
            setIsLoading(false)
        })
    },  [])

    const connect = async () => {
        console.log('Connecting to MetaMask...')
        try {
            await activate(injected)
        } catch(error) {
            console.log('Error on connecting: ', error)
        }
    }

    const disconnect = async () => {
        console.log('Disconnecting wallet from App..')
        try {
            await deactivate()
        } catch(error) {
            console.log('Error on disconnecting: ', error)
        }
    }

    const handleIsActive = useCallback(() => {
        console.log('App is connected with MetaMask ', active)
        setIsActive(active)
    }, [active])

    useEffect(() => {
        handleIsActive()
    }, [handleIsActive])

    const values = useMemo(
        () => ({
            isActive,
            account,
            isLoading,
            connect,
            disconnect
        })
        [isActive, isLoading]
    )

    return <MetaMaskContext.Provider value={values}>{children}</MetaMaskContext.Provider>
}

export default function useMetaMask() {
    const context = React.useContext(MetaMaskContext)

    if(context == undefined) {
        throw new Error('useMetaMask hook must be used with a MetaMaskProvider component')
    }
    
}