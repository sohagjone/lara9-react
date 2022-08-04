import React, {useState} from 'react';
import  Header  from './Header';


const AddProduct = () => {
 
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  //const navigate = useNavigate()

  async function AddProduct()
  {
      
      const formData = new FormData();
      formData.append('file', file)
      formData.append('name', name)
      formData.append('price', price)
      formData.append('description', description)

      let result = await fetch('http://127.0.0.1:8000/api/addProduct', {
        method: 'POST',
        body: formData,
    });
    alert('data has been saved')

  }
  return (
  <div>
    <Header />
      <div className="col-sm-6 offset-sm-2"><br/>
      <input type="text" className='form-control' placeholder='Name' onChange={(e)=>setName(e.target.value)} /><br/>
      <input type="file" className='form-control' placeholder='File' onChange={(e)=>setFile(e.target.files[0])} /><br/>
      <input type="text" className='form-control' placeholder='Price' onChange={(e)=>setPrice(e.target.value)} /><br/>
      <input type="text" className='form-control' placeholder='Description' onChange={(e)=>setDescription(e.target.value)} /><br/>
      <button className="btn btn-primary" onClick={AddProduct}>Add Product</button>
    </div>
  </div>
    
  );
}

export default AddProduct;
