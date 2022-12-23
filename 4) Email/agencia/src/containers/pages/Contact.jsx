import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect, useState  } from "react"
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

function Contact(){
    
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    const [enabled, setEnabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        budget: '',
    });

    const { 
    name,
    email,
    subject,
    message,
    phone,
    budget 
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(enabled){
            setLoading(true);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('subject', subject)
            formData.append('message', message)
            formData.append('budget', budget)

            const fetchData = async()=>{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formData, config)
                if(res.status === 200){
                    setLoading(false);
                    setFormData({
                        name:'',
                        email:'',
                        subject:'',
                        message:'',
                        phone:'',
                        budget:'',
                    })
                    alert('Message has been sent.')
                }else{
                    setLoading(false);
                    alert('Error sending message.')
                }
            }
            fetchData()

        }else{
            alert('You must accept the terms of service and conditions')
        }
    }

    return(
        <Layout>
            <Helmet>
            <title>Murkiva | Contact us</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.murkiva.com/" />
            <meta name="author" content='Murkiva' />
            <meta name="publisher" content='Murkiva' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Murkiva | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.murkiva.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='Murkiva | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
            <Navbar/>
            <div className="pt-28">
            <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={e=>onChange(e)}
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  onChange={e=>onChange(e)}
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Email"
                />
              </div>

                <div>
                <label htmlFor="price" className="sr-only">
                    Phone
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">+</span>
                    </div>
                    <input
                    type="number"
                    name="phone"
                    value={phone}
                    required
                    onChange={e=>onChange(e)}
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="51 999 123 456"
                    aria-describedby="price-currency"
                    />
                </div>
                </div>

              <div>
                <label className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  required
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  required
                  onChange={e=>onChange(e)}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Budget
                </label>
                <select
                    name='budget'
                    onChange={e=>onChange(e)}
                    value={budget}
                    className="mt-1 block w-full pl-3 pr-10 py-4 rounded-md text-base border text-gray-500 border-gray-300 "
                >
                    <option value="" className="text-gray-400">Select a Budget (Optional)</option>
                    <option value="0-5k" className="text-gray-600">$0,5000</option>
                    <option value="5-10k" className="text-gray-600">$5,000 - 10,000</option>
                    <option value="10-25k" className="text-gray-600">$10,000 - 25,000</option>
                </select>
              </div>
              <div className="px-4 py-5 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div className="grid-cols-12 ml-4 mt-2 flex">
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-orange-500' : 'bg-gray-300'}
                                col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
                                    pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                            <p className="col-span-9 ml-4 text-md font-regular leading-6 text-gray-600">
                                By selecting this you accept the <span className="text-blue-500"><Link to='/terms'>Terms of service</Link></span> and <span className="text-blue-500"><Link to='/privacy'>Privacy policy</Link></span>.
                            </p>
                            
                        </div>
                        <div className="ml-4 mt-2 flex-shrink-0">
                            {
                                loading ?
                                <div
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    <CircleLoader loading={loading} size={25} color="#ffffff"/>
                                </div>
                                :
                                <button
                                    type="submit"
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>

                            }
                        </div>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Contact