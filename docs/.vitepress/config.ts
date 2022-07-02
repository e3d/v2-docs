import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AutoCalcs',
  description: 'Unit Conversion Unified Calculations',
  themeConfig: {
    logo: '/assets/e3d-logo.png',
    siteTitle: 'AutoCalcs',
    search: true,
    searchMaxSuggestions: 10,
    
    nav: nav(),

    sidebar: { 
      // '/guide/': sidebarGuide(), 
      '/math/': sidebarMath(),
      '/physics/': sidebarPhysics(),
      '/examples/': sidebarExamples(), 
      '/mechanical/': sidebarMechanical(),
      '/structural/': sidebarStructural(),
      '/electrical/': sidebarElectrical(),
      '/daily-calculations/': sidebarDailyCalcs(),
    },

/* 
    sidebar: {
      '/mechanical/': [
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
      ],
    },
 */

    socialLinks: [
      { icon: 'github', link: 'https://github.com/e3d' },
      { icon: 'twitter', link: 'https://twitter.com/engineered3D' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/donwen/' },
    ], // socialLinks

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Donwen Services.'
    },
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },

    {
      text: 'Calculations',
      items: [
        {
          // Title for the section.
          text: 'General',
          items: [
            { text: 'Daily Calculations', link: '/daily-calculations/' },
            { text: 'Physics', link: '/physics/' },
            // { text: 'Chemistry', link: '/calculations/general/chemistry/' } // could not make this work with sidebar
          ]
        },
        {
          // Title for the section.
          text: 'Engineering',
          items: [
            { text: 'Mechanical', link: '/mechanical/', activeMatch: '/mechanical/' },
            { text: 'Structural', link: '/structural/' },
            { text: 'Electrical', link: '/electrical/' },
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
        { text: 'What is AutoCalcs', link: '/guide/' },
        { text: 'UUCC', link: '/guide/single-mode' },
        { text: 'Top-down Mode', link: '/guide/top-down-mode' },
        { text: 'Bottom-up Mode', link: '/guide/bottom-up-mode' },
        { text: 'Custom Units', link: '/guide/custom-units' },
        { text: 'Down to the Essence', link: '/guide/down-to-the-essence' },
      ]
    },
    {
      text: 'AutoCalcs as a Calculator',
      collapsible: true,
      items: [
        { text: 'Single Mode', link: '/guide/markdown' },
        { text: 'Multi-step Mode', link: '/guide/asset-handling' },
      ]
    },
    {
      text: 'AutoCalcs as a Platform',
      collapsible: true,
      items: [
        { text: 'Library of Calculation Content', link: '/guide/markdown' },
        { text: 'Of the Community, By the Community', link: '/guide/asset-handling' },
      ]
    },
    {
      text: 'Workflow',
      collapsible: true,
      items: [
        { text: 'Embedding into A Webpage', link: '/guide/embedding' },
      ]
    },
    
  ]
}

function sidebarMath() {
  return [
    {
      text: 'Math',
      collapsible: true,
      items: [
        { text: 'Volume Box', link: '/math/volume-box' },
      ]
    },
    {
      text: 'More to Come...',
      collapsible: true,
      items: []
    }
  ]
}

function sidebarPhysics() {
  return [
    {
      text: 'Physics',
      collapsible: true,
      items: [
        { text: 'Pressure Calculator', link: '/physics/pressure-calculator' },
        { text: 'Density to Mass Calculator', link: '/physics/density-to-mass' },
        { text: 'Mass - Box', link: '/physics/mass-box' },
        { text: 'Mass - Sphere', link: '/physics/mass-sphere' },
        { text: 'Half Life Decay', link: '/physics/half-life-decay' },
        { text: 'Pendulum Calculation', link: '/physics/pendulum-calculation' },
      ]
    },
    {
      text: 'More to Come...',
      collapsible: true,
      items: []
    }
  ]
}

function sidebarDailyCalcs() {
  return [
    {
      text: 'Fun Calculations',
      collapsible: true,
      items: [
        { text: 'Unit Conversion with Expression Input', link: '/daily-calculations/unit-conversion-w-expr-input' },
        { text: 'Mass Adder', link: '/daily-calculations/mass-adder' },
        { text: 'Length Adder', link: '/daily-calculations/length-adder' },
      ]
    },
    {
      text: 'Driving',
      collapsible: true,
      items: [
        { text: 'E-vehicle Energy Consumption', link: '/daily-calculations/e-vehicle-energy-consumption' },
        { text: 'Gas Vehicle Energy Consumption', link: '/daily-calculations/gas-vehicle-energy-consumption' },
        
      ]
    },
    
  ]
}

function sidebarMechanical() {
  return [
    {
      text: 'Mechanical General',
      collapsible: true,
      items: [
        { text: 'Torque To Power', link: '/mechanical/torque-to-power' },
        { text: 'Power To Torque', link: '/mechanical/power-to-torque' },
        { text: 'Belt/Chain Length', link: '/mechanical/belt-chain-length' },
        { text: 'Shaft Sizing - Torsional, Round', link: '/mechanical/shaft-sizing-torsional-round' },
        { text: 'Shaft Sizing - Torsional, Round(v1)', link: '/mechanical/shaft-sizing-torsional-round-v1' },
        { text: 'Valley Angle', link: '/mechanical/valley-angle' },
      ]
    },
    {
      text: 'Hydraulics',
      collapsible: true,
      items: [
        { text: 'Hydraulics Basic', link: '/mechanical/hydraulics-basic' },
        { text: 'Viscosity Unit Conversion', link: '/mechanical/viscosity-unit-conversion' },
      ]
    },    
    {
      text: 'More to Come...',
      collapsible: true,
      items: []
    }
  ]
}

function sidebarStructural() {
  return [
    {
      text: 'Structural General',
      collapsible: true,
      items: [
        { text: 'Simple Beam, Uniform Load, Round',             link: '/structural/simple-beam-uniform-load-round' }, // MH30th, P268, Case 1OK
        { text: 'Simple Beam, Uniform Load, Square',            link: '/structural/simple-beam-uniform-load-square' }, 
        { text: 'Simple Beam, Uniform Load, Rectangular',       link: '/structural/simple-beam-uniform-load-rectangular' },

        { text: 'Simple Beam, Concentrated Load@Center, Round',        link: '/structural/simple-beam-concentrated-center-load-round' }, // Case 2, ok
        { text: 'Simple Beam, Concentrated Load@Center, Square',       link: '/structural/simple-beam-concentrated-center-load-square' },
        { text: 'Simple Beam, Concentrated Load@Center, Rectangular',  link: '/structural/simple-beam-concentrated-center-load-rectangular' },

        { text: 'Simple Beam, Concentrated Load@Any Point, Round',  link: '/structural/simple-beam-concentrated-point-x-load-round' }, // Case 3

        { text: 'Simple Beam, Calcs',  link: '/structural/simple-beam-calcs' }, // Case 3

      ]
    },
    {
      text: 'More to Come...',
      collapsible: true,
      items: []
    }
  ]
}

function sidebarElectrical() {
  return [
    {
      text: 'Electrical General',
      collapsible: true,
      items: [
        { text: 'Electrical Power', link: '/electrical/electrical-power' },
        { text: "Ohm's Law",        link: '/electrical/ohm-law' },
      ]
    },
    {
      text: 'More to Come...',
      collapsible: true,
      items: []
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