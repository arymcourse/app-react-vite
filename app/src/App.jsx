import './App.css'
import GradientTop from './components/GradientTop'
import LoginBbutton from './components/LoginButton'
import Logo from './components/Logo'
import MainContent from './components/MainContent'
import MenuButtonMobile from './components/MenuButtonMobile'
import NavDialog from './components/NavDialog'
import NavList from './components/NavList'
import WorkWithUs from './components/WorkWithUs'
import ProductSection from './components/ProductSection'
import PricingSection from './components/PricingSection'
import BoostSection from './components/BoostSection'

export default function App() {

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
        <MainContent />
        <WorkWithUs />
        <ProductSection />
        <PricingSection />
        <BoostSection />
      </section> 
    </div>
  )
}
