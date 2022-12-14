import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import 'antd/dist/antd.css';
import {
    AptosWalletAdapter,
    FewchaWalletAdapter,
    HippoExtensionWalletAdapter,
    MartianWalletAdapter,
    PontemWalletAdapter,
    SpikaWalletAdapter,
    WalletProvider
} from '@manahippo/aptos-wallet-adapter';
import {useMemo} from "react";
import {message} from 'antd';

function MyApp({Component, pageProps}: AppProps) {
    const wallets = useMemo(
        () => [
            // new HippoWalletAdapter(),
            new HippoExtensionWalletAdapter(),
            new MartianWalletAdapter(),
            new AptosWalletAdapter(),
            new FewchaWalletAdapter(),
            new PontemWalletAdapter(),
            new SpikaWalletAdapter(),
            // new NightlyWalletAdapter()
        ],
        []
    );
    return <WalletProvider
        wallets={wallets}
        autoConnect={true}
        onError={(error: Error) => {
            console.log('wallet errors: ', error);
            message.error(error.message);
        }}>
        <Component {...pageProps} />
    </WalletProvider>
}

export default MyApp
