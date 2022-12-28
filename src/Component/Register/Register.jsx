import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi';
import axios from 'axios';

export default function Register() {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        phone: 0,
        email: '',
        password: '',
    })
    const [registerflag, setRegisterflag] = useState(false);
    const [err, setErr] = useState([]);
    const [messag, setMessag] = useState('');
    let baseURL = 'https://sticky-note-fe.vercel.app/';
    let navigate = useNavigate();


    async function signUp(e){
        e.preventDefault();
        setRegisterflag(true);
        const schema = Joi.object({
            first_name:Joi.string().alphanum().min(3).max(10).required(),
            last_name:Joi.string().alphanum().min(3).max(10).required(),
            phone:Joi.string().length(11).pattern(/^[0-9]+$/),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password:Joi.string().pattern(/^[A-Z]+[a-z]+[0-9]+/i).required(),
        })
        let res=schema.validate(user,{abortEarly:false});
        // console.log(res)
        if( res.error ){
            setErr(res.error.details);
            setRegisterflag(false);
        }
        else{
           let {data}= await axios.post(baseURL + 'signup',user);
        //    console.log(data)

           if(data.errors){
             setMessag(data.message);
           }
           else{
            navigate('/login');
           
           }
           setRegisterflag(false);
        }
       
    }
    function getError(key){
        for(let element of err)
         {
             if(element.context.key===key)
             {
                 return element.message;
             }
         }
         return '';
     }
    function getUser(e) {
        setErr([]);
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log({ ...user, [e.target.name]: e.target.value })
    }
    return <>

<div className="container homemargin form">
    <div className='row bg-login-register'>
        <div className="col-md-6 banner ">
          
            
        </div>
        <div className="col-md-6">
        
        <div className="text-center py-3 px-2 ">
                        <h4 className='text-white'>Create My Account!</h4>
                        <form className='my-4'  onSubmit={signUp}>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <input onChange={getUser}  name='first_name' id='first_name' type="text" placeholder='First Name' className='form-control' />
                                    { getError("first_name").length===0?'':<div className='alert alert-danger '>{getError("first_name")}</div>}
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input onChange={getUser} name='last_name' id='last_name' type="text" placeholder='Last Name' className='form-control' />
                                    { getError("last_name").length===0?'':<div className='alert alert-danger '>{getError("last_name")}</div>}
                                </div>
                            </div>
                            <div className="mb-4">
                                <input onChange={getUser}  name='email' id='email' type="text" placeholder='Email Address' className='form-control' />
                                { getError("email").length===0?'':<div className='alert alert-danger '>{getError("email")}</div>}
                            </div>
                            <div className="mb-4">
                                <input onChange={getUser} name='phone' id='Phone' type="number" placeholder='Phone' className='form-control ' />
                                { getError("phone").length===0?'':<div className='alert alert-danger '>{getError("phone")}</div>}
                            </div>
                            <div className="mb-4">
                                <input onChange={getUser} name='password' id='password' type="password" placeholder='Password' className='form-control' />
                                { getError("password").length===0?'':<div className='alert alert-danger '>{getError("password")}</div>}
                            </div>
                            
                            <button className={'btn btn-primary text-white p-2 w-100 btn-login-register'}>{registerflag?<i className='fa-solid fa-spin fa-spinner'></i>:"Create Account"}</button>
                            {
                            messag.length===0?'':<div className='alert alert-danger'>{messag}</div>
                            }
                        </form>
                       
                        <hr />
                        <h6 className='text-white'>Already a member? <Link to='/login'>Log In<i className="fas fa-chevron-right small"></i></Link></h6>
        </div>

        </div>
    </div>
  </div>

    </>
}
