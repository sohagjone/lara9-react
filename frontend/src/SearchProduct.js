import {useState} from 'react';
import  Header  from './Header';
import Table from 'react-bootstrap/Table';


const SearchComponent = () => {
  const[data, setData] = useState([]);
  
  async function search(key)
  {
   
    if(key.length>1){
      let result = await fetch('http://127.0.0.1:8000/api/search/'+key)
      result = await result.json();
      setData(result)
    }
   
  
  }

  return (
  <div>
    <Header />
      <div className="col-sm-6 offset-sm-2"><br/>
     <h1>Search Product</h1><br/>
     <input type="text" className="form-control" placeholder = "Search Product" onChange={(e) => search(e.target.value)}/><br/>
     {
      data.length>0?
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {

        data.map((result) =>
        <tr>
          <td>{result.id}</td>
          <td>{result.name}</td>
          <td>
          <img style={{width:140}} src={"http://127.0.0.1:8000/"+result.file_path} alt="no_image"/>
          </td>
          <td>{result.price}</td>
          <td>{result.description}</td>
          
        </tr>
        )
            
    }
       
      </tbody>
    </Table>
    :null

     }
    </div>
  </div>
    
  );
}

export default SearchComponent;
