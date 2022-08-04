import React, {useState, useEffect} from 'react';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


 function ProductList(){
    const [data,setData] = useState([]);
     /*useEffect( async ()=>{
        async function fetchData(){
            let result = await fetch('http://127.0.0.1:8000/api/list');
            result =  await result.json();
            setData(result)
            console.warn('data', data)
        }
    },[])*/
    useEffect(() => {
      
        async function fetchMyAPI() {
          getData()
          let response = await fetch('http://127.0.0.1:8000/api/list')
          response = await response.json()
          setData(response)
          
        }
    
        fetchMyAPI()
      }, [])
      async function deleteOperation(id){

       let result = await fetch('http://127.0.0.1:8000/api/delete/'+id, {
         method: 'DELETE'
       });
       result = await result.json();
       console.warn(result);
       getData()
      }
      async function getData(){
        let response = await fetch('http://127.0.0.1:8000/api/list')
        response = await response.json()
        setData(response)
      }
    return (
    <div>
      <Header />
      <div className="col-sm-8 offset-sm-2">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Description</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((item) =>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
          <img style={{width:140}} src={"http://127.0.0.1:8000/"+item.file_path} alt="no_image"/>
          </td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td><Link to={"update/"+item.id} className="btn btn-primary">Edit</Link>&nbsp;
          <button onClick={() => {deleteOperation(item.id)}}  className="btn btn-danger">Delete</button>
          </td>
        </tr>
        )
            
    }
       
      </tbody>
    </Table>
    </div>
    </div>
   
  );
}
export default ProductList;
