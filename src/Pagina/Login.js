import React from "react";
import BadgeList from '../Componentes/BadgeList'


class Login extends React.Component {
  state = {
    items: [],
    item: { nom: "", ap: "", email: "", dni: "" },
    disabledBoton: true
  };

  handleChange = e => {
    //Cargo los campos en la variable data
    console.log(this.state.item);
    this.setState({
      item: {
        ...this.state.item,
        [e.target.name]: e.target.value
      }

    });
    //El boton se activa cuando se cargan datos
    const dat = this.state.item;
    if (dat.nom === "" || dat.ap === "" || dat.email === "" || dat.dni === "") {
      this.setState({ disabledBoton: true })
    } else {
      this.setState({ disabledBoton: false });
    }
  };

  handleClean = e => {
    this.setState({ item: { nom: "", ap: "", email: "", dni: "" } });
  };

  handleClick = e => {
    e.preventDefault() //evita que se recargue la pagina
    const itemsVar = this.state.items;
    const itemNuevo = this.state.item;
    itemsVar.push(itemNuevo)
    this.setState({
      items: itemsVar
    })
    this.setState({ item: { nom: "", ap: "", email: "", dni: "" } })

  }


  render() {
    console.log(this.state)
    return (
      <div className="container">
        <form onSubmit={this.handleClick}>

          <label>Nombre</label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="nom"
            value={this.state.item.nom}
          />
          <label>Apellido</label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="ap"
            value={this.state.item.ap}
          />
          <label>D.N.I</label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="number"
            name="dni"
            value={this.state.item.dni}
          />
          <label>Email</label>
          <input
            onChange={this.handleChange}
            className="form-control mb-4"
            type="email"
            name="email"
            value={this.state.item.email}
          />

          <div style={{ flexDirection: "row-reverse" }} className="row mb-4">
            <button
              type="submit"
              className="btn btn-primary "
              disabled={this.state.disabledBoton}
              
            >
              Agregar
          </button>
            <a
              type="button"
            
              className="btn btn-primary mr-4 "
              onClick={this.handleClean}
            >
              Limpiar
          </a>
          </div>
        </form>

        <BadgeList items={this.state.items}/>
      </div >
    );
  }
}

export default Login;
