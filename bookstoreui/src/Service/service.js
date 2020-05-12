import axios from 'axios';
export async function getBook(){
    const res = await axios.get('https://localhost:44381/api/Book/getallbook')
    return res.data
    // .then(res=>{
    //     const book=res.data;
    //     console.log(book)
    //     return book;
    // })
}