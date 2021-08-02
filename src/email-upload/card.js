import React, { useEffect, useState } from "react";
import UPLOAD from "./fileUpload";
import {Button, Form} from "react-bootstrap";
// import axios from 'axios';

export const ECard = () => {

    const [value, setValue] = useState('');
    const [ getEmail, setEmail ] = useState('');
    const [ getStatus, setStatus ] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        const emailValue = value;
        console.log(emailValue)
        fetch('/api?email='+emailValue).then(res=>{
          if(res.ok){
              return res.json();
          }
      }).then(data =>{
            setEmail(data.email)
            setStatus(data.status)
        // console.log(data)
        })
    }

    function handleValue(e) {
      setValue(e.target.value);
    }

    return (
        <>


        <UPLOAD/>

        </>
    )
}
