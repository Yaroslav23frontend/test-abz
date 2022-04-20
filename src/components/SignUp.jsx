import React, { useRef, useState } from "react";
import { useDataContext } from "./context/DataContext";
import { usePostContext } from "./context/PostContext";

import Button from "./UI/Button";
import Input from "./UI/Input";
import InputFile from "./UI/InputFile";
import Radio from "./UI/Radio";
import Text from "./UI/Text";
import { KEY, POST_USER_URL } from "./utilites/url";
import { emailReg, imgReg, nameReg, phoneReg } from "./utilites/validation";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState({});
  const [imgError, setImgError] = useState(false);
  const [position, setPosition] = useState(1);
  const [error, setError] = useState([]);
  const refEmail = useRef();
  const refName = useRef();
  const refPhone = useRef();
  const { fetchData, setPage } = useDataContext();
  const { fetchPOST, errorPost } = usePostContext();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangeImg(e) {
    let img = new Image();
    let blob = URL.createObjectURL(e.target.files[0]);
    img.src = blob;
    img.onload = function () {
      if (
        e.target.files[0].size > 5000000 ||
        imgReg.test(e.target.value) ||
        this.width < 70 ||
        this.height < 70
      ) {
        e.target.classList.add("error-input");
        setImgError(true);
        setError([
          ...error,
          "User photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB",
        ]);
      } else {
        e.target.classList.remove("error-input");
      }
    };
    setImg(e.target.files[0]);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangeName(e) {
    const name = e.target;
    console.log(e.target.value);
    if (nameReg.test(name.value)) {
      name.classList.remove("error-input");
    } else {
      name.classList.add("error-input");
      setError([...error, "User name, should be 2-60 characters"]);
    }
    setName(name.value);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangeEmail(e) {
    const email = e.target;
    console.log(e.target.value);
    if (emailReg.test(email.value)) {
      email.classList.remove("error-input");
    } else {
      email.classList.add("error-input");
      setError([
        ...error,
        "User email, must be a valid email according to RFC2822",
      ]);
    }
    setEmail(email.value);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangePhone(e) {
    e.preventDefault();
    const phone = e.target;
    console.log(e.target);
    if (phoneReg.test(phone.value)) {
      phone.classList.remove("error-input");
    } else {
      phone.classList.add("error-input");
      setError([
        ...error,
        "User phone number, should start with code of Ukraine +380",
      ]);
    }
    setPhone(e.target.value);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onClickPosition(e) {
    setPosition(e.target.value);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function signUp(e) {
    e.preventDefault();
    const error = [];
    if (!refEmail.current.value) {
      refEmail.current.classList.add("error-input");
      console.log(refEmail);
      error.push("email");
    }
    if (!refPhone.current.value) {
      refPhone.current.classList.add("error-input");
      error.push("phone");
    }
    if (!refName.current.value) {
      refName.current.classList.add("error-input");
      error.push("name");
    }
    if (img.name === undefined) {
      setImgError(true);
      error.push("img");
    }
    if (error.length === 0) {
      fetchData(1);
      setPage(1);
      const data = {
        position_id: Number(position),
        name: name,
        email: email,
        phone: phone,
        photo: img,
      };
      console.log(data);
      fetchPOST(data, KEY, POST_USER_URL);
      if (!errorPost) {
        fetchData(1);
        setPage(1);
      }
    }
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
              value={name}
              ref={refName}
            />
            <Input
              onChange={onChangeEmail}
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              ref={refEmail}
            />
            <Input
              onChange={onChangePhone}
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              ref={refPhone}
            />
            <span>+38 (XXX) XXX - XX - XX</span>
            {console.log(img.name)}
            <InputFile
              onChange={onChangeImg}
              accept="image/jpeg"
              error={imgError}
              name={img.name}
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
            <Button onClick={signUp}>Sign up</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
