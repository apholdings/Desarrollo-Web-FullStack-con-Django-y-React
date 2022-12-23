import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

function OptInCTA(){

    
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="mx-auto max-w-3xl">
                {/* Content goes here */}

                <div className=" px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <button
                        type="button"
                        className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Start Today
                    </button>
                    </div>
                </div>
                </div>

                <div className="w-full h-96  my-12">
                    <img src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                    className="h-full w-full object-cover"/>
                </div>
                
                </div>
            </div>

            </div>
            <Footer/>
        </Layout>
    )
}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps,{

})(OptInCTA)