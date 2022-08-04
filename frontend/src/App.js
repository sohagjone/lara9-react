
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchComponent from './SearchProduct';


function App() {
  return (
    <div className="App">
   
    
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/"  element={
                            <Protected Cmp={ProductList} >
                              <ProductList />
                            </Protected> 
                                  } />

      <Route path="/add"  element={
                            <Protected Cmp={AddProduct} >
                              <AddProduct />
                            </Protected> 
                                  } />
      <Route path="/update/:id"  element={
                            <Protected Cmp={UpdateProduct} >
                              <UpdateProduct />
                            </Protected> 
                                  } />
      <Route path="/search"  element={
                            <Protected Cmp={SearchComponent} >
                              <SearchComponent />
                            </Protected> 
                                  } />
    </Routes>
    </div>
  );
}

export default App;
