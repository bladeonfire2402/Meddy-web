
import { OtherNavigationList } from '../../../public/meddy-assets/meddy-assets'
import Banner from '../Banner/Banner'
import TitleText from '../Text/TitleText'
import './Header.css'

const Header = () => {
  return (
    <div className='header-wrapper flex flex-col items-center justify-center pt-4 pb-10 bg-blue-50 '>
     <div className='wrapper'>
      <Banner/>
      <div className='Other-navigation flex justify-between mt-4'>
        {OtherNavigationList.map((item,index)=>(
          <div className='flex items-center gap-4 item rounded-lg py-4 cursor-pointer ' key={index}>
            <img src={item.img} className='w-14'/>
            <TitleText text={item.title}/>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Header
