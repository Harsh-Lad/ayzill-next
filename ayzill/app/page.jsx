import Image from 'next/image'
import HomeSlider from './components/HomeSlider/page'
import styles from './page.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import sideImg from '../public/images/third.png'
import thumb1 from '../public/images/bottle.png'
import HomeBtn from './components/HomeBtn/page';
import Footer from './components/Footer/page';
import HomeProds from './components/HomeProds/page';

export default function Home() {


  return (
    <>
      <HomeSlider />
      <div className={styles.secondSection + " "}>
        <div className={styles.textSection + " pt-2 mt-5"}>
          <p className={styles.pureText + " mt-3"} >PURE HYDRATION</p>
          <p className={styles.supportText + " "} data-aos="fade-down">Straight From Nature!</p>
        </div>
      </div>

      <div className={styles.thirdSection + ""}>
        <div className={styles.textSection + " pt-2 mt-5"}>
          <div className="row">
            <div className="col-12">
              <p className={styles.tsPureText + " "} data-aos="fade-down">READ ABOUT</p>
              <p className={styles.tsSupportText + " "} data-aos="fade-down" >Ayzill</p>
            </div>
            <div className="col-6">
              <div className="container d-flex flex-column px-5 pt-5">

                <h4 className={styles.whyChooseUsText + " mt-5 pt-3 mx-3"} data-aos="fade-right" >WHY CHOOSE AYZILL?</h4>

                <p className={styles.helpTextThirdSection + " mt-3 mx-3"} data-aos="fade-right" >
                  Ayzill offers pure, packaged mineral water through a rigorous purification process including reverse osmosis.
                </p>

                <p className={styles.helpTextThirdSection1 + "  mt-3 mx-3"} data-aos="fade-right" >
                  We believe in the power of nature and strive to bring it to you in every sip.
                </p>

                <p className={styles.helpTextThirdSection + " mt-3 mx-3"} data-aos="fade-right" >
                  With Ayzill, you can enjoy the purity of nature in every sip. Ayzill’s commitment is to deliver pure, packaged mineral water.
                </p>
              </div>

            </div>
            <div className="col-6" data-aos="fade-left" >
              <Image src={sideImg} loading="lazy" alt="bottle in hand image" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdSection + ""}>
        <div className={styles.textSection + " pt-2 mt-5"}>
          <div className="row">
            <div className="col-12">
              <p className={styles.tsPureText + " "} data-aos="fade-down">TAKE A LOOK AT</p>
              <p className={styles.tsSupportText + " "} data-aos="fade-down" >Our Products</p>
            </div>
            <div className={styles.productsBack + " col-12"}>
              <div className="container px-5">

                <div className="container mt-4 pt-4">
                  <HomeProds/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
