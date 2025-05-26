import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//props is the object data of your component

// const ShowName =(props)=>{
// {props.firstName} {props.lastName}

// const ShowName = (props) => {
//   const {firstName,lastName } = props;

const ShowName = ({ firstName, lastName, age, gender, email, address, about }) => {
  return (
    <div>
      <p>Firstname: {firstName}</p>
      <p> Lastname: {lastName} </p>
      <p>Age:{age}</p>
      <p>Gender: {gender}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>About: {about}</p>
    </div>
  );
};

export default function App() {
  const server = {
    firstName: 'Sekinah',
    lastName: 'Dauda',
    age: 23,
    gender: 'female',
    email: 'sekinah@topibrotech.com',
    address: 'Topibro office ijegun',
    about: 'Friendly and love india movies',
  };
  
  return (
    <div>
      <h1>Topibro Profile</h1>
      {/* TODO: Assesment
       * add other server propertise
       * to complete `ShowName` props
       */}
      <ShowName firstName={server.firstName} lastName={server.lastName} age={server.age} gender={server.gender} email={server.email} address={server.address} about={server.about} />
      
    </div>
  );
}


