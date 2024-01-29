import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/SearchBox'
import StudentsTable from './components/StudentsTable'

function App() {

  return (
    <div>
      <div>
        {/* header */}
        <Header />

        {/* body */ }
        <div className='bg-slate-900 py-24 lg:pt-[120px] lg:pb-28'>
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold text-white">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            {/* search field */}
            <Search/>
          </div>

          {/* student section */ }
          <div className='px-2'>
              <StudentsTable/>
          </div>

          {/* tail / footer */}
          <div className='pt-10 px-3'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
