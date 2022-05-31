# Changelog

## [4.1.2] - 2022-05-26

### Added
- N/A

### Changed
- Bug Fix: Objective options now save and refresh correctly
- Bug Fix: Avatars now can be changed without refreshing the page

## [4.1.1] - 2022-05-25

### Added
- Enhancements to Issue Reporting

### Changed
- Bug Fix: Report page renders properly
- Bug Fix: SPRS drilldown on View link

## [4.1.0] - 2022-05-23

### Added
- Enhancements to Toast System
- Enhanced Custom Field validation
- Assets can now be mapped to many components
- Components can now be created stand-alone (not required to be a child of a security plan)
- Components can now be mapped to many security plans
- Can now load default tests from the catalog into control implementation tests (templates from the catalog to feed Lightning Assessments)
- Added spinners when building artifacts using the Builder Wizards to show progress
- Objectives tab on control implementations now shows/hides based on parent catalog
- New top navigation system to better organize modules
- Unit testing framework to support automated testing
- Wiz integration for Assets
- Report - Issues by Time Range - query and see status of closing issues/POAMs due in a given time range, grouped by issue owner
- Explorer now shows the Level flag for better visual indication of the tiering
- Added logging and spinners to better show progress when importing and deleting catalogs

### Changed
- Bug Fix: Can now add Assets to Components
- Bug Fix: Asset mapping APIs are no longer hidden
- Profile mapping engine now shows IDs of the parent catalogue
- Bug Fix: Fixed intermittent bugs on Component and Project Builder Wizards
- Refactored assessment services for performance optimization
- Bug Fix: Fixed naming convention on Excel download files
- Trivy was added to the container build as a second vulnerability scanner for defense in depth
- Startup file was refactored to be more efficient on launching the application
- Improved logging to detect intermittent upload errors with catalogs
- Bug Fix: Avatars render properly on user admin forms
- Bug Fix: Added null check for custom fields on security control form
- Bug Fix: Subsystems now show properly on security control forms
- Bug Fix: Catalog export now excludes archived controls

## [4.0.3] - 2022-05-11

### Added
- N/A

### Changed
- Bug Fix: Removed Avatars on Excel downloads
- Bug Fix: Improved error handling for catalog uploads
- Bug Fix: Corrected intermittent issues with custom fields

## [4.0.2] - 2022-05-10

### Added
- N/A

### Changed
- Fixed POAM tab not showing
- Improved RBAC logging for access control issues

## [4.0.1] - 2022-05-09

### Added
- N/A

### Changed
- Improved hide/close button on builders (always shows)
- Questionnaires now have a BETA tag
- Cleaned up legacy Print, Email, and Export code
- Bug Fix: Errors on Project Builder
- Build optimizations on backend
- Supply Chain tables now sort correctly by Title
- Create New stakeholder button now shows/hides when displaying the data entry form
- Updated SPRS Report CMMC Links
- Password confirmation now supports additional special characters
- OSCAL download now working correctly
- Bug Fix: Fixed error where numbers were sometimes converted to dates by the Time Travel system

## [4.0.0] - 2022-05-08

### Added
- Redesign of the Compliance Cockpit and RegScale form system
- NGRX for client side caching and extreme front-end performance improvements
- Updated Support Links to the new RegScale Hubspot system
- Component Builder

### Changed
- Refactored all Builder code
- QA: Added validation to Supply Chain cost fields (contract value, funded amount, and actual costs)
- Reordered case management form to be more logical for data entry
- Fixed user button label
- Various minor bug fixes from Sonarqube
- Section 508 improvements
- Minor bug fixes and enhancements throughout the application
- Updated and improved icons and styling
- Date check bug fixes throughout the forms

## [3.13.0] - 2022-04-25

### Added
- Catalog import/export now include child tables
- API to retrieve a specific service account
- API to rename a system security plan
- Integrations for Security Plans with Wiz Projects, ServiceNow Assignment Groups, Jira Projects, and Tenable Asset Groups

### Changed
- Bug Fix: Printable version of control implementation now works
- Updated verbiage in the Time Travel system
- Control tests can now be batch created
- Scorecards are now properly locked to Enterprise Edition customers
- CSS: Explorer now shows link cursor for child items
- Rebased to master to pickup CI/CD changes
- Bug Fix: Transformer mappings now work properly on the security plan print form

## [3.12.0] - 2022-04-20

### Added
- Added ability to exclude components from SPRS report
- Added account lockout features (5 bad passwords disables the account)
- Added a Close button for the Explorer modal

### Changed
- Bug Fix: Subsystems now show correctly on control implementation form
- Bug Fix: Prevented API calls that were throwing errors when unauthenticated
- Bug Fix: Can now delete tasks from the Kanban board
- Bug Fix: Control Implementations now render properly for emails
- Bug Fix: Added validation for Draft issue status
- Bug Fix: Security Plan Print now works properly

## [3.11.1] - 2022-04-19

### Added
- N/A

### Changed
- Hot Fix: License count now calculates correctly on login

## [3.11.0] - 2022-04-18

### Added
- SPRS Rollup Report available for NIST 800-171 (rolls up score for SSP and all child components)
- Control Implementation - Navigation buttons now check for changes before allowing navigation away from the page (Next and Previous buttons)
- Added Mediatr pattern for improved testability of C# code
- Catalog Import/Export now processes child records of the security control (objectives, parameters, tests, CCIs)

### Changed
- Bug Fix: Fixed View Model for Control Implementations - dramatically reduced data query size
- Controller optimization for improved API performance at scale
- Bug Fix: Gantt chart queries now execute exponentially faster
- Bug Fix: Gantt chart hidden for new records
- Bug Fix: License key generator fixed after Node.js patch
- Bug Fix: System configuration now listens for license key changes and updates after saving

## [3.10.0] - 2022-04-13

### Added
- Added support for DISA CCIs to support STIG scanners
- Added support for classification banners in the header/footer of the application

### Changed
- Bug Fix: Licensed user count no longer counts deactivated users
- Exceeding licensed user count no longer prevents login, just throws a warning

## [3.9.0] - 2022-04-10

