// @flow

export const userResponse = (user: Object = {}) => ({
  username: user.username,
  bio: user.bio,
  image: user.image || 'https://www.gravatar.com/avatar/f40260c4058cc904b7db652c26099966',
})

export const articleResponse = (article: Object = {}) => ({
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

/**
 * Takes a route handling function and returns
 * a function that wraps it in a `try/catch`. Caught
 * exceptions are forwarded to the `next` handler.
 */
export function errorChecking(routeHandler: Function) {
  // eslint-disable-next-line func-names
  return async function (req: Object, res: Object, next: Function) {
    try {
      await routeHandler(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}

export function notAllowed(req: Object, res: Object) {
  res.status(405).json({ error: 'Method not allowed' })
}

/**
 * Takes a route handling function and returns a function
 * that wraps it after first checking that the strings in
 * `reserved` are not part of `req.body`. Used for ensuring
 * create and update requests do not overwrite server-generated
 * values.
 */
export function checkReservedParams(routeHandler: Function, ...reserved: Array<string>) {
   // eslint-disable-next-line func-names
  return function (req: Object, res: Object, next: Function) {
    for (let i = 0; i < reserved.length; i += 1) {
      const reservedKey = reserved[i]

      if (req.body[reservedKey]) {
        return res.status(400).json({
          error: `Cannot specify ${reservedKey} as part of request body`,
        })
      }
    }

    return routeHandler(req, res, next)
  }
}

