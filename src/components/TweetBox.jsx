import { MdInsertPhoto, MdOutlinePlayCircleFilled } from 'react-icons/md'
import { AiFillSchedule } from 'react-icons/ai'
import { GiAbstract009 } from 'react-icons/gi'



const TweetBox = () => {
  return (
    <section className='flex items-start py-3 px-5 rounded-md max-w-[600px] mx-auto bg-[#3b4e5f] mb-2.5'>
      <span className="inline-flex mr-3 w-10 h-10 rounded-full">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU" 
          alt="profile" 
          className='inline-block w-full h-full rounded-full object-cover'
        />
      </span>
      
      
      <div className="flex flex-col items-end justify-start w-full">
        <span className="block flex-auto w-full">
          <input 
            type="text" 
            className="w-full py-2 px-3 bg-[#22303c] rounded-md outline-none border-none placeholder:text-[#d5d8dc] text-[#d5d8dc]" 
            placeholder="What's happening?" 
          />
        </span>

        <div className="flex items-center justify-end space-x-2 flex-wrap">
          <button className={`sm:w-[120px] w-[80px] border border-solid sm:border-[#c3cad3] border-green-400 rounded-3xl py-2 px-4 
            flex items-center justify-center sm:space-x-2 space-x-0 mt-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300`
          }>
            <MdInsertPhoto className='fill-green-400 w-5 h-5 sm:inline-block hidden' />
            <h3 className="text-[#c3cad3] sm:text-sm text-xs">Photo</h3>
          </button>

          <button className={`sm:w-[120px] w-[80px] border border-solid sm:border-[#c3cad3] border-blue-400 rounded-3xl py-2 px-4 
            flex items-center justify-center sm:space-x-2 space-x-0 mt-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300:`
          }>
            <MdOutlinePlayCircleFilled className='fill-blue-400 w-5 h-5 sm:inline-block hidden' />
            <h3 className="text-[#c3cad3] sm:text-sm text-xs">Video</h3>
          </button>

          <button className={`sm:w-[120px] w-[80px] border border-solid sm:border-[#c3cad3] border-red-400 rounded-3xl py-2 px-4 
            flex items-center justify-center sm:space-x-2 space-x-0 mt-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300:`
          }>
            <GiAbstract009 className='fill-red-400 w-5 h-5 sm:inline-block hidden' />
            <h3 className="text-[#c3cad3] sm:text-sm text-xs">Thread</h3>
          </button>

          <button className={`sm:w-[120px] w-[80px] border border-solid sm:border-[#c3cad3] border-yellow-400 rounded-3xl py-2 px-4 
            flex items-center justify-center sm:space-x-2 space-x-0 mt-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300:`
          }>
            <AiFillSchedule className='fill-yellow-400 w-5 h-5 sm:inline-block hidden' />
            <h3 className="text-[#c3cad3] sm:text-sm text-xs">Schedule</h3>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TweetBox