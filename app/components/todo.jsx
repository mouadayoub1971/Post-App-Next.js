'use client';

import { useState, useEffect } from 'react';

export default function Todo() {
 const [todo, setTodo] = useState({});

 useEffect(() => {
  async function fetchData() {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   const result = await response.json();
   setTodo(result);
  }


  fetchData();
 }, []);
 /**useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();
      setTodo(result);
    }
    
    fetchData();
  }, []); */

 return (
  <div>
   <h6>the componenet is loaded </h6>
   <h6>{todo.title}</h6>
  </div>
 );
}
/**
 * 'use client';

import { useState, useEffect } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();
      setTodo(result);
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h6>{todo.title}</h6>
    </div>
  );
}

 */
