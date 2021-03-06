import express from 'express';
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('servers list');
});

router.get('/main', function(req, res) {
  res.send('servers main page');
});

export default router;
