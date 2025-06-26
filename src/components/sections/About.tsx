import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

// Direct imports for better performance
import Section from '@/components/layouts/Section'
import Heading1 from '@/components/common/reusable/heading/Heading1'
import Heading2 from '@/components/common/reusable/heading/Heading2'
import Heading3 from '@/components/common/reusable/heading/Heading3'
import Badge from '@/components/common/reusable/Badge'
import InlineLink from '@/components/common/reusable/InlineLink'

export default function About(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <Section className={clsx(animationClass, 'mx-auto max-w-4xl')}>
      <Heading1 className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'mb-8 text-center')}>
        Hey👋, it's Andreas 😎
      </Heading1>
      
      <div className='animate-fade-in !delay-200 md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'>
        <p>
          As a passionate iOS developer with 10 years of experience, I bring extensive expertise in implementing high-quality mobile applications, particularly in retail. I've developed and enhanced apps for B2B and B2C clients, including major retail platforms like kkiosk and avec 24/7. My knowledge spans Swift, SwiftUI, and the latest iOS technologies. I excel in collaborating with agile teams and executing projects from conception to App Store publication, consistently delivering innovative solutions in the e-commerce space.
        </p>

        <p>
          I'm currently <strong className="text-primary-dark dark:text-primary-light">freelancing as an iOS Developer</strong>, offering my expertise in Swift, SwiftUI, and UIKit development. I specialize in creating high-quality mobile applications and provide consulting services for iOS development projects. I collaborate with teams to define interfaces, conduct code reviews, and ensure best practices across mobile platforms.
        </p>

        <p>
          My journey into software development began with a unique background in mechanical engineering and CNC machining, which taught me precision and attention to detail that I now apply to mobile development. I earned my <strong className="text-primary-dark dark:text-primary-light">Dipl. Techniker HF in Computer Science</strong> from ABB Technical School in Baden, making the transition from manufacturing to software engineering.
        </p>

        <Heading2 className='mb-6 mt-12'>Experience</Heading2>

        <Heading3 className='mb-4 mt-8'>Recent Positions</Heading3>

        <div className="mb-6">
          <p><strong className="text-primary-dark dark:text-primary-light">Freelance iOS Developer</strong><br/>
          <em>December 2024 — Present</em></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Providing iOS development consulting and services for various clients</li>
            <li>Developing custom iOS applications using Swift, SwiftUI, and UIKit</li>
            <li>Offering technical expertise in mobile app architecture and best practices</li>
          </ul>
        </div>

        <div className="mb-6">
          <p><strong className="text-primary-dark dark:text-primary-light">Software Engineer iOS</strong> at <InlineLink href="https://valora.com">Valora Schweiz AG</InlineLink>, Zürich<br/>
          <em>November 2016 — December 2024</em></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Development of new iOS applications and enhancement of existing ones using Swift, SwiftUI, and UIKit</li>
            <li>Collaboration with cross-platform teams to define interfaces and ensure feature parity</li>
            <li>Implementation of retail and e-commerce solutions for major Swiss brands</li>
          </ul>
        </div>

        <div className="mb-6">
          <p><strong className="text-primary-dark dark:text-primary-light">Software Engineer iOS</strong> at <InlineLink href="https://blinq.ch">BLINQ AG</InlineLink>, Zürich<br/>
          <em>June 2015 — April 2016</em></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Development and enhancement of iOS applications in Objective-C and Swift</li>
            <li>Conception and implementation of proprietary SDK for geo and Bluetooth beacon data collection</li>
            <li>Occasional Android hotfixes and Google Play Store distribution</li>
          </ul>
        </div>

        <div className="mb-6">
          <p><strong className="text-primary-dark dark:text-primary-light">Software Engineer iOS</strong> at <InlineLink href="https://goldbach.com">Goldbach Interactive</InlineLink>, Zürich<br/>
          <em>November 2013 — February 2015</em></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Started as intern, promoted to lead developer</li>
            <li>Conception and development of iOS applications for news, product presentation, and sales</li>
            <li>Implementation of complex REST APIs for backend system integration</li>
          </ul>
        </div>

        <Heading2 className='mb-6 mt-12'>Skills</Heading2>
        <p>Here are the technologies I specialize in:</p>

        <Heading3 className='mb-4 mt-8'>iOS Development</Heading3>
        <ul className='mb-8 flex flex-wrap gap-2'>
          <li><Badge>Swift 5.x</Badge></li>
          <li><Badge>SwiftUI</Badge></li>
          <li><Badge>UIKit</Badge></li>
          <li><Badge>Objective-C</Badge></li>
          <li><Badge>Xcode</Badge></li>
          <li><Badge>iOS SDK</Badge></li>
          <li><Badge>Core Data</Badge></li>
          <li><Badge>Core Animation</Badge></li>
          <li><Badge>UserNotifications</Badge></li>
          <li><Badge>MapKit</Badge></li>
          <li><Badge>AVFoundation</Badge></li>
          <li><Badge>Combine</Badge></li>
          <li><Badge>WidgetKit</Badge></li>
          <li><Badge>App Store Connect</Badge></li>
          <li><Badge>TestFlight</Badge></li>
        </ul>

        <Heading3 className='mb-4 mt-8'>Mobile Technologies</Heading3>
        <ul className='mb-8 flex flex-wrap gap-2'>
          <li><Badge>REST APIs</Badge></li>
          <li><Badge>JSON/XML parsing</Badge></li>
          <li><Badge>Push notifications</Badge></li>
          <li><Badge>Location services</Badge></li>
          <li><Badge>Bluetooth/iBeacon</Badge></li>
          <li><Badge>In-app purchases</Badge></li>
          <li><Badge>CloudKit</Badge></li>
          <li><Badge>Firebase</Badge></li>
          <li><Badge>Realm Database</Badge></li>
          <li><Badge>Alamofire</Badge></li>
          <li><Badge>SDWebImage</Badge></li>
        </ul>

        <Heading3 className='mb-4 mt-8'>Development Tools & Practices</Heading3>
        <ul className='mb-8 flex flex-wrap gap-2'>
          <li><Badge>Git/GitHub</Badge></li>
          <li><Badge>GitLab</Badge></li>
          <li><Badge>Bitbucket</Badge></li>
          <li><Badge>Jira</Badge></li>
          <li><Badge>Confluence</Badge></li>
          <li><Badge>Jenkins</Badge></li>
          <li><Badge>Fastlane</Badge></li>
          <li><Badge>CocoaPods</Badge></li>
          <li><Badge>Swift Package Manager</Badge></li>
          <li><Badge>Carthage</Badge></li>
          <li><Badge>Unit Testing (XCTest)</Badge></li>
          <li><Badge>UI Testing</Badge></li>
          <li><Badge>Instruments</Badge></li>
          <li><Badge>Charles Proxy</Badge></li>
        </ul>

        <Heading3 className='mb-4 mt-8'>Additional Skills</Heading3>
        <ul className='mb-8 flex flex-wrap gap-2'>
          <li><Badge>C# (SNMP development)</Badge></li>
          <li><Badge>Network protocols</Badge></li>
          <li><Badge>Agile/Scrum methodologies</Badge></li>
          <li><Badge>Cross-platform collaboration</Badge></li>
          <li><Badge>Technical leadership</Badge></li>
          <li><Badge>App Store optimization</Badge></li>
        </ul>

        <Heading2 className='mb-6 mt-12'>Hobbies & Interests</Heading2>
        <p>
          Making music is my great passion. I also run a YouTube channel where I publish tutorials on electronic music production. My other hobbies include sports, traveling, and almost anything related to science.
        </p>

        <Heading2 className='mb-6 mt-12'>Contact Me</Heading2>
        <p>
          Interested in discussing iOS development or have a project in mind? Feel free to reach me via email at <InlineLink href="mailto:a.maerki@gmx.ch">a.maerki@gmx.ch</InlineLink>. I'd be delighted to hear from you.
        </p>
        <p>
          You can also find me on <InlineLink href="https://github.com/andreasmaerki">GitHub</InlineLink> and <InlineLink href="https://linkedin.com/in/andreas-maerki">LinkedIn</InlineLink>.
        </p>
      </div>
    </Section>
  )
}
