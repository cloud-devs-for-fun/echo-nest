import React from 'react';

import ThreadList from './_threadList';
import { Flame, Search } from 'lucide-react';
import NewPost from './_newPost';

const menuItem = ['Feeds', 'All', 'Following', 'Latest'];

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-5 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Recent</h1>

          <label className="input input-neutral w-[400px] rounded-lg bg-white">
            <Search size={20} />
            <input type="search" required placeholder="Search" />
            <kbd className="kbd kbd-lg border-neutral bg-white font-semibold">⌘</kbd>
            <kbd className="kbd kbd-lg border-neutral bg-white font-semibold">K</kbd>
          </label>

          <ul className="flex items-center text-lg font-bold">
            {menuItem.map((item, ids) => (
              <li key={ids}>
                <button className="btn btn-link no btn-lg text-black no-underline">{item}</button>
              </li>
            ))}

            <li>
              <button className="btn btn-ghost">
                <Flame strokeWidth={3} color="red" />
              </button>
            </li>
          </ul>
        </div>

        <NewPost />
        <ThreadList />
      </div>
    </>
  );
};

export default HomePage;
