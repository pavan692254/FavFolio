'use client';
import React, { useState } from 'react';
import styles from './Common.module.css'

function Button() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const buttonStyle = "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const remenberMe = "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
  const inputLable = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const inputField = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  const authenticate = async (username: any, password: any) => {
    console.log(`Email ${username}`);
    console.log(`Pasword ${password}`);
  }
  return (
    <div className="main">
      <div className={styles.head}>
        <div className="mainhead">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex justify-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Fav</span> Folio.</h1>
          <p className="text-base font-normal text-gray-500 lg:text-xs dark:text-gray-400 ">Assisting Investors and Traders in Optimizing Their Stock Portfolios through Automation, Enhanced Visibility, and Improved Operational Efficiency.</p>

        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.form}>
          <div className="mb-6">
            <label htmlFor="email" className={inputLable}>Your email</label>
            <input type="email" id="email" className={inputField} placeholder="name@flowbite.com" required onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={inputLable}>Your password</label>
            <input type="password" id="password" className={inputField} required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className={remenberMe}>Remember me</label>
          </div>
          <div className={buttonStyle} onClick={() => authenticate(username, password)}>Submit</div>
        </div>
      </div>
    </div>
  );
}

export default Button;
