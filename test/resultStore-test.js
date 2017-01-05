'use strict';

const sinon = require('sinon');
const resultStore = require('../stores/resultStore');
const ResultStore = resultStore.constructor;
const Store = require('../stores/Store');

describe('resultStore', function() {
  it('should be an object', function() {
    expect(resultStore).toBeA(Object);
  });

  it('should be an instance of FileStore', function() {
    expect(resultStore.constructor.name).toBe('ResultStore');
  });

  it('should be an instance of Store', function() {
    expect(resultStore).toBeA(Store);
  });

  it('should store an array of results', function() {
    expect(resultStore.getState().results).toEqual([]);
  });

  describe('#isOutdated', function() {
    it('should be a function', function() {
      expect(resultStore.isOutdated).toBeA(Function);
    });

    context('when request was made before current state', function() {
      it('should return true', function() {
        const updated = new Date(2);
        const resultStore = new ResultStore({ results: [], updated });
        expect(resultStore.isOutdated(new Date(1))).toBe(true);
      });
    });

    context('when request was made after current state', function() {
      it('should return false', function() {
        const updated = new Date(2);
        const resultStore = new ResultStore({ results: [], updated });
        expect(resultStore.isOutdated(new Date(3))).toBe(true);
      });
    });
  });
});
