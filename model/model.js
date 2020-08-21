const db = require('../db/config.js')

const chyl ={}

//find
chyl.findAllUsers = () => {
    return db.query(`SELECT * FROM users `);
  };
chyl.findAllLists = () => {
    return db.query(`SELECT * FROM lists `);
  };
chyl.findAllListEntries = () => {
    return db.query(`SELECT * FROM list_entries `);
  };

chyl.findByIdUser = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1
  `,
    [id]
  );
};

chyl.findByIdList = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM lists
    WHERE id = $1
  `,
    [id]
  );
};

chyl.findByIdListEntries = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM list_entries
    WHERE id = $1
  `,
    [id]
  );
};

//adding user to database
chyl.createUser = users => {
  return db.one(
    `
    INSERT INTO users
    (first_name, last_name, current_city)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [users.first_name, users.last_name, users.current_city]
  );
};

//creating new list and adding to database
chyl.createList = lists => {
  return db.one(
    `
    INSERT INTO lists
    (lists_name, list_type, list_entries_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [lists.lists_name, lists.list_type, lists.list_entries_id]
  );
};

//creating new list entry and adding to database
chyl.createListEntry = list_entries => {
  return db.one(
    `
    INSERT INTO list_entries
    (name, temp, description, img, address, city, rating, link)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `,
  [list_entries.name, list_entries.temp, list_entries.description, list_entries.img, list_entries.address, list_entries.city, list_entries.rating, list_entries.link]
  );
};


//updates

chyl.updateUser = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      first_name = $1,
      last_name = $2,
      current_city = $3
    WHERE id = $4
    RETURNING *
  `,
    [users.first_name, users.last_name, users.current_city, id]
  );
};

chyl.updateList = (lists, id) => {
  return db.one(
    `
    UPDATE lists SET
      lists_name = $1,
      list_type = $2,
      list_entries_id = $3 
    WHERE id = $4
    RETURNING *
  `,
    [lists.lists_name, lists.list_type, lists.list_entries_id, id]
  );
};

chyl.updateListEntry = (list_entries, id) => {
  return db.one(
    `
    UPDATE list_entries SET
        description = $1,
        address= $2,
        link = $3 
    WHERE id = $4
    RETURNING *
  `,
  [ list_entries.description, list_entries.address, list_entries.link, id]
  );
};
//deleting stuff
chyl.destroyUser = id => {
  return db.none(
    `
    DELETE FROM users
    WHERE id = $1
  `,
    [id]
  );
};
chyl.destroyLists = id => {
  return db.none(
    `
    DELETE FROM lists
    WHERE id = $1
  `,
    [id]
  );
};
chyl.destroyListEntry = id => {
  return db.none(
    `
    DELETE FROM list_entries
    WHERE id = $1
  `,
    [id]
  );
};
chyl.addphoto = users => {
  return db.one(
    `INSERT INTO users
    (user_img)
    VALUES ($1)
    RETURNING *
  `,
    [users.user_img]
  );
};


module.exports = chyl