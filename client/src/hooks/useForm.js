// write your custom hook here to control your checkout form

import {useState} from 'react';

const useForm = (initialValues, setShowSuccessMessage) =>{
    const [values, setValues] = useState("CheckoutData", initialValues);

    const handleChanges = (e) => {
        console.log(e.target.name, e.target.value)
        setValues({
             ...values, 
             [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
        
      };
      return [values, handleSubmit, handleChanges, setShowSuccessMessage]
}
export default useForm;