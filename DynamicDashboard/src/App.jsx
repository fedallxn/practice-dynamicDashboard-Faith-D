import './App.css'
import DynamicGreeting from './components/DynamicGreeting';
import DisplayList from './components/TaskList'

const App = () => {
  const todaysDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const userName = "Faith";
  let isPremium = true;
  const taskList = [
    {
        taskName: "Take multivitamins",
        isCompleted: true
    },
    {
        taskName: "Having morning coffee",
        isCompleted: true
    },
    {
        taskName: "Drink at least 50 oz of H2O",
        isCompleted: false
    },
    {
        taskName: "Work on LaunchCode for at least 2 hours",
        isCompleted: true
    },
    {
        taskName: "File stupid taxes...",
        isCompleted: false
    }
  ];

  return (
    <>
      <div>
        <DynamicGreeting name={userName}/>
        <p>{todaysDate}</p>
      </div>
      <div>
        <h2>{isPremium ? "Thank you for being a Premium Member!" : "Upgrade to Premium to enjoy exclusive features!"}</h2>
      </div>
      <div>
        <DisplayList tasks={taskList}/>
      </div>
    </>
  )
}

export default App;
