module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "React component using Typescript",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name: ",
      },
      {
        type: "input",
        name: "type",
        message: "DOM API Type: ",
      },
      {
        type: "input",
        name: "tag",
        message: "Tag name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{name}}",
        templateFiles: "plop_templates/component/*.hbs",
      },
    ],
  });
};
