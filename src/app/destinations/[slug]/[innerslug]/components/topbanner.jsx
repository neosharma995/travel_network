 
function TopBanner({result}) {
  return (
     <>
     <div className="section_outer container-two">
        <div className="section_inner">
            <div className="section_wrapper">
                <h1>{result?.package_title||'sorry no title found'}</h1>
                <img src={result?.package_image ||'sorry not image found'} alt="section_image" />
            </div>
        </div>
     </div>
     </>
  )
}

export default TopBanner