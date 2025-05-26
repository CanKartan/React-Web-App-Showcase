import './App.css'
import Header from './header'
import { courses } from './Data'
import Course from './Course'



function App() {


  return (
    <>
      <Header />
      <div className='CourseMain'>
        {courses?.map((course) => (

          <Course key={course.id} course={course} />

        ))}
      </div>

    </>
  )
}

export default App
