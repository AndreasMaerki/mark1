import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const Section = lazy(() => import('@/components/layouts/Section'))
const ReactMarkdown = lazy(() => import('react-markdown'))

const aboutContent = `# Hey👋, it's Andreas Maerki, Senior iOS Developer

As a passionate iOS developer with 10 years of experience, I bring extensive expertise in implementing high-quality mobile applications, particularly in retail. I've developed and enhanced apps for B2B and B2C clients, including major retail platforms like kkiosk and avec 24/7. My knowledge spans Swift, SwiftUI, and the latest iOS technologies. I excel in collaborating with agile teams and executing projects from conception to App Store publication, consistently delivering innovative solutions in the e-commerce space.

I'm currently a **Senior iOS Developer** at [Valora Schweiz AG](https://valora.com) where I develop new iOS applications and enhance existing ones using Swift, SwiftUI, and UIKit. I collaborate closely with iOS, Android, and backend developers to define new interfaces and conduct cross-platform code reviews to ensure feature parity across platforms.

My journey into software development began with a unique background in mechanical engineering and CNC machining, which taught me precision and attention to detail that I now apply to mobile development. I earned my **Dipl. Techniker HF in Computer Science** from ABB Technical School in Baden, making the transition from manufacturing to software engineering.

## Experience

### Recent Positions

**Software Engineer iOS** at [Valora Schweiz AG](https://valora.com), Zürich  
*November 2016 — December 2024*
- Development of new iOS applications and enhancement of existing ones using Swift, SwiftUI, and UIKit
- Collaboration with cross-platform teams to define interfaces and ensure feature parity
- Implementation of retail and e-commerce solutions for major Swiss brands

**Software Engineer iOS** at [BLINQ AG](https://blinq.ch), Zürich  
*June 2015 — April 2016*
- Development and enhancement of iOS applications in Objective-C and Swift
- Conception and implementation of proprietary SDK for geo and Bluetooth beacon data collection
- Occasional Android hotfixes and Google Play Store distribution

**Software Engineer iOS** at [Goldbach Interactive](https://goldbach.com), Zürich  
*November 2013 — February 2015*
- Started as intern, promoted to lead developer
- Conception and development of iOS applications for news, product presentation, and sales
- Implementation of complex REST APIs for backend system integration

## Skills

Here are the technologies I specialize in:

### iOS Development

- Swift 5.x
- SwiftUI
- UIKit
- Objective-C
- Xcode
- iOS SDK
- Core Data
- Core Animation
- UserNotifications
- MapKit
- AVFoundation
- Combine
- WidgetKit
- App Store Connect
- TestFlight

### Mobile Technologies

- REST APIs
- JSON/XML parsing
- Push notifications
- Location services
- Bluetooth/iBeacon
- In-app purchases
- CloudKit
- Firebase
- Realm Database
- Alamofire
- SDWebImage

### Development Tools & Practices

- Git/GitHub
- GitLab
- Bitbucket
- Jira
- Confluence
- Jenkins
- Fastlane
- CocoaPods
- Swift Package Manager
- Carthage
- Unit Testing (XCTest)
- UI Testing
- Instruments
- Charles Proxy

### Additional Skills

- C# (SNMP development)
- Network protocols
- Agile/Scrum methodologies
- Cross-platform collaboration
- Technical leadership
- App Store optimization

## Hobbies & Interests

Making music is my great passion. I also run a YouTube channel where I publish tutorials on electronic music production. My other hobbies include sports, traveling, and almost anything related to science.

## Contact Me

Interested in discussing iOS development or have a project in mind? Feel free to reach me via email at [andreas.maerki@gmail.com](mailto:andreas.maerki@gmail.com). I'd be delighted to hear from you.

You can also find me on [GitHub](https://github.com/andreasmaerki) and [LinkedIn](https://linkedin.com/in/andreas-maerki).`

export default function About(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <Section
      id='about'
      className={clsx(
        'mx-auto max-w-4xl',
        animationClass,
        'relative'
      )}
    >
      {/* Subtle background effect without grid duplication */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-50 blur-3xl transform translate-y-12" />
      
      <div className="relative z-10">
        <div className='[&>*]:animate-fade-in md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'>
          <ReactMarkdown
            components={{
              h1: ({ children }) => <Heading1 className='mb-8 text-center'>{children}</Heading1>,
              h2: ({ children }) => <Heading2 className='mb-6 mt-12'>{children}</Heading2>,
              h3: ({ children }) => <Heading3 className='mb-4 mt-8'>{children}</Heading3>,
              a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
              ul: ({ children }) => (
                <ul className='mb-8 flex flex-wrap gap-2'>{children}</ul>
              ),
              li: ({ children }) => (
                <li>
                  <Badge>{children}</Badge>
                </li>
              )
            }}
          >
            {aboutContent}
          </ReactMarkdown>
        </div>
      </div>
    </Section>
  )
}
