import React from 'react';

const Admin = () => {
  return (
    <div>
      <h1>Q Search for anything</h1>
      <p>Welcome Back! Good evening!</p>
      <ul>
        <li>
          <strong>100</strong>
          <span> Henry Qells </span>
          <span> Writter/Author </span>
          <span> 32 Total Post </span>
          <span> Visitors 23K Subscriber 250K </span>
          <span> 2.5% 个 Visitors Increase </span>
          <span> Today Ocotber 29 </span>
        </li>
        <li>
          <strong>154</strong>
          <span> Total Post </span>
          <span> D M ● This year Previous year Nov Ć ¡ |||| </span>
        </li>
        <li>
          <strong>56</strong>
          <span> Total Pages </span>
        </li>
        <li>
          <strong>34,267</strong>
          <span> Comments </span>
          <button>+ Add New</button>
        </li>
      </ul>
      <div className="recent-blogs">
        <h2>Recent Blogs</h2>
        <ul>
          <li>
            <strong>325</strong>
            <span> Comments </span>
            <span> 9546 Views </span>
            <button>Edit</button>
          </li>
          {/* Add other recent blogs here */}
        </ul>
      </div>
      <div className="total-likes">
        <strong>1K</strong>
        <span> Total Likes </span>
        <span> 65.26K </span>
      </div>
    </div>
  );
};

export default Admin;