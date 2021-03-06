const Command = require('./command.js');

/**
 * The Push command pushes a given register on to the stack at execution time.
 */
class Push extends Command {
  /**
   * Keeps note of the register to push onto stack
   * @param {string} reg - The register to push onto the stack
   * @constructor
   */
  constructor(reg) {
    super();
    this.reg = reg;
  }

  /**
   * Execute will push the value of the register specified in the constructor onto the stack.
   * @param {Object} currRegs - The current state of the registers
   * @param {Object} currFlags - The current state of the flags
   * @param {Object} stack - The call stack
   * @returns {Object} current registers and current flags are returned unchanged
   */
  execute(currRegs, currFlags, stack) {
    let value = currRegs[this.reg];
    stack.push(value);
    return { regs: currRegs, flags: currFlags };
  }
}

module.exports = Push;
