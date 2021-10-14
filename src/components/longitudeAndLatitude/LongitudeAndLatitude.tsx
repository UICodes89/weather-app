
import React, { useContext, useState } from 'react'
import utill from '../../service/utill';
import ErrorMessage from '../errors/ErrorMessage';
import Tempture from '../tempture/Tempture';

export default function LongitudeAndLatitude() {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [result, setResult] = useState({});
  const [errors, serErrors] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLong('');
    setLat('');
    serErrors(false);
    setMessage('');
    let result: any = await utill.tempByGeolocation(lat, long);
    if (result)
      setResult(result);
    else {
      serErrors(true);
      setLong('');
      setLat('');
      setMessage(result ? result : 'Error Occured!! Please Try Again!')
      setResult({});
    }
  };

  return (
    <>
      <div className="search_container">
        <form onSubmit={(event) => onSubmit(event)}>
          <input type="text" placeholder="Please enter longitude" className="lat-field" value={long} onChange={(e) => setLong(e.target.value)} />
          <input type="text" placeholder="Please enter latitude" className="long-field" value={lat} onChange={(e) => setLat(e.target.value)} />
          <button type="submit" className="search-btn" disabled={!lat.length && !long.length}>search</button>
        </form>
      </div>
      <ErrorMessage errors={errors} message={message} />
      {Object.keys(result).length ? <Tempture {...result} /> : null}
    </>
  );
}
