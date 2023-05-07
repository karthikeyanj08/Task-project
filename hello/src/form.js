import React from "react";
import "../src/styles/form.css";

const Form= ()=>{
    return(
        <div className="frm">
            <form> 
          <label h="Username"></label>
          <input name="Username" placeholder="Enter full name..." type="text" className="input1"/>
          
          <input name="password" placeholder="Enter your password..." type="password" className="input2"/>
          
          <button type="submit"> Submit</button>
        </form>
        </div>
    )
}
export default Form;