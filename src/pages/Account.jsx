import Tweets from "../components/Tweets"
import Profile from '../components/Profile';


const Account = () => {
  return (
    <>
      <div className="flex items-start justify-center space-x-3">
        <Profile />

        <section className="flex flex-col items-center justify-start w-2/3">
          <h3 className='mb-4 text-lg text-white font-bold text-center'>My Tweets</h3>
          <Tweets />
        </section>
      </div>
    </>
  )
}

export default Account