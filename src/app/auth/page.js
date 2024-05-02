"use client"

import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  //const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [authData, setAuthData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center pt-3 bg-slate-50 gap-4">
        <Link href="/" className=" absolute left-10 top-10 border border-black rounded-lg px-2 py-px">geri</Link>
      <form
        className=" bg-white py-4 border rounded border-slate-300 flex flex-col w-[350px] min-h-[400px] max-h-[500px] h-[60vh] justify-between items-center px-10"
        onSubmit={(e) => {
          e.preventDefault();
          if (isLogin) {
            console.log("login");
            login({ email: authData.email, password: authData.password })
              .then((res) => {
                dispatch(loginState(res.data));
                window.location = "/";
              })
              .catch((err) => {
                toast(err.response.data.message, {
                  position: "top-right",
                  autoClose: 5000,
                });
              });
          } else {
            console.log(authData);
            register(authData)
              .then((res) => {
                dispatch(registerState(res.data));
                window.location = "/";
              })
              .catch((err) => {
                toast(err.response.data.message, {
                  position: "top-right",
                  autoClose: 5000,
                });
              });
          }
        }}
      >
        <h1 className=" font-bold text-4xl mt-8">Kurum İletişim</h1>
        <div className=" flex flex-col w-full gap-2">
          {!isLogin && (
            <input
              className=" border rounded h-9 px-2"
              type="text"
              placeholder="kullanıcı adı"
              onChange={(e) => {
                setAuthData({ ...authData, username: e.target.value });
              }}
              value={authData.username}
            />
          )}
          {!isLogin && (
            <input
              className=" border rounded h-9 px-2"
              type="text"
              placeholder="Adı Soyadı"
              onChange={(e) => {
                setAuthData({ ...authData, fullname: e.target.value });
              }}
              value={authData.fullname}
            />
          )}
          <input
            className=" border rounded h-9 px-2"
            type="text"
            placeholder="E-posta"
            onChange={(e) => {
              setAuthData({ ...authData, email: e.target.value });
            }}
            value={authData.email}
          />
          <input
            className=" border rounded h-9 px-2"
            type="password"
            placeholder="Şifre"
            onChange={(e) => {
              setAuthData({ ...authData, password: e.target.value });
            }}
            value={authData.password}
          />
          <button
            type="submit"
            className=" border rounded-lg h-9 bg-sky-400 text-white"
          >
            {isLogin ? "Giriş yap" : "Kaydol"}
          </button>
        </div>
        <div className=" flex w-full items-center gap-4 text-slate-500 text-sm">
          <span className=" h-px bg-slate-300 flex-1"></span>
          <p>YA DA</p>
          <span className=" h-px bg-slate-300 flex-1"></span>
        </div>
        <p className=" text-sky-900">Facebook ile Giriş Yap</p>
        {isLogin && <p className=" text-xs">Şifreni mi unuttun?</p>}
      </form>
      <div className="bg-white py-4 w-[350px] border rounded border-slate-300 flex justify-center items-center text-sm">
        {isLogin ? "Hesabın yok mu?" : "Hesabın var mı?"}{" "}
        <span
          className=" font-semibold text-sky-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Kaydol" : "Giriş yap"}
        </span>
      </div>
    </div>
  );
};

export default page;
