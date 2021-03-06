import React from "react";
import Button from "./UI/Button";
import Text from "./UI/Text";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <motion.div
            animate={{ x: [-150, 50, 0] }}
            transition={{ duration: 2 }}
            className="content"
          >
            <Text variant="h1">Test assignment for fornt-end developer</Text>
            <Text variant={"p"}>
              What difines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understendeing of User
              disign thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-end Development keeps evolving
            </Text>
            <Button
              onClick={() => {
                window.location.href = "#sign-up";
              }}
            >
              {" "}
              Sign up
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
