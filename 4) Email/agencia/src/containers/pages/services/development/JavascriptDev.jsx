import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Features from "components/services/javascriptdev/Features";
import Header from "components/services/javascriptdev/Header";
import TechStack from "components/services/javascriptdev/TechStack";
import CasesList from "components/cases/CasesList";
import OurClients from "components/services/javascriptdev/OurClients";
import Contact from "components/Contact";

function JavascriptDev(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="mx-auto max-w-1700">
                {/* Content goes here */}
                <Header/>
                <Features/>
                <TechStack/>
                <div className="px-4 py-5 sm:px-8">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                    <h3 className="text-4xl font-bold leading-6 text-gray-900">Our Cases</h3>
                    </div>
                </div>
                </div>
                <CasesList/>
                <OurClients/>
                <div className="grid grid-cols-12">
                    <div className="col-span-6">

                        <Contact/>
                    </div>
                    <div className="col-span-6">

                    <section className="bg-gray-50 mx-4 rounded-lg">
                        <div className="mx-auto max-w-7xl px-8">
                            <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-8">
                                <div className="md:flex-shrink-0">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />
                                </div>
                                <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                                <div className="relative text-lg font-medium text-black md:flex-grow">
                                    <svg
                                    className="absolute top-0 left-0 h-4 w-4 -translate-x-3 -translate-y-2 transform text-gray-600"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                    >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="relative">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                    molestiae. Numquam corrupti in laborum sed rerum et corporis.
                                    </p>
                                </div>
                                <footer className="mt-8">
                                    <div className="flex items-start">
                                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                                        <img
                                        className="h-12 w-12 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-base font-medium text-black">Judith Black</div>
                                        <div className="text-base font-medium text-gray-500">CEO, Tuple</div>
                                    </div>
                                    </div>
                                </footer>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                <br/>
            </div>
            </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default JavascriptDev