// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion.


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MS AI-900 학습 자료',
  tagline: 'Microsoft Azure AI Fundamentals 학습 자료',
  url: 'https://easy-ezik.github.io',
  baseUrl: '/ms-ai-900/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // 한국어 설정
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 편집 링크 제거 (필요시 추가 가능)
          editUrl: undefined,
        },
        blog: false, // 블로그 비활성화
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MS AI-900',
        // 로고 이미지가 있으면 아래 주석을 해제하고 파일명을 변경하세요
        // logo: {
        //   alt: 'MS AI-900 Logo',
        //   src: 'img/logo.png',  // static/img/logo.png 파일을 추가하세요
        //   srcDark: 'img/logo-dark.png',  // 다크 모드용 로고 (선택사항)
        //   width: 32,
        //   height: 32,
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '문서',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '시작하기',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MS AI-900 학습 자료.`,
      },
      // prism 설정은 기본값 사용
      // 다크 모드 자동 감지
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;

