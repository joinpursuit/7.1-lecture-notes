const pets = [
  { id: "a234", name: "Oreo", species: "cat" },
  { id: "a345", name: "Luna", species: "dog" },
  { id: "b234", name: "Bell", species: "cat" },
  { id: "cda2", name: "Snowball", species: "rabbit" },
  { id: "def4", name: "Nibbles", species: "rabbit" },
  { id: "eft2", name: "Bella", species: "chinchilla" },
];

const getAll = () => pets;

const getOne = (id) => pets.find((pet) => pet.id === id);

export default {
  getOne,
  getAll,
};
