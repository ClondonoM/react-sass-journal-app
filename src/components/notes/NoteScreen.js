import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NoteAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
        />
        <textarea
          placeholder='what happened today'
          className='notes__textarea'
        ></textarea>
        <div className='notes__image'>
          <img src='https://picsum.photos/300/200' alt='image' />
        </div>
      </div>
    </div>
  );
};
