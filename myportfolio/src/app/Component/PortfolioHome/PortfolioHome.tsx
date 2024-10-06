import PortfolioArticle from '../PortfolioArticle/PortfolioArticle'
import PortfolioAside from '../PortfolioAside/PortfolioAside'
import PortfolioFooter from '../PortfolioFooter/PortfolioFooter'
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader'
import PortfolioSection from '../PortfolioSection/PortfolioSection'

const PortfolioHome = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-4'>
        <div className="w-[95vw]">
          <PortfolioHeader />
        </div>
        <div className="w-[70vw]">
          <PortfolioSection />
        </div>
        <div className=' w-full bg-gray-200 flex justify-center'>
          <PortfolioArticle />
        </div>
        <div className="w-full flex justify-center">
          <PortfolioAside />
        </div>
        <div className='w-full flex justify-center'>
          <PortfolioFooter />
        </div>
    </div>
  )
}

export default PortfolioHome