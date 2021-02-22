module.exports = {
  repository: "@specifyapp/Specify-Demo",
  // Put your personal access token here
  // You can generate one from: https://specifyapp.com/user/personal-access-tokens
  personalAccessToken: "9f0fd57a2dc40d49083d1b168d966cfc91c2f5a83432f5791e5a563cd45222a6",
  rules: [
    {
      name: "Design Tokens / Colors",
      path: "src/_data/colors.json",
      filter: {
        types: ["color"]
      },
      parsers: [
        // "Clean" our colors to only get specific properties
        // https://github.com/Specifyapp/parsers/tree/master/parsers/pick
        {
          name: "pick",
          options: {
            keys: ["name", "value"]
          }
        }
      ]
    },
    {
      name: "Design Tokens / Shadows",
      path: "src/_data/shadows.json",
      filter: {
        types: ["shadow"]
      },
      parsers: [
        // "Clean" our shadows to only get specific properties
        // https://github.com/Specifyapp/parsers/tree/master/parsers/pick
        {
          name: "pick",
          options: {
            keys: ["name", "value"]
          }
        }
      ]
    },
    {
      name: "Design Tokens / Colors",
      path: "src/_includes/css/colors.css",
      filter: {
        types: ["color"]
      },
      parsers: [
        {
          name: "to-css-custom-properties",
          options: {
            formatName: "kebabCase",
            formatTokens:{
              color: "hex"
            },
          }
        }
      ]
    },
    {
      name: "Design Tokens / Shadows",
      path: "src/_includes/css/shadows.css",
      filter: {
        types: ["shadow"]
      },
      parsers: [
        {
          name: "to-css-custom-properties",
          options: {
            formatName: "kebabCase",
          }
        }
      ]
    }
  ]
}