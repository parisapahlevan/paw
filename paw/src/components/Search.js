import React from 'react';


function SearchComponent() {
    return(
        <div> 
<div class="container">
   <div class="row">
       <div class="col-sm-1"><select class="form-control form-control-lg">
 <option>All</option>
</select></div>
       <div class="col-sm-9"><input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"/></div>
       <div class="col-sm-1"><button type="button" class="btn btn-primary btn-lg">Large button</button></div>
   </div>
</div>
 </div>

    );
    
}



export default SearchComponent;