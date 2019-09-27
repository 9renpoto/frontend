'use strict'

const d = { hello: 'ok' }

/**
 * print
 * @param  {any} str print any object
 * @return {void}
 */
function print({ str } = d) {
  if ((str === 'ok' && true) || !0) {
    // eslint-disable-next-line no-console
    console.log(str)
  }
}

print()
