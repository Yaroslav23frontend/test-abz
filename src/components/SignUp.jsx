import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import InputFile from "./UI/InputFile";
import Radio from "./UI/Radio";
import Text from "./UI/Text";
import axios from "axios";
export default function SignUp() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [img, setImg] = useState();
  const [position, setPosition] = useState(1);
  const [imgError, setImgError] = useState(false);
  const nameRegax = /^.{2,60}$/;
  const emailRegex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const phoneReg = /^[\+]{0,1}380([0-9]{9})$/;
  function onChangeImg(e) {
    console.log(e.target.files);
    let img = new Image();
    let blob = URL.createObjectURL(e.target.files[0]);
    img.src = blob;
    let w = img.innerWidth;
    let h = img.innerHeight;
    img.onload = function () {
      if (
        e.target.files[0].size > 5000000 ||
        !/\.(|jpe?g|)$/i.test(e.target.value) ||
        this.width < 70 ||
        this.height < 70
      ) {
        setImgError(true);
        e.target.classList.add("error-input");
      } else {
        e.target.classList.remove("error-input");
      }
    };
    if (
      e.target.files[0].size > 5000000 ||
      !/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e.target.value) ||
      w < 70 ||
      h < 70
    ) {
      alert("Max image size 5MB");
      e.target.classList.add("error-input");
    } else {
      e.target.classList.remove("error-input");
    }
    setImg(e.target.files[0]);
  }
  function onChangeName(e) {
    const name = e.target;
    console.log(e.target);
    if (nameRegax.test(name.value)) {
      name.classList.remove("error-input");
    } else {
      name.classList.add("error-input");
    }
    setName(name.value);
  }
  function onChangeEmail(e) {
    const email = e.target;
    console.log(e.target);
    if (emailRegex.test(email.value)) {
      email.classList.remove("error-input");
    } else {
      email.classList.add("error-input");
    }
    setEmail(email.value);
  }
  function onChangePhone(e) {
    const phone = e.target;
    console.log(e.target);
    if (phoneReg.test(phone.value)) {
      phone.classList.remove("error-input");
    } else {
      phone.classList.add("error-input");
    }
    setPhone(phone.value);
  }
  function newPOST(e) {
    e.preventDefault();
    const formData = {
      position_id: position,
      name: name,
      email: email,
      phone: phone,
      photo: img,
    };
    const token =
      "eyJpdiI6ImlqbkdidzRNWlVidjJTMllHdUNIQ2c9PSIsInZhbHVlIjoiMTNjRGl6aXozVVZ2STlYYW4weHo5ckhoXC9RVzRFZjNiSkVQWGdmT3QzMStzem9hSnlzS01GdmVMRzd5N0pEWE1xZDhJR2xIa3Y2OURrbFhzTzFMMjN3PT0iLCJtYWMiOiIzODEyYmY2ODJmZjkyNzAxMjQ1Njk4ZjY3NWJmYzZhNjQzMmVhNjAxMDM4MmQ2ZjcyN2JlNmUzYzc1YmRlZWYzIn0=";
    axios
      .post("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
        formData,
        headers: { Token: token },
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
  }
  function onClickPosition(e) {
    setPosition(e.target.value);
  }
  return (
    <section className="signup-section">
      <div className="container">
        <div className="signup-container">
          <Text variant="h1">Working with POST request</Text>
          <form>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              onChange={onChangeName}
            />
            <Input
              onChange={onChangeEmail}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              onChange={onChangePhone}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
            <InputFile
              onChange={onChangeImg}
              accept="image/png, image/gif, image/jpeg"
              error={imgError}
              name={img?.name}
            />
            <div className="radio-container">
              <Text variant="p">Select your position:</Text>
              <Radio
                lableText={"Frontend developer"}
                value="1"
                name="job"
                id="frontend"
                onClick={onClickPosition}
                defaultChecked
              />
              <Radio
                lableText={"Backend developer"}
                value="2"
                name="job"
                id="backend"
                onClick={onClickPosition}
              />
              <Radio
                lableText={"Designer"}
                value="3"
                id="designer"
                name="job"
                onClick={onClickPosition}
              />
              <Radio lableText={"QA"} value="4" id="qa" name="job" />
            </div>
            <Button onClick={newPOST}>Sign up</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
