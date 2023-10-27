import React, { useState } from 'react';
import "./sidebar.scss";
import { menu } from "../../data";
import BarIcon from '../NavBars/BarIcon';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='sidebar'>
      <BarIcon state={open} fun={setOpen} />
      {menu.map(e => {
        return (
          <div className='link-section' key={e.id} style={{ display: open ? 'flex' : 'none' }}>
            <p className='title'>{e.title}
            </p>
            {e.listItems.map(j => {
              return (
                <Link to={j.url} className='link' key={j.id}>
                  {j.icon}
                  <p>{j.title}</p>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
