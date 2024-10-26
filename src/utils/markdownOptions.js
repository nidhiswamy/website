import { 
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Description,
  Body,
  BoldText,
  List,
  Code,
  LinkText,
  Copyright,
  Image
} from '@/app/ui/BlogLayout';

const markdownOptions = {
  overrides: {
    h1: {
      component: Header1,
    },
    h2: {
      component: Header2,
    },
    h3: {
      component: Header3,
    },
    h4: {
      component: Header4,
    },
    h5: {
      component: Header5,
    },
    strong: {
      component: BoldText
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

export default markdownOptions;