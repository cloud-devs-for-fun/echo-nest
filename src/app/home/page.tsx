import React from 'react';

import ThreadList from './_threadList';
import { Flame, Search } from 'lucide-react';
import NewPost from './_newPost';

const menuItem = ['Feeds', 'All', 'Following', 'Latest'];

const HomePage = async () => {
  return (
    <>
      <div className="flex flex-col gap-5 rounded-lg p-4">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <label className="input input-neutral w-full rounded-lg bg-white">
            <Search size={20} />
            <input type="search" required placeholder="Search" />
            <kbd className="kbd kbd-lg border-neutral bg-white font-semibold">⌘</kbd>
            <kbd className="kbd kbd-lg border-neutral bg-white font-semibold">K</kbd>
          </label>

          <ul className="flex items-center font-bold lg:text-lg">
            {menuItem.map((item, ids) => (
              <li key={ids}>
                <button className="btn btn-link lg:btn-lg text-black no-underline">{item}</button>
              </li>
            ))}

            <li>
              <button className="btn btn-ghost" title="hottest">
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
