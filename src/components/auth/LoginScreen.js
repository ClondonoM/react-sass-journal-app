import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title mb-3'>Login</h3>
      <form>
        <input
          className='auth__input mt-1 mb-3'
          type='text'
          placeholder='email'
          name='email'
          autocomplete='off'
        />
        <input
          className='auth__input mt-1 mb-3'
          type='password'
          placeholder='password'
          name='password'
        />
        <button className='btn btn-primary btn-block mb-3' type='submit'>
          Login
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
        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};
