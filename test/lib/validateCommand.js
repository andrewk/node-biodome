import { assert, expect } from 'chai';
import validate from '../../lib/validateCommand';

let result, msg;

describe('validateCommand', function() {
  it('errors on missing selector', function() {
    msg = {
      'squirrels' : {'id':'foo'},
      'command' : {'type' : 'write', 'value':  1234}
    };
    result = validate(msg);
    assert(!result.valid, 'expect invalid result');
    expect(result.error).to.equal('Invalid command: Missing selector');
  });

  it('errors on missing instruction', function() {
    msg = { 'selector' : {'id':'foo'} };
    result = validate(msg);
    assert(!result.valid, 'expect invalid result');
    expect(result.error).to.equal('Invalid command: Missing instruction');
  });

  it('errors on missing command type', function() {
    msg = {
      'selector' : {'id':'foo'},
      'instruction' : {'value':  1234}
    };

    result = validate(msg);
    assert(!result.valid, 'expect invalid result');
    expect(result.error).to.equal('Invalid command: Invalid instruction');
  });

  it('passes on a valid command', function() {
    var msg = {
      'selector' : {'id':'foo'},
      'instruction' : {'type' : 'write', 'value':  1234}
    };
     
    result = validate(msg);
    assert(result.valid, 'expect valid result');
    assert(result.error == null);
  });
});
