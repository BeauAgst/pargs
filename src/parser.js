const helpers = require('./helpers');

const filterArgs = (x) => x.slice(0, 2) === '--' && x.slice(2, 3) !== '-';

const mapArgs = (x) => {
    const xtemp = x.split('=');
    if (!xtemp) return [helpers.stripFlagDashes(x), undefined];
    return [helpers.stripFlagDashes(xtemp[0]), xtemp[1]];
}

const reduceArgs = (acc, next) => {
    acc[next[0]] = next[1];
    return acc;
};

exports.parseArgs = function(a) {
    return a
        .filter(filterArgs)
        .map(mapArgs)
        .reduce(reduceArgs, {});
}
