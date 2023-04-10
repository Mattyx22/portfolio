
export default function handler(req, res) {

  const experienceList = [
    {
      title: 'Freelancer',
      company: 'Freelance',
      dates: 'July 2022 - Present',
      description: [
        'Web applications (React.js and Express.js)',
        'Mobile applications (Flutter)',
        'Design of apps (Figma)'
      ],
    },
    {
      title: 'IT Specialist',
      company: 'Bosch Car Service / France Auto Service',
      dates: 'October 2019 - Present',
      description: [
        'React / Express applications for internal use',
        'E-commerce store developement',
        'Wordpress and Woocommerce',
        'Internet marketing',
        'Graphic design in Adobe Photoshop',
        'Providing IT service',
        'SEO / SEM',
        'Google and Facebook Ads campaigns'
      ],
    },
    {
      title: 'IT Contract',
      company: 'Kaldera - systemy grzewcze',
      dates: 'August 2019 - September 2019',
      description: [
        'Implementation of a local network',
        'Configuration of computers, network printers, and SubiektGT',
        'Creation and administration of the website (kaldera.com.pl)',
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
