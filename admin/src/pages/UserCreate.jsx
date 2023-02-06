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

  const create = async () => {
    try {
      // debugger;
      // const data = new FormData();
      //   data.append("file", file);
      //   data.append("upload_preset", process.env?.REACT_APP_UPLOAD_PRESET || "upload");
      // 	data.append('multiple', true)
      // 	data.append('tags', fileName)
      // 	data.appendfield('context', `photo=${fileName}`)
      // const cloudinary_url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;
      // const fileName = file.name;
      // const uploadRes = await axios.post(
      // 	cloudinary_url,
      // 	data
      // );
      // const { url } = uploadRes.data;
      // console.log(url);
    } catch (error) {
      debugger;
    }
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="userCreate">
      <h1> Add New User </h1>

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
                name="email"
              />
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="text" name="password" />
            </div>
            <div className="formInput">
              <label htmlFor="">City</label>
              <input type="text" name="City" />
            </div>
          </div>
          <div className="right">
            <div className="formInput">
              <label htmlFor="">Username</label>
              <input type="text" name="username" />
            </div>

            <div className="formInput">
              <label htmlFor="">Phone</label>
              <input type="text" name="phone" />
            </div>

            <div className="formInput">
              <label htmlFor="">Country</label>
              <input type="text" name="country" />
            </div>

            <div className="btn">
              <button>SEND</button>

              <input type="submit" value={'hello'} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserCreate;
