const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');

  next();
});

//this order matters
router.get('/', controller.indexUsers);

router.get('/lists', controller.indexLists);
router.get('/lists/:id', controller.showList);

router.get('/listEntries', controller.indexListEntries);
router.get('/users/:id', controller.users);
router.get('/listEntries/:id', controller.showListEntries);
router.post('/createUser', controller.createUser);
router.post('/createUser/photo', controller.addphoto);
router.post('/createLists', controller.createList);
router.post('/createListEntry', controller.createListEntry);
router.put('/users/:id', controller.updateUser);
router.put('/lists/:id', controller.updateList);
router.put('/listEntries/:id', controller.updateListEntry);
router.delete('/users/:id', controller.destroyUser);
router.delete('/lists/:id', controller.destroyList);
router.delete('/listEntries/:id', controller.destroyListEntry);

module.exports = router;
