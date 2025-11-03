import ProductCard from "./ProductCard"
import Welcome from "./Welcome"

function App() {

  return (
    <>
    
   <Welcome userName={"welcome user"} isPremeum={true}/>
   <Welcome userName={"welcome guest"} isPremeum={false}/>
   <ProductCard  name="Rice" price={12} description="  waa cunto wanaagsan" />
    
    </>
  )
}

export default App
