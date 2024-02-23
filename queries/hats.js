const db = require("../db/dbConfig");

const getAllHats = async () => {
  try {
    const hats = await db.any("SELECT * FROM hats");
    return hats;
  } catch (error) {
    return error;
  }
};

const getOneHat = async (hatId) => {
  try {
    const hat = await db.one("SELECT * FROM hats WHERE id=$1", hatsId);
    return hat;
  } catch (error) {
    return error;
  }
};

const createOneHat = async ({ name, description }) => {
  try {
    const newHat = await db.one(
      "INSERT INTO hats (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    return newHat;
  } catch (error) {
    return error;
  }
};

const updateOneHat = async (id, body) => {
  const { name, description } = body;
  try {
    const updatedHat = await db.one(
      "UPDATE hats SET name=$1, description=$2 WHERE id=$3 RETURNING *",
      [name, description, id]
    );
    return updatedHat;
  } catch (error) {
    return error;
  }
};

const deleteOneHat = async (id) => {
  try {
    const deletedHat = db.one(
      "DELETE FROM animes WHERE id=$1 RETURNING *",
      id
    );
    return deletedHat;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
  getOneAnime,
  createOneAnime,
  updateOneAnime,
  deleteOneAnime,
};
