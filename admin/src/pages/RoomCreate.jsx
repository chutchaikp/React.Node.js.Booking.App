import axios from 'axios';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdDriveFolderUpload } from 'react-icons/md';
import useFetch from '../hook/useFetch';

import './roomCreate.scss';

const RoomCreate = () => {
  const { data: hotels, loading, error } = useFetch('/hotel');
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

  const onSubmit = async (room) => {
    try {
      debugger;
      const res = await axios.post('/room/' + room.hotelId, {
        ...room,
        // hotelId: [url],
      });
      console.log(res.data);
    } catch (error) {
      debugger;
    }
  };

  return (
    <div className="roomCreate">
      <h1> Add New Room</h1>

      <form id="form1" onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          {/* <div className="left">
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
          </div> */}
          <div className="center">
            {/* <div className="img">
              <label htmlFor="file1">
                Image:
                <MdDriveFolderUpload />
              </label>
              <input type="file" id="file1" onChange={onImgChange} />
            </div> */}
            <div className="formInput">
              <label htmlFor="">title</label>
              <input
                className={errors.title ? 'error' : ''}
                {...register('title', { required: true })}
                type="text"
              />
            </div>
            <div className="formInput">
              <label htmlFor="">desc</label>
              <input
                type="text"
                className={errors.desc ? 'error' : ''}
                {...register('desc', { required: true })}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">price</label>
              <input
                type="text"
                className={errors.price ? 'error' : ''}
                {...register('price')}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">maxPeople</label>
              <input
                type="text"
                className={errors.maxPeople ? 'error' : ''}
                {...register('maxPeople', { required: true })}
              />
            </div>

            <div className="formInput">
              <label htmlFor="">choose a hotel</label>
              <select {...register('hotelId')}>
                {loading ? (
                  <>loading</>
                ) : (
                  hotels &&
                  hotels.map((h, idx) => (
                    <option key={idx} value={h._id}>
                      {h.name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
        </div>
      </form>

      <div className="btn">
        <button
          onClick={handleSubmit((d) => {
            debugger;
            console.log(d);
            onSubmit(d);
          })}
        >
          {' '}
          Save{' '}
        </button>
      </div>
    </div>
  );
};
export default memo(RoomCreate);
