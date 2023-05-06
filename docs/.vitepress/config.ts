import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AutoCalcs - UCUC",
  description: "Unit Conversion Unified Calculations",
  themeConfig: {
    logo: "/assets/e3d-logo.png",
    siteTitle: "AutoCalcs",
    search: {
      provider: 'local'
    },
    // searchMaxSuggestions: 10,
    /* algolia: {
      https://chenzhenhu.com/vitepress/algolia.html#%E9%85%8D%E7%BD%AE
      appId: process.env.APP_ID,
      apiKey: process.env.APP_KEY,
      indexName: 'v2_docs',
    }, */

    /* carbonAds: {
      carbon: 'your-carbon-key',
      custom: 'your-carbon-custom',
      placement: 'your-carbon-placement'
    }, */

    nav: nav(),

    sidebar: {
      // '/guide/': sidebarGuide(),
      "/math/": sidebarMath(),
      "/physics/": sidebarPhysics(),
      "/examples/": sidebarExamples(),
      "/engineering-common/": sidebarEngineeringCommon(),      
      "/mechanical/": sidebarMechanical(),
      "/mechanics-of-materials/": sidebarMechanicsOfMaterials(),
      "/structural/": sidebarStructural(),
      "/electrical/": sidebarElectrical(),
      "/daily-calculations/": sidebarDailyCalcs(),
      "/pipe-fitter-welder/": sidebarPipeFitterWelder(),
      "/data-sense/": sidebarDataSense(),
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
      { icon: "github", link: "https://github.com/e3d/v2-docs" },
      { icon: "twitter", link: "https://twitter.com/engineered3D" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/donwen/" },
      {
        icon: "youtube",
        link: "https://www.youtube.com/@autocalcs",
      },
    ], // socialLinks

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present Donwen Services.",
    },
  },
});

function nav() {
  return [
    { text: "Guide", link: "/guide/", activeMatch: "/guide/" },   

    {
      text: "Calculations",
      items: [
        { text: "Frequent Used Calcs", link: "/daily-calculations/frequent-used-calcs" },

        {
          // Title for the section.
          text: "General",
          items: [
            { text: "Daily Calculations", link: "/daily-calculations/" },
            { text: "Math", link: "/math/" },
            { text: "Physics", link: "/physics/" },
            // { text: 'Chemistry', link: '/calculations/general/chemistry/' } // could not make this work with sidebar
          ],
        },
        {
          // Title for the section.
          text: "Engineering",
          items: [
            { text: "Common", link: "/engineering-common/" },
            { text: "Mechanics of Materials", link: "/mechanics-of-materials/" },
            {
              text: "Mechanical",
              link: "/mechanical/",
              activeMatch: "/mechanical/",
            },
            { text: "Structural", link: "/structural/" },
            { text: "Electrical", link: "/electrical/" },
          ],
        },
        {
          // Title for the section.
          text: "Trades",
          items: [
            {
              text: "Pipe Fitter & Welder",
              link: "/pipe-fitter-welder/",
              activeMatch: "/pipe-fitter-welder/",
            },
          ],
        },
      ],
    },

    {
      text: "Data Sense",
      items: [
        { text: "Frequent Used Data", link: "/data-sense/lengths-make-sense" },

        /*{           
          text: "General", // Title for the section.
          items: [
            { text: "Daily Calculations", link: "/daily-calculations/" },
            { text: "Math", link: "/math/" },
            { text: "Physics", link: "/physics/" },
          ],
        },     */    
        
      ],
    },
    
    { text: "FAQs", link: "/guide/faqs", activeMatch: "/guide/faqs" },   /* TODO: */
    
    { text: "Contact", link: "/contact/" },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "What is AutoCalcs", link: "/guide/" },
        { text: "UUCC", link: "/guide/single-mode" },
        { text: "Top-down Mode", link: "/guide/top-down-mode" },
        { text: "Bottom-up Mode", link: "/guide/bottom-up-mode" },
        { text: "Custom Units", link: "/guide/custom-units" },
        { text: "Down to the Essence", link: "/guide/down-to-the-essence" },
      ],
    },
    {
      text: "AutoCalcs as a Calculator",
      collapsible: true,
      items: [
        { text: "Single Mode", link: "/guide/markdown" },
        { text: "Multi-step Mode", link: "/guide/asset-handling" },
      ],
    },
    {
      text: "AutoCalcs as a Platform",
      collapsible: true,
      items: [
        { text: "Library of Calculation Content", link: "/guide/markdown" },
        {
          text: "Of the Community, By the Community",
          link: "/guide/asset-handling",
        },
      ],
    },
    {
      text: "Workflow",
      collapsible: true,
      items: [{ text: "Embedding into A Webpage", link: "/guide/embedding" }],
    },
  ];
}

