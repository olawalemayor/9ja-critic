export interface User {
  name: string;
  email: string;
  password: string;
  username: string;
}

const buildMakeUser = (validate: any) => {
  const makeUser = ({ username, email, password, name }: User) => {
    if (!validate({ username, email, password, name }))
      throw new Error("User is not valid");

    return Object.freeze({
      getUsername: () => username,
      getEmail: () => email,
      getPassword: () => password,
      getName: () => name,
    });
  };

  return makeUser;
};

export default buildMakeUser;
