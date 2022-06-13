interface EntityConstructor {
  validate: any;
}

export interface Blog {
  title: string;
  description: string;
  author: string;
  time: string;
}

const buildMakeBlog = ({ validate }: EntityConstructor) => {
  const makeBlog = ({ title, description, author, time }: Blog) => {
    if (!validate({ title, description, author, time }))
      throw new Error("User is not valid");

    return Object.freeze({
      getTitle: () => title,
      getDescription: () => description,
      getAuthor: () => author,
      getTime: () => time,
    });
  };

  return makeBlog;
};

export default buildMakeBlog;
