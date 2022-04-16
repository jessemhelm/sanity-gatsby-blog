export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "625b1bb2196b774691bcf2f6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hyqigb93",
                  apiId: "3c3f1767-98ff-4c75-b905-024d0d7bf4cb",
                },
                {
                  buildHookId: "625b1bb294cca849cc062a4e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-vrm4pkex",
                  apiId: "4e8bac19-e3b0-4186-b2d8-20909d2ad886",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jessemhelm/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-vrm4pkex.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
