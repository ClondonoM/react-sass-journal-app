export const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <input className='mt-1' type='text' placeholder='email' name='email' />
        <input
          className='mt-1'
          type='password'
          placeholder='password'
          name='password'
        />
        <button type='submit'>Login</button>
        <hr />
        Google
      </form>
    </>
  );
};
