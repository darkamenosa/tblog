// @flow

export const userResponse = (user: Object) => ({
  username: user.username,
  bio: user.bio,
  image: user.image || 'https://www.gravatar.com/avatar/f40260c4058cc904b7db652c26099966',
})

export const articleResponse = (article: Object) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  body: article.body,
  createdAt: article.createdAt,
  updatedAt: article.updatedAt,
  tagList: article.tagList,
  favorited: false,
  favoritesCount: article.favoritesCount,
  author: userResponse(article.author),
})
