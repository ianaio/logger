/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */

const chalk = require('chalk');

// Force coloring the output even in CI
module.exports = new chalk.Instance({level: 3});

