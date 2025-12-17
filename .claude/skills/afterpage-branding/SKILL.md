---
name: afterpage-branding
description: Branding guide for Afterpage that covers colors, marketing voice, and brand identity for landing and waitlist pages
---

# Afterpage Landing Page Brand Guide

## Purpose

This document outlines the requirements around branding and identity for building anything that fits under the Afterpage app and brand.

## Brand Overview

**Product:** Afterpage - iOS document scanning and organization app  
**Tagline:** Transform document chaos into an organized, searchable archive  
**Core Promise:** Turn unorganized inboxes of documents into easy-to-navigate archives so people can find anything instantly  

**What makes us different:**

- Organization-first (not just capture)
- Smart AI that learns your patterns
- On-device privacy (no cloud required)
- Warm, human-centric approach vs. cold corporate competitors

---

## Marketing Voice & Tone

### Personality

**Brand Word:** CLARITY

**Voice Characteristics:**

- **Confident but approachable** - We know document management, but we're friendly about it
- **Direct and clear** - Say what we mean, lead with benefits, avoid jargon
- **Warm and capable** - Professional without being cold or corporate
- **Slightly more serious than playful** (6/10 on playful scale)
- **Accessible but not overly casual** (3/10 on accessible scale - competent, not folksy)

### Writing Style

**Do:**

- Lead with the benefit, then explain the feature
- Use active voice and strong verbs
- Keep sentences short and scannable
- Use "you" and "your" to address the user directly
- Show transformation: chaos → clarity, unorganized → organized
- Be specific: "Find any document in seconds" not "Better organization"

**Don't:**

- Use technical jargon ("OCR" → "Text Recognition")
- Write long paragraphs
- Use emoji (rare exceptions only)
- Be cutesy or overly playful
- Use marketing clichés ("revolutionary," "game-changer")
- Overwhelm with too many features at once

### Tone by Context

**Hero Section:** Bold, confident, promise-focused  
*Example: "Never lose an important document again"*

**Features:** Clear benefits, specific outcomes  
*Example: "Smart Organization learns your filing patterns so every document lands exactly where it belongs"*

**Call-to-Action:** Direct, actionable, urgent (but not pushy)  
*Example: "Join the waitlist - Early access starts soon"*

**Error/Empty States:** Helpful, not apologetic  
*Example: "No documents yet. Let's get started."*

---

## Color Usage Guidelines

All colors are defined in the file `./Light.tokens.json` within this skill.

### Primary Colors

