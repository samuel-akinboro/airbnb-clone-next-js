import Image from 'next/image'
import {GlobeAltIcon, UserCircleIcon, MenuIcon, SearchIcon} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="container mx-auto px-5 py-4 sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center my-auto h-10">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

    {/* middle */}
      <div className="flex justify-between rounded-full border-[1px] p-2 cursor-pointer md:shadow-md md:w-[295px]">
        <input type="text" placeholder="Start your search here" className="px-2 flex-1 outline-none placeholder-black caret-red-500"/>
        <SearchIcon className="hidden h-8 bg-red-500 text-white rounded-full p-2 md:inline-flex" />
      </div>

    {/* right */}
      <div className="flex justify-center items-center space-x-4 text-gray-600 lg:pl-[50px]">
        <p className="font-base text-black">Become a host</p>
        <GlobeAltIcon className="h-6 text-black font-light cursor-pointer" />
        <div className="flex items-center border-[1px] rounded-full p-[2px] pl-[8px] border-gray-200 space-x-1">
          <MenuIcon className="h-5 mr-[5px] text-black cursor-pointer" />
          <UserCircleIcon className="h-9 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header
