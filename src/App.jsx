import React, { useState, useEffect } from 'react';
import New from './components/Greeter';
import Greeter1 from './components/Greeter';
import Greeter2 from './components/Greeter';
import Greeter3 from './components/Greeter';

const App = () => {
    const [username, setUsername] = useState(0);

    const [loaded, setLoaded] = useState(false)

    

    if(loaded === false){
            return 'Website Loading>>>>';
    }

        <button onClick={() => setLoaded(true)}>default</button>;
        
        if (setLoaded === true){

            return(
        <div>
        <New phrase="Hello" name="Juwan" />
        <Greeter1 phrase="Aye" name="John"/>
        <Greeter2 phrase="Yo" name="Jake"/>
        <Greeter3 phrase="Hmm" name="Kendrick"/>
        <input value={username} onChange={e => setUsername(e.target.value)} />
            <p>You are logging in as: {username}</p>
        </div>
        
            )
        // useEffect(() => {
        //     setLoaded= setTimeout(() => {
        //     }, 3000);
        
        
        
        
        
    
            

       

        }
    

    }
    export default App;
