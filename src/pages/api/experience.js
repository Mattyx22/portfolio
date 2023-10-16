
export default function handler(req, res) {

  const experienceList = [
    {
      title: 'Freelancer',
      company: 'Freelance',
      dates: 'July 2022 - Present',
      description: [
        'Development of React, Next.js, Express, and Flutter applications',
        'Building WordPress / WooCommerce website',
      ],
    },
    {
      title: 'IT Specialist',
      company: 'Bosch Car Service / France Auto Service',
      dates: 'October 2019 - Present',
      description: [
        'Building React and Express applications for internal use',
        'Development and administration of online stores and websites for many European markets',
        'Creating WordPress (WooCommerce) websites',
        'Graphic design in Adobe Photoshop',
        'IT equipment service (hardware and software)',
        'SEO',
        'Google Ads and Facebook Ads campaigns'
      ],
    },
    {
      title: 'IT Contract',
      company: 'Kaldera - systemy grzewcze',
      dates: 'August 2019 - September 2019',
      description: [
        'Implementation of a local network',
        'Configuration of computers, network printers, and SubiektGT',
        'Developement and administration of the website (kaldera.com.pl)',
        'Social media administration',
        'SEO'
      ],
    },
    {
      title: 'IT Month Intern',
      company: 'Dolnet Group Sp. Z.O.O',
      dates: 'July 2018 - August 2018',
      description: [
        'Configuration of network devices',
        'Internet service repairs',
        'Fiber internet service repairs'
      ],
    }
  ]

  res.status(200).json({ experienceList })
}
