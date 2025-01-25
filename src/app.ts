import express from 'express';
import AdminJS from 'adminjs';
import createError from "http-errors"
import { buildAuthenticatedRouter } from '@adminjs/express';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';
import { fileURLToPath } from 'url';
import path from 'path';
import blogRouter from './blog/blog.controller.js';
import cors from "cors"
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const start = async () => {
  const app = express();

  const staticImagesPath = path.join(__dirname, 'public');
  app.use('/public', express.static(staticImagesPath));

  await initializeDb();

  var allowlist = ['http://localhost:3000','https://enoverlab.com','https://www.enoverlab.com']
  var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {credentials : true, origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// cors setup
  app.use(cors(corsOptionsDelegate))

  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    },
  );
  
  app.use('/api/v1/', blogRouter)

  app.use(admin.options.rootPath, router);

  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err)
  
    res.status(err.statusCode || 500).send(err.message);
  });

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
