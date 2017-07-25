var Estado = React.createClass({
  getInitialState() {
    return {
      estado: this.props.estado
    }
  },

  render() {
    return (
      <tr>
        <td>{this.state.estado.abreviatura}</td>
        <td>{this.state.estado.descripcion}</td>
      </tr>
    );
  }
});