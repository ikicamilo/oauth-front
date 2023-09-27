import React, { useContext } from "react";
import { myContext } from "../../Context";
import { IUser } from "../../types/maintypes";

export default function Homepage() {
  const context = useContext(myContext) as IUser;
  return (
    <div>
      {context ? (
        <h1>Welcome back {context.username}</h1>
      ) : (
        <h1>Welcomen to My Website</h1>
      )}
    </div>
  );
}
