/**
 * Set up plugins
 */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const plugins = [withBundleAnalyzer];

/**
 * Set up Next.js configuration
 */
const defaultParams = require("./lib/getDefaultParams");
const SFS = ["nm", "skt", "funkis", "msf", "k-stud"];

const nextConfiguration = {
  async rewrites() {
    const paths = [];
    const { year, county, organization, group } = defaultParams();
    SFS.map((sf) => {
      paths.push(
        {
          source: `/${sf}`,
          destination: `/${sf}/${year}/${county}/${organization}/${group}`,
        },
        {
          source: `/${sf}/:year`,
          destination: `/${sf}/:year/${county}/${organization}/${group}`,
        },
        {
          source: `/${sf}/:year/:county`,
          destination: `/${sf}/:year/:county/${organization}/${group}`,
        },
        {
          source: `/${sf}/:year/:county/:organization`,
          destination: `/${sf}/:year/:county/:organization/${group}`,
        }
      );
    });
    return paths;
  },
  i18n: {
    locales: ["nb"],
    defaultLocale: "nb",
  },
};

const withPlugins = require("next-compose-plugins");
module.exports = withPlugins([...plugins], nextConfiguration);
