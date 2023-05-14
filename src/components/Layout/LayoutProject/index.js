import './style.css';
import '../../../style/utilityClass.css'
import BoxProject from '../../BoxProject';

export default function LayoutProject() {
    return (
        <div className='container'>
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
    )
}