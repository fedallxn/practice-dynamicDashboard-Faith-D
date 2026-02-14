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
  let isPremium = true;

  return (
    <>
      <div>
        <DynamicGreeting name={userName}/>
        <p>{todaysDate}</p>
      </div>
      <div>
        <h2>{isPremium ? "Thank you for being a Premium Member!" : "Upgrade to Premium to enjoy exclusive features!"}</h2>
      </div>
    </>
  )
}

export default App;