**Coral (#FF6B6B)** - MAIN BRAND COLOR

- **Use for:** Primary CTAs, important actions, focus states, brand moments
- **Use sparingly:** 10-15% of page maximum
- **Examples:**
  - "Join Waitlist" button background
  - Selected/active states
  - Important highlights
- **Never:** Large backgrounds, body text, more than 2-3 elements per screen

**Teal (#14B8A6)** - ACCENT COLOR  

- **Use for:** Smart features, success states, secondary emphasis, intelligence indicators
- **Use at:** 5-10% of page
- **Examples:**
  - Smart Organization badges
  - Feature icons
  - Success indicators
  - Subtle highlights

### Supporting Colors

**White (#FFFFFF)** - PRIMARY BACKGROUND

- Use for: 70%+ of page
- Clean, generous white space is essential

**Warm Black (#1C1917)** - PRIMARY TEXT

- Use for: Headings, body text
- High contrast with white backgrounds

**Warm Gray (#57534E)** - SECONDARY TEXT

- Use for: Supporting text, descriptions, captions

**Light Backgrounds:**

- Coral 100 (#FFE3E3) - For coral-tinted sections (rare)
- Teal 100 (#CCFBF1) - For feature highlights
- Neutral 100 (#FAFAF9) - For subtle sections

### Color Psychology

**The Coral + Teal combination says:**

- "Document management that puts humans first"
- "Warm intelligence" - approachable AND capable
- "Fresh perspective on a boring category"

**Competitive differentiation:**

- Adobe Scan: Blue (corporate, cloud-first)
- Scanner Pro: Blue (conventional)
- Evernote: Green (note-taking)
- **Afterpage: Coral + Teal (human-first, warm intelligence)**

---

## Key Messaging

### Primary Value Proposition

**Transformation Statement:**  
"Transform unorganized inboxes of documents into easy-to-navigate archives so you can find anything instantly"

**Benefit Hierarchy:**

1. **Organization that gets smarter** - AI learns your patterns
2. **Find anything instantly** - Full-text search + smart filters
3. **Privacy by default** - On-device processing, your iCloud
4. **Works seamlessly** - Camera, Files, Mail, drag & drop

### Feature Messaging

**Translate features to benefits:**

| Feature | User Benefit |
|---------|-------------|
| On-device OCR | "Text Recognition happens right on your device - fast, private, no internet needed" |
| AI Classification | "Smart Organization learns your patterns and suggests where documents belong" |
| Inbox Workflow | "Quick triage - scan now, organize later" |
| Full-text Search | "Find any document in seconds by searching the text inside" |
| iCloud Storage | "Stored safely in your iCloud Drive - secure, private, and syncs across devices" |

### Positioning Against Competitors

**Don't say:** "Unlike other apps..." or name competitors directly  
**Do say:** Position through contrast:

- "Organization-first, not just capture"
- "Intelligence that learns, not static folders"
- "Warm and human, not cold and corporate"

---

## Visual Design Principles

### Layout

**Embrace Modern iOS Design:**

- Clean, spacious layouts
- Generous white space (70% of page should be neutral/white)
- Clear visual hierarchy
- Grid-based alignment (8pt grid recommended)
- Concentricity and depth where appropriate

**Composition:**

- Asymmetrical but balanced
- Strategic use of color (not everywhere)
- Let content breathe
- Progressive disclosure (one idea at a time)

### Typography

**Hierarchy:**

- Hero headline: Bold, large (48-64px)
- Section headlines: Title case, no punctuation
- Body text: Sentence case, normal weight
- Captions: Smaller, secondary gray

**Style:**

- Sans-serif (SF Pro recommended for iOS feel)
- Ample line spacing (1.5-1.7)
- Comfortable reading width (60-70 characters)
- High contrast (ensure WCAG AA compliance)

### Imagery

**Do:**

- Clean product screenshots
- Light, bright app interface mockups
- Real document examples (receipts, contracts)
- Subtle gradients (coral → teal for key moments)
- Abstract representations of organization/clarity

**Don't:**

- Generic stock photos
- Dark, heavy imagery
- Literal scanning equipment
- Cluttered compositions
- Overly complex illustrations

### Components

**Primary CTA Button:**

```
Background: Coral (#FF6B6B)
Text: White
Border Radius: 8-12px
Padding: 16px 32px
Hover: Coral 600 (#FF5252)
Shadow: Subtle, warm
```

**Secondary Button:**

```
Background: Teal 100 (#CCFBF1)
Text: Teal 900 (#134E4A)
Border: 1px solid Teal 500 (#14B8A6)
Border Radius: 8-12px
```

**Feature Badge (Smart Organization):**

```
Background: Teal 100 (#CCFBF1)
Text: Teal 900 (#134E4A)
Icon: Teal 500 (#14B8A6)
Border Radius: 16px (pill)
Small, inline with text
```

---

## Landing Page Structure

### Recommended Sections

**1. Hero Section**

- Bold headline (transformation promise)
- One-sentence description
- Primary CTA: "Join the Waitlist"
- Visual: Clean app screenshot or abstract gradient

**2. Problem Statement**

- Brief (2-3 sentences)
- Relatable pain point
- Use "you" language

**3. Solution Overview**

- 3-4 key features with benefits
- Use teal badges for "Smart" features
- Icons + short descriptions

**4. How It Works**

- 3-step process
- Scan → Organize → Find
- Simple, visual

**5. Why Afterpage**

- Privacy-first positioning
- AI that learns
- Works with your Apple ecosystem
- 2-3 brief points

**6. CTA Section**

- Repeat waitlist signup
- Social proof if available (# of signups, testimonials)
- FAQ or "Learn More" link

**7. Footer**

- Minimal
- Links: About, Privacy, Contact
- Copyright

---

## Waitlist Form Guidelines

### Form Design

**Keep it simple:**

```
- Email (required)
- Name (optional but helpful)
- Optional: "How do you organize documents today?"
```

**After Submission:**

```
Success State:
- Teal background (#CCFBF1)
- Checkmark icon (teal)
- "You're on the list!"
- "We'll email you when early access begins"
- Social share buttons (optional)
```

### Privacy Note

Include below form:
"We respect your inbox. Early access notification only, no spam. View our [Privacy Policy]."

---

## Copy Examples for Landing Page

### Hero Options

**Option 1 (Direct):**

```
Headline: Never lose an important document again
Subhead: Afterpage transforms document chaos into an organized, searchable archive using on-device AI that learns your patterns.
CTA: Join the Waitlist
```

**Option 2 (Benefit-focused):**

```
Headline: Find any document in seconds
Subhead: Smart organization for receipts, contracts, bills, and everything in between. No cloud required.
CTA: Get Early Access
```

**Option 3 (Transformation):**

```
Headline: From chaos to clarity
Subhead: The iOS document scanner that actually helps you stay organized. Scan once, find instantly.
CTA: Join the Waitlist
```

### Feature Copy Examples

**Smart Organization:**
"Smart Organization learns where your documents belong. The more you use Afterpage, the better it gets at suggesting tags, types, and categories."

**Instant Search:**
"Search the text inside any document in seconds. Find receipts by amount, contracts by date, or anything by keyword."

**Privacy-First:**
"Everything happens on your device. Your documents stay in your iCloud Drive - secure, private, and under your control."

**Seamless Capture:**
"Scan with your camera, import from Files, drag from Mail - however documents enter your life, Afterpage is ready."

---

## Brand Don'ts (Critical)

### ❌ Never Do This

1. **Don't use coral everywhere** - It's overwhelming and loses impact
2. **Don't use technical jargon** - "OCR" → "Text Recognition"
3. **Don't be overly casual** - No "Hey there!" or excessive emoji
4. **Don't be vague** - Specific benefits > generic claims
5. **Don't apologize** - Be confident, not defensive
6. **Don't mention competitors by name** - Position through contrast
7. **Don't use long paragraphs** - Keep it scannable
8. **Don't neglect white space** - Let content breathe
9. **Don't use coral text on white** - Fails contrast (use Coral 900)
10. **Don't stack multiple CTAs** - One primary action per section

---

## Accessibility Requirements

### Contrast Ratios (WCAG AA Minimum)

✅ **Passing combinations:**

- White bg + Neutral 950 text (18.4:1)
- White bg + Coral 900 text (6.8:1)
- Coral 500 button + White text (3.2:1 - large text only)
- Teal 100 bg + Teal 900 text (10.8:1)

❌ **Never use:**

- Coral 500 text on white (fails - 3.2:1)
- Small text on coral backgrounds

### Other Requirements

- All interactive elements keyboard accessible
- Focus states clearly visible (coral outline)
- Form labels properly associated
- Alt text for all images
- Semantic HTML structure

---

## Quick Reference

### Colors at a Glance

```
Brand Coral:        #FF6B6B (Primary CTA, accents)
Brand Teal:         #14B8A6 (Smart features, success)
Primary Background: #FFFFFF (White - 70%+)
Primary Text:       #1C1917 (Warm black)
Secondary Text:     #57534E (Warm gray)
Borders:            #E7E5E4 (Light gray)

Button Hover:       #FF5252 (Coral 600)
Button Pressed:     #FF3838 (Coral 700)
Success State:      #CCFBF1 (Teal 100 bg)
```

### Spacing Scale (8pt Grid)

```
4px:   Micro spacing
8px:   Tight spacing
16px:  Base spacing
24px:  Medium spacing
32px:  Section spacing
48px:  Large gaps
64px:  Hero spacing
```

### Typography Scale

```
64px:  Hero headline
48px:  Section headlines
32px:  Subheadlines
18px:  Body text
16px:  Small body
14px:  Captions
```

---

## Questions for Developer

Before starting, consider:

1. **Waitlist Integration:** Which service? (Mailchimp, ConvertKit, custom?)
2. **Analytics:** What events to track? (Page views, form starts, submissions)
3. **Email Confirmation:** Immediate or pending?
4. **Social Share:** Include share buttons after signup?
5. **Mobile-first:** Prioritize mobile or desktop first?
6. **Dark Mode:** Launch with dark mode or light only?
7. **Animations:** Subtle motion or static?

---

## Files & Resources

**Color System:**

- `afterpage-colors-all.json` - Complete light mode palette
- `afterpage-colors-dark.json` - Complete dark mode palette

**Brand Documents:**

- `Afterpage One-Pager.md` - Full product overview
- `Afterpage Color System - Coral + Teal.md` - Complete color guide

**Key Hex Codes:**

```css
--brand-primary:    #FF6B6B;
--brand-secondary:  #14B8A6;
--neutral-white:    #FFFFFF;
--neutral-black:    #1C1917;
--neutral-gray:     #57534E;
--teal-light-bg:    #CCFBF1;
--teal-dark-text:   #134E4A;
```

---

## Final Checklist

Before launch, verify:

- [ ] Coral used for primary CTA only
- [ ] Teal used sparingly for smart features
- [ ] Generous white space (70%+ neutral)
- [ ] All text meets WCAG AA contrast
- [ ] Copy is benefit-focused, not feature-focused
- [ ] No jargon or technical terms
- [ ] Mobile responsive at all breakpoints
- [ ] Form has clear success state
- [ ] Privacy note included
- [ ] Social meta tags configured
- [ ] Page loads quickly (<3s)
- [ ] No accessibility issues
- [ ] Email confirmation works

---

**Remember:** Coral + Teal says "human-first document management with smart capabilities." Use color strategically, write clearly, and keep it clean.
