var Books = React.createClass({
    getInitialState() {
        return {
            books: this.props.books,
            book: {
                title: '',
                author: '',
                fecha_publicacion: '',
                editorial: ''
            },
            errors: {}
        }
    },

    handleTitleChange(e){
        var newBook = this.state.book;
        newBook.title = e.target.value;
        this.setState({book:newBook});
    },

    handleAuthorChange(e){
        var newBook = this.state.book;
        newBook.author = e.target.value;
        this.setState({book:newBook});
    },

    handleFechaPublicacionChange(e){
        var newBook = this.state.book;
        newBook.fecha_publicacion = e.target.value;
        this.setState({book:newBook});
    },

    handleEditorialChange(e){
        var newBook = this.state.book;
        newBook.editorial = e.target.value;
        this.setState({book:newBook});
    },

    handleAddBook() {
        var that = this;
        $.ajax({
            method: 'POST',
            data: {
                book: that.state.book,
            },
            url: '/books.json',
            success: function(res) {
                var newBookList = that.state.books;
                newBookList.push(res);
                that.setState({
                book: newBookList,
                book: {
                    title: '',
                    author: '',
                    fecha_publicacion: '',
                    editorial: ''
                },
                errors: {}
                });
            },
            error: function(res) {
                that.setState({errors: res.responseJSON.errors})
            }
        });
    },   

    render: function(){
        books = this.props.books.map( function(book){
            return(
                <Book book = {book} key ={book.id} />
            );
        });
        return (
            <div>
                <h1>Libros</h1>
                <div id="books">
                    <table>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Autor</th>                        
                                <th>Fecha de Publicación</th> 
                                <th>Editorial</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {books}
                            <tr>
                                <td>
                                    <input type="text" onChange={this.handleTitleChange} /><br />
                                    <span style={{color: 'red'}}>{this.state.errors.title}</span>
                                </td>
                                <td>
                                    <input type="text" onChange={this.handleAuthorChange} /><br />
                                    <span style={{color: 'red'}}>{this.state.errors.author}</span>
                                </td>
                                <td>
                                    <input type="date" onChange={this.handleFechaPublicacionChange} /><br />
                                    <span style={{color: 'red'}}>{this.state.errors.fecha_publicacion}</span>
                                </td>
                                <td>
                                    <input type="text" onChange={this.handleEditorialChange} /><br />
                                    <span style={{color: 'red'}}>{this.state.errors.editorial}</span>
                                </td>
                                <td>
                                    <button onClick={this.handleAddBook}>Agregar libro</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>           
        );
    }
});