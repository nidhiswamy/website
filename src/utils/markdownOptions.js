import { 
  Header1,
  Header2,
  Description,
  Body,
  BoldText,
  List,
  Code,
  LinkText,
  Copyright,
  Image
} from '@/app/ui/BlogLayout';

export default {
  overrides: {
    h1: {
      component: Header1,
    },
    h2: {
      component: Header2,
    },
    blockquote: {
      component: Description,
    },
    p: {
      component: Body,
    },
    ol: {
      component: List
    },
    ul: {
      component: List
    },
    code: {
      component: Code
    },
    a: {
      component: LinkText
    },
    hr: {
      component: Copyright
    },
    img: {
      component: Image
    }
  }
};