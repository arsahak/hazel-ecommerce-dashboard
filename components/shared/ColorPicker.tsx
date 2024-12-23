import React from 'react';
import { SketchPicker } from 'react-color';

class Component extends React.Component {
  state = {
    background: '#fff', // Default color
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Select a Color</h2>
        <SketchPicker
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
        <div
          style={{
            marginTop: '20px',
            width: '100px',
            height: '50px',
            backgroundColor: this.state.background,
            border: '1px solid #000',
            borderRadius: '5px',
          }}
        >
          Selected Color
        </div>
      </div>
    );
  }
}

export default Component;
