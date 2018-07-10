var env = process.env;

module.exports = {
  logEntries: {
    token: env.LOG_ENTRIES_TOKEN
  },
  loggerName: env.LOGGER_NAME,
  httpPort: process.env.PORT || env.httpPort || 3000,
  socialMedia: {
    twitter: '@satprodgroup'
  },
  postmark: {
    key: env.POSTMARK_API_KEY
  },
  mailchimp: {
    key: env.mailchimp_key,
    newsletterListId: env.mailchimp_newsletter_list_id
  }
};
