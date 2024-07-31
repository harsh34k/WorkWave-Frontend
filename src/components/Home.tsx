import HomePageBody from './innerComponents/HomePageBody'
import JobCategories from './innerComponents/jobComponent'

function Home() {
    return (<>
        <div className='w-full  bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')`,
        }}>


            <HomePageBody />
            <div className='flex justify-center items-center  '>
                <JobCategories />
            </div>

        </div>

    </>
    )
}

export default Home