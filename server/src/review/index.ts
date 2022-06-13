interface EntityConstructor {
  validate: any;
}

export interface Review {
  userId: string;
  imageUrl: string;
  rating: number;
  movieId: string;
}

const buildMakeReview = ({ validate }: EntityConstructor) => {
  const makeReview = ({ imageUrl, movieId, rating, userId }: Review) => {
    if (!validate({ imageUrl, movieId, rating, userId }))
      throw new Error("User is not valid");

    return Object.freeze({
      getUserId: () => userId,
      getImageUrl: () => imageUrl,
      getRating: () => rating,
      getMovieId: () => movieId,
    });
  };

  return makeReview;
};

export default buildMakeReview;
