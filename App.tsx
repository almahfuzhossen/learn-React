import * as React from 'react';
import './style.css';

export default function App() {
  const datas = [
    {
      name: 'component1',
      age: 13,
    },
    {
      name: 'compo-2',
      age:111
    },
    {
      name: 'compo compo compo- 3',
      age:111
    },
  ];
  return (
    <div>
      <div>
        <h1>Explore React - Day 1</h1>
        {datas.map((data) => {
          console.log(data)
          return <li>{data.name} </li>;
          console.log(data);
        })}
      </div>
    </div>
  );
}
