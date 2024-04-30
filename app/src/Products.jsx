import './App.css'
import GradientTop from './components/GradientTop'
import Logo from './components/Logo'
import MenuButtonMobile from './components/MenuButtonMobile'
import NavList from './components/NavList'
import NavDialog from './components/NavDialog'
import LoginBbutton from './components/LoginButton'
import MainContent from './components/MainContent'

export default function Products() {

  return (
    <div className="bg-white">
      
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex justify-between items-center p-6 lg:p-8'>

        <div className='flex flex-1'>
          <Logo />
        </div>

        <div className='flex lg:hidden'>
          <MenuButtonMobile />
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          <NavList />
        </div>

        <div className='hidden lg:flex lg:flex-1 justify-end'>
          <LoginBbutton />
        </div>

      </nav>
      <NavDialog />
    </header>

    <section className='relative isolate px-6 pt-14 lg:px-8 mt-48'>
      <GradientTop />
    </section> 
  </div>
  )
}
