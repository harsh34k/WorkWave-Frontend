import React from 'react'
import { StickyNavbar } from './ui/Navbar'
import HomePageBody from './innerComponents/HomePageBody'
import { SearchBox } from './innerComponents/Search'
import JobCategories from './innerComponents/jobComponent'

function Home() {
    return (<>
        <div className='w-full  bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')`,
        }}>

            {/* <StickyNavbar /> */}
            <HomePageBody />
            <div className='flex justify-center items-center  '>
                <JobCategories />
            </div>

        </div>

    </>
    )
}

export default Home