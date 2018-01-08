import merge from 'lodash.merge';
import { log } from 'util';

// These are generic methods used in the generic controllers for all models
export const controllers = {
  createOne(model, body) {
    return model.create(body);
  },

  updateOne(docToUpdate, update) {
    merge(docToUpdate, update);
    return docToUpdate.save();
  },

  deleteOne(docToDelete) {
    return docToDelete.remove(docToDelete);
  },

  getOne(docToGet) {
    return Promise.resolve(docToGet);
  },

  getAll(model) {
    return model.find({}).limit(5);
  },

  findByParam(model, id) {
    return model.findById(id);
  }
};

export const createOne = model => (req, res, next) => {
  return controllers
    .createOne(model, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
};

export const updateOne = model => async (req, res, next) => {
  const docToUpdate = req.docFromId; // doc to update
  const update = req.body; // info to update in the doc
console.log(docToUpdate);
  return controllers
    .updateOne(docToUpdate, update)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
};

export const deleteOne = model => (req, res, next) => {
  return controllers
    .deleteOne(req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
};

export const getOne = model => (req, res, next) => {
  return controllers
    .getOne(req.docFromId)
    .then(doc => res.status(200).json(doc))
    .catch(error => next(error));
};

export const getAll = model => (req, res, next) => {
  return controllers
    .getAll(model)
    .then(docs => res.json(docs))
    .catch(error => next(error));
};

export const findByParam = model => (req, res, next, id) => {
  return controllers
    .findByParam(model, id)
    .then(doc => {
      if (!doc) {
        next(new Error('Not Found Error'));
      } else {
        // console.log(doc);
        req.docFromId = doc;
        next();
      }
    })
    .catch(error => {
      next(error);
    });
};

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  };

  return { ...defaults, ...overrides };
};
