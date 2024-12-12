import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import '../Styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success('Đăng nhập thành công');
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const navigateToSignUp = () => {
    navigate('/Signup');
  };

  return (
    <Helmet title='Login'>
      <Container className='pad8 login__container mar-bot-15 mar-top-15'>
        <div className='login__section flex-col'>
          <div className='text__center mar-bot-15'>
            <h3 className='fw-bold mar-top-15 text-white'>Login</h3>
          </div>
          <div className='login__form mar-bot-15'>
            <Form className='auth__form' onSubmit={signIn}>
              <FormGroup className='form__group'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className='form__group'>
                <input
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <div className='text__center'>
                <Button type='submit' className='signup__btn mar-bot-15' disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </Form>
          </div>
          <div className='text__center'>
            <div className='mar-bot-15 flex2 gap-10 fw-bold'>
              <p>Chưa có tài khoản ?</p>
              <p onClick={navigateToSignUp} style={{ color: '#fff', cursor: 'pointer' }}>Tạo ngay</p>
            </div>
          </div>
        </div>
      </Container>
    </Helmet>
  );
};

export default Login;
