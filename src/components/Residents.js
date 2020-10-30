import React, { useState, useCallback, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';

const Residents = ({residentUrl}) => {
  const [resident, setResident] = useState([]);
  const { request} = useHttp();

  const fetchResident = useCallback(async () => {
    try {
      const fetched = await request(residentUrl);
      setResident(fetched);
    } catch (e) {
      throw e;
    }
  }, [request, residentUrl]);

  useEffect(() => {
    fetchResident();
  }, [fetchResident]);
  return (
    <div>
      {resident.name}
    </div>
  )
}

export default Residents;
