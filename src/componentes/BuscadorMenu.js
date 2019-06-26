import React, { Component } from 'react';

class BuscadorMenu extends Component {

    busquedaRef=React.createRef();

    ObtenerDatos = (e) =>{
e.preventDefault();

console.log(this.busquedaRef.current.value);
    }
    render() {
        return (
            <form onSubmit={this.ObtenerDatos}> 
                <div className="row">
                      <div className="form-group col-md-8">
                      <input ref={this.busquedaRef}  tipye="text" className="form-control
                      form-control-lg" placeholder="Buscar menu. Ejemplo carnita"/>

                      </div>
                      <div  className="form-grup col-md-4">
                      <input tipye="submit" className="btn btn-log btn-danger btn-block" value="Buscar.."/>

                      </div>

                      
                  
                </div>
            </form>
        );
    }
}

export default BuscadorMenu;
