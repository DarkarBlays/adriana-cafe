import Head from "next/head";
import Header from "./header";


export default function Layout({ children, title = '', description = '' }) {
    return (
        <div>
            <Head>
                <title>{`Adriana's Cafe - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>
            <Header/>
            {children}
        </div> 
    );
}
