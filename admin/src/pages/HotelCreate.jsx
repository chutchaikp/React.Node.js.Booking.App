import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdDriveFolderUpload } from 'react-icons/md';
import useFetch from '../hook/useFetch';

import './hotelCreate.scss';

const HotelCreate = () => {
  const { data: rooms, loading, error } = useFetch('/room');
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

  const onSubmit = async (hotel) => {
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
      const res = await axios.post('/hotel', {
        ...hotel,
        photos: [url],
      });
      console.log(res.data);
    } catch (error) {
      debugger;
    }
  };

  return (
    <div className="hotelCreate">
      <h1> Add New Hotel</h1>

      <form id="form1" onSubmit={handleSubmit(onSubmit)}>
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
              <label htmlFor="">Name</label>
              <input
                className={errors.name ? 'error' : ''}
                {...register('name', { required: true })}
                type="text"
              />
            </div>
            <div className="formInput">
              <label htmlFor="">type</label>
              <input
                type="text"
                className={errors.type ? 'error' : ''}
                {...register('type', { required: true })}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">city</label>
              <input
                type="text"
                className={errors.city ? 'error' : ''}
                {...register('city')}
              />
            </div>

            {/* </div>
          <div className="right"> */}

            <div className="formInput">
              <label htmlFor="">address</label>
              <input
                type="text"
                className={errors.address ? 'error' : ''}
                {...register('address', { required: true })}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">distance</label>
              <input
                type="text"
                className={errors.distance ? 'error' : ''}
                {...register('distance')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">title</label>
              <input
                type="text"
                className={errors.title ? 'error' : ''}
                {...register('title')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">desc</label>
              <input
                type="text"
                className={errors.desc ? 'error' : ''}
                {...register('desc')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">rating</label>
              <input
                type="text"
                className={errors.rating ? 'error' : ''}
                {...register('rating')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">rooms</label>
              {/* <input
                type="text"
                className={errors.rooms ? 'error' : ''}
                {...register('rooms')}
              /> */}
              <select multiple {...register('rooms')}>
                {/* <option value="true">Yes</option>
                <option value="false">No</option> */}
                {loading ? (
                  <>loading</>
                ) : (
                  rooms &&
                  rooms.map((r, idx) => (
                    <option key={idx} value={r._id}>
                      {r.title}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="formInput">
              <label htmlFor="">cheapestPrice</label>
              <input
                type="text"
                className={errors.cheapestPrice ? 'error' : ''}
                {...register('cheapestPrice')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">featured</label>
              {/* <input
                type="text"
                className={errors.featured ? 'error' : ''}
                {...register('featured')}
              /> */}
              {/* <input type="checkbox" {...register('featured', {})} /> */}
              <select {...register('featured')}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="btnx">
          {/* <input type="submit" value={'CREATE'} /> */}
          {/* <button>CREATE 2</button>
          <button>CREATE 3</button>
          <button>CREATE 4</button> */}
        </div>
      </form>

      <div className="btn">
        <button
          onClick={handleSubmit((d) => {
            debugger;
            console.log(d);
            onSubmit(d)
          })}
        >
          {' '}
          Save{' '}
        </button>
      </div>
    </div>
  );
};
export default HotelCreate;
