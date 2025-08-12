### TranceGuide FAQ

#### What is TranceGuide?
- **TranceGuide** is an iOS app (SwiftUI, MVVM) that helps you discover trance/psytrance/goa events worldwide.

#### Where does the data come from?
- Events are fetched read-only from the GoaBase API. TranceGuide is independent and not affiliated with GoaBase. Learn more at [GoaBase](https://www.goabase.net).

#### Which platforms are supported?
- **iOS** for the initial release. Android may follow later.

#### Do I need an account?
- **No.** There is no sign-up or login.

#### Is my location required?
- **No.** Location is optional and used only to search nearby events when you enable the “Around me” filter.

#### How is my location used and stored?
- Your coordinates are used to fetch relevant nearby results from GoaBase. No personal data is transmitted.
- Only a preference flag (whether you like location-based filtering) is saved in `UserDefaults`.
- Coordinates themselves are not persisted.

#### How do I enable “events around me”?
- Open the filter sheet and toggle **Around me**. If prompted, grant “While Using the App” location access. You can set the search radius there.

#### What permissions does the app request?
- **Location (When In Use)** for the optional nearby events feature.

#### Can I change the theme?
- **Yes.** Settings → Theme lets you choose:
  - **Standard**: follows system light/dark with system colors
  - **Goa**: dark, neon-accented theme with neumorphic styling

#### How do I refresh the event list?
- Pull down on the Events list. This clears caches and fetches fresh data.

#### How current is the data?
- Data is fetched from GoaBase on demand. Responses are cached briefly to improve performance and cleared on app start and when you pull-to-refresh. Images are cached with size limits.

#### Does it work offline?
- Limited. Some cached images may remain, but a connection is recommended for event data.

#### What map features are included?
- Map with event annotations, user location indicator, and controls (compass, scale, pitch). Nearby events are grouped to reduce clutter.
  
  Note: At times, multiple events may appear stacked. This can occur when they share the same venue location or when organizers provide only approximate coordinates (for example, a city or municipality center such as Zürich) rather than the exact venue address.

#### What do the map icons mean?
- Icons reflect event types (e.g., outdoor/festival vs. indoor/club) to help distinguish events at a glance.

#### How do I view event details?
- Tap an event in the list or on the map for dates, venue, organizer, images, and a link to its GoaBase page.

#### Why do I see a warning before opening links?
- For safety. External links open outside the app and TranceGuide doesn’t control external content.

#### What if event information seems wrong or outdated?
- GoaBase data is community-sourced. Always verify details with official event sources. Consider reporting corrections directly on GoaBase.

#### How are errors and empty states handled?
- The app shows clear overlays for loading, no results, no events, and errors, with actions to adjust filters or refresh.

#### What data does TranceGuide collect?
- No analytics or tracking in the codebase. Only minimal local preferences (e.g., theme, location-filter preference) are stored.

#### Is TranceGuide open source? What’s the license?
- No license file is included. See Settings → Terms of Use for in-app terms.

#### How can I contact the developer or learn more?
- See Settings → About for project info and credits (including acknowledgments to GoaBase).

#### Planned features?
- Android (if iOS is successful), enhanced offline capability, localization, and more filtering options are planned.

---

- **Data**: read-only from GoaBase; no affiliation
- **Privacy**: no accounts, no analytics; location optional and not stored
  (coordinates are sent to GoaBase only to fetch nearby results; no personal data transmitted)
- **Refresh**: pull-to-refresh clears caches and refetches
- **Theme**: switch Standard/Goa in Settings
- **Map**: annotated events, grouping, user location

