var Estados = React.createClass({
    render: function(){
        estados = this.props.estados.map( function(estado){
            return(
                <Estado estado = {estado} key ={estado.id} />
            );
        });
        return (
            <div>
                <h1>Estados</h1>
                <div id="estados">
                    <table>
                        <thead>
                            <tr>
                                <th>Abreviatura</th>
                                <th>Descripcion</th>                        
                            </tr>
                        </thead>
                        <tbody>
                            {estados}
                        </tbody>
                    </table>
                </div>
            </div>           
        );
    }
});