import factory from 'mxgraph';

declare global {
  interface Window {
    mxBasePath: string;
  }
}

window['mxBasePath'] = 'assets/mxgraph';

export default factory({
  // not working see https://github.com/jgraph/mxgraph/issues/479
  mxBasePath: '',
});
