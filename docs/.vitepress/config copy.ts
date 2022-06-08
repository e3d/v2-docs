import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AutoCalcs Docs',
  description: 'AutoCalcs Docs',
  themeConfig: {
    logo: '/assets/e3d-logo.png',
    siteTitle: 'AutoCalcs Docs',
    search: false,
    searchMaxSuggestions: 10,
    
    nav: nav(),

    sidebar: { 
      '/guide/': sidebarGuide(), 
      '/examples/': sidebarExamples(), 
      '/mechanical/': sidebarMechanical()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/e3d' },
      { icon: 'twitter', link: 'https://twitter.com/engineered3D' },
    ], // socialLinks

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Don Wen'
    },
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-autocalcs.html', activeMatch: '/guide/' },
    { text: 'Examples', link: '/examples/', activeMatch: '/examples/' },
    {
      text: 'Calculations',
      items: [
        {
          // Title for the section.
          text: 'General',
          items: [
            { text: 'Daily Calculations', link: '/calculations/general/daily-calculations/' },
            { text: 'Physics', link: '/calculations/general/physics/' },
            { text: 'Chemistry', link: '/calculations/general/chemistry/' }
          ]
        },
        {
          // Title for the section.
          text: 'Engineering',
          items: [
            { text: 'Mechanical', link: '/mechanical/', activeMatch: '/mechanical/' },
            { text: 'Structural', link: '/calculations/engineering/structural/' },
            { text: 'Electrical', link: '/calculations/engineering/electrical/' },
          ]
        }
      ]
    },
    { text: 'Contact', link: '/contact/' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is AutoCalcs', link: '/guide/what-is-autocalcs' },
        { text: 'Single Mode', link: '/guide/getting-started' },
        { text: 'Single Mode', link: '/guide/single-mode' },
        { text: 'Multi-step Mode', link: '/guide/multi-step-mode' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'AutoCalcs as a Calculator',
      collapsible: true,
      items: [
        { text: 'Single Mode', link: '/guide/markdown' },
        { text: 'Multi-step Mode', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Workflow',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },        
      ]
    },
    {
      text: 'Embedding UCUC Calculator in Your Website',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarExamples() {
  return [
    {
      text: 'Calculations',
      collapsible: true,
      items: [
        { text: 'Engineering', link: '/examples/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Homepage', link: '/guide/theme-homepage' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarMechanical() {
  return [
    {
      text: 'Mechanical',
      collapsible: true,
      items: [
        { text: 'Engineering', link: '/mechanical/' },
        { text: 'Getting Started', link: '/calculations/engineering/mechanical/' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },    
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}