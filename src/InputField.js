import React from 'react';

class InputField extends React.Component{

  render() {
    return (
      <div className="inputField">
        
        <input
          className='input'
          type={this.props.type}  //Used to pass any input type e.g. username, password
          placeholder={this.props.placeholder}  //Passed from parent
          value={this.props.value}  //Passed from parent
          onChange={ (e) => this.props.onChange(e.target.value) } //onChange pass new value from input
        />
      </div>
    );
  }
}

export default InputField;
