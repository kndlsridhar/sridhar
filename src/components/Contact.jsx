import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'https://sridharportfolio-dd1e5-default-rtdb.firebaseio.com';


function Contact() {

    
   
    const [data,setData] = useState({
        name:'',
        email:'',
        mobile:'',
        message:''
    });

    const {name,email,mobile,message}=data;

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const submiHandler = e => {
        e.preventDefault();
        //console.log(data);
        axios.post(`${API_URL}/contact.json`, data).then(
            () => toast("Wow so easy!")

        )
    }



 const [contacts,setContacts] = useState({});

  useEffect(() => {
    //const url = `${API_URL}/contact.json`;

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/contact.json`);
        const contacts = await response.json();
        setContacts(contacts);
        console.log(contacts);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);




// const getContact= () =>{
//     useEffect(async ()=>{
//         const res = await axios.get('https://sridharportfolio-dd1e5-default-rtdb.firebaseio.com/contact.json').then(()=>{
//             res = setContact(res)
//         })
//     },[])
// }

  return (
    <section>
        <div className='container-fluid px-0'>
            <div className='row'>
                <div className='col-lg-4 col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Sr UI Developer + UX</h5>
                            <p>Hi there! I'm Sridhar, a passionate ui developer dedicated to crafting seamless and visually stunning web experiences.</p>

                            <div>
                                <ul>
                                    

                                <ToastContainer />

<h1>Fetched Data</h1>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(item => (
      <li key={item.id}>
        {JSON.stringify(item)}
      </li>
    ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      
                                        
                                </ul>
    </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-8 col-12'>
                    <div className='card'>
                        <div className='card-body'>
                        <h2>Contact</h2>
                        
                        
                        <div className='row'>
                            <div className='col-lg-12 col-12'>
                                      <form onSubmit={submiHandler}>
                                          <div className="form-floating mb-3">
                                              <input type="text" className="form-control" name="name" id="name" value={name} placeholder="Name" onChange={handleChange} />
                                              <label htmlFor='name'>Name</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                              <input type="email" className="form-control" name="email" id="email" value={email} placeholder="name@example.com" onChange={handleChange} />
                                              <label htmlFor="email">Email</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                              <input type="text" className="form-control" name="mobile" id="mobile" value={mobile} placeholder="Mobile" onChange={handleChange} />
                                              <label htmlFor="mobile">Mobile</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                              <textarea className="form-control" placeholder="Leave a message here" name="message" value={message} id="message" onChange={handleChange}></textarea>
                                              <label htmlFor="message">Message</label>
                                          </div>
                                          <button className='btn btn-primary' type='submit'>Submit</button>
                                      </form>
                            </div>
                        </div>
                        <p>Fill out the form below or shoot me an email at </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact