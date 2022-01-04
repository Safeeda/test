import React from 'react';
import ReactDOM from 'react-dom';
function M1() 
{
    return (
        <h1>Student Information</h1>
    );
}
ReactDOM.render(<M1 />, document.getElementById('root'));
function M2()
{
return(
<form> 
     <label>Name:&emsp;&emsp;&emsp;
        <input
          type="text"
          value={name}
        />
      </label>
      <br></br>
      <br></br>
      </form>
      );

}
    ReactDOM.render(<M2 />, document.getElementById('root'));

    function M3()
    {
    return(
    <form>
  <label for="date of birth:">Date of birth:&nbsp</label>
  <input type="date" id="date of birth:" name="date of birth:"/>
  <br></br>
  <br></br>
  </form>
    );
    }
    ReactDOM.render(<M3 />, document.getElementById('root'));
  
 
 function M4()
 {
     return(
         <form>
    Gender:&emsp;&ensp;
  <input type="radio" id="gender" name="gender" value="Male"/>
  <label for="gender">Male</label><br>&emsp;&emsp;&emsp;&emsp;&ensp;</br>
  <input type="radio" id="gender" name="gender" value="Female"/>
  <label for="gender">Female</label><br><br></br></br>
  </form>
     );
 }
 ReactDOM.render(<M4 />, document.getElementById('root'));

 function M5()
 {
     return(
         <form>

        Class: 
       <select name="class" id="class">
    <option value="" selected="selected">Class</option>
  </select>
  <br><br></br></br>
  

</form>

);
}
ReactDOM.render(<M5 />, document.getElementById('root'));

function M6()
{
  return(
      <form>

     Division: 
    <select name="division" id="division">
 <option value="" selected="selected">Division</option>
</select>
<br><br></br></br>


</form>

);
}
ReactDOM.render(<M6 />, document.getElementById('root'));

