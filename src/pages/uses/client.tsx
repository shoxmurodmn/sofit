import React from "react";
import cx from "classnames";

import { NewCart } from "../../components/newCart";
import cls from "./client.module.css";

// ==== Types ====
interface Comment {
  name: string;
  commetText: string;
}

interface CartData {
  id: number;
  title: string;
  name: string;
  like: boolean;
  commet: Comment[];
}

// ==== Data ====
const data: CartData = {
  id: 1,
  title:
    "Lorem ipsum dolor sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus.",
  name: "Murod",
  like: false,
  commet: [
    {
      name: "murod",
      commetText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus.",
    },
  ],
};

// ==== Component ====
const Client: React.FC = () => {
  return (
    <div className={cx(cls.wrapper)}>
      <div className={cx(cls.title)}>Cart</div>
      <div className={cx(cls.wrapperCar)}>
        {Array.from({ length: 8 }).map((_, index) => (
          <NewCart key={index} props={data} />
        ))}
      </div>
    </div>
  );
};

export default Client;
