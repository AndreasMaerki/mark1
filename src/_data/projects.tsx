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
    slug: 'k-kiosk-app',
    featured: true,
    title: 'k kiosk App',
    description: (
      <span>
        Swiss retail loyalty app with stamp cards, coupons, and rewards system. Features include digital stamp collection, 
        push notifications for offers, and seamless QR code redemption. Ranked #73 in Shopping category with 4.4★ rating.
      </span>
    ),
    techStacks: ['SwiftUI', 'Swift', 'REST API', 'Firebase'],
    otherTechStacks: ['MVVM Architecture', 'Combine', 'Swift Concurrency', 'Push Notifications', 'Core Location'],
    category: 'iOS Development',
    links: getLinks(undefined, 'https://apps.apple.com/ch/app/k-kiosk/id1215644802?l=en-GB', true)
  },
  {
    slug: 'brezelkonig-app',
    featured: true,
    title: 'Brezelkönig App',
    description: (
      <span>
        Loyalty and payment app for Switzerland's leading pretzel chain. Features crown collection system, 
        tier-based rewards (Bronze/Silver/Gold), integrated payments, and store locator. Ranked #14 in Food & Drink with 4.2★ rating.
      </span>
    ),
    techStacks: ['SwiftUI', 'Swift', 'REST API', 'Firebase'],
    otherTechStacks: ['MVVM Architecture', 'Combine', 'Swift Concurrency', 'Apple Pay', 'Core Location', 'Push Notifications'],
    category: 'iOS Development',
    links: getLinks(undefined, 'https://apps.apple.com/ch/app/brezelk%C3%B6nig/id1526693066?l=en-GB', true)
  },
  {
    slug: 'avec-247-app',
    featured: true,
    title: 'avec 24/7: Scan & Pay',
    description: (
      <span>
        Autonomous shopping app enabling 24/7 retail experiences. Features QR code entry, barcode scanning, 
        and integrated payments for unmanned stores. Revolutionary retail technology with 4.5★ rating from 839+ reviews.
      </span>
    ),
    techStacks: ['SwiftUI', 'Swift', 'REST API', 'Firebase'],
    otherTechStacks: ['MVVM Architecture', 'Combine', 'Swift Concurrency', 'AVFoundation', 'Push Notifications', 'Core Location'],
    category: 'iOS Development',
    links: getLinks(undefined, 'https://apps.apple.com/ch/app/avec-24-7-scan-pay/id1454000074?l=en-GB', true)
  },
  {
    slug: 'blinq-dating-app',
    featured: true,
    title: 'BLINQ Dating App',
    description: (
      <span>
        Swiss dating app that competed with Tinder, featuring innovative location-based matching and the famous "How Hot" AI feature 
        developed with ETH. Used iBeacon technology for proximity notifications when users were in the same venue. 
        Featured in{' '}
        <InlineLink href='https://www.washingtonpost.com'>Washington Post</InlineLink> for its AI attractiveness rating system.
      </span>
    ),
    techStacks: ['Objective-C', 'UIKit', 'REST API', 'Firebase'],
    otherTechStacks: ['iBeacon', 'Bluetooth', 'Core Location', 'Push Notifications', 'Machine Learning'],
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
        Technology later sold to outdoor advertising company APG for location-based advertising.
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
        including all AZ Medien newspaper titles, B2B applications for Swisscom and Hyundai. 
        Features complex REST API integrations, news consumption, product presentation, and sales functionality 
        with modern iOS UI patterns.
      </span>
    ),
    techStacks: ['Objective-C', 'Swift', 'UIKit'],
    otherTechStacks: ['REST API', 'Core Data', 'Push Notifications'],
    category: 'iOS Development',
    links: []
  },
  {
    slug: 'workpulse-macos',
    featured: true,
    title: 'WorkPulse',
    description: (
      <span>
        macOS time tracking application built with SwiftUI and SwiftData. Features multiple simultaneous activity tracking,
        calendar views, dashboard analytics, and color-coded activities. 
        Includes AI coding agent experimentation for modern development workflows.
      </span>
    ),
    techStacks: ['SwiftUI', 'SwiftData', 'Swift'],
    otherTechStacks: ['MVVM Architecture', 'Calendar Kit'],
    category: 'macOS Development',
    links: getLinks('WorkPulse')
  },
  {
    slug: 'cybergram-ios',
    title: 'Cybergram',
    description: (
      <span>
        Instagram clone built with SwiftUI and Firebase featuring comprehensive social media functionality. 
        Includes user authentication with sign-up and login flows, photo upload capabilities with Firebase Storage, 
        customizable user profiles with profile pictures, real-time feed displaying posts from other users, 
        and cloud-based data synchronization using Firestore for seamless user experience across devices.
      </span>
    ),
    techStacks: ['SwiftUI', 'Firebase', 'Swift'],
    otherTechStacks: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'Cloud Services'],
    category: 'iOS Development',
    links: getLinks('Cybergram')
  },
  {
    slug: 'network-snmp-tool',
    title: 'Network SNMP Monitor',
    description: (
      <span>
        C# application developed during my diploma thesis in collaboration with Dynamic Design. 
        Monitors network infrastructure for performance and health analysis.
      </span>
    ),
    techStacks: ['C#', '.NET'],
    otherTechStacks: [],
    category: 'System Development',
    links: []
  },
  {
    slug: 'fastlane-automation',
    title: 'iOS CI/CD Pipeline',
    description:
      'Complete iOS deployment automation using Fastlane. Includes automated testing, code signing, and TestFlight distribution workflows.',
    techStacks: ['Fastlane'],
    otherTechStacks: [],
    category: 'DevOps',
    links: []
  }
]

export const featuredProjects = projects.filter(project => project.featured)

export default projects
