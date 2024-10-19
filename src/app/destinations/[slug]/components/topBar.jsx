import React from 'react'

function TopBar() {
    let response=JSON.parse(localStorage.getItem('destinationImage'))
  return (
    <>
       <div className="section_outer container-two">
        <div className="section_inner">
            <div className="section_wrapper">
                <h1>{response?.name||'sorry no title found'}</h1>
                <img src={response?.image ||'sorry not image found'} alt="section_image" />
            </div>
        </div>
     </div>
    </>
  )
}

export default TopBar