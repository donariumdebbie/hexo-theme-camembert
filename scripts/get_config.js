const { defaultsDeep, once, get } = require('lodash');

hexo.extend.helper.register('getConfig', function (key, defaultValue){
  const config = once(defaultsDeep)({}, this.config, this.theme);
  return get(config, key, defaultValue);
});