import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/SearchBox'
import StudentsTable from './components/StudentsTable'
import data from './components/database/data.json'
import React from 'react';

function App() {
  const [filter, setFilter ] = React.useState([]);

  const handleSearch = (search)=>{
    const lowerCases = search.toLowerCase();

    // arr.flatMap(callback(currentValue[, index[, array]])[, thisArg]) or reducer ?
    const filteredStudents = data.classes.reduce((acc, classItems)=>{
      // console.log(acc, classItems)
      const filtered = classItems.students.filter((student)=>
        student.id.toString() === lowerCases ||
        student.name.toLowerCase().includes(lowerCases) ||
        student.grade.toLowerCase() === lowerCases ||
        student.percentage === search
      )
      console.log("filtered Data => ",filtered, "conacting acc value after filtering =>>", acc.concat(filtered))
      return acc.concat(filtered)
    },[]);
    // console.log("final result in reduced",filteredStudents);
    setFilter(filteredStudents);
  }

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
            <Search onSearch={handleSearch}/>
          </div>

          {/* student section */ }
          <div className='px-2'>
            <StudentsTable data={ data }/>
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
