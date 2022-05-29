import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title mb-5'>Register</h3>
      <form>
        <input
          className='auth__input mb-3'
          type='text'
          placeholder='name'
          name='name'
          autocomplete='off'
        />
        <input
          className='auth__input  mb-3'
          type='text'
          placeholder='email'
          name='email'
          autocomplete='off'
        />
        <input
          className='auth__input mb-3'
          type='password'
          placeholder='password'
          name='password'
        />
        <input
          className='auth__input mb-3'
          type='password'
          placeholder='confirm password'
          name='password2'
        />
        <button className='btn btn-primary btn-block mb-3' type='submit'>
          Register
        </button>
        <hr />
        <div className='auth__social-networks '>
          <div className='google-btn mb-5'>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/login' className='link'>
          Already registered?
        </Link>
      </form>
    </>
  );
};
