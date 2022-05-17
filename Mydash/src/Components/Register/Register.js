 import styles from './Register.module.css';
import {useState} from 'react';
import { useNavigate } from 'react-router';
import { alphaNumeric, email, password, phonenumber } from '../../Helpers';
import axios from 'axios';
import { passwordNotMatch } from '../../Constants';

function Register(){
const [register, setregister] = useState();


const navigate=useNavigate();

const[globalIndex,setGlobalIndex]=useState(-1);
const [agree, setAgree] = useState(false);

const [getForm,setForm]=useState({
    youremailaddress: '',
    yourpassword: '',
    confirmyourpassword: '',
    yourfullname: '',
    yourphonenumber:'',
})


const [getValidation, setValidation] = useState({
    youremailaddress: '',
    yourpassword: '',
    confirmyourpassword: '',
    yourfullname: '',
    yourphonenumber:'',
    
  });
  const [getValidationStyle, setValidationStyle] = useState({
    youremailaddress: {},
    yourpassword: {},
    confirmyourpassword: {},
    yourfullname: {},
    yourphonenumber:{}

  });
  const onChangeHandler = (event) => {
    setForm({ ...getForm, [event.target.name]: event.target.value })
  }
  const validationCheck=()=>{
    setValidation({
      ...getValidation,
      youremailaddress: email(getForm.youremailaddress),
      yourpassword: password(getForm.yourpassword),
      confirmyourpassword: password(getForm.confirmyourpassword),
      yourfullname: alphaNumeric(getForm.yourfullname),
      yourphonenumber:phonenumber(getForm.yourphonenumber)
    });
    setValidationStyle({
      ...getValidationStyle,
      youremailaddress:email(getForm.youremailaddress)!=false? {border:"1px solid red"} :{},
      yourpassword:password(getForm.yourpassword)!=false? {border:"1px solid red"} :{},
      confirmyourpassword:password(getForm.confirmyourpassword)!=false? {border:"1px solid red"} :{},
      yourfullname:alphaNumeric(getForm.yourfullname)!=false? {border:"1px solid red"} :{},
      yourphonenumber:phonenumber(getForm.yourphonenumber)!=false? {border:"1px solid red"} :{}
    })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(email(getForm.youremailaddress) || password(getForm.yourpassword) || password(getForm.confirmyourpassword) || alphaNumeric(getForm.yourfullname) ||phonenumber(getForm.yourphonenumber) ){
      validationCheck();
    }
    else{
      if(getForm.yourpassword === getForm.confirmyourpassword){ validationCheck();
        navigate('/bar')}
        else{
          setValidation({
            ...getValidation,
           
            yourpassword: "password not match",
            confirmyourpassword: "password not match"
           
           
          });
        }
    }


  }
  const checkboxHandler = () => {
    setAgree(!agree);
  }




    return(<div>
<div className="container-fluid">
<div className="row">
    <div className={`col-md-6 col-lg-6 col-sm-6 ${styles.image}`}>

<div className={styles.text2}><b className={styles.text1}>Choose a date range</b><br/><p className={styles.para}>Lorem ipsum dolor sit amet,consectetur<br/>adipiscing elit.Mauris imperdiet bibendum.</p></div>
    </div>
    <div className='col-md-6 col-lg-6 col-sm-6'>
    <h1 className={styles.sign}>Create an account</h1>
          <br/>
    <form className={styles.form}>
          <br/>
          <div className="form-group">
            <label for="exampleInputEmail1">Your email address</label>
            <input type="email" style={getValidationStyle.youremailaddress} className="form-control" value={getForm.youremailaddress} onChange={onChangeHandler} id="youremailaddress" name="youremailaddress"/>
            {getValidation.youremailaddress && <div className="alert alert-danger">
              {getValidation.youremailaddress}
            </div>}
          </div>
          <div className="form-group">
              <label for="exampleInputEmail1">Your password</label>
              <input type="password" style={getValidationStyle.yourpassword} className="form-control" value={getForm.yourpassword} onChange={onChangeHandler} id="yourpassword" name="yourpassword"/>
              {getValidation.yourpassword && <div className="alert alert-danger">
              {getValidation.yourpassword}
            </div>}
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Confirm your password</label>
              <input type="password" style={getValidationStyle.confirmyourpassword} className="form-control" name='confirmyourpassword' value={getForm.confirmyourpassword} onChange={onChangeHandler} id="confirmyourpassword"/>
              {getValidation.confirmyourpassword && <div className="alert alert-danger">
              {getValidation.confirmyourpassword}
              </div>}
            </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your full name</label>
            <input type="text" style={getValidationStyle.yourfullname} className="form-control" name='yourfullname' value={getForm.yourfullname} onChange={onChangeHandler} id="yourfullname"/>
            {getValidation.yourfullname && <div className="alert alert-danger">
              {getValidation.yourfullname}
            </div>}
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your phone number</label>
            <input type="numeric" style={getValidationStyle.yourphonenumber} className="form-control" name='yourphonenumber' value={getForm.yourphonenumber} onChange={onChangeHandler} id="yourphonenumber"/>
            {getValidation.yourphonenumber && <div className="alert alert-danger">
              {getValidation.yourphonenumber}
            </div>}
          </div>
          <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onClick={checkboxHandler} value="" id="agree" required/>
      <label class="form-check-label" for="invalidCheck2">
        I read and agree Terms and Conditions
      </label>
    </div>
  </div>
          
          <div className="text-center">
              <button disabled={!agree}  type="submit" onClick={onSubmitHandler} className={`btn btn-primary ${styles.button}`}>Create account</button>
            </div>
          
        </form>
    </div>
</div>
</div>
</div>)}
export default Register;