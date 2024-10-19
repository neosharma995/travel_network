



 
import InnerslugPage from './components/InnerslugPage'


function page({ params }) {
  let { innerslug } = params
  return (
    <>

      <InnerslugPage slug={innerslug} />
    </>
  )
}

export default page

 


  


