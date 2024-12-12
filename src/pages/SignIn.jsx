import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import '../Styles/login.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigatebruh=useNavigate()

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (file) {
        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {},
          (error) => {
            toast.error(error.message);
            setLoading(false);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL
            });

            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL
            });

            setLoading(false);
            toast.success("Account created successfully");
            navigate('/login');
          }
        );
      } else {
        await updateProfile(user, {
          displayName: username
        });

        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          displayName: username,
          email
        });

        setLoading(false);
        toast.success("Account created successfully");
        navigate('/login');
      };
      
    } catch (error) {
      setLoading(false)
      toast.error("Lỗi không xác định");
      
    }
  };

  const navigateToLogin = () => {
    navigate("/Login");
  };

  return (
    <Helmet title='Sign Up'>
      <Container className='pad8 login__container mar-bot-15 mar-top-15'>
        {
          loading?<h1 className='text__center'>Đang tải</h1>:(
            <div className='login__section flex-col'>
          <div className='text__center mar-bot-15'>
            <h3 className='fw-bold mar-top-15 text-white'>Sign Up</h3>
          </div>
          <div className='login__form mar-bot-15'>
            <Form className='auth__form' onSubmit={signup}>
              <FormGroup className='form__group'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  value={username}
                  onChange={e => setUserName(e.target.value)}
                  required
                />
              </FormGroup>
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
              <FormGroup className='form__group'>
                <input
                  type='file'
                  onChange={e => setFile(e.target.files[0])}
                />
              </FormGroup>
              <div className='text__center'>
                <Button type='submit' className='signup__btn mar-bot-15' disabled={loading}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </Button>
              </div>
            </Form>
          </div>
          <div className='text__center'>
            <div className='mar-bot-15 flex2 gap-10 fw-bold'>
              <p>Đã có tài khoản ?</p>
              <p onClick={navigateToLogin} style={{ color: '#fff', cursor: 'pointer' }}>Đăng nhập</p>
            </div>
          </div>
        </div>
          )
        }
      </Container>
    </Helmet>
  );
}

export default SignIn;
