const Book = require('../models/Book')
const createBook = async (req, res) => 
{
try {
    const newbook = req.body;
    const savebook = await Book.create(newbook);
    
} catch (error) {
    console.error(error);
}
}
const updateBook = async (req, res) => {

}
const deleteBook = async (req, res) => {
try {
    const curid = req.params.id;
    const deletebook = await Book.findByIdAndDelete(curid);

} catch (error) {
    
}
}
const getBook = async (req, res) => {

}