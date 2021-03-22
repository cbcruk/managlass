import Protected from './Protected'

function withProtected(children) {
  return function render() {
    return <Protected>{children()}</Protected>
  }
}

export default withProtected
