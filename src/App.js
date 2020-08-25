import React,{useEffect,useState}from 'react';
import './App.css';

  //  cd/all-React-project/remove-core concept-confusion/recap-core-component
   
//------------first ------
  function App(){
    
      return (
        <div className="App">
          <Users></Users>
       <header className="App-header">
      </header>
      </div>  
  );
    
      }
   
  function Users(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
  fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data =>setUsers(data.results))
      }, [])
      const inTotalDetails = users.map(user =>`${user.name.title} ${user.name.first} ${user.name.last} Phone:${user.cell}` )
      const handeleIncrease = setUsers(inTotalDetails + 1); 
  //  const userStyle = {
  //    width:'200px',
  //    height:'100px',
  //    border:'3px solid cyan',
  //    margin:'20px',
  //    display:'inline-block'
    
  //  }
    return (
      <div>
       <h3>Dynamic Users {users}</h3>
       <button onClick={handeleIncrease}></button>

       </div>
     )

    }  
 
  export default App;

 




//---------------------02-----------------------------------------------------------------------
  function App(){
    
    return (
      <div className="App">
        <Users></Users>
     <header className="App-header">
    </header>
    </div>  
);
  
    }

  function Users(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
  fetch('https://randomuser.me/api/?results=20')
  .then(res => res.json())
  .then(data =>setUsers(data.results))
    }, []);

    const userStyle = {
         width:'300px',
         height:'160px',
         border:'3px solid red',
         margin:'20px',
         padding:'30px',
         display:'inline-block',
         backgroundColor:'cyan'
        //C:\all-React-project\remove-core concept-confusion\recap-core-component>
        
       }
    return (
      <div>
        <h3>Dynamic Users {users.length}</h3>
  <ul>
    {
      // console.log(users)
    users.map(user =><li style={userStyle}>{user.name.title} {user.name.first} {user.name.last}<br></br> Phone:{user.cell} <br/>{user.email}<br></br> <br></br><button style={{width:'90px',height:'35px',color:'white',backgroundColor:'tomato',fontSize:'14px',fontWeight:'medium',fontFamily:'sans-serif'}}>click me</button> </li> )
    }
  
  </ul>
  {/* <ol>
    {
      users.map(user => <li>{user.name}</li>)
    }
  
  </ol> */}
    </div>
    )
  };

  export default App;