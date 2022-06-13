interface EntityConstructor {
  validate: any;
}

export interface Movie {
  title: string;
  description: string;
  userRating: string;
  publicRating: string;
  numberOfVotes: number;
}

const buildMakeMovie = ({ validate }: EntityConstructor) => {
  const makeMovie = ({
    title,
    description,
    userRating,
    publicRating,
    numberOfVotes,
  }: Movie) => {
    if (
      !validate({ title, description, userRating, publicRating, numberOfVotes })
    )
      throw new Error("User is not valid");

    return Object.freeze({
      getTitle: () => title,
      getDescription: () => description,
      getUserRating: () => userRating,
      getPublicRating: () => publicRating,
      getNumberOfVotes: () => numberOfVotes,
    });
  };

  return makeMovie;
};

export default buildMakeMovie;
