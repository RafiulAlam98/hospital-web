import { CircularProgress, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';

const Departments = () => {
      const [departments, setDepartments] = useState([])
      const [loading,setLoading] = useState(false)
      useEffect(()=>{
            setLoading(true)
            fetch('http://localhost:5000/departments')
            .then(res => res.json())
            .then(data =>{
                  setLoading(true)
                  console.log(data)
                  setDepartments(data)
                  setLoading(false)
            })
      },[])

      if(loading){
            return <CircularProgress></CircularProgress>
       }
      return (
            <Container>
                  <h2>Departments</h2>
                  <Grid container spacing={2}>
                        {
                              departments.map(department =><Department department={department} key={department._id}></Department>)  
                        }
                       
                  </Grid>
                  
            </Container>
      );
};

export default Departments;