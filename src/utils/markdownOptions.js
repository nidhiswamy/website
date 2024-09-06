export default {
  overrides: {
    h1: {
      component: 'h1',
      props: {
        className: 'text-2xl sm:text-4xl mt-8 mb-4'
      }
    },
    h2: {
      component: 'h2',
      props: {
        className: 'text-xl sm:text-3xl mt-8 mb-4'
      }
    },
    p: {
      component: 'p',
      props: {
        className: 'text-gray'
      }
    }
  }
};