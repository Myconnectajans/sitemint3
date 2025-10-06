'use client';
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// internal
import { EyeCut, Lock, UserTwo } from "@svg/index";
import ErrorMessage from "@components/error-message/error";
import { notifyError, notifySuccess } from "@utils/toast";
import { useRouter } from "next/navigation";
import { supabase } from "@lib/supabaseClient";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // onSubmit
  const onSubmit = async (data) => {
    const { email, password } = data;
    const { error, user, session } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      notifyError(error.message);
      console.log(error.message, 'error message');
    } else {
      notifySuccess("Başarıyla giriş yapıldı");
      setTimeout(() => {
        router.push("/");
      }, 500);
      console.log(user, session, 'success message');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <span>
              <UserTwo />
            </span>
          </div>
          <ErrorMessage message={errors.email?.message} />
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                {...register("password")}
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                id="password"
              />
              <span>
                <Lock />
              </span>
            </div>
            <span
              className="login-input-eye"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
            </span>
            {/* error msg start */}
            <ErrorMessage message={errors.password?.message} />
            {/* error msg end */}
          </div>
        </div>
      </div>

      <div className="login__option mb-25 d-sm-flex justify-content-between">
        <div className="login__remember">
          <input type="checkbox" id="tp-remember" />
          <label htmlFor="tp-remember">Remember me</label>
        </div>
        <div className="login__forgot">
          <Link href="/forgot">forgot password?</Link>
        </div>
      </div>
      <div className="login__btn">
        <button type="submit" className="tp-btn w-100">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
