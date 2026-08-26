# ANM Digital

Independent Firebase-ready website for ANM Digital, the digital product division operated by Yoga Products Ltd.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Firebase Hosting

1. Copy `.firebaserc.example` to `.firebaserc`.
2. Replace `YOUR_FIREBASE_PROJECT_ID` with the dedicated ANM Digital Firebase project ID.
3. Run `firebase login` if required.
4. Run `firebase deploy --only hosting`.

Do not deploy this website into the AccountPilot Firebase project. Use a separate Firebase project for ANM Digital.

Before public launch, add the confirmed domain-based business email and the verified AdSense `pub-...` entry to `public/ads.txt`.
