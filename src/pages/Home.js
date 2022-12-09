import {Nav} from "../components/Nav"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <Nav />
            <div className='flex flex-col justify-center items-left text-tprimary'>
            <p className=' text-5xl font-bold pb-3'>Crypto payments</p>
            <p className=' text-5xl font-bold pb-3'> every second</p>
            <p className=" text-lg mb-6">SuperFluid provides an effective and
            powerful way to create and manage your subscriptions</p>
            <Link to="app">
                <button className="rounded-full bg-secondary font-bold px-5 py-1 text-primary">Launch App</button>
            </Link>
            </div>
        </div>
    );
  };