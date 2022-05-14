// pesticide controller

const getPesticide = async (req, res) => {
  res.send("get all pesticides");
};

const getPesticideById = async (req, res) => {
  res.send("get pesticide by id");
};

const createPesticide = async (req, res) => {
  res.send("create pesticide");
};

const updatePesticide = async (req, res) => {
  res.send("update pesticide");
};

const deletePesticide = async (req, res) => {
  res.send("delete pesticide");
};

module.exports = {
  getPesticide,
  getPesticideById,
  createPesticide,
  updatePesticide,
  deletePesticide,
};
