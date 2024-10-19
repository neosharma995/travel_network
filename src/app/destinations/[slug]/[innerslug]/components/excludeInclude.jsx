'use client'
import BookingForm from '@/app/Components/bookingForm';
 
import { FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
function ExcludeInclude({ response,setIsOpen }) {
    return (
        <>
       
            <div className="container package_inc_exc_wrapper">
                <h2 className='section_heading'>Tour Inclusions & Exclude</h2>

                <div className="include_wrapper">
                    <h3 className='package_inc_exc'>TOUR INCLUSIONS</h3>
                    {response?.package_include===false?'no result found':response?.package_include?.map((e, index) => {
                        return <div className="inc" key={index}>
                            <ul>
                               <FaCheckCircle/> <li>{e?.tour_include}</li>
                            </ul>

                        </div>
                    })}
                </div>
                <div className="exclude_wrapper">
                    <h3 className='package_inc_exc'>TOUR EXCLUSIONS</h3>
                    {response?.package_exclude===false?'no result found':response?.package_exclude?.map((e, index) => {
                        return <div className="inc" key={index}>
                            <ul>
                                <FaTimesCircle/><li>{e?.tour_exclude}</li>
                            </ul>
                        </div>
                    })}
                </div>
                <button id="bookButton" style={{marginTop:'12px'}} onClick={()=>setIsOpen(true)}>Book Now</button>
            </div>

            
        </>
    )
}

export default ExcludeInclude