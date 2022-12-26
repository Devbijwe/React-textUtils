import React from 'react';
import PropTypes from 'prop-types';
export default function Alert(props) {
const capatalize=(word)=>{
    return word[0].toUpperCase()+word.slice(1).toLowerCase()
}
    return(
        props.alert &&  <>
<div className=" position-fixed top-4 w-100 my-3">
<div className={`alert alert-${props.alert.type} mx-5 alert-dismissible fade show`} role="alert">
  <strong>{capatalize(props.alert.type)}:</strong> {props.alert.msg}

</div>
</div>


    </>
    )
}