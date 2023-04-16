
function Login() {

    return (
        <>
            <h1>Login</h1>
            <div className="main-content d-flex justify-content-center">
                <form>
                    <input type='text' name='uid' placeholder='Username or Email' />
                    <input type='password' name='pwd' placeholder='Password' />
                    <input type='password' name='pwdRepeat' placeholder='Repeat Password' />
                    <button type='submit' name='submit' className='btn btn-primary'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;