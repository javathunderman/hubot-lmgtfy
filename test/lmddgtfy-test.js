const Helper = require('hubot-test-helper');
const helper = new Helper('../src/lmddgtfy.js');
const co = require('co')
const expect = require('chai').expect;

describe('lmddgtfy', function() {
  beforeEach(function() {
    this.room = helper.createRoom();
  });
  afterEach(function() {
    this.room.destroy();
  });

  context('hubot responds to lmddgtfy', function() {
    beforeEach(function() {
      return co(function*() {
        yield this.room.user.say('jane', 'hubot lmddgtfy where is Côte d\'Ivoire?');
      }.bind(this));
    });

    it('will encode text', function() {
      expect(this.room.messages).to.eql([
        ['jane', 'hubot lmddgtfy where is Côte d\'Ivoire?'],
        ['hubot', 'http://lmddgtfy.net/?q=where%20is%20C%C3%B4te%20d%27Ivoire%3F']
      ]);
    });
  });
});
