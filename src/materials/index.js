/**
 * const button = {
 *  label: '按钮',
 *  category: 'from',
 *  icon: '',
 *  style: {},
 *  defaultValue: {
 *    min: 5
 *  },
 *  source: {
 *    js: 'https://xxx.cdn.com/dist/v-biz.js',
 *    css: 'https://xxx.cdn.com/dist/v-biz.css',
 *    manifest: 'https://xxx.cdn.com/dist/v-biz.json'
 *  },
 *  properties: {},
 *  type: 'built-in' | 'remote'
 * }
 */
const dsls = [];
const register = (dsl) => {
  dsls.push(dsl);
};

register({
  label: 'Button',
  icon: '',
  style: {},
  category: '',
  defaultValue: null,
  source: null,
  type: 'built-in',
  is: 'v-button',
  props: {}
});

export default dsls;
