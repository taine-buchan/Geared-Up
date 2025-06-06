// for more information about mocking tokens
// https://carterbancroft.com/mocking-json-web-tokens-and-auth0/

import jwt, { SignOptions } from 'jsonwebtoken'
import nock from 'nock'
import dotenv from 'dotenv'

dotenv.config()

// this private key is for testing purposes only so that we can mock tokens
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAwaZ3afW0/zYy3HfJwAAr83PDdZvADuSJ6jTZk1+jprdHdG6P
zH9XaB6xhzvwTIJFcWuREkNSC06MDLCuvmZ8fj93FcNaZ2ZJ0LFvY4SODMDqFekE
5vD2Y15aSI2Y69qwKlVLphvEEXJ/FRqIHQX9wwCtwVsnqcLt/f5aNWRHyk2jwhz7
IBm+dLu9/CV8AsvE5ddgOYYbNk+SMCjznESZcMg1KRzbdawnOklzloc+Q0iCxQK7
022ukVxFbmT7U1hTVOTOzrruqBxptPDiutkKfOXebzYyZodlFFL5MWcatCWS3XL5
1KBIeKWny5mExZPzIf1ofGuJe0zxllw8olgMqQIDAQABAoIBAB6x2DO/cpURbjZr
9lqsrErGirDVoze5GfM5tVMa0cHXQ0g9TiXH+X7TfqhE4+38qC02M6SFbzfDl4db
ahdb/1ezj5ivgmDpYcHmnhVUKX/0BCa87L3+a8+MYRsm9ppL66iKJJeLxyRM1b/u
mKyhCnwiW2hOnpbWAwtDieD0qDx0kzkYLevG3MivaAe1rDD6gS2LhPy6tGtmemRv
uT03a1X9DEO0U45oDvhi0V6dm8jz/eBBybHt0WWNNi2c5PVjhIL3HfT2UMiNa0xf
O3g1eGc8bdVPW4z0Kz1g+H/uvguTEqKVq4yT8Y2LuF0Vm2MxptqAmxxJTyL5q0ZI
V7PDg0ECgYEAziWa0BWbX+cMfIJXNi89aMpgBqBLdvQt9rE/TGjVeViPBcG8AoRr
Osxzct6tMd+DQO3uzx5DES2FiM7gbOtpGKnLWjJImmCq2gPCtWXo74I8il5egJNh
vq03eP7wdcm+bFta4+ScGv2wAbx28y3+5fQZPqzUISz+2dM8Hxx9GO0CgYEA8Hs0
ap+FKD/nbRFfYMVLeP0WfJYuSpn9MF8FT73RSvCva4Ql0a3WbaZ5AMgLFGjm5nRp
idf5vPMaXbleDG1xZnkhhBXidwFmn4TCVvG/fiDjXOULuJ5qjKLv+5dTG72GDHGG
onNUwn1LQ3bJpGZ3VHIFJXOcQHl2Dxa6Cn7G9y0CgYBn0gyL67XasNRbCJG/mj8F
PZbq/2PCPuu/KDlG1C1e9bjiH1X+to4CiOFD4t27FmRWGP6ClS0Vw6VS502jzVOa
tjjR7i0egrzJG8e979tGdILk9O4HNzKtAzPC3jJgQACFNeUqjQIJneY8mZwWkP2k
9jCYnhYftzeKoJXQ3VoraQKBgQDiprxYYdDWhqRQH7eNNWZUufSfp8wpc8k19djD
t1uzDfXHl90tKnKXFfelzOTkb5pwSffOe0hd1aJcA4GopN3kfvYfz6CKGT/nyPCB
kYeyEL05qIbLkkNKGaelsJIb6xyUTctfAOQ6Cm0NQL/7urdtV6mSCsyR1+h1gC4I
BkTwYQKBgC7s9J9rRT23bx0NKyyHKu7/akAdC8m0YCohU5L7NNw0UZql0p8EQguh
bKhNO4+rlwh2VzIi5tVMQTYoUbaab8n17fdNxtfTsG0h4vj8q+7ab59GYf1TKn0R
JEn/NS0gRKfNh6bwZaSTfhFxALmKApVNTPm2UT9G5hADTcw4xTQf
-----END RSA PRIVATE KEY-----`

const nockReply = {
  keys: [
    {
      alg: 'RS256',
      kty: 'RSA',
      use: 'sig',
      n: 'waZ3afW0_zYy3HfJwAAr83PDdZvADuSJ6jTZk1-jprdHdG6PzH9XaB6xhzvwTIJFcWuREkNSC06MDLCuvmZ8fj93FcNaZ2ZJ0LFvY4SODMDqFekE5vD2Y15aSI2Y69qwKlVLphvEEXJ_FRqIHQX9wwCtwVsnqcLt_f5aNWRHyk2jwhz7IBm-dLu9_CV8AsvE5ddgOYYbNk-SMCjznESZcMg1KRzbdawnOklzloc-Q0iCxQK7022ukVxFbmT7U1hTVOTOzrruqBxptPDiutkKfOXebzYyZodlFFL5MWcatCWS3XL51KBIeKWny5mExZPzIf1ofGuJe0zxllw8olgMqQ', // eslint-disable-line max-len
      e: 'AQAB',
      kid: '0',
    },
  ],
}

// nock will intercept the http call and will return the nockReply object
nock(`https://${process.env.VITE_AUTH0_DOMAIN}/`)
  .persist()
  .get('/.well-known/jwks.json')
  .reply(200, nockReply)

export const getMockToken = (role = 'user') => {
  const user = {
    email: 'user.harakeke25@example.com',
  }

  const payload = {
    nickname: user.email.split('@').shift(),
    name: user.email,
    sub: 'auth0|123',
    'https://geared-up/role': role,
    permissions:
      role === 'admin' ? ['delete:comments', 'read:data'] : ['read:data'],
  }

  const options: SignOptions = {
    header: { kid: '0', alg: 'RS256' },
    expiresIn: '1d',
    audience: process.env.VITE_AUTH0_AUDIENCE as string,
    issuer: `https://${process.env.VITE_AUTH0_DOMAIN}/`,
  }

  return jwt.sign(payload, privateKey, options)
}
