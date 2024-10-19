import React from 'react'

function PrivacyPolicy({privacyPage}) {
  
    let result=privacyPage.map((e)=>e?.acf?.privacy_policy_repeater)
  return (
     <>
     <div className="privacy_outer">
        <div className="privacy_inner">
            <div className="privacy_wrapper">

                {result[0].map((ele,index)=>{
                    return <div className="privacy_inner_wrapper" key={index}>
                        <h3>{ele?.privacy_policy_heading}</h3>
                        <p>{ele?.privacy_policy_paragraph}</p>

                    </div>
                })}

            </div>
        </div>
     </div>
     </>
  )
}

export default PrivacyPolicy