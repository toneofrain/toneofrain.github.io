module.exports = {
  /** Site MetaData (Required all)*/
  title: `saintho`,                           // (* Required)
  description: `saintho's blog`,          // (* Required)
  author: `Cho Seongho`,                         // (* Required)
  language: 'ko-KR',                        // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://toneofrain.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: '', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Junior QA Engineer & Project Assistant',
  name: 'Saintho(Cho Seongho)',
  company: '',
  location: 'Korea',
  email: 'saintho95@gmail.com',
  website: 'https://blog.saintho.dev',           // ex.'https://junhobaik.github.io'
  linkedin: 'https://www.linkedin.com/in/saintho/',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/toneofrain',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'saintho',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'GTM-5DXTWMDQ',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'Ga0rT_-15rI5k02_yMfc31f_Q4C2vbA_K7m0n9VoWuo', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: '', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
