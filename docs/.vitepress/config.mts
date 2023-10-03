import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BetaBreak",
  description: "Find the Beta in Breaking",
  base: '/BetaBreak/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: [2, 3],
    footer: {
      message: '<a href="https://klimbeta.github.io/BetaComp/development/Contact">Contact</a>',
      copyright: 'Copyright BetaBreak © 2023-present'
    },
    siteTitle: 'BetaBreak',
    search: {
      provider: 'local'
    },
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
      // '/tests/': sidebarTests(),
      '/development/': sidebarDevelopment(),
      '/judging/': sidebarJudging(),
    },
  }
})

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatBetaComp',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/ReferenceOverview',
      activeMatch: '/reference/'
    },
    {
      text: 'Judging',
      link: '/judging/JudgingOverview',
      activeMatch: '/judging/'
    },
    {
      text: 'Tests',
      link: '/tests/TestsOverview',
      activeMatch: '/tests/'
    },
    {
      text: 'Development',
      link: 'development/DevelopmentOverview',
      activeMatch: '/development/'
    },
    // {
    //   text: 'About',
    //   link: '/about/About',
    //   activeMatch: '/about/'
    // },
    {
      text: 'Sponsor',
      link: '/sponsor/Sponsor',
      activeMatch: '/sponsor/'
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'What ❔',
      collapsed: true,
      items: [
        { text: '🔷 What is Breaking?', link: '/guide/What/WhatBreaking' },
        { text: '🔷 What is Beta?', link: '/guide/What/WhatBeta' },
        { text: '🔷 What is this BetaComp Website?', link: '/guide/What/WhatBetaCompWebsite' },

      ]
    },
    { text: '🤸‍♀️ Go to Reference', link: '/reference/ReferenceOverview' },
  ]
}

function sidebarReference() {
  return [
    { text: 'Go to Guide', link: '/guide/What/WhatBetaComp' },
    {
      text: '🤸‍♀️ Competition Types',
      collapsed: true,
      items: [
        { text: '🤸‍♀️ Overview', link: '/reference/CompType/Overview' },
        { text: '🤸‍♀️ Round Robin', link: '/reference/CompType/RoundRobin' },
        { text: '🤸‍♀️ Knockout', link: '/reference/CompType/Knockout' },

      ]
    },
    {
      text: '🔷 Beta',
      collapsed: true,
      items: [
        { text: '🔷 Overview', link: '/reference/Beta/BetaOverview' },
        { text: '🔷 What is the Beta System?', link: '/reference/Beta/WhatBetaSystem' },

      ]
    },
    {
      text: '🟠 Move',
      collapsed: true,
      items: [
        { text: '🟠 Overview', link: '/reference/Move/Overview' },

      ]
    },
    {
      text: '🔺 Route',
      collapsed: true,
      items: [
        { text: '🔺 Overview', link: '/reference/Route/Overview' },

      ]
    },
    {
      text: '🟩 Environment',
      collapsed: true,
      items: [
        { text: '🟩 Overview', link: '/reference/Environment/Overview' },

      ]
    },
    {
      text: '💜 Neuro',
      collapsed: true,
      items: [
        { text: '💜 Overview', link: '/reference/Neuro/Overview' },

      ]
    },
    { text: '🤸‍♀️ Glossary', link: '/reference/Glossary' },
    { text: '🤸‍♀️ Go to Reference', link: '/reference/ReferenceOverview' },

  ]
}

// function sidebarTests() {
//   return [
//     {
//       text: 'Beta Tests',
//       collapsed: true,
//       items: [
//         { text: 'Beta Test 01', link: '/tests/TestsOverview' },
//         { text: 'Beta Test 02', link: '/tests/TestsOverview' },
//         { text: 'Beta Test 03', link: '/tests/TestsOverview' },
//         { text: 'Beta Test 04', link: '/tests/TestsOverview' },
//         { text: 'Beta Test 05', link: '/tests/TestsOverview' },
//         { text: 'Beta Test 06', link: '/tests/TestsOverview' },
//         { text: 'Beta Test 07', link: '/tests/TestsOverview' },

//       ]
//     },]
// }

function sidebarDevelopment() {
  return [
    { text: 'Overview', link: '/development/DevelopmentOverview' },
    { text: '✉ Contact', link: '/development/Development/Contact' },
    { text: '👩‍💻 Coding', link: '/development/Coding' },
    { text: '📎 Downloads', link: '/development/Download' },
    { text: '❔ Research Questions', link: '/development/ResearchQuestions' },
    { text: '🔷 Roadmap', link: '/development/Roadmap' },
    { text: '☑ ToDo', link: '/development/ToDo' },

  ]
}


function sidebarJudging() {
  return [
    { text: 'Overview', link: '/judging/JudgingOverview' },
    { text: 'Judging Process', link: '/judging/JudgingProcess' },
    { text: 'How to Become a Judge', link: '/judging/HowBecomeJudge' },
    { text: 'How to Educate Judges', link: '/judging/HowEducateJudge' },
    { text: 'How to Recruit Judges', link: '/judging/HowRecruitJudge' },
    { text: 'Beta Scoring App', link: '/judging/BetaScoreApp' },
    { text: 'Contingency Plans', link: '/judging/ContingencyPlans' },


  ]
}