import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BetaBreak",
  description: "Find the Beta in Breaking",
  base: '/BetaBreak/',
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
      '/tests/': sidebarTests(),
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
        { text: '🔷 What is Beta?', link: '/guide/What/WhatBeta' },
        { text: '🔷 What is a BetaComp?', link: '/guide/What/WhatBetaComp' },
        { text: '🔷 What is this BetaComp Website?', link: '/guide/What/WhatBetaCompWebsite' },

      ]
    },
    {
      text: 'Why ❔',
      collapsed: true,
      items: [
        { text: '❔ How does BetaComp add Value to Climbers?', link: '/guide/Why/AddValue' },

      ]
    },
  ]
}

function sidebarReference() {
  return [
    { text: 'Go to Guide', link: '/guide/What/WhatBetaComp' },
    {
      text: '🔷 Competition Types',
      collapsed: true,
      items: [
        { text: '🔷 Overview', link: '/reference/CompType/Overview' },
        { text: '🔷 Route+ Comp', link: '/reference/CompType/RouteComp' },
        { text: '🔷 Move+ Comp', link: '/reference/CompType/MoveComp' },
        { text: '🔷 BetaWall', link: '/reference/CompType/BetaWall' },
        { text: '🔷 BetaBattle', link: '/reference/CompType/BetaBattle' },
        { text: '🔷 ForcedBeta', link: '/reference/CompType/ForcedBeta' },
        { text: '🔷 MetaBetaComp', link: '/reference/CompType/MetaBetaComp' },
        { text: '🔷 BetaDance', link: '/reference/CompType/BetaDance' },
        { text: '🔷 Team BetaComp', link: '/reference/CompType/TeamBetaComp' },

      ]
    },]
}

function sidebarTests() {
  return [
    {
      text: 'Beta Tests',
      collapsed: true,
      items: [
        { text: 'Beta Test 01', link: '/tests/TestsOverview' },
        { text: 'Beta Test 02', link: '/tests/TestsOverview' },
        { text: 'Beta Test 03', link: '/tests/TestsOverview' },
        { text: 'Beta Test 04', link: '/tests/TestsOverview' },
        { text: 'Beta Test 05', link: '/tests/TestsOverview' },
        { text: 'Beta Test 06', link: '/tests/TestsOverview' },
        { text: 'Beta Test 07', link: '/tests/TestsOverview' },

      ]
    },]
}

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