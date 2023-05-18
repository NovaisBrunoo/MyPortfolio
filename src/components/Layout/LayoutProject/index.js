import './style.css';
import '../../../style/utilityClass.css'
import BoxProject from '../../BoxProject';
import { useHooke } from '../../../context/context';


export default function LayoutProject() {
    const { pageProject } = useHooke()

    return (

        <div className='container flex-colum' id={pageProject}>
            <div className='project-title flex-colum'>
                <h1 data-aos='fade-right'>Project</h1>
                <strong data-aos='fade-left'>Things I’ve built so far</strong>
            </div>
            <div className='box-project flex' >
                <BoxProject />
            </div>
        </div>

    )
}