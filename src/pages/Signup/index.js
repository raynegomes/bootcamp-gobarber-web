import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve conter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas não estão iguais'
  ),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBaber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">
          {loading ? 'Criando conta, aguarde...' : 'Criar Conta Gratuíta'}
        </button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
