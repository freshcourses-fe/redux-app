import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workerRequest } from '../../redux/actions';

const UserList = (props) => {
  const [page, setPage] = useState(1);
  const { workers, isLoading, error } = useSelector((state) => state.worker);
  const dispatch = useDispatch();

  useEffect(() => {
    requestWorkers({ page });
  }, [page]);
  
  const requestWorkers = (options) => dispatch(workerRequest(options));
  
  return (
    <div>
      {isLoading && <div>LOADING </div>}
      {error && <div>{error.message}</div>}
      <button onClick={() => requestWorkers({ page })}>Load More</button>
      {workers.map((worker) => (
        <div key={worker.id}>
          <pre>{JSON.stringify(worker, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

// const mStP = (state) => state.worker;
// const mDtP = (dispatch) => ({
//   requestWorkers: (options) => dispatch(workerRequest(options)),
// });
export default UserList;
