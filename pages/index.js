import Head from "next/head";
import Image from "next/image";

//Components
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Iphone } from "../components/Iphone";

//Images
import cnnLogo from "../public/images/Brands/cnn.png"
import reutersLogo from "../public/images/Brands/reuters.png"
import forbesLogo from "../public/images/Brands/forbes.png"
import vogueLogo from "../public/images/Brands/vogue.png"
import section1Image from "../public/images/section1-image.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Faster</title>
      </Head>
      <Iphone />
      <Header />
      <Hero />
        {/*Section 1*/}
        <section className="grid-x">
            <div className="hide-for-small-only medium-4 "></div>
            <div className="small-12 medium-8 section1__container">
                <div className="section1__container-images">
                    <Image src={cnnLogo}/>
                    <Image src={reutersLogo}/>
                    <Image src={forbesLogo}/>
                    <Image src={vogueLogo}/>
                </div>
                <span><Image src={section1Image}/></span>
                <h2>Check out faster than you can say "Fast Checkout"</h2>
                <p>No more resetting passwords or painstakingly typing in your billing and shipping address. Join people in 35 countries who are checking out with Fast</p>
            </div>
        </section>
        {/*Section2*/}
        <section className="grid-x">
            <div className="hide-for-small-only medium-4 "></div>
            <div className="small-12 medium-8 section2__container">
                Content Section 2
            </div>
        </section>
        </>
  );
}
