import Button from './Button'
import Input from './Input'

import {useForm} from 'react-hook-form';
import {server_calls} from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseAuthorName, chooseBookEdition, chooseBookLanguage, chooseBookTitle, chooseBookType, chooseISBN, chooseNoOfPages } from '../redux/slices/RootSlice';

//interfaces
interface BookFormProps {
  id?: string[], 
  //data?: {}
}

const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch =useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${ typeof props.id}`);
    console.log(`ID: ${props.id}`);
    console.log(data);

    if (props.id && props.id.length >0){
      server_calls.update(props.id[0], data)
      console.log(`updated: ${data.book_title} ${props.id}`)
      setTimeout(()=>{window.location.reload()}, 5000);
      event.target.reset();
    }
    else{
      // use dispatch to update our state in our store
      dispatch(chooseAuthorName(data.author_name));
      dispatch(chooseBookEdition(data.book_edition));
      dispatch(chooseBookLanguage(data.book_language));
      dispatch(chooseBookTitle(data.book_title));
      dispatch(chooseBookType(data.book_type));
      dispatch(chooseISBN(data.isbn));
      dispatch(chooseNoOfPages(data.no_of_pages));


      server_calls.create(store.getState());

      setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="book_title"> Book Title</label>
            <Input {...register('book_title')} name="book_title" placeholder="Book Title" />
        </div>
        <div>
          <label htmlFor="author_name"> Author Name</label>
            <Input {...register('author_name')} name="author_name" placeholder="Author Name" />
        </div>
        <div>
          <label htmlFor="no_of_pages"> No of Pages</label>
            <Input {...register('no_of_pages')} name="no_of_pages" placeholder="No of Pages" />
        </div>
        <div>
          <label htmlFor="book_edition"> Book Edition</label>
            <Input {...register('book_edition')} name="book_edition" placeholder="Book Edition" />
        </div>
        <div>
          <label htmlFor="book_language"> Book Language</label>
            <Input {...register('book_language')} name="book_language" placeholder="Book Language" />
        </div>
        <div>
          <label htmlFor="book_type"> Book Type</label>
            <Input {...register('book_type')} name="book_type" placeholder="Book Type" />
        </div>
        <div>
          <label htmlFor="isbn"> ISBN</label>
            <Input {...register('isbn')} name="isbn" placeholder="ISBN" />
        </div>
        <div className="flex p-1">
          <Button className='flex justify-center m-3 bg-slate-300 p-2  rounded hover:bg-slate-800 text-white'
          > Submit </Button>
        </div>

      </form>
    </div>
  )
}

export default BookForm