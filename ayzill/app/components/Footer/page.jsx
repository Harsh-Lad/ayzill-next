import styles from './page.module.css'
import Image from 'next/image'
import footerImg from '../../../public/images/footer.png'

export default function Footer() {
    return(
        <>
        <Image src={footerImg} alt="footer image" className="img-fluid w-100 mt-5 pt-5" />
        </>
    )
}