module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component using Typescript',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{name}}',
        templateFiles: 'plop_templates/component/*.hbs',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        templateFile: 'plop_templates/export/export.hbs',
      },
    ],
  });
};