### Added
- Added Cancel button when editing RegScale system configuration
- Added Parts to Objectives to support OSCAL modeling
- Added Parameter Types to Security Controls (extension to OSCAL for improved automation)
- Added Parent Parameter to Control Implementation parameters (allowing inheritance from a catalog's parameters to better align with OSCAL)
- Added API to retrieve all Objectives for a given catalog

### Changed
- Bug Fix: Corrected issue with generating new license keys after patching CryptoES
- Bug Fix: "Other ID" on Control Objective is no longer required
- Bug Fix: Removed datetime checks on required fields in C#, removed compiler warnings
- Bug Fix: Fixed loop logic in ApplyProfile C# API
- Bug Fix: Security Control subsystems now listen for changes when navigating
- Improved formatting and labeling of security control objectives

## [3.8.0] - 2022-04-06

### Added
- API for applying Security Profiles via API
- Extended Issues/POAMs module to support all FedRAMP fields
- Added support for the CISO Known Vulnerability Exploits feed

### Changed
- Bug Fix: Inheritance of objectives on the SPRS report is fixed

## [3.7.4] - 2022-04-04

### Added
- N/A

### Changed
- Security Plans now hide Gantt Chart and Ports/Protocol tabs until the record is saved
- Refactored security plan builder to work more efficiently and consistently, removed redundant code
- Builders: View profile links now work properly and open in a new tab
- Builders: Now close consistently after clicking finish
- Added server side validation for Case management status/date resolved

## [3.7.3] - 2022-04-02

### Added
- N/A

### Changed
- Bug Fix: Control implementations now search properly in the Relationship module
- Bug Fix: Multiple enhancements to the SPRS report

## [3.7.2] - 2022-03-30

### Added
- Security - forced patching of the base image prior to initial build

### Changed
- Minor bug fixes to builders
- Changing an Implementation Option now changes the status of all related Objective option selections
- Bug Fix: Component Statusboard now pulls issues from all levels
- Tweaked CI/CD build and release files
- Minor Sonarqube bug fixes

## [3.7.0] - 2022-03-28

### Added
- New UX for builders for:
    - Policies
    - Security Plans
    - Supply Chain
    - Projects
- Added Sonarqube Cloud source code scanning
- Added additional fields to the user object:
    - ExternalId - for syncing with external accounts (i.e. Active Directory)
    - DateCreated 
    - LastLoginDate
    - Read-Only Flag
- Improved User Experience for Scorecard

### Changed
- Cleaned up CI/CD pipeline files
- Added API to pull a simple list of user accounts (with no sensitive data)
- Removed legacy Cypress testing to reduce file size of the build
- Added API to support bulk syncing of Azure AD groups

## [3.6.2] - 2022-03-16

### Added
- Views can now be toggled between SSP and Component on the SPRS Report for NIST 800-171

### Changed
- Toggle now available to show objectives in a printable form for each control on the SPRS Report for NIST 800-171

## [3.6.1] - 2022-03-14

### Added
- SPRS Report - bug fixes and added logging to show missing objectives

### Changed
- Created View/Create models to simplify the APIs for creating and updating Profile Mappings
- Bug Fixes: Minor tweaks to Component Dashboards and Gantt charts
- Bug Fixes: Profile mapping not showing in the API list

## [3.6.0] - 2022-03-10

### Added
- Subsystem redesign of the UX
- New SPRS scoring report for NIST 800-171
- Categorization functionality to RegScale to better support control selection for overlays
- Issue Gantt chart functionality for visualizing issues/corrective actions
- Component Dashboard

### Changed
- Bug Fix: Fixed security plan builder issue where some controls improperly showed redundant
- Bug Fix: Comment alerts on delete are more intuitive.
- Bug Fix: Link alerts on delete are more intuitive.
- Bug Fix: Comment alerts now work on creating a new comment.
- Bug Fix: File system deletion alerts are now green v/s red on success.
- Bug Fix: Subsystem now hides until loaded.
- Bug Fix: Classified records now wrap properly in the subsystem.
- Fixed rebasing issues across branches

## [3.5.0] - 2022-02-24

### Added
- Aggregate APIs for pulling bulk data visualizations in external data visualization tools
- Explorer now auto-expands the current record and shows/hides the sneak peek if you are already on the record
- Requirement form now shows the parent control if it exists in the Regulations tab
- Component Status Board
- Lineage and deep linking added for Assessments and Risks (previously just on issues)
- Aggregate queries added for external data visualization

### Changed
- Bug Fix: Main dashboard for security plans now loads with no data (checks for null first)
- Bug Fix: LGPL license now points to RegScale
- Bug Fix: Form labels now display correctly for change password, password reset, and confirmation pages
- Bug Fix: Added validation to prevent the maximum length of a Requirement title from being exceeded
- Requirement form reorganized to show/hide fields based on whether it has a parent control
- Bug Fix: Child issues and assessments now showing correctly on the Policy Status Board

## [3.4.2] - 2022-02-17

### Added
- Added UUID info for the user on the workbench
- Reformatted user profile page

### Changed
- Hotfix: Issue External ID queries refactored for non-null set
- Bug Fix: Spinner updated for OSCAL export for security plans
- Bug Fix: CSS styling on Workbench

## [3.4.1] - 2022-02-16

### Added
- N/A

### Changed
- Hotfix: Issue External ID queries refactored for null set

## [3.4.0] - 2022-02-15

### Added
- Improved user caching to make more consistent
- New dashboards/home page design
- Ability to link issues to multiple records/tiers for ease for querying and reporting
- Issues can now be related at multiple layers for ease of querying/reporting, to include:
    - Control Implementations
    - Assessments
    - Requirements
    - Security Plans
    - Projects
    - Supply Chain
    - Policies
    - Components
    - Incidents
- Added a bulk processor API to issues to allow the RegScale CLI to do bulk conversions for customers with legacy data
- Project, Security Plan, Supply Chain, and Policy Status Boards redesigned and improved UX

### Changed
- Subsystems - close button made smaller and moved to the top to avoid visual confusion with Save button
- Time Travel UX refactored to work better in a modal view
- All Find by "External ID" APIs on issues now return multiple records instead of a single (Prisma, Wiz, ServiceNow, and Jira)
- Added method to show plural name of modules in the Module Service
- Improved Login styling
- Bug Fix: Fixed issue where spinner would sometimes not dismiss on session timeout from the login page
- Bug Fix: Parent ID and Module now passes correctly to the new record creator
- Bug Fix: Editing security controls now works properly
- Bug Fix: Catalogs now corectly display metadata
- NPM package updates for vulnerabilities
- Fixed footer links to point to RegScale.com and updated EULAs and Privacy Policy

## [3.3.1] - 2022-01-25

### Added
- Kanban view optimized to be in a modal view

### Changed
- Added configuration to slow down monitoring endpoints
- Removed legacy Cucumber testing tags on the List Views
- Bug Fix: Lightning Assessment sliders now work again
- Bug Fix: Kanban drag and drop now works correctly/consistently 

## [3.3.0] - 2022-01-23

### Added
- Copy token button added to user profile
- Health monitoring system added for RegScale
- Add multiple new layers to the Security Control model for OSCAL to improve the UX:
    - Implementation Options
    - Test Plans
    - Control Objectives/Enhancements
    - Parameters
- Added spinner to Transformer to show that it is still processing for larger data loads
- Objectives can now be assessed at the control implementation level
- Added the ability to categorize risk through various lenses
- Added support for Risk Trending
- Added level of effort for Tasks and Issues to help with resource loading
- Added CMMC Asset category to components and assets

### Changed
- Bug Fix: errors with date filters pulling on the dashboards
- All dashboards are now driven by a year selection
- Added more options for Security Plan and Control Implementation Status
- Bug Fix: Requirements and Security Controls now parsed correctly in Explorer
- Bug Fix: Subsystem Reload after Save
- Bug Fix: Health check stylesheet now served properly within a container deployment
- Classification levels can now be archived from the List View
- Ports and Protocols: default end port to be the same as the start port
- Changes to ports and protocols now are logged in history
- SSP OSCAL export now provides more control implementation metadata

## [3.2.0] - 2022-01-04

### Added
- TreeView visualization to Explorer - accordion expansion
- Volpe Threat Modeling Integration - MVP 1

### Changed
- Bug Fix: Formatting on system configuration
- Changed favicon to new RegScale logo
- Optimized all images for faster browser loading

## [3.1.1] - 2021-12-23

### Changed
- Bug Fix: Fixed .NET Core bug with IIS 6

## [3.1.0] - 2021-12-19

### Added
- Added support for Volpe Risk Modeling integration
- History table is now sortable and filterable
- Drilldown is now available on all charts

### Changed
- Bug Fix: Fixed formatting on Lightning Assessment Header
- Bug Fix: Eliminated security risk on password reset
- Improved visualization, sorting, and filtering on My Activity and the News Feed
- Improved button layout for user management
- Email service improved with better logging/validation

## [3.0.6] - 2021-12-13

### Changed
- Bug Fix: .NET Core Optimizations

## [3.0.5] - 2021-12-10

### Changed
- Bug Fix: Removed legacy `wait-for-it` script, made SQL startup more resilient

## [3.0.4] - 2021-12-10

### Changed
- Bug Fix: Bash optimization for multi-stage build

## [3.0.3] - 2021-12-10

### Changed
- Bug Fix: Added bash back to the Linux container

## [3.0.2] - 2021-12-10

### Changed
- Bug Fix: Permission error on `wait for it.sh` file

## [3.0.1] - 2021-12-08

### Changed
- .NET Core Version 6 upgrade including all Nuget packages
- Container hardening and upgrades

## [3.0.0] - 2021-12-05

### Added
- Rebranded from Atlasity -> RegScale
- New form system design with three columns and floating toolbar
- Tenable.sc integration
- Jira integration
- Ability to model control implementations by responsibility (i.e. provider, customer, shared)
- New Overall/Master dashboard for home page
- Requirements now support Lightning Assessments
- Scorecard now implemented for Projects, Supply Chain, Components, and Policies
- Angular 13 upgrade
- Loading spinnners added for sending emails
- Security Controls can now be exported
- Add labels to drill down charts on the List Views
- Added links to online documentation
- Header to dashboard

### Changed
- Improved the loading spinner implementation when fetching data
- Dashboard filters can now be toggled on/off
- Security Plan status board now has tabs to toggle between individual and aggregate views
- Bug Fix: Fixed issue with incorrect lookup of catalog title on Transformer
- Bug Fix: Copying a requirement no longer copies last assessment result
- Bug Fix: Policy Status Board now calculates 'Not Assessed' status correctly
- Bug Fix: Service Accounts are now properly locked as an Enterprise feature
- Supply chain module can now track actual costs
- Project module can now track actual finish date
- All spinners are now consistently styled
- Removed legacy PWA code
- Refactored to remove a large amount of redundant code
- Profile mapping moved into a tab v/s subsystem
- History visualization now shows by default and has labels
- Cause Code Tree is now in its own tab
- Upgraded Kendo UI for Angular packages to the latest
- Security patching of NPM packages
- Bug fix on Requirement controller
- Updated routing to allow for more efficient copying
- Profile Mapping User Experience enhanced
- Fixed periodic rendering issues on history visualization
- Swagger API cutover to RegScale branding - no impact to customer integrations/routes
- Bug Fix: Fixed RBAC errors on default settings (parent inheritance working again)
- All Builders/Wizards have the UI/UX refactored
- Scorecard now defaults to showing open issues v/s total
- Bug Fix: eliminated double API calls to the subsystem
- Bug Fix: requirement module now correctly pulls control tests

## [2.4.0] - 2021-10-11

### Added
- Enriched data model for Catalog OSCAL export
- Supports namespaces for OSCAL
- Ports and protocol support added for Assets, Components, and Security Plans
- Azure Active Directory (AD) Single Sign On (SSO) Support
- Integration dashboard for improved ease in managing integrations
- Added ability to generate Personal Access Tokens (PATs) to support Service Accounts that can be leveraged for API automation
- Added integration with MITRE Security Automation Framework (SAF) via Inspec/STIG profiles using OSCAL
- Indicators to grids to better indicate sorting functionality
- Master assessments now allow you to visualize the individual assessments that make up the overall score
- Added support to generate OSCAL SAP/SAR documents from Atlasity assessments
- Improved dashboard visualizations including stacked bar charts
- Profiles now display info for Control Ids and and Catalogs

### Changed
- Bug Fix: Check for null on Login Banner
- Bug Fix: OSCAL Security Plan export handles null dates
- Bug Fix: OSCAL Catalog export handles null dates
- Lightened N/A CSS on the Security Plan Scorecard
- Bug Fix: Fixed memory leak to unsubscribe on notifications
- Replaced Chart.js with Telerik Charts - improved UI
- Replaced eCharts pie charts with Telerik Charts - improved UI
- Improved UI for Security Plan Print - added Catalog data
- Improved UI for Security Scorecard - added Catalog data
- Added "Automation" fields to assessments to support OSCAL and integrations
- Improved labeling around risks
- Bug Fix: Control Id is now sortable
- Default styling changed for form focus
- Workbench impersonation renamed
- Custom fields now show a default view when no fields
- Bug Fix: Some fields were not sorting correctly and have been fixed
- Bug Fix: Copy security control did not copy control type
- Bug Fix: Deactivated users can no longer log in
- Moved custom fields to a tab on the component form
- Custom fields all moved into the tabbed interface
- Bug Fix: Copy security control did not copy control type
- Bug Fix: Catalog print now correctly displays all controls
- Back button only prompts warning if data has changed (form is dirty)
- Login now redirects to the dashboard as the Home page
- Bug Fix: Control implementation sorting now works in the grids
- Security: Added a flag to allow the warning banner to be bypassed for security scans

## [2.3.0] - 2021-09-12

### Added
- Validation to .NET controllers and simplified Create/Update APIs
- Security profiles can now be printed and emailed
- Added Login Banner capability that can be customized by tenant
- Added Privacy Police notice to the footer of the application

### Changed
- Removed ElasticSearch integration
- Added ability to toggle on Sentry.io monitoring with an environment variable for .NET Core
- Removed Angular Sentry.io monitoring (not useful)
- Bug Fix: Workflow enabled for cases
- Bug Fix: Notification link now works for questionnaires
- Bug Fix: Pivot table visualization works for cases
- Bug Fix: Toasts now correct when creating a new organization
- Bug Fix: Component print and email now works

## [2.2.3] - 2021-08-31

### Added
- Integration fields for issues (JIRA, ServiceNow, Wiz, Prisma)
- Classification subsystem
- New tenant auto-seeds picklist metadata
- Indexing for Relationships module to improve performance
- Indexing for Classified Records to improve performance
- Indexing for Events/Timeline to improve performance
- Indexing for Workflow to improve performance
- Indexing for Cases to improve performance
- Additional features and functionality for OSCAL exports of Security Plans and Components

### Changed
- Patched JWT Nuget package to address security vulnerability
- Updated Telerik PROD License Key
- Fixed legacy CSS issues with `/` and moved to `math.div`
- Upgraded to Angular 12.2
- Added Step indicator to recurrence wizards
- Added server side data validation and API simplification for assessments and issues
- Custom fields now print
- Added warning when creating a custom field that data type cannot be changed
- Added properties to parameters for OSCAL

## [2.2.2] - 2021-08-24

### Added
- Scorecard now shows modal for open issues

### Changed
- Added Control ID to show on the control implementation form
- JWT tokens now expire in 24 hours instead of 2
- ControlId added to Transform Mapper
- Transformer now refreshes controls when the base control changes
- Fixed duplicate IDs on the catalog form
- Fixed bug where child issues were not always pulling correctly on the Scorecard
- Fixed bug to default printable if security control type is undefined
- Security groups are now sorted for RBAC
- Lightning assessment always refreshes when closing the page now
- Fixed CSS styling on date picker controls
- Added CSS styling to show N/A controls are excluded from Scorecard calculations
- Fixed bug where control type was not being set properly when loading a new catalog

## [2.2.1] - 2021-08-17

### Added
- Security Plan Scorecard
- Added Wizard interface for Assessments, Data Calls, and Tasks Recurrence

### Changed
- Bug Fix: All events on the status board are now processed correctly when hovering over the heat maps
- Uploading files now generates a toast to confirm the upload
- Softened colors on the Security Plan Status Board
- Bug Fix: Bulk edit of control implementations now works properly
- Bug Fix: Last Assessment hover fix
- Improved tooltips on the Status Boards
- Bug Fix: Updated date formatter based on NPM library update

## [2.1.3] - 2021-08-06

### Added
- Case Management Module
- Added mapping flag to catalogs as a visual indicator
- Enhanced date picker added throughout all modules
- Improved data validation prompts
- OSCAL: Inheritable flag added to control implementations (used for leveraged authorizations)
- Transformer feature now shows mappings in the UI
- Builders now track linkages between profiles and the records they create (OSCAL)
- Dashboards now have pageable/filterable grids
- Catalogs now have links to the source OSCAL file that generated them
- All modules have an API to be queried by custom fields

### Changed
- Bug Fix: Catalog title is now a required field via the API
- Performance - rewrote the export JSON functionality
- Bug Fix: Logic was broken on show/hide mapping wizard
- Bug Fix: Confirmation email link now works
- Bug Fix: Registration link now works
- Bug Fix: Removed deprecated Service Account API
- Bug Fix: Can now delete catalogs and security controls with mapped controls
- Added warning when trying to map a catalog with no controls
- Risk matrix removed hard coded thresholds
- Bug Fix: Date picker popups now work in modal windows
- Catalog and security controls are now archived versus deleted
- Bug Fix: Setup now shows for Global Admin on Community Edition
- Bug Fix: Menu options now hidden from the Global Admin account
- Angular 12.1.4 minor upgrade and various npm package upgrades
- Bug Fix: Get all controls by security plan query was not always accurate, fixed lookup
- Bug Fix: Fixed sporadic bug where lightning assessments sometimes would not create for general users
- Bug Fix: Kanban not showing tasks on workbench
- Kanban button colors are now white
- Bug Fix: Tasks on workbench now reset correctly with impersonation
- Bug Fix: Kanban now shows profile pictures again
- OSCAL validation no longer prevents downloads - just throws warnings

## [2.0.2] - 2021-07-19

### Added
- Added Record Level access control to all modules
- OSCAL export functionality for Security Plans, Catalogs, Profiles, and Components with AJV schema validation
- Each Atlasity instance now has a unique GUID tied to its license for improved Software Assurance
- License is now checked on login and access is enforced based on license validity
- Upgraded WYSIWYG Editor
- Recurrence Engine - now allows preview and group assignments
- Performance - major improvements to query performance on list views

### Changed
- License key management - Community Edition locks after 30 days and requires a license registration
- License now managed only at the Global Admin account, removed on Setup page
- Added support for Stored Procedures for SQL performance optimization on the backend
- Bug Fix: Org list not shown when creating users using the Global Admin account
- Added password validation when creating a new user
- Bug Fix: Domain now set properly on login
- Multiple backend performance improvements (query optimizations)
- Minor bug fixes and improvements
- AI for issues now driven by a button click instead of defaulted for performance reasons
- Bug Fix: All licensing now set from Admin panel versus environment variables
- Bug Fix: Catalog export now working
- Added Control ID to security control list view

## [1.6.1] - 2021-06-06

### Added
- Added Risk Mitigation module to map controls to risks they mitigate
- Added Control Mapping matrix visualization
- Component module with OSCAL export functionality
- Added builders to components and flowed down to assets (with visualizations)
- Date graphing throughout the application
- Kanban Task Board feature enabled for all modules

### Changed
- Assets can now be mapped to many components
- Assets now have tabs to organize the form
- Provided a GUI for adding/managing control parameters
- Angular 12 upgrade
- Swapped crypto-js library for crypto-es (TypeScript friendly)
- Cleaned up NPM vulnerabilities
- Updated NPM dependencies, removed unneeded packages
- Bug Fix: Domain lookup now functions properly under all circumstances

## [1.5.0] - 2021-05-07

### Added
- Added Project Status Board
- Added Supply Chain Builder
- Added Project Builder
- Added Policy Builder

### Changed
- BUG FIX: Security plan delete now works and removes control tests and results

## [1.4.1] - 2021-04-30

### Added
- Master Assessment feature (schedule many assessments at once)
- Relationship Manager for many to many linking of records
- Lightning assessments now support links, comments, and attachments

### Changed
- Reformatted Quality system on control implementations
- Lightning Assessment feature now hidden when there are no tests created
- BUG FIX: Lightning Assessments works properly again for a single assessment
- BUG FIX: Delete button works again for assessments
- BUG FIX: Toggle off for Supply Chain and Policy now works

## [1.3.0] - 2021-04-17

### Added
- Questionnaire Module
- Added metadata fields to Control Implementations
- Added tabs to Control Implementations UX
- Added quality management to Control Implementations
- Added Risk Maturity Tier to Security Plans
- Added filters to the Calendar for user (default), facility, and org
- Google style search bar added to all modules
- Added Control Tests to each Control Implementation for Enterprise Customers
- Added Lightning Assessment Functionality
- Added a new API to pull all child records for a given security plan in a single call

### Changed
- Controls now show in the preview box for the security plan builder
- Bug Fix: Search bar formatting improved for CSS
- Added reset to search on Security Plan Status Board

## [1.2.0] - 2021-03-30

### Added
- MD5 checks and enhancements for Time Travel
- AI Engine built for issue recurrence analysis
- Refactored reporting engine page
- Added summary info to the Security Plan module
- Enhanced pagination support for large data sets
- Added export functionality for all modules (JSON format)

### Changed
- Bug Fix: Handled null records on Time Travel and improved formatting
- Bug Fix: Org pivot tables now work when visuallizing records in lists
- Fixed width of user table in the Admin panel
- API key merged into the User Profile versus a separate page
- Bug Fix: Corrected calculation error on the DOD 171 self-assessment scoring
- Added divider between catalog controls on printable form
- Re-organized catalog print page
- Bug Fix: Hide control implementations until save on security control form
- Enhancement: Moved action buttons on user form to the left to prevent scrolling off page
- Security Control weight now accepts decimals; not just integers

## [1.1.1] - 2021-03-21

### Added
- Persists login username in localStorage, uses it to remember username and to check LDAP status

### Changed
- Bug Fix: AD/LDAP bug fixed
- Bug Fix: Creating new users

## [1.1.0] - 2021-03-15

### Added
- License key is now driven by the Admin panel versus an environmental variable
- Additional fields for risk modeling
- Added Organization module
- Added Questionnaire backend
- Added Reporting module with DoD 800-171 Self-Assessment Scoring
- Risk visualization to the risk form
- Greater visualization and interactivity to the Security Plan Status Board
- Added visualization for all control implemenations of a given security control

### Changed
- Bug Fix: Security plan status board can now handle nulls when parsing data
- Bug Fix: Google Maps API now allows connections from any domain
- Updated licensing agreement
- Updated copyright date
- Bug Fix: Reset on search now resets the data
- Bug Fix: Login now resets the license type without a refresh
- Bug Fix: Can now add multiple users without refreshing, enhanced validation and logging

## [1.0.2] - 2021-02-07

### Added
- More options for risk categorization
- CMMC options to the policy module
- Added ability to handle multiple mapping options via the wizard

### Changed
- Bug Fix: Controller fixed for Status Board
- Bug Fix: CMMC data was not printing on security plans or control implementations
- Bug Fix: Search bug fixes for .NET 5 (IndexOf -> Contains)

## [1.0.1] - 2021-02-04

### Added
- Mapping functionality now locked to Enterprise customers

### Changed
- Bug Fix: Controller fixed for Status Board

## [1.0.0] - 2021-02-02

### Added
- Added catalogs and support for all baselines of NIST 800-53 Rev4
- Added catalogs and support for all FedRAMP baselines
- API for interacting with unique ControlIds for security controls
- Licensing info now shows on the tenant Admin panel
- Added ability to delete a workflow template step from the designer
- Added ability to delete workflow instances
- Added workflow ID to the workflow instance form
- Major dashboard refactoring and improvements
- Added Parent Slider to the Workflow Instance system
- Added Component module to support the OSCAL standard
- Added Parameter to the data model to support the OSCAL standard
- Added ability to print the full Catalog with all child controls
- Added NIST 800-171 Self-Assessment Report for DoD

### Changed
- Bug Fix: Hot fix for DB migration issue
- Bug Fix: Workflow now passes ID properly to the instance page after creation
- Bug Fix: Worfklow system now auto-creates the "System" group if it doesn't exist
- Bug Fix: Supply chain system now handles null stock data
- Bug Fix: Catalog search now works properly
- Bug Fix: Security controls search now works properly
- Bug Fix: Security Plan status board explanation no longer interferes with My Activity slider
- Bug Fix: Time Travel "Revert" button now works
- Bug Fix: Sort order on custom fields now works properly under all circumstances
- Enhancement: Workflow notifications give a better indication of what is happening (Approval v/s Notification)
- Enhancement: Colors are now consistent on graphs relative to status
- Enhancement: Added advanced visualizations to the security plan status board
- Enhancment: Minor UX tweaks throughout the application
- Enhancement: Added a prompt before reverting Time Travel to a previous state

## [0.9.8] - 2020-1-14

### Added
- Added Control Mapping system to map controls from multiple catalogs into a single control mapping
- Added a unique Control ID to the security control module to allow a "business friendly" control name for easier searching and lookups
- Added AD/LDAP auto-sync job with the ability to map attributes for a deeper sync process with Atlasity
- Custom Fields can now be ordered with drag and drop on the Admin panel.  Display consistently on the form.
- Can now view the related module on the workflow template designer

### Changed
- Bug Fix: Now hides password related features if AD/LDAP sync is turned on
- Bug Fix: Broken icon on delete toasts fixed across the application
- Bug Fix: Navigation system now shows child security plans for a profile
- Improved data validation on the front and back end; better visual indicators and API protections
- Additional status options for interconnects added
- Bug Fix: Links in Sliders now close modals
- Bug Fix: Notifications now loads properly on login/logout
- Bug Fix: My Activity now loads properly on login/logout

## [0.9.7] - 2020-1-07

### Added
- Time Travel feature implemented
- Bulk editing of security control implementations
- Supply Chain Risk Status Board
- Supply Chain - configuration panel added for analyzing 3rd party risk
- Security Plan - now has form data for Authorization Boundary, Network Architecture, and Data Flow
- Security Plan Form - now implements tabs to make the form more compact with less scrolling
- Security Plan Print - UX improved to add dynamic charting and visualizations
- At a Glance Tags added to security plan for quick visual indication of key data
- User Groups - can now be viewed on the user profile
- Workflow - now tracks start and end times for the overall workflow and each step
- Upgrade to Angular 11 and .NET Core 5.0.1
- Performance Optimization - Supply Chain, Policy, and Security Plan Status Board refactor

### Changed
- Bug Fix: Removed domain check since it is config driven.
- Bug Fix: News posts links for Supply Chain and Causal Analysis are now formatted correctly.
- Performance: Index optimization for frequently executed queries
- Packaging: Optimized build to decrease container size
- Security: Hardened the base image to eliminate vulnerabilities and reduce the attack surface
- Refactored News Posts to be more efficient
- Removed Catalog field from security control form (could cause data integrity issues)
- Added new status for Security Plans (Retired/Decommissioned)
- Bug Fix: Removed register new user link on the Forgot Password page
- Bug Fix: Fixed bug that would not allow adding Interconnects to a security plan
- Bug Fix: fixed broken breadcrumb links on the workflow modules
- Group Management - now disabled for Global Admin (god-mode account), must login with regular Administrator role to access group management
- Group Management - UI refactored to improve the user experience
- Workflow Designer - UX refactored to improve the user experience
- Bug Fix: Worflow notifications now go to all users in the group, not just to the first user
- Bug Fix: Added history events for workflow
- Added ability to toggle on/off bulk editing of security controls and added alerts for saves
- Bug Fix: fixed issue with Javascript changing numbers to dates under some circumstances
- Bug Fix: Removed index on control implementations to allow for large field sizes
- Bug Fix: Fixed back button when deleting a security plan
- Bug Fix: Fixed hidden elements from a bad DIV tag on the security plan print report
- Bug Fix: Supply Chain Risk parent ID is no longer nullable
- Bug Fix: If same parent type (i.e. nested security plans), child controls now render correctly
- Validation: Refactored for Security Plans

## [0.9.6] - 2020-11-18

### Added
- Base image changed to Linux Alpine for smaller size and improved security
- UUIDs added to all modules to improve machine to machine data interchange
- Added navigation to app menu to view My Activity in a slide out panel
- Added user "baseball cards" to display contact info for any user selected
- Added validation for all environmental variables on startup.  Now throws errors in the container logs when validation fails.

### Changed
- Applied phone masks for improved formatting
- Fixed duplicate IDs on HTML tags on the Catalog
- Fixed print error on security controls
- Assessments can now be added to assets
- Bug Fix: Can no longer view dashboard when module is disabled in setup
- Bug Fix: Can no longer 'Add Child' records when module is disabled in setup

## [0.9.0] - 2020-10-30

### Added
- Improved logging
- Added functionality to hard reset the `admin` password with an environment variable and restarting the app
- OSCAL SSP Import
- Added Stakeholders subsystem
- All Home Page Dashboards completed
- Added System Owner to the Security Plan Module
- @Mention feature implemented for notifications (Comments Subsystem, Workflow, and News Feed)
- Added Policy Status Board
- Added Control Weight to Security Controls (used for risk calculations and DFARS Self-Assessments)
- Email Viewer
- Added Export for Security Plans and Control Implementations - used for external integrations
- Can now "opt in" to receive email notifications
- Notifications now issued for new record assignments (within Atlasity and via email if "opted in")
- Added "Slide out" feature to preview the parent record
- Base image changed to Linux Alpine for smaller size and improved security
- UUIDs added to all modules to improve machine to machine data interchange
- Added navigation to app menu to view My Activity in a slide out panel
- Added user "baseball cards" to display contact info for any user selected

### Changed
- Bug Fix: No longer shows option to add a Control Implementation to the Security Plan using the Add Child button (must use the builder)
- Refactored Security Plan report to allow for more customization in reporting
- Can now delete comments
- Improved signaling on navigation links
- FIPS and System Type and now configurable as Metadata
- Refactored notification system UI for performance
- Group manager now displays a default of 25 records
- Fixed email viewer bug, now displays all sent emails correctly
- Fixed bug for 'Create New' on Supply Chain Status Board
- Date Last Assessed and Last Assessment Result are now labels - must be set via assessment
- NIST 800-171 now available as a catalog
- Increased length of security control titles
- Changed the cursor on the navigation tab
- Added more discrete validation to the tenant configuration form
- Fixed blank password bug for email configuration
- Improved validation for AD/LDAP settings
- Bug Fix: Exception lookup now working correctly
- Add Child button now hidden until a module is selected
- Cleaned up divider lines based on permissions in the Navigation bar
- All logins now redirect to the workbench as the standard home page
- Bug Fix: System Owner now displays properly in the list view
- Added ability to enable/disable email SSL by tenant
- Applied phone masks for improved formatting

## [0.8.0] - 2020-10-2

### Added
- OSCAL Security Plan Export
- Performance Tuning - Lazy Loading in Angular, Bundle Size Optimization
- Added Cypress Front End Testing (rebased with testing branch)
- MITRE Heimdall Integration for Assessment
- Added Help system for all modules
- Metadata seeding re-factored for each module
- Refactored global admin workflow
- Control owner visualization for security plans
- Added the Maintainer role
- Users default to activated
- Facility Status Board now handles offline gracefully

### Changed
- Added ability to show/hide CMMC fields based on Admin Config
- Fixed bug where Atlasity would not accept complex email addresses with multiple periods
- Bug Fix: Fixed route on creating a new user
- Added "Last Assessment Result" graph to the Security Plan Visualizer
- Bug Fix: Recurring assessment route fixed
- Bug Fix: Fixed "Create New" route for projects
- Bug Fix: Cause codes now load defaults on new installations
- Bug Fix: Supply Chain picklists now configurable
- Bug Fix: License now displays properly when not logged in
- Bug Fix: Fixed date validation errors from the testing harness
- Bug Fix: User profile system bug fixed, can now upload photos
- Cache now clears on logout and when adding a user
- SMTP Email Password is no longer required (for non-authenticated use cases)
- Bug Fix: Notification count reset to zero on logout
- Bug Fix: Non-admins can now access their User Profile

## [0.7.0] - 2020-08-28

### Added
- Added Supply Chain Module
- New landing page with dashboards
- Custom fields can now be ordered via drag and drop
- Angular 10 upgrade
- FontAwesome now installed locally v/s CDN include
- Calendar now supports Angular 10
- Facility Status Board MVP 1

### Changed
- Added currency formatting to the Project input controls
- Renamed Atlasity export files
- Workbench component now properly named
- Fixed bug on AD sync
- Added Post-Incident Evaluation field to the Incident Response module
- Email alerts now indicate that it was sent to you
- Hides ID field on Security Control Implementations
- Refactored Facility Status Board for efficiency

## [0.6.0] - 2020-07-31

### Added
- Added support for email CC
- Activew user toggle added for the user list
- Fixed max filesize setting on Startup
- Fixed bug on test email, made code more resilient
- Help/Support now points to Atlasity.io
- Added the Facilities module to the Admin panel
- Printable reports now have clickable headers
- Added causal analysis module
- Added event module for timeline
- Custom fields are editable

### Changed
- User search now shows by default
- File size limit now in MBs
- Admin email now updates when saving a new email in the Admin panel
- Cache now refreshes when new user is created or AD is synced
- Improved security of account creation when doing an AD/LDAP sync
- Facilities added to all forms/searches
- ListView buttons are always formatted on the right now
- Fixed 'Setup' link for non-Enterprise installs
- Required fields properly marked on the user form
- Email now saves to the database before sending and throws error prompt when it has issues sending
- Many multi-tenant user flow bug fixes
- Fixed routes to profiles and catalogs (no longer have to be an administrator to view)
- Domain stored locally to reduce API traffic
- Fixed back icon on Control Implementation form
- Domain name now adds '/' character to the end if not provided
- Link to CMMC added throughout security plans
- Save button now disabled until Save events complete (prevents multiple saves of the same record when clicking quickly)
- Facility name must now be unique for a given tenant
- Added test button for Slack/Teams
- Prevents duplicate cause codes
- Added cause type to causal analysis
- Fixed bug when copying security plans
- Auto-adds controls to plan using Security Plan builder without having to click an add button
- Added link icon to compliance navigator
- Removed Apparent Cause and minor UI tweaks
- Email configuration labels and validation improved

## [0.5.0] - 2020-05-29

### Added
- Custom Reporting and Dynamic Searching
- Expanded test coverage and integrated with CI/CD
- ELK stack expanded for enterprise monitoring and reporting
- User-defined fields implemented
- Added Email GUI 
- Rebranded to ATLASITY
- App configuration now driven by license key
- Licensing info now displayed for global admin users
- FSSC Catalog import functional
- One step import/export now for a catalog and all child controls
- Custom fields are now tenant specific
- Added test button for SMTP email configuration
- Service Account now displays the current token
- Tooltips and instructions now provided on the AD/LDAP admin panel
- Custom fields now allows a choice list
- AD/LDAP now allows test/sync on the Admin panel, searches nested accounts

### Changed
- IAM flow improved along with UI
- Fixed various security authorization bugs
- Fixed email bug in the ATLAS container
- Fixed various container deployment bugs and improved documentation
- Fixed bugs in the build process, sped up build times significantly
- My Activity moved under user profile and user form for Admins
- Calendar now graphs assessments across days
- Worked through Sonarqube bug fixes and Angular build bug fixes
- Removed cyber specific fields where possible (can add via Custom Fields for a customer)
- Fixed validation errors where form was not resetting
- Fixed bugs on workbench and adding items, moved config to a service
- Various multi-tenancy fixes
- Recurring bug fix - bi-annually now calculates correctly
- Custom fields now hidden for Community Edition
- Clearing security controls no longer throws an error toast message (warning instead)
- Fixed AD/LDAP bug on login
- Logout now in red and moved to bottom to be easier to find
- Create security plan now shows a spinner while building the plan with controls
- Fixed registration bug for users

## [0.4.0] - 2020-03-27

### Added
- Tenant and User services now cache results to improve performance
- Combined IAM modules into one config panel and re-factored
- Custom monitoring solution for K8s, APM, SQL Server, and Containers built using ELK
- Refactored user group by queries - improving query performance

### Changed
- Fixed password reset bug
- Added show/hide fields to all password fields (default hides)
- Refactored service accounts for multi-tenancy
- Files are now searchable/sortable and show the MD5 hash
- Bug Fix - News Feed and My Activity filters now work for over time visualization
- Bug Fix - URL now updates after saving a record, fixing issues with the Back button

## [0.3.0] - 2020-03-13

### Added
- Created Admin panel for configuration
- Enabled AD/LDAP authentication
- Added deploy instructions for catalogues
- Added AES-256 encryption for secrets in the DB
- Added Group Management functionality for users
- Added System Integration tests with Cucumber/Selenium
- Angular now caches lookup fields
- Added ability to create and manage User Groups

### Changed
- Updated deployment instructions for persistent storage on local installs
- Bug fixes on redirects after Catalogues and Security Plans are built
- Sorted/updated regulations on the Splash page
- Removed workflow trigger from new forms
- Made max number of file uploads configurable
- Can now enable/disable Microsoft Teams, Slack, and AD/LDAP authentication
- Bug Fix: Only activated users show in the user list

## [0.2.0] - 2020-02-28

### Added
- CMMC fully implemented 
- Avatars now stored in the DB
- Workflow now supports drag and drop
- Added Print/Email capability for Catalogues and Security Controls
- Added ability to mount storage in K8s for file storage
- Catalogues now allow for JSON import and export
- Angular Unit Testing
- Added LGPL license to ATLAS
- Added Compliance Status Board for Security Plans
- Added Slack and Microsoft Teams integration
- Added multi-tenancy

### Changed
- Minor icon bug fixes on the News Feed
- Re-factored dashboards to use the list view
- Add CMMC filters to security plans and control implementations
- Tuned SonarQube rules to filter out false positives
- Allows multiple file uploads
- Shows counter for number of catalogues on the Splash page
- Added C# unit tests and new folder structure
- Fixed <fieldset> bugs and legacy alerts
- Can now tie issues to assets

# Changelog

## [0.1.10] - 2020-01-31

### Added
- Basic workflow system engine
- Re-factored News Feed, comments on the news now flow down to the record
- Update API for Links
- Replaced all Alerts with Toasts for a modern UI experience
- Security Plan Builder Wizard implemented
- Pipelines updated and SendGrid bug fixed
- Upgrade to .NET Core 3.1
- Added the DoD CMMC into ATLAS

### Changed
- Deletions via API now remove all child/related objects
- Improved form validation across all modules
- Removed version history, moved to the change log
- Improvements to file upload
- Replace Feather icons with Font Awesome - reduced build size
- Metadata manager now hides modules with no fields to customize
- File upload now throws an error if no file provided
- Cleaned up instructions for recurring records

## [0.1.9] - 2020-01-10

### Added
- Added search capability to all subsystem tabs
- Added a list view for security control implementations
- Added Kubernetes configuration files for ease of automated deployments
- Built Windows DEV environment
- Added GUI for creating service accounts
- Added loading spinners
- Added profile owner to security profiles
- CI/CD now handles DB changes
- Added search to history
- Added logic to "Show/Hide" the Show More button on the News Feed and My Activity
- Added URL encoding to search
- Added end of life, status, and purchase date to Assets

### Changed
- New navigation system implemented
- Performance improvments for the navigation system
- Removed legacy breadcrumb system
- Removed sensitive user data from API calls
- Fixed bug on "add child" wizard in the navigation system
- Fixed Docker build error with new Angular update

## [0.1.8] - 2019-12-06

### Added
- Added error checking on all forms for 'Record Not Found'
- Added a requirements module
- Created a wizard interface for building security plans
- Created a wizard interface for managing compliance requirements
- Added a view of all implementations for a given control
- Added event type filter to the News Feed
- Added Select All and Remove All buttons to the security profile
- Added toggle to show/hide search filters on the list view

### Changed
- Multiple data validation bug fixes
- Re-factored assessment API to support automated DevOps testing
- Re-factored UX for all forms
- Improved formatting of the Splash page
- Improved density of the UI on all subsystem tabs

## [0.1.7] - 2019-10-30

### Added
- All APIs compliant with Swagger/OpenAPI format
- Added initial Swagger API documentation page
- All APIs have Swagger documentation
- Added recurring assessment feature
- Added recurring data call feature
- Added recurring task feature
- Comments are now integrated with the News Feed and History
- File upload/download is now integrated with the News Feed and History
- Links are now integrated with the News Feed and History
- Added Swagger documentation to the ATLAS models
- Added High Value Asset toggle to the Security Plan module
- Required fields are now marked on the forms
- Added Refresh button to the News Feed
- Added catalogue to the News Feed and My Activity
- CSA CCM controls uploaded
- Assessments auto-update control implementations
- Added control implementation details to the dashboards

### Changed
- Fixed workflow step bug on the News Feed
- Fixed bug with blank avatars on the News Feed
- Fixed issues on the Catalogue Form
- Updated the Security Controls data model
- Security profile refactoring
- My Activity now shows unique records
- Refactored the Workbench UI
- Updated Splash page - compliance frameworks + Star Wars

## [0.1.6] - 2019-09-30

### Added
- Added click-through license agreement
- Added printer dialogue button
- Added validation to the RBAC manager

### Changed
- Fixed checkbox indent
- Made blob storage private - validated encryption of files and privacy of URLs

## [0.1.5] - 2019-09-06

### Added
- Added email notification for new account creation
- Added a password reset feature
- Improved validation for login processes
- Added support for Markdown files in ATLAS
- Added initial Help system with Markdown support
- Added progress bar, totals, and legend to the calendar

### Changed
- Upgraded to Angular 8
- Fixed NPM package vulnerabilities

## [0.1.4] - 2019-08-26

### Added
- Tested new navigation menu on mobile, Mac, and Windows
- Added a warning banner for ALPHA testing
- Enhanced data validation logic across all modules
- Improved formatting of date picker controls

### Changed
- Moved all navigation to the top to allow more screen real-estate on small screens
- Fixed navigation bug on mobile with dropdown menus
- Fixed login/logout flow
- Fixed status check logic for tasks
- Removed max/min controls
- Fixed a rare show/hide bug in the navigator

## [0.1.3] - 2019-08-10

### Added

### Changed
- Fixed card height issues on the splash screen
- Fixed login/logout issues with showing/hiding content

## [0.1.2] - 2019-07-27

### Added
- Added data validation to new user account creation
- Added vanity URL for the ATLAS sandbox: atlas.c2labs.com
- Added default image

### Changed
- Fixed width issues on mobile platforms for logins
- Improved password management features on new user creation
- Fixed data validation when updating the user profile
- Updated format of the unauthorized access page and footer

## [0.1.1] - 2019-07-10

### Added

### Changed
- Updated readme.md file to better describe the modules and build process
- Various fixes to improve support on Windows (IE and Edge)
- Disabled service worker code (throwing errors and not being used right now)
- Removed xlsexport, incompatible with latest Angular framework
- Fixed duplicate tags on the home page
- Fixed logic on login/logout/user creation
