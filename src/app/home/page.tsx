import React from 'react';

// import AddThreadForm from './_form';
import ThreadList from './_threadList';

const HomePage = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <h1 className="mb-4 text-2xl font-bold">Threads</h1>
      </div>
      {/* <AddThreadForm /> */}
      <ThreadList />
    </div>
  );
};

export default HomePage;
