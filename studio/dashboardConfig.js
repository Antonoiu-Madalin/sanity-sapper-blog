export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d42f3b6682e1f5a9d54e377',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-zfycunxb',
                  apiId: '40a4fc01-0aa4-4056-a132-3421d1f6c6ca'
                },
                {
                  buildHookId: '5d42f3b6d94999147b2ee74e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ywmce2fv',
                  apiId: '06f69954-a341-4e2c-8231-065fde5f2c49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Antonoiu-Madalin/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ywmce2fv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
