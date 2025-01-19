
export default function handler(req, res) {

  const experienceList = [
    {
      title: 'Freelancer',
      company: 'Freelance',
      dates: 'July 2022 - Present',
      description: [
        'Development of applications using React, Next.js, Express, and Flutter',
        'Creation and customization of WordPress and WooCommerce websites',
      ],
    },
    {
      title: 'E-commerce Administrator',
      'company': 'Target - Medical wholesale',
      dates: 'January 2024 - Present',
      description: [
        'Development and management of e-commerce platforms, including WooCommerce and Selly',
        'Administration and oversight of the ERP system',
        'Design, development, and maintenance of a comprehensive dropshipping system',
        'Creation and management of an online store integrated with the NFZ API, facilitating secure exchange of patient reimbursement information',
      ],
    },
    {
      title: 'IT Specialist',
      company: 'Bosch Car Service / France Auto Service',
      dates: 'October 2019 - Present',
      description: [
        'Designing and developing React and Express applications for internal use',
        'Building and managing online stores and websites tailored to various European markets',
        'Creating and maintaining WordPress (WooCommerce) websites',
        'Crafting graphic designs using Adobe Photoshop',
        'Providing IT equipment servicing, including hardware and software support',
        'Implementing SEO strategies to optimize online visibility',
        'Managing Google Ads and Facebook Ads campaigns for effective digital marketing'
      ],
    },
    {
      title: 'IT Contract',
      company: 'Kaldera - systemy grzewcze',
      dates: 'August 2019 - September 2019',
      description: [
        'Implementation and setup of local networks',
        'Configuration of computers, network printers, and the SubiektGT system',
        'Development and management of the website (kaldera.com.pl)',
        'Administration and management of social media channels',
        'Execution of SEO strategies to enhance online visibility'
      ],
    },
    {
      title: 'IT Month Intern',
      company: 'Dolnet Group Sp. Z.O.O',
      dates: 'July 2018 - August 2018',
      description: [
        'Configuration and setup of network devices',
        'Troubleshooting and repairing internet service issues',
        'Maintenance and repair of fiber internet services'
      ],
    }
  ]

  res.status(200).json({ experienceList })
}
