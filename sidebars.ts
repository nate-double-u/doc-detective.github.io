import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'category',
      label: 'Get started',
      items: ['get-started/intro', 'get-started/installation', 'get-started/concepts', 'get-started/create-your-first-test', 'get-started/sample-tests', 'get-started/resources' ]
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {type: 'generated-index', description: 'Doc Detective tries to have sane defaults, but it also allows for a lot of customization. This section covers the various configuration options available to you.'},
      items: ['get-started/config/contexts/index']
    },
    {
      type: 'category',
      label: 'Guides',
      link: {type: 'generated-index'},
      items: [
        'get-started/tests/index',
        {
          type: 'category',
          label: 'Actions',
          link: {type: 'generated-index', description: 'Actions are the commands performed in each step of a test. Each action has a specific purpose, such as checking a link, finding an element, or navigating to a URL.'},
          items: [
            'get-started/actions/checkLink',
            'get-started/actions/find',
            'get-started/actions/goTo',
            'get-started/actions/httpRequest',
            'get-started/actions/runShell',
            'get-started/actions/saveScreenshot',
            'get-started/actions/setVariables',
            'get-started/actions/startRecording',
            'get-started/actions/stopRecording',
            'get-started/actions/typeKeys',
            'get-started/actions/wait'
          ]
        }
      ]
    },
  ],
  referencesSidebar: [{type: 'autogenerated', dirName: 'references'}],
  contributeSidebar: [{type: 'autogenerated', dirName: 'contribute'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
