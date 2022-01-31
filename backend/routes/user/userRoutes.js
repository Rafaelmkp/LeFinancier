import express from 'express';

const router = express.Router();

router.post('/new-user', async (req, res, next) => {
  //do persist new user
});

router.get('users', async (req, res, next) => {

});

export default router;