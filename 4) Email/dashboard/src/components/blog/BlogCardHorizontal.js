import { Link } from "react-router-dom"
import {useEffect}from'react'

import moment from 'moment'
function BlogCardHorizontal({data,index}){

    
    return(
        <li 
        >
          <Link to={`/blog/${data.slug}`}
              onMouseEnter={()=>{
                  // const img = document.getElementById(index)
                  // img.classList.add('object-fill')
                  const title = document.getElementById(`title`+data.id)
                  title.classList.add('text-orange-500')
              }} 
              onMouseLeave={()=>{
                  // const img = document.getElementById(index)
                  // img.classList.remove('object-fill')
                  const title = document.getElementById(`title`+data.id)
                  title.classList.remove('text-orange-500')
              }}
          className="block relative hover:shadow-card rounded-md transition duration-300 ease-in-out">
            <div className="flex items-center   my-10 ">
              <div className="lg:flex min-w-0 lg:flex-1 items-center">
                <figure className="lg:flex-shrink-0">
                  {
                    data.thumbnail?
                    <img id={index} className="h-64 lg:w-96 w-full object-cover rounded" src={data.thumbnail} alt="" />
                    :
                    <div className=" h-64 lg:w-96 w-full object-cover rounded bg-gray-100"></div>
                  }
                </figure>
                <div className="min-w-0 flex-1 px-8 p-4 ">
                  {
                    data.title ?
                    <p id={`title`+data.id} className=" lg:mt-0 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out">{data.title.length > 80 ? data.title.slice(0,79):data.title}</p>
                    :
                    <p className=" lg:mt-0 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out w-72 py-2 bg-gray-100"></p>
                  }
                  
                  <div className="lg:absolute lg:top-28">
                      {
                        data.status === 'published'?
                        <>
                        <span className=" rounded-full p-1 px-2 bg-green-200 text-green-700  mx-1 font-medium text-sm ">Published</span> <span className="text-gray-300">&middot;</span> 
                        </>
                        :
                        <>
                        <span className=" rounded-full p-1 px-2 bg-rose-200 text-rose-700  mx-1 font-mediu text-sm ">Draft</span> <span className="text-gray-300">&middot;</span> 
                        </>

                      }
                      {
                        data.category &&
                        <>
                        <span className=" hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm "><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                        </>
                      }
                      <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(data.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                      <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{data.time_read} min read</span> 
                      {
                        data.description ?
                        <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{data.description.length > 150 ? data.description.slice(0,149):data.description}</p>
                        :
                        <>
                        <p className=" w-full py-2 bg-gray-100 mt-4 text-lg font-regular text-gray-800 leading-8"></p>
                        <p className=" w-full py-2 bg-gray-100 mt-4 text-lg font-regular text-gray-800 leading-8"></p>
                        <p className=" w-full py-2 bg-gray-100 mt-4 text-lg font-regular text-gray-800 leading-8"></p>
                        </>
                      }
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
    )
}
export default BlogCardHorizontal