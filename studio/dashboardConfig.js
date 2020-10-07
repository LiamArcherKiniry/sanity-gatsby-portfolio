export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e3ac197b0fa2d13f4f3f3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cputtqfz',
                  apiId: 'f1ef1755-af1d-4103-a020-d6bb70a2e46f'
                },
                {
                  buildHookId: '5f7e3ac197b0fa307ff4f121',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qedquug4',
                  apiId: '1a6650e3-6d0f-430c-ba78-7e481d974616'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LiamArcherKiniry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qedquug4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
