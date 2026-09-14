---
name: afterpage-product
description: Product overview and details for the Afterpage document management and scanning app for iOS and iPad
---

# Overview

This is a product overview document for Afterpage, a document organization app.

# Goals

## The Problem to Solve

People have a lot of documents coming from all different places-- e-mail, mail, receipts --and they often struggle to keep them all organized and easy to find when they need them. Afterpage solves this by being a single place to store all of your important documents, organized how you like. That way, the next time you're at the DMV you can easily pull up a utility bill, or when you're ready to do your taxes you've already collected all of your important documents in one place.

### How Afterpage should be talked about by its users

> I could easily find an invoice from a vendor I got two weeks ago in Afterpage.

> All of my important business documents live in a Business tag in Afterpage and I go there daily to find information for my work.

> I keep important family healthcare documents in Afterpage so I can easily answer any question about my kids' health when asked.

> All of my tax prep documents live in Afterpage for when the tax man comes and I need to file.

> I'm building a space inside of Afterpage to keep all of my tickets, confirmations, and passes for my upcoming trip to Japan with my partner.

### What Afterpage is (high level goals)

- Deep document organization with flexible high level concepts like contacts, categories, and tags
- Sophisticated search that makes it easy to find what you're looking for fast
- Multi-device, enabling sync between iOS devices so you always have your stuff with you
- Secure by design: no separate user accounts or sign-ups needed, and the only cloud used is Apple's secure iCloud
- Easy and beautiful to use with intuitive controls that fit in with iOS 26+ patterns and aesthetics. Glass and animations make the app a light and delightful experience

### What Afterpage is Not (high level non-goals)

- A document scanner. It does this, but only to get the documents _into_ the app
- A document editor. At current state there are no editing or annotation features. Afterpage is a place to file away your important stuff, not work on it
- Paperless-ng for iPhone. Although it shares many of the features found in this tool (and was an inspiration for this app), paperless lacks customization and a smooth and native experience.

### First Principles (derived from above)
- It's not AI slop. Coded by hand and augmented with agentic assistance, Afterpage should feel made by a human because it is
- Full of gimmicky features. AI and intelligence features _are_ part of the app but they **augment** the experience, they do not define it
- Like iOS Files app, on steroids. It uses familiar patterns, but takes feature inspiration from other system apps (like Mail's filtering), and is built with love and inspiration from the indie community
- Search and recall are **primary**. New features should always start with the question "how does this help people _quickly or easily_ find something that's important to them?"
# History

## Version 1.0: Launch

**Status:** Launched

Launched early 2026 with iPad/iOS app and inbox-based flow (all documents go to "inbox" first for filing), with tags, categories, and contacts. A tab-based app with Home, Browse, and Search. Intelligence features that try to help the user tag and organize documents. Batch move and organization at each level of metadata. Import PDFs and Images from Files, from a share extension, or using built-in document scanning. Full-text search to find documents easily.

## Version 2.0: A faster, more personalized, and smarter document management tool

**Status:** In development

Mid/late 2026, 2.0 will launch with a drastically redesigned interface mimicking the best of Files app and system-recognizable filtering and navigation for iOS and iPad. The inbox-based flow is removed, with filters on the Recents screen to find new or untagged documents. Search is ubiquitous now: anywhere you see document tiles/lists you can search that collection. It's fast too, with no lag and useful results that are accurate and ranked based on relevance. Familiar tags, categories, and contacts remain, but are now more useful than ever with personalization. A more flat, logical navigation-based flow makes the app more easy to navigate and dive into levels of their document system without imposing app structures. Document processing is faster and more stable, and intelligent features that help rename documents, build more personalized "hubs" of documents, and more are sprinkled across a modern and clean interface.

# Features

### Glossary

| Word               | Meaning                                                                       |
| ------------------ | ----------------------------------------------------------------------------- |
| Type (capital 'T') | Refers to any of: tag, contact, or category that may be associated with a doc |

## Recents

- Add button to easily scan or import a document
- Quick filters across the top of the view that make it easy to filter by often-used or accessed tags, categories, or contacts
- View options that let you sort and filter documents in the list and customize the layout (List or Grid)
- Filters for seeing untagged documents, ones just added, or added today
- Search that is easily accessible to search the documents in this view
- Tapping a document navigates to the document detail view
- (Grid layout) Long pressing on a document reveals a preview of its content with more information and document actions
- (List layout) Swipe to reveal document actions

## Browse

- Show recently viewed tags, categories, and contacts in a sidebar-style view with document counts. Tapping them navigates to the detail view for that metadata, showing documents associated with it

## Document Detail

- Show the document, allowing the user to scroll and zoom in on the doc. Support text selection where possible to make it easy for them to grab information from the document
- A compact metadata view floating at the bottom of the screen shows the document tags, category, and contact, when set. Tapping it opens the document metadata view

## Document Metadata View

- Allows the user to edit the title, tags, contacts, and categories
- Inline "add" functionality for each metadata type to quickly add a Type to the system while organizing a document
- Inline search to types by name and easily add them to the document
- More info disclosure that unfolds to show more details (dates, etc.) about the document that you look at less often

## Metadata Document View

- Show the information about the Type at the top of the screen: name, number of documents, etc.
- Add button to add a document by search (opening a sheet to search all documents), scan, or import. Scanning or importing processes and automatically adds these documents to the Type so they appear in the view
- Configurable document grid like Recents, but no filter along the top
- Additional view options to group by sub-Type which allowing deeper organization and customization
- Flexible hero section with larger title, beautiful gradient background, or custom image background. The Type badge or icon is prominently displayed #profeature
- Standard document actions plus "remove from Type" action to instantly remove it from the Type

## Metadata Detail View

- Allows the user to edit the name and color of the Type
- Allows editing the icon for the Type, with suggestions based on the name #profeature 
- Allows adding a background image for the Type which will display prominently on the document view and across the app where applicable #profeature 
- More info disclosure that unfolds to show other details (dates, etc.)

# Brand Voice

- Natural, conversational language. Not punchy
- Don't try to be a salesperson. Describe the feature, expectation, or interaction plainly.
- Lead with the benefit. When describing what to do, start with the "why". Ex. "Add a tag to your document to easily find it later", or "Refine your search terms to narrow results down even further". Avoid fluff words.
# Launch

TBD: Marketing opportunities, packaging and pricing