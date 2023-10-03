import React from 'react';
import st from './AuthenticationComponent.module.scss';


import LoginForm from './LoginForm/LoginForm';

const AuthenticationComponent = () => {
  return (
    <section className='flex flex-wrap items-center'>
      <div
        className="g-6 flex h-full items-center justify-center lg:justify-between">
        <div
          className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image" />
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default AuthenticationComponent;
