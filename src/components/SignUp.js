const SignUp = () => {
  return (
    <div className='signup'>
      <h4 className='text-center mb-4'>Sign Up For The BETA to see more</h4>
      <div className='d-md-flex justify-content-center text-center'>
        <input type='text' placeholder='Business Name' className='me-1 mb-2 mb-md-0' />
        <input type='text' placeholder='Email' className='ms-1' />
      </div>
      <p className='text-center mt-4'>
        <button type='button' className='btn-notify'>
          Notify me
        </button>
      </p>
      <p className="text-center mt-4">
        <button type='button' className='btn-signup'>
          Sign up as a freelance partner
        </button>
      </p>
    </div>
  );
};

export default SignUp;
