import Custom404 from "./404"

const AboutById = ({params} : any) => {
  
  return (
    <div>{isNaN(parseFloat(params.id))? <Custom404 /> : `About ${params.id} page`}</div>
  )
}

export default AboutById