module.exports = {
  title: '山竹',
  tagline: 'The tagline of my site',
  url: 'https://yixiaoke.cn',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: '周瑞', // Usually your GitHub org/user name.
  projectName: '山竹', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '山竹',
      logo: {
        alt: 'My Site Logo',
        // src: 'img/logo.svg',
        src: 'img/logo.png'
      },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          to: '/',
          label: '博客',
          position: 'right'
        },
        {
          href: 'https://github.com/yixiaoke',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://blog.csdn.net/qq_43361084',
          label: 'CSDN',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [{
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [{
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [{
              label: 'Blog',
              to: '/',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/qq_43361084',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yixiaoke',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 山竹 Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          path: "./blog",
          routeBasePath: "/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};