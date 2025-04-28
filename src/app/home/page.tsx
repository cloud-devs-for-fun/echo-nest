import React from 'react';

// import AddThreadForm from './_form';
import ThreadList from './_threadList';
import { Flame, Search } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="rounded-lg p-4">
      {/* <AddThreadForm /> */}

      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-lg font-bold">Recent</h1>

        <label className="input w-[400px] rounded-lg">
          <Search size={20} />
          <input type="search" required placeholder="Search" />
          <kbd className="kbd kbd-lg font-semibold">⌘</kbd>
          <kbd className="kbd kbd-lg font-semibold">K</kbd>
        </label>

        <ul className="flex items-center gap-4 text-lg font-bold">
          <li>Feeds</li>
          <li>All</li>
          <li>Following</li>
          <li>Latest</li>
          <li>
            <Flame strokeWidth={3} color="red" />
          </li>
        </ul>
      </div>

      <ThreadList />
    </div>
  );
};

export default HomePage;
