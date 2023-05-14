import './style.css';
import '../../../style/utilityClass.css'
import BoxProject from '../../BoxProject';
import { useMediaQuery } from 'react-responsive';


export default function LayoutProject() {
    const isTelaPequena = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            {isTelaPequena ?
                <div className='container flex-colum'>
                    <h1 data-aos='fade-right'>Project</h1>
                    <strong data-aos='fade-left'>Things I’ve built so far</strong>
                    <div className='box-project flex' >
                        <BoxProject />
                        <BoxProject />
                    </div>
                </div>
                :
                <div className='container flex-colum'>
                    <h1 data-aos='fade-right'>Project</h1>
                    <strong data-aos='fade-left'>Things I’ve built so far</strong>
                    <div className='box-project flex' >
                        <BoxProject />
                        <BoxProject />
                        <BoxProject />
                        <BoxProject />
                        <BoxProject />
                        <BoxProject />
                        <BoxProject />
                        <BoxProject />
                    </div>
                </div>
            }
        </>
    )
}