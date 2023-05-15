import { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LayoutAbout from '../../components/Layout/LayoutAbout';
import LayoutHome from '../../components/Layout/LayoutHome';
import LayoutProject from '../../components/Layout/LayoutProject';
import LayoutTech from '../../components/Layout/LayoutTech';
import '../../style/utilityClass.css';
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div className='container'>
            <Header />
            <LayoutHome />
            <LayoutAbout />
            <LayoutTech />
            <LayoutProject />
            <Footer />
        </div>
    )
}