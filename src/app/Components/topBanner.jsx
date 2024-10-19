import React from 'react'

function TopBanner({result}) {
 
  return (
     <>
     <div className="section_outer container-two">
        <div className="section_inner">
            <div className="section_wrapper">
                <h1>{result?.section_top_banner_heading||'sorry no title found'}</h1>
                <img src={result?.section_top_banner_image ||'sorry not image found'} alt="section_image" />
            </div>
        </div>
     </div>
     </>
  )
}

export default TopBanner