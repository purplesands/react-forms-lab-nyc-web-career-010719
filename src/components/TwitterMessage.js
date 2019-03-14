import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message:''
    };
  }


  handleTextInput = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event=>this.setState({message: event.target.value})}value={this.state.message}/>
        <p>remaining characters: {this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
};


export default TwitterMessage;
