import './App.css';
import Home from './components/Home';
import Categories from './components/categories';
function App() {
  const course = [
    "Data Structures",
    "Design Analysis ",
    "Probability",
    "Theory of Computation"
  ]
  const sem = [
    "winter",
    "fall",
    "summer"
  ]
  const slot = [
    "A1",
    "A2",
    "B1",
    "B2"
  ]
  const teacher = [
    "vibhuti",
    "Manu",
    "Vaishu"
  ]
  let category = [
  {
      cat: "sem",
      name: sem
    },
  {
      cat: "course",
      name: course
    },
 {
      cat: "slot",
      name: slot
    },
  {
      cat: "teacher",
      name: teacher
    }
  ]

const Course=[
  {
  name:"Data Structures",
  slots:["A1","A2"],
  teachers:["vibhuti","Manu","Vaishu"],
  sem:"Fall Sem",
  title:"BCSE202L"
},
{
  name:"Design Analysis ",
  slots:["A1","B1"],
  teachers:["vibhuti","Manu","Vaishu"],
  sem:"Fall Sem",
  title:"BCSE201L"
},
{
  name:"Probability",
  slots:["A1","A2"],
  teachers:["vibhuti","Manu","Vaishu"],
  sem:"Summer Sem",
  title:"BCSE206L"
},
{
  name:"Theory of Computation",
  slots:["A1"],
  teachers:["vibhuti","Manu","Vaishu"],
  sem:"Winter Sem",
  title:"BCSE209L"
}]


  return (
    <div className="App">
      <div className='container'>

        <Home category={category} Course={Course}/>
      </div>
    </div>
  );
}

export default App;
