import { Welcome } from './Welcome'
import { Products } from './Products'
function App() { 
  return (
    <div>
      <h1>Hello World</h1>
      <Welcome userName="Supraja"/>
      <Welcome userName="Kiran"/>
      <Welcome userName="kinnu"/>

      <Products title="mobile" price={20000} isAvailable={true} itemsIncluded={["charger","pouch"]}/>
    </div> 
  )
}
export default App
