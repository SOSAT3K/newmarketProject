import React from 'react';

class SubmitButton extends React.Component{

  render(){
    return (
      <div className="submitButton">
        
        <button 
          classname='btn'
          disabled={this.props.disabled} //Pass property to check if btn should be disabled/enabled
           onClick={ () => this.props.onClick() } //allow multiple functions to pass through  btn
          >
            {this.props.text} 
          </button>

      </div>
    );
  }
}

export default SubmitButton;
