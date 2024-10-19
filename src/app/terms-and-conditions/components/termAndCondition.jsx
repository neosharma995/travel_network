import React from 'react'

function TermAndCondition({termPage}) {
    console.log(termPage)
    let result=termPage.map((e)=>e?.acf?.term_and_condition_repeater)
    
    
  return (
     <>
      <div className="term_outer">
        <div className="term_inner">
            <div className="term_wrapper">
          
                {result[0]?.map((ele,index)=>{
                    return <div className='term_inner_wrapper' key={index}>
                        <p>{ele?.term_and_condition_para}</p>
                    </div>
                })}
            </div>
        </div>
      </div>
     </>
  )
}

export default TermAndCondition