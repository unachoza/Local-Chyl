const chyldb = require('../model/model.js')
const controller = {}

controller.indexUsers = (req, res) => {
    chyldb.findAllUsers()
    // res.send(data)
    .then(data => {
      res.json({
        message: 'ok',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.indexLists = (req, res) => {
    chyldb.findAllLists()
    // res.send(data)
    .then(data => {
      res.json({
        message: 'ok',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.indexListEntries = (req, res) => {
    chyldb.findAllListEntries()
    // res.send(data)
    .then(data => {
      res.json({
        message: 'ok',
        data: data,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  
  controller.users = (req, res) => {
    chyldb.findByIdUser(req.params.id)
    .then(chyldb => {
      res.json({
        message: 'ok',
        data: chyldb,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  
  
  controller.showList = (req, res) => {
    chyldb.findByIdList(req.params.id)
    .then(data => {
      res.json({
        message: 'ok',
        data: data,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.showListEntries = (req, res) => {
    chyldb.findByIdListEntries(req.params.id)
    .then(data => {
      res.json({
        message: 'ok',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

//
//
// creating users
//not sure about .then(chyldb) is it suppose to be the name of the database or table?
//
controller.createUser = (req, res) => {
    console.log("checking create" , req.body)
    chyldb.createUser({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        current_city: req.body.current_city
    })
    .then(data => {
      res.json({
        message:'yay new user!',
        data: data
      });
    }).catch(err => {
      res.status(500).json(err);
    });
  }

  controller.createList = (req, res) => {
    console.log("checking create" , req.body)
    chyldb.createList({
      lists_name: req.body.lists_name,
      list_type: req.body. list_type,
      list_entries_id: req.body. list_entries_id,
    })
    .then(data => {
      res.json({
        message:'yay new list!',
        data: data
      });
    }).catch(err => {
      res.status(500).json(err);
    });
  }
  controller.createListEntry= (req, res) => {
     console.log("checking create" , req.body)
    chyldb.createListEntry({
      name: req.body.name,
      temp: true,
      description: req.body.description,
      img: req.body.img,
      address: req.body.address,
      city: req.body.city,
      rating: req.body.rating,
      link: req.body.link
    }).then(data => {
      res.json({
        message: 'new entry to list',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };



 //////
 ////// updating entries
 /////  
  controller.updateUser = (req, res) => {
    chyldb.updateUser({
      first_name: req.body.first_name,
      last_name: req.body. last_name,
      current_city: req.body.current_city,
    },req.params.id)
    .then(data => {
      res.json({
        message: 'ok',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.updateList= (req, res) => {
    chyldb.updateList({
        lists_name: req.body.lists_name,
        list_type: req.body.list_type,
        list_entries_id: req.body.list_entries_id,
    },req.params.id)
    .then(data => {
      res.json({
        message: 'ok, made change',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.updateListEntry = (req, res) => {
    chyldb.updateListEntry({
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        address: req.body.address,
        city: req.body.city,
        rating: req.body.rating,
        link: req.body.link
    },req.params.id)
    .then(data => {
      res.json({
        message: 'ok, made change',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.addphoto = (req, res) => {
    console.log("checking create" , req.body)
    chyldb.addphoto({
        user_img: req.body.user_img
    })
    .then(data => {
      res.json({
        message:'yay new photo!',
        data: data
      });
    }).catch(err => {
      res.status(500).json(err);
    });
  }


  ////deleting entries
  ////
  ////
  ////
  controller.destroyUser = (req, res) => {
    chyldb.destroyUser(req.params.id)
    .then(data => {
      res.json({
        message: 'was user destroyed',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  controller.destroyList = (req, res) => {
    chyldb.destroyList(req.params.id)
    .then(data => {
      res.json({
        message: 'list was destroyed',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
 
  controller.destroyListEntry = (req, res) => {
    chyldb.destroyListEntry(req.params.id)
    .then(data => {
      res.json({
        message: 'list entry was destroyed',
        data: data
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  module.exports = controller;