import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: []
  };

  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b683bdfd8d7041d0b31b266a886cc00b`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header 
        titulo="Ivan's News" 
        />
        <div className="container white contenedor-noticias">
        <Formulario 
         consultarNoticias={this.consultarNoticias}
        />
          <ListaNoticias noticias={(this.state.noticias)} />
        </div>
      </Fragment>
    );
  }
}

export default App;
