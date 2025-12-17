# Afterpage Website

This project is the website and landing page for Afterpage, an iOS app for document management and organization. This document outlines the product and some coding practices to be used in this repo.

> Transform document chaos into an organized, searchable archive

---

## Code Guidelines

- You will write everything in TypeScript with NextJS, using functional programming when possible
- You will use CSS modules to structure the CSS for each component, referencing a global.css for styles that are used globally for every page.
- Use a basic CSS with a grid. Set up typography to use Apple's SF Pro Display font with a proper fallback.

## The Problem

People accumulate important documents‒receipts, contracts, tax forms, warranties, bills‒but struggle to keep them organized. Existing scanner apps either:

- Focus solely on capture, leaving organization as an afterthought
- Provide basic folders but no real intelligence
- Overwhelm users with complex workflows
- Lock critical features behind expensive subscriptions

The result? Unorganized inboxes of documents where nothing can be found when needed.

---

## The Solution

Afterpage is an **organization-first** iOS document scanner that transforms chaos into clarity. Unlike traditional scanner apps that stop at capture, Afterpage emphasizes intelligent organization and instant search‒using on-device AI that learns your patterns to make document management effortless.

**Core Philosophy:** Smart organization that gets better with every document you add.

---

## Key Features

### **Capture**

- Camera scanning with automatic edge detection
- Multi-page document support
- Import from Photos, Files, Mail, and drag & drop
- Batch import for efficiency

### **Organize**

- **Inbox workflow** for quick document triage
- User-created tags, document types, and correspondents
- Smart Organization (Plus) that learns your patterns
- On-device AI classification (no cloud required)

### **Search & Find**

- Full-text OCR search (powered by Apple Vision)
- Filter by tag, type, correspondent, or date
- Editable OCR text for corrections
- Searchable PDF export

### **Intelligence That Learns**

- Smart Organization that adapts to your patterns (Plus)
- On-device AI classification using Core ML
- Automatic suggestions for tags, types, and correspondents
- Gets smarter with every document you add

### **Works With Your Apple Ecosystem**

- Stores in your iCloud Drive (or local storage if preferred)
- Syncs across iPhone, iPad, and Mac
- All processing happens on-device
- No third-party accounts or cloud services required

---

## Target Audience

**Primary:** Privacy-minded individuals who want a personal document archive on their Apple devices

**Key Personas:**

- **Busy Professionals**: Quick capture of receipts, contracts, invoices for records and taxes
- **Household Managers**: Organize bills, warranties, school forms, insurance documents
- **Tax Filers**: Collect and categorize receipts, W-2s, returns with accurate OCR
- **Students & Researchers**: Archive articles, handouts, notes with searchable text
- **Personal Archivists**: Digitize old documents, letters, photos with multi-page support

---

## What Makes Afterpage Different

| Afterpage | Traditional Scanner Apps |
|-----------|-------------------------|
| **Organization-first**: Inbox triage workflow with intelligent learning | Capture-focused with basic folders |
| **Gets smarter over time**: AI learns your patterns as you organize | Static organization or no intelligence |
| **Instant search**: Full-text OCR with powerful filters | Limited or no search capabilities |
| **Warm, human brand**: Coral & teal palette | Generic blue/gray corporate aesthetics |
| **Accessible pricing**: $2.99/month | $7-10/month or expensive one-time |

**Brand Identity:** "Clarity": Distinctive coral (#FF6B6B) and teal (#14B8A6) colors that position Afterpage as uniquely warm and approachable in a category dominated by cold, technical competitors.

**Trust:** Documents are stored in your iCloud Drive and processed on your device‒no third-party servers, no new accounts to create, just your existing Apple ecosystem.

---

## Monetization

**Freemium Subscription Model**

| Free                  | Plus ($2.99/mo or $24.99/yr) |
| --------------------- | ---------------------------- |
| 20 archived documents | ✅ Unlimited documents        |
| Camera scanning       | ✅ Camera scanning            |
| On-device OCR         | ✅ On-device OCR              |
| Full-text search      | ✅ Full-text search           |
| Manual organization   | ✅ Manual organization        |
| iCloud sync           | ✅ iCloud sync                |
| ‒                     | ✅ Smart suggestions          |
| ‒                     | ✅ Auto-classification        |
| ‒                     | ✅ Batch operations           |

**Conversion Strategy:** "Inbox Freeze": Free users can continue scanning but can't archive beyond 20 documents. This creates natural upgrade pressure at the moment users commit to using Afterpage as their document vault.

**Competitive Positioning:** Priced below Genius Cloud ($29.99/yr) and significantly below Adobe Scan ($69.99/yr), while offering unique AI-powered organization that learns and improves with use.

---

## Technical Foundation

**Platform:** iOS (iPhone, iPad)

**Key Technologies:**

- SwiftData for metadata management
- Vision framework for on-device OCR
- Core ML for document classification
- iCloud ubiquity containers for sync
- PDFKit for rendering and creation

**Performance:**

- Single-page OCR: ~5-10 seconds on modern iPhones
- Background batch processing for large imports
- Designed for low memory usage on older devices

---

## Product Roadmap

### Phase 1: MVP (Current)

- ✅ Camera capture and import
- ✅ On-device OCR
- ✅ Inbox triage workflow
- ✅ Full-text search
- ✅ Basic organization (tags, types, correspondents)

### Phase 2: Intelligence (Next)

- Smart organization with learning algorithms
- Auto-classification of common document types
- Suggested tags and correspondents
- Batch operations for power users

### Phase 3: Enhancement (Future)

- Advanced export options (paperless-ngx compatibility)
- Multi-vault support for separation of contexts
- Enhanced classification models
- Additional language support beyond English

---

## Success Metrics

**User Engagement:**

- Free ➡️ Plus conversion: Target 5-10%
- Documents archived per active user
- Search usage frequency
- Inbox freeze encounter rate

**Product Quality:**

- OCR accuracy on typical documents
- Classification accuracy (with user corrections)
- App performance on target devices
- User satisfaction (App Store rating)

**Business:**

- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Churn rate (monthly/annual)
- Lifetime Value (LTV)

---

## Vision

**Short-term:** Prove that intelligent, organization-first document management provides genuine value to individuals who need to find their documents instantly.

**Long-term:** Become the trusted personal document archive for Apple users‒the place where all important documents live, intelligently organized and instantly findable.

**Mission:** Transform unorganized inboxes of documents into easy-to-navigate archives so people can find anything instantly.

---

## Contact & Next Steps

**Current Status:** MVP development complete, preparing for App Store launch

**App Store Name:** Afterpage: Doc Scanner & OCR

**Launch Strategy:**

1. Soft launch to gather initial feedback
2. Consider $19.99 introductory annual pricing for early adopters
3. Iterate based on user behavior and conversion data
4. Expand marketing once core metrics validate product-market fit

---

*Afterpage: Turn chaos into clarity. Find anything instantly.*
