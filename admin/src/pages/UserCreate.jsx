import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdDriveFolderUpload } from 'react-icons/md';

import './userCreate.scss';

const UserCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState('');

  const onImgChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const onSubmit = async (user) => {
    try {
      debugger;

      const fileName = file.name;
      const data = new FormData();
      data.append('file', file);
      data.append(
        'upload_preset',
        process.env?.REACT_APP_UPLOAD_PRESET || 'upload'
      );
      data.append('multiple', true);
      data.append('tags', fileName);
      data.append('context', `photo=${fileName}`);
      const cloudinary_url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;

      const uploadRes = await axios.post(cloudinary_url, data);
      const { url } = uploadRes.data;

      // console.log(url);
      const res = await axios.post('/auth/register', {
        ...user,
        img: url,
        isAdmin: true,
      });
      console.log(res.data);
    } catch (error) {
      debugger;
    }
  };

  return (
    <div className="userCreate">
      <h1> Add New User</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          <div className="left">
            <div className="camera">
              {file ? (
                <>
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                    }
                    alt=""
                  />
                </>
              ) : (
                <>
                  <BsFillCameraFill size={105} color="#555" />
                </>
              )}
            </div>
          </div>
          <div className="center">
            <div className="img">
              <label htmlFor="file1">
                Image:
                <MdDriveFolderUpload />
              </label>
              <input type="file" id="file1" onChange={onImgChange} />
            </div>
            <div className="formInput">
              <label htmlFor="">Email</label>
              <input
                className={errors.email ? 'error' : ''}
                {...register('email', { required: true })}
                type="text"
              />
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className={errors.password ? 'error' : ''}
                {...register('password', { required: true })}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">City</label>
              <input
                type="text"
                className={errors.city ? 'error' : ''}
                {...register('city')}
              />
            </div>
          </div>
          <div className="right">
            <div className="formInput">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className={errors.username ? 'error' : ''}
                {...register('username', { required: true })}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                className={errors.phone ? 'error' : ''}
                {...register('phone')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">Country</label>
              <input
                type="text"
                className={errors.country ? 'error' : ''}
                {...register('country')}
              />
            </div>
          </div>
        </div>
        <div className="btn">
          <input type="submit" value={'CREATE'} />
        </div>
      </form>
    </div>
  );
};
export default UserCreate;
