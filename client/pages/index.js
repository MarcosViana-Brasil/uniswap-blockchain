import Header from '../src/components/Header'
import Main from '../src/components/Main'
import TransactionHistory from '../src/components/TransactionHistory'

const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between`,
}

export default function Home() {
    return (
        <div className={style.wrapper}>
            <Header />
            <Main />
            <TransactionHistory />
        </div>
    )
}
