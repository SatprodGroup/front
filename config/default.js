var env = process.env;

module.exports = {
  logEntries: {
    token: env.logEntriesToken
  },
  prerender: {
    token: env.prerenderToken
  },
  loggerName: env.loggerName,
  httpPort: process.env.PORT || env.httpPort || 3000,
  socialMedia: {
    twitter: '@satprodgroup'
  },
  postmark: {
    key: env.postmark_api_key
  },
  mailchimp: {
    key: env.mailchimp_key,
    newsletterListId: env.mailchimp_newsletter_list_id
  }
};