function sidebarMath() {
  return [
    {
      text: "Math",
      collapsible: true,
      items: [
        // { text: 'Math Q & A Template', link: '/math/qa-template' },
        { text: "Trigonometry", link: "/math/trigonometry" },
        { text: "Area Calculator", link: "/math/area-calculator" },
        { text: "Volume Calculator", link: "/math/volume-calculator" },
        { text: "Box Diagonal Line Length Calculator", link: "/math/box-diagonal-line-length" },        
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarPhysics() {
  return [
    {
      text: "Physics",
      collapsible: true,
      items: [
        { text: "Pressure Calculator", link: "/physics/pressure-calculator" },
        { text: "Volume to Mass Calculator", link: "/physics/volume-to-mass" },
        {
          text: "Volume to Mass Unified Calculator",
          link: "/physics/volume-to-mass-calcs-unified",
        },
        { text: "Mass - Box", link: "/physics/mass-box" },
        { text: "Mass - Sphere", link: "/physics/mass-sphere" },
        { text: "Half Life Decay", link: "/physics/half-life-decay" },
        { text: "Pendulum Calculation", link: "/physics/pendulum-calculation" },
        {
          text: "Linear Thermal Expansion",
          link: "/physics/linear-thermal-expansion",
        },
        {
          text: "Projectile Trajectory",
          link: "/physics/projectile-trajectory",
        },
        {
          text: "Earth Escape Velocity",
          link: "/physics/earth-escape-velocity",
        },
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarDailyCalcs() {
  return [
    {
      text: "Fun Calculations",
      collapsible: true,
      items: [
        {
          text: "Unit Converter - Generic",
          link: "/daily-calculations/unit-converter",
        },
        {
          text: "Unit Converter with Expression Input",
          link: "/daily-calculations/unit-converter-w-expr-input",
        },
        { text: "Mass Adder", link: "/daily-calculations/mass-adder" },
        { text: "Length Adder", link: "/daily-calculations/length-adder" },
        { text: "BMI/PI (Body Mass Index / Ponderal Index)", link: "/daily-calculations/bmi-pi" },
      ],
    },
    {
      text: "Driving",
      collapsible: true,
      items: [
        {
          text: "Vehicle Energy Consumption",
          link: "/daily-calculations/vehicle-energy-consumption",
        },
        {
          text: "Fuel Consumption & Economy",
          link: "/daily-calculations/fuel-consumption-and-economy",
        },
        {
          text: "New-tech Vehicle Energy Consumption & Economy",
          link: "/daily-calculations/new-tech-vehicle-energy-consumption-and-economy",
        },
        {
          text: "Energy Consumption & Economy, Fuel vs New-tech",
          link: "/daily-calculations/energy-consumption-and-economy-fuel-vs-new-tech",
        },

        /* 
          { text: 'E-vehicle Energy Consumption', link: '/daily-calculations/e-vehicle-energy-consumption' },
          { text: 'Gas Vehicle Energy Consumption', link: '/daily-calculations/gas-vehicle-energy-consumption' }, 
        */

        {
          text: "Canadian Buys Fuel Gas in USA",
          link: "/daily-calculations/buy-fuel-gas-in-usa",
        },
      ],
    },
  ];
}

function sidebarEngineeringCommon() {
  return [
    {
      text: "Engineering Common",
      collapsible: true,
      items: [
        {
          text: "Scaler - Basic",
          link: "/engineering-common/scaler",
        },
        {
          text: "Scaler - Unit Conversion Automated",
          link: "/engineering-common/scaler-ucuc",
        },
      ],
    },
    
  ];
}

function sidebarMechanicsOfMaterials() {
  return [
    {
      text: "Mechanics of Materials",
      collapsible: true,
      items: [
        {
          text: "Simple Stresses",
          link: "/mechanics-of-materials/simple-stresses",
        },
        {
          text: "Hooke's Law",
          link: "/mechanics-of-materials/hookes-law",
        },
        {
          text: "Linear Thermal Expansion",
          link: "/physics/linear-thermal-expansion",
        },
        {
          text: "Elastic Deformation of Axial Loaded Member",
          link: "/mechanics-of-materials/elastic-deformation-of-axial-loaded-member",
        },
        {
          text: "Shear Stress in Shaft",
          link: "/mechanics-of-materials/shear-stress-in-shaft",
        },       

        
        /* {
          text: "Scaler - Unit Conversion Automated",
          link: "/engineering-common/scaler-ucuc",
        }, */
      ],
    },
    
  ];
}

function sidebarMechanical() {
  return [
    {
      text: "Mechanical General",
      collapsible: true,
      items: [
        { text: "Torque To Power", link: "/mechanical/torque-to-power" },
        { text: "Power To Torque", link: "/mechanical/power-to-torque" },
        {
          text: "Mechanical Drive Torque Output",
          link: "/mechanical/mechanical-drive-torque-output",
        },
        { text: "Belt/Chain Length", link: "/mechanical/belt-chain-length" },
        {
          text: "Bel Conveyor Speed (Supply)",
          link: "/mechanical/belt-conveyor-speed-supply",
        },
        {
          text: "Bel Conveyor Speed (Demand)",
          link: "/mechanical/belt-conveyor-speed-demand",
        },

        {
          text: "Shaft Sizing - Torsional, Round",
          link: "/mechanical/shaft-sizing-torsional-round",
        },
        {
          text: "Shaft Sizing - Torsional, Round(v1)",
          link: "/mechanical/shaft-sizing-torsional-round-v1",
        },
        { text: "Valley Angle", link: "/mechanical/valley-angle" },
        {
          text: "Model Railroad Scales Sizes",
          link: "/mechanical/model-railroad-scales-sizes",
        },
      ],
    },
    {
      text: "Hydraulics",
      collapsible: true,
      items: [
        { text: "Hydraulics Basic", link: "/mechanical/hydraulics-basic" },
        { text: "Pipe Sizing for Flow Capacity", link: "/mechanical/pipe-sizing-for-flow-capacity" },        
        {
          text: "Hydraulics Gear Motor",
          link: "/mechanical/hydraulics-gear-motor",
        },        
        {
          text: "Basic Cylinder Calculations Demo-01",
          link: "/mechanical/basic-cylinder-calculations-demo-01",
        },
        {
          text: "Fluid Power Calculations Demo-01",
          link: "/mechanical/fluid-power-calculations-demo-01",
        },
        {
          text: "Basic Hydraulic Motor/Pump Calculations Demo-01",
          link: "/mechanical/basic-hydraulic-motor-pump-calculations-demo-01",
        },
        {
          text: "Viscosity Unit Conversion",
          link: "/mechanical/viscosity-unit-conversion",
        },        

      ],
    },
    {
      text: "Vacuum",
      collapsible: true,
      items: [
        {
          text: "Vacuum Suction Cup Sizing",
          link: "/mechanical/vacuum-suction-cup-sizing",
        },
      ],
    },
    {
      text: "Materials Handling",
      collapsible: true,
      items: [
        {
          text: "Belt Conveyor Speed - Demand vs Supply",
          link: "/mechanical/materials-handling/conveyor-belt-speed-demand-vs-supply",
        },
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarStructural() {
  return [
    {
      text: "Structural General",
      collapsible: true,
      items: [
        {
          text: "Simple Beam, Calcs - Unified",
          link: "/structural/simple-beam-calcs-unified",
        }, // Case 3

        {
          text: "Simple Beam, Uniform Load, Round",
          link: "/structural/simple-beam-uniform-load-round",
        }, // MH30th, P268, Case 1OK
        {
          text: "Simple Beam, Uniform Load, Square",
          link: "/structural/simple-beam-uniform-load-square",
        },
        {
          text: "Simple Beam, Uniform Load, Rectangular",
          link: "/structural/simple-beam-uniform-load-rectangular",
        },

        {
          text: "Simple Beam, Concentrated Load@Center, Round",
          link: "/structural/simple-beam-concentrated-center-load-round",
        }, // Case 2, ok
        {
          text: "Simple Beam, Concentrated Load@Center, Square",
          link: "/structural/simple-beam-concentrated-center-load-square",
        },
        {
          text: "Simple Beam, Concentrated Load@Center, Rectangular",
          link: "/structural/simple-beam-concentrated-center-load-rectangular",
        },

        {
          text: "Simple Beam, Concentrated Load@Any Point, Round",
          link: "/structural/simple-beam-concentrated-point-x-load-round",
        }, // Case 3
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarElectrical() {
  return [
    {
      text: "Electrical General",
      collapsible: true,
      items: [
        {
          text: "Electrical Voltage-Current-Power",
          link: "/electrical/electrical-power",
        },
        { text: "Ohm's Law", link: "/electrical/ohm-law" },
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarPipeFitterWelder() {
  return [
    {
      text: "Pipe Fitter and Welder",
      collapsible: true,
      items: [
        {
          text: "Right Triangle Calculator",
          link: "/pipe-fitter-welder/right-triangle-calculator",
        },
        {
          text: "Circle Calculator",
          link: "/pipe-fitter-welder/circle-calculator",
        },
        {
          text: "Pipe Bends - Simple",
          link: "/pipe-fitter-welder/pipe-bends-simple",
        },
        {
          text: "Pipe Bends Welding Layout",
          link: "/pipe-fitter-welder/pipe-bends-welding-layout",
        },        
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarDataSense() {
  return [
    {
      text: "Data Sense",
      collapsible: true,
      items: [
        { text: "Lengths - Make Sense", link: "/data-sense/lengths-make-sense" },
        { text: "Speeds/Velocities - Make Sense", link: "/data-sense/speeds-make-sense" },
        
      ],
    },
    {
      text: "More to Come...",
      collapsible: true,
      items: [],
    },
  ];
}

function sidebarExamples() {
  return [
    {
      text: "Calculations",
      collapsible: true,
      items: [
        { text: "Engineering", link: "/examples/" },
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "Configuration", link: "/guide/configuration" },
        { text: "Deploying", link: "/guide/deploying" },
      ],
    },
    {
      text: "Writing",
      collapsible: true,
      items: [
        { text: "Markdown", link: "/guide/markdown" },
        { text: "Asset Handling", link: "/guide/asset-handling" },
        { text: "Frontmatter", link: "/guide/frontmatter" },
        { text: "Using Vue in Markdown", link: "/guide/using-vue" },
        { text: "API Reference", link: "/guide/api" },
      ],
    },
    {
      text: "Theme",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/guide/theme-introduction" },
        { text: "Nav", link: "/guide/theme-nav" },
        { text: "Sidebar", link: "/guide/theme-sidebar" },
        { text: "Prev Next Link", link: "/guide/theme-prev-next-link" },
        { text: "Edit Link", link: "/guide/theme-edit-link" },
        { text: "Last Updated", link: "/guide/theme-last-updated" },
        { text: "Layout", link: "/guide/theme-layout" },
        { text: "Homepage", link: "/guide/theme-homepage" },
        { text: "Footer", link: "/guide/theme-footer" },
        { text: "Search", link: "/guide/theme-search" },
        { text: "Carbon Ads", link: "/guide/theme-carbon-ads" },
      ],
    },
    {
      text: "Migrations",
      collapsible: true,
      items: [
        {
          text: "Migration from VuePress",
          link: "/guide/migration-from-vuepress",
        },
        {
          text: "Migration from VitePress 0.x",
          link: "/guide/migration-from-vitepress-0",
        },
      ],
    },
  ];
}
