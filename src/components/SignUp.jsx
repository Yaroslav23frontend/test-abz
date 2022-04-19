import React from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import InputFile from "./UI/InputFile";
import Radio from "./UI/Radio";
import Text from "./UI/Text";
export default function SignUp() {
  return (
    <section className="signup-section">
      <div className="container">
        <div className="signup-container">
          <Text variant="h1">Working with POST request</Text>
          <form>
            <Input name="name" type="text" placeholder="Name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="phone" type="tel" placeholder="Phone" />
            <InputFile />
            <div className="radio-container">
              <Text variant="p">Select your position:</Text>
              <Radio
                lableText={"Frontend developer"}
                value="Frontend developer"
                name="job"
                id="frontend"
              />
              <Radio
                lableText={"Backend developer"}
                value="Beckend developer"
                name="job"
                id="backend"
              />
              <Radio
                lableText={"Designer"}
                value="Designer"
                id="designer"
                name="job"
              />
              <Radio lableText={"QA"} value="QA" id="qa" name="job" />
            </div>
            <Button>Sign up</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
