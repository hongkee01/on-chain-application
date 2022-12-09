import {Nav} from "../components/Nav"
import {useState} from 'react'


export const App = () => {

    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <Nav />
                <p className="text-4xl font-bold mb-8">APPLICATION PAGE</p>
        </div>
    );
  };