//server


const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_full_stack"
);
const STRING = Sequelize.DataTypes.STRING;

const Artist = db.define("artist", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  period: {
    type: Sequelize.ENUM(
      "High Renaissance",
      "Late Renaissance",
      "Renaissance",
      "Baroque",
      "Modern"
    ),
  },
});

const Museum = db.define("museum", {
  name: {
    type: STRING,
    unnique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = {
    Artist,
    Museum,
    db
}