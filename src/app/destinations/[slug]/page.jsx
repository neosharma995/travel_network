 

import DestinationsSlugPage from './components/destinationsSlugPage'

function page({params}) {
    let {slug}=params


  return (
    <>
    <DestinationsSlugPage slug={slug}/>
    </>
  )
}

export default page


 
 