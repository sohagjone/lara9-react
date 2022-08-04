import React from 'react';
import {useState, useEffect, useNavigate} from 'react';
import {useParams} from 'react-router-dom';
import  Header  from './Header';

export default function Edit(props) {
    //const navigate = useNavigate();
    const [data,setData] = useState({});
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [file,setFile] = useState("");
    const [description,setDescription] = useState("");
    const {id} = useParams();

    useEffect(() => {
      
      async function fetchProduct() {
        let result = await fetch('http://127.0.0.1:8000/api/product/'+id)
        result = await result.json()
        setData(result)
        setName(result.name)
        setPrice(result.price)
        setFile(result.file)
        setDescription(result.description)

      }
      fetchProduct()
    }, [])
    async function editProduct(id){
    const formData = new FormData();
      formData.append('file', file)
      formData.append('name', name)
      formData.append('price', price)
      formData.append('description', description)

      let result = await fetch('http://127.0.0.1:8000/api/updateproduct/'+id+'?_method=PUT', {
        method: 'POST',
        body: formData,
    });
    
    alert('data has been Updated')
   
  }
  

    /*const fetchProduct= () =>{
        http.get('/product/'+id).then((res)=>{
            setData({
                file:res.data.file,
                name:res.data.name,
                price:res.data.price,
                description:res.data.description
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/product/'+id,data).then((res)=>{
            navigate('/');
        })
    }*/
    return (
        <div>
            <Header />
            <h2>Edit Product</h2>
      <div className="col-sm-6 offset-sm-2"><br/>
      <input type="text" className='form-control' placeholder='Name'  defaultValue={data.name}
        onChange={(e)=>setName(e.target.value)}
      /><br/>
           <img style={{width:140}} src={"http://127.0.0.1:8000/"+data.file_path} alt="no_image" />
      <input type="file" className='form-control' placeholder='File'  defaultValue={data.file_path}  
        onChange={(e)=>setFile(e.target.files[0])}
      /><br/>
      <input type="text" className='form-control' placeholder='Price'  defaultValue={data.price}
      onChange={(e)=>setPrice(e.target.value)}
      /><br/>
      <input type="text" className='form-control' placeholder='Description'  defaultValue={data.description} 
        onChange={(e)=>setDescription(e.target.value)}
      /><br/>
       <button type="button"  className="btn btn-info mt-2"  onClick={()=>editProduct(data.id)}>Update</button>
      </div>
        </div>

    )
}