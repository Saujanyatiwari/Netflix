import netflix from '../assets/Netflix.svg';
import {Search , Bell , ChevronDown} from 'lucide-react';
import profile from '../assets/Profile.jpg'


function Navbar()
{
    return(
        <main className="flex flex-row justify-between mx-14">

            <section className="flex flex-row justify-start gap-4 items-center">
                <img className='h-22 w-22 mr-6'
                src={netflix} alt='icon'></img>

                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>Home</div>
                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>Shows</div>
                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>Movies</div>
                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>Games</div>
                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>New & Popular</div>
                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>My List</div>
                <div className='text-xs font-semibold  hover:text-[#d4d4d4] cursor-pointer font-semibold'>Browse by Languages</div>
            </section>


            <section className="flex flex-row justify-between gap-4 items-center">
                <Search className='w-5 h-5 hover:cursor-pointer'/>
                <Bell className='w-5 h-5 hover:cursor-pointer'/>
                <div className=' flex flex-row gap-1 hover:cursor-pointer'>
                    <img className='h-6 w-6' 
                    src={profile} alt='profile' />
                    <ChevronDown className='h-4 w-4'/>
                </div>
            </section>
        </main>
    )
}
export default Navbar;