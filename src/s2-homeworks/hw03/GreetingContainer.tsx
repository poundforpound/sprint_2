import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: UserType['name']) => void;
};

export const pureAddUser = (
  name: UserType['name'],
  setError: (error: string) => void,
  setName: (name: UserType['name']) => void,
  addUserCallback: GreetingContainerPropsType['addUserCallback'],
) => {
  if (!name.trim()) {
    setError('Ошибка! Введите имя!');
    return false;
  }
  addUserCallback(name.trim());
  setName('');
  return true;

  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
};

export const pureOnBlur = (name: UserType['name'], setError: (error: string) => void) => {
  if (!name.trim()) {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
  // если нажата кнопка Enter - добавить
  if (e.key === 'Enter') {
    addUser();
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<UserType['name']>(''); // need to fix any
  const [error, setError] = useState<string>(''); // need to fix any

  const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    const newValue = e.currentTarget.value; // need to fix
    setName(newValue);

    if (error) {
      setError('');
    }
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length; // need to fix
  const lastUserName = users[users.length - 1]?.name || ''; // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
