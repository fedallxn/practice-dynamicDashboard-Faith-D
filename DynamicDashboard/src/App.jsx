import './App.css'
import DynamicGreeting from './components/DynamicGreeting';

const App = () => {
  const todaysDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const userName = "Faith";

  return (
    <>
      <div>
        <DynamicGreeting name={userName}/>
        <p>{todaysDate}</p>
      </div>
    </>
  )
}

export default App
