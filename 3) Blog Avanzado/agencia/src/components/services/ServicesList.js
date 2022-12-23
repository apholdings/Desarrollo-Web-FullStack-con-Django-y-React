import ServiceCard from "./ServiceCard"


function ServicesList({posts,section_title}){
    return(
        <>
            <div className="relative bg-gray-50 px-4  pb-20 sm:px-6 lg:px-8  lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-gray-50 sm:h-2/3" />
        </div>
        <div className="relative mx-auto lg:mx-12 max-w-full">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{section_title}</h2>
            
          </div>
          <div className="mx-auto mt-14  grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post,index) => (
              <ServiceCard data={post} index={index}/>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}
export default ServicesList