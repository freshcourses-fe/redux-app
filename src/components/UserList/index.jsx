import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { workerRequest } from '../../actions';

const UserList = ({ workers, isLoading, error, requestWorkers }) => {
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    requestWorkers({ page });
  }, [page]);

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

const mStP = (state) => state.worker;
const mDtP = (dispatch) => ({
  requestWorkers: (options) => dispatch(workerRequest(options)),
});
export default connect(mStP, mDtP)(UserList);
