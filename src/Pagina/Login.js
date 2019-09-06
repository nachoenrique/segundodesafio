import React from "react";

class Login extends React.Component {
  state = {
    data: { nom: "", ap: "", email: "", dni: "" },
    disabledBoton: true
  };

  handleChange = e => {
    //Cargo los campos en la variable data
    console.log(this.state.data);
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
    //El boton se activa cuando se cargan datos
    const dat = this.state.data;
    if (dat.nom === "" || dat.ap === "" || dat.email === "" || dat.dni === "") {
      this.setState({ disabledBoton: true })
    } else {
      this.setState({ disabledBoton: false });
    }
  };

  handleClean = e => {
    this.setState({ data: { nom: "", ap: "", email: "", dni: "" } });
  };


  render() {
    return (
      <div className="container">
        <div>
          <form>

            <label>Nombre</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="nom"
            />
            <label>Apellido</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="ap"
            />
            <label>D.N.I</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="number"
              name="dni"
            />
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control mb-4"
              type="email"
              name="email"
            />

          </form>
        </div>

        <div style={{ flexDirection: "row-reverse" }} className="row mb-4">
          <button
            className="btn btn-primary "
            disabled={this.state.disabledBoton}
          //onClick={this.handleClick}
          >
            Agregar
          </button>
          <a
            href="/"
            className="btn btn-primary mr-4 "
            onClick={this.handleClean}
          >
            Limpiar
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
