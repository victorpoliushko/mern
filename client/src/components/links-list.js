import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">There is no links</p>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Original</th>
            <th>Short</th>
            <th>Open</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <td>{index}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                {console.log("Link id: ", link._id)}
                <td>
                  <Link to={`/detail/${link._id}`}>Open</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
