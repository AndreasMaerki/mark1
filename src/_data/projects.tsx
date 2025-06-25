import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import InlineLink from '@/components/common/reusable/InlineLink'
import constants from '@/constants'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const github: LinkProps = {
  label: 'Source code',
  icon: <GithubFillIcon size={22} />
}

const appStore: LinkProps = {
  label: 'App Store',
  icon: <ExternalLinkFillIcon size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const getLinks = (githubRepo?: string, url?: string, isAppStore?: boolean): LinkProps[] => {
  const links: LinkProps[] = []
  if (githubRepo) {
    links.push({ ...github, url: getGitHubUrl(githubRepo) })
  }
  if (url) {
    links.push({ ...(isAppStore ? appStore : live), url })
  }
  return links
}

const filters: string[] = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Objective-C',
  'Core Data',
  'Combine',
  'WidgetKit',
  'CloudKit',
  'Firebase',
  'REST API',
  'Bluetooth',
  'Location Services',
  'Push Notifications',
  'In-App Purchases',
  'Fastlane',
  'Unit Testing'
]

const projects: ProjectProps[] = [
  {
    slug: 'valora-retail-apps',
    featured: true,
    title: 'Valora Retail Apps',
    description: (
      <span>
        Development and enhancement of iOS applications for major Swiss retail brands including{' '}
        <InlineLink href='https://apps.apple.com/ch/app/k-kiosk/id1234567890'>k kiosk</InlineLink> and{' '}
        <InlineLink href='https://apps.apple.com/ch/app/avec/id1234567891'>avec 24/7</InlineLink>.
        Built with modern iOS technologies for seamless retail experiences.
      </span>
    ),
    techStacks: ['Swift', 'SwiftUI', 'UIKit'],
    otherTechStacks: ['Core Data', 'Combine', 'Push Notifications', 'REST API'],
    category: 'iOS Development',
    links: []
  },
  {
    slug: 'location-beacon-sdk',
    featured: true,
    title: 'Location & Beacon SDK',
    description: (
      <span>
        Proprietary SDK for collecting geo and Bluetooth beacon data, developed during my time at{' '}
        <InlineLink href='https://blinq.ch'>BLINQ AG</InlineLink>. 
        Enables precise indoor positioning and proximity-based features for retail applications.
      </span>
    ),
    techStacks: ['Objective-C', 'Swift', 'Bluetooth'],
    otherTechStacks: ['Location Services', 'Core Location', 'iBeacon'],
    category: 'SDK Development',
    links: []
  },
  {
    slug: 'retail-news-app',
    featured: true,
    title: 'News & Product Showcase Apps',
    description: (
      <span>
        Portfolio of iOS applications developed at{' '}
        <InlineLink href='https://goldbach.com'>Goldbach Interactive</InlineLink>{' '}
        for news consumption, product presentation, and sales. Features complex REST API integrations
        and modern iOS UI patterns.
      </span>
    ),
    techStacks: ['Swift', 'UIKit', 'REST API'],
    otherTechStacks: ['Core Data', 'JSON Parsing', 'Auto Layout'],
    category: 'iOS Development',
    links: []
  },
  {
    slug: 'swiftui-widget-collection',
    featured: true,
    title: 'SwiftUI Widget Collection',
    description:
      'A comprehensive collection of iOS 14+ widgets built with WidgetKit and SwiftUI. Demonstrates modern widget development patterns, data handling, and user customization options.',
    techStacks: ['SwiftUI', 'WidgetKit', 'Combine'],
    otherTechStacks: ['Intents', 'Core Data', 'UserDefaults'],
    category: 'Open Source',
    links: getLinks('swiftui-widgets')
  },
  {
    slug: 'core-data-manager',
    featured: true,
    title: 'Core Data Manager Framework',
    description:
      'A lightweight Core Data wrapper that simplifies database operations in iOS apps. Provides type-safe database operations, automatic migration handling, and query builders.',
    techStacks: ['Swift', 'Core Data', 'Combine'],
    otherTechStacks: ['Unit Testing', 'SPM'],
    category: 'Framework Development',
    links: getLinks('core-data-manager')
  },
  {
    slug: 'retail-scanner-app',
    title: 'QR/Barcode Scanner App',
    description:
      'Professional scanning application with advanced recognition capabilities. Features real-time scanning, product lookup integration, and inventory management tools.',
    techStacks: ['Swift', 'UIKit', 'AVFoundation'],
    otherTechStacks: ['Vision Framework', 'Core Image', 'REST API'],
    category: 'iOS Development',
    links: []
  },
  {
    slug: 'music-production-app',
    featured: true,
    title: 'Music Production Companion',
    description: (
      <span>
        iOS app for electronic music producers, integrating with my{' '}
        <InlineLink href='#'>YouTube channel</InlineLink> content. 
        Features beat patterns, synthesis tutorials, and production tools for mobile music creation.
      </span>
    ),
    techStacks: ['SwiftUI', 'AVFoundation', 'Core Audio'],
    otherTechStacks: ['AudioKit', 'MIDI', 'CloudKit'],
    category: 'Personal Project',
    links: getLinks('music-production-ios')
  },
  {
    slug: 'network-snmp-tool',
    title: 'Network SNMP Monitor',
    description: (
      <span>
        C# application developed during my diploma thesis in collaboration with Dynamic Design. 
        Scans network structures using Simple Network Management Protocol (SNMP) for network infrastructure monitoring.
      </span>
    ),
    techStacks: ['C#', 'SNMP', '.NET'],
    otherTechStacks: ['Network Protocols', 'Windows Forms'],
    category: 'System Development',
    links: []
  },
  {
    slug: 'fastlane-automation',
    featured: true,
    title: 'iOS CI/CD Pipeline',
    description:
      'Complete iOS deployment automation using Fastlane. Includes automated testing, code signing, App Store Connect integration, and TestFlight distribution workflows.',
    techStacks: ['Fastlane', 'Ruby', 'Xcode'],
    otherTechStacks: ['Jenkins', 'Git', 'App Store Connect API'],
    category: 'DevOps',
    links: getLinks('ios-cicd-pipeline')
  },
  {
    slug: 'combine-networking',
    title: 'Combine Networking Layer',
    description:
      'Modern networking layer built with Combine framework. Provides reactive API calls, error handling, and response caching with a clean, testable architecture.',
    techStacks: ['Swift', 'Combine', 'URLSession'],
    otherTechStacks: ['Unit Testing', 'Mocking', 'JSON Codable'],
    category: 'Framework Development',
    links: getLinks('combine-networking')
  },
  {
    slug: 'swiftui-design-system',
    featured: true,
    title: 'SwiftUI Design System',
    description:
      'Comprehensive design system for iOS applications built with SwiftUI. Includes reusable components, typography, color schemes, and accessibility features.',
    techStacks: ['SwiftUI', 'Swift', 'Accessibility'],
    otherTechStacks: ['Design Tokens', 'Documentation', 'SPM'],
    category: 'Design System',
    links: getLinks('swiftui-design-system')
  },
  {
    slug: 'ios-unit-testing-framework',
    title: 'iOS Testing Framework',
    description:
      'Custom testing utilities and helpers for iOS development. Simplifies unit testing, UI testing, and mock object creation with XCTest integration.',
    techStacks: ['Swift', 'XCTest', 'Unit Testing'],
    otherTechStacks: ['UI Testing', 'Mocking', 'Test Automation'],
    category: 'Testing',
    links: getLinks('ios-testing-framework')
  }
]

export { filters }
export default projects
