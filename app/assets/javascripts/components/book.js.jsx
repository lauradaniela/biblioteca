var Book = React.createClass({
  getInitialState() {
    return {
      book: this.props.book,
      editMode: false,
      errors: {}
    }
  },

  setEditMode(){
      this.setState({editMode: true});
  },

    handleTitleChange(e){
        var newBook = this.state.book;
        newBook.title = e.target.value;
        this.setState({book: newBook});
    },

    handleAuthorChange(e){
        var newBook = this.state.book;
        newBook.author = e.target.value;
        this.setState({book: newBook});
    },

    handleFechaPublicacionChange(e){
        var newBook = this.state.book;
        newBook.fecha_publicacion = e.target.value;
        this.setState({book: newBook});
    },

    handleEditorialChange(e){
        var newBook = this.state.book;
        newBook.editorial = e.target.value;
        this.setState({book: newBook});
    },

    handleBookUpdate() {
        var that = this;
        $.ajax({
        method: 'PUT',
        data: {
            book: that.state.book,
        },
        url: '/books/' + that.state.book.id + '.json',
        success: function(res) {
            that.setState({
            errors: {},
            book: res,
            editMode: false
            });
        },
        error: function(res) {
            that.setState({errors: res.responseJSON.errors});
        }
        });
    },

  render() {
    if ( this.state.editMode ) {
        markup =(
        <tr>
            <td>{this.state.book.title}</td>
            <td>{this.state.book.author}</td>
            <td>{this.state.book.fecha_publicacion}</td>
            <td>{this.state.book.editorial}</td>
            <td>
                <button onClick={this.handleBookUpdate}>Save</button>
            </td>
        </tr>
        );
    }else{
        markup =(        
            <tr>
                <td>{this.state.book.title}</td>
                <td>{this.state.book.author}</td>
                <td>{this.state.book.fecha_publicacion}</td>
                <td>{this.state.book.editorial}</td>
                <td>
                    <button onClick={this.setEditMode}>Edit</button>
                </td>
            </tr>
        );
    }
    return markup;
  }
});