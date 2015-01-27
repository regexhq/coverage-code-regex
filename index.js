/**
 * coverage-code-regex <https://github.com/regexps/coverage-code-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function coverageCodeRegex() {
  return /(?:__cov_(?:[\w\W\S.,$]{1,999})\.(?:.{1})\[\'(?:\d{1,})\'\]\+\+\;)/;
};
