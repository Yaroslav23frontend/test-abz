import React, { useEffect, useRef, useState } from "react";
import { useDataContext } from "./context/DataContext";
import { usePostContext } from "./context/PostContext";
import ModalWindow from "./Modal";

import Button from "./UI/Button";
import Input from "./UI/Input";
import InputFile from "./UI/InputFile";
import Radio from "./UI/Radio";
import Text from "./UI/Text";
import { KEY, POST_USER_URL } from "./utilites/url";
import { emailReg, imgReg, nameReg, phoneReg } from "./utilites/validation";
export default function SignUp() {
  //form
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState({});
  const [imgError, setImgError] = useState(false);
  const [position, setPosition] = useState(1);
  const [error, setError] = useState({
    email: true,
    name: true,
    phone: true,
    img: true,
  });
  function errorString(error) {
    let ms = {
      email: error.email ? "Invalid email" : "",
      name: error.name ? "user name, should be 2-60 characters" : "",
      phone: error.phone
        ? "user phone number, should start with code of Ukraine +380"
        : "",
      img: error.img
        ? "user photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB."
        : "",
    };
    const stringMs = Object.values(ms).filter((el) => el !== "");
    console.log(stringMs);
    return stringMs;
  }
  const refEmail = useRef();
  const refName = useRef();
  const refPhone = useRef();
  //fetch
  const { fetchData, setPage, setData } = useDataContext();
  const { fetchPOST, errorPost, postResult } = usePostContext();
  //modal
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  function modalVisibility(data) {
    setModalVisible(data);
  }
  useEffect(() => {
    if (postResult.success === true) {
      fetchData(1);
      setSuccess(true);
      setModalVisible(true);
      setTimeout(() => {
        setSuccess(false);
        setModalVisible(false);
      }, 1000);
    }
  }, [postResult]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangeImg(e) {
    let img = new Image();
    let blob = URL.createObjectURL(e.target.files[0]);
    img.src = blob;
    img.onload = function () {
      if (
        e.target.files[0].size > 5000000 ||
        !/\.(|jpe?g|)$/i.test(e.target.value) ||
        this.width < 70 ||
        this.height < 70
      ) {
        e.target.classList.add("error-input");
        setImgError(true);
        setError({ ...error, img: true });
      } else {
        e.target.classList.remove("error-input");
        setError({ ...error, img: false });
        setImgError(false);
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
      setError({ ...error, name: false });
    } else {
      name.classList.add("error-input");
      setError({ ...error, name: true });
    }
    setName(name.value);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangeEmail(e) {
    const email = e.target;
    console.log(e.target.value);
    if (emailReg.test(email.value)) {
      email.classList.remove("error-input");
      setError({ ...error, email: false });
    } else {
      email.classList.add("error-input");
      setError({ ...error, email: true });
    }
    setEmail(email.value);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onChangePhone(e) {
    e.preventDefault();
    const phone = e.target;

    if (phoneReg.test(phone.value)) {
      phone.classList.remove("error-input");
      setError({ ...error, phone: false });
    } else {
      phone.classList.add("error-input");
      setError({ ...error, phone: true });
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
    let tempError = false;
    if (!refEmail.current.value) {
      refEmail.current.classList.add("error-input");
      tempError = true;
    }
    if (!refPhone.current.value) {
      refPhone.current.classList.add("error-input");
      tempError = true;
    }
    if (!refName.current.value) {
      refName.current.classList.add("error-input");
      tempError = true;
    }
    if (img.name === undefined) {
      setImgError(true);
      tempError = true;
    }

    if (tempError === false || Object.values(error).indexOf(true) === -1) {
      const data = {
        position_id: Number(position),
        name: name,
        email: email,
        phone: phone,
        photo: img,
      };
      console.log(data);
      setModalVisible(true);
      fetchPOST(data, KEY, POST_USER_URL);
    } else {
      setModalVisible(true);
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
              placeholder="+38XXXXXXXXXX"
              maxLength="13"
              value={phone}
              ref={refPhone}
            />
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
        <ModalWindow
          visible={modalVisible}
          setModalVisible={modalVisibility}
          errorMassege={
            Object.values(error).indexOf(true) === -1
              ? [postResult.message]
              : errorString(error)
          }
          successMassege={success}
        />
      </div>
    </section>
  );
}
