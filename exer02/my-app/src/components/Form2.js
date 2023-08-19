import './Form2.css'
function Form2(){
    return(
        <header>
        <div className="main">
    
                <h1 className="sing">Sign input</h1>  
           
                     
            <form className ="form">
                <label >Email address</label>
                <input type="text" placeholder="Enter email"></input>
                <label>Password</label>
                <input type="text" placeholder="Enter password"></input>
                <input type="checkbox"></input>Remember me
                <button className="submit">Submit</button>
                <p>Forgot password?</p>
            </form>
        </div>
    
        </header>
    )
}

export default Form2