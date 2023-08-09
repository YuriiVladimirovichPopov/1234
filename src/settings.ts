import  express from 'express'
import cors from 'cors'
import { blogsRouter } from './routers/blogs-router';
import { postsRouter } from './routers/posts-router';
import {testingRouter } from './routers/testing-router';
import { RouterPaths } from './routerPaths';

export const app = express()
const corsMiddleware = cors();
app.use(corsMiddleware)
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)



app.use(RouterPaths.blogs, blogsRouter)

app.use(RouterPaths.posts, postsRouter)

app.use(RouterPaths.__test__, testingRouter)