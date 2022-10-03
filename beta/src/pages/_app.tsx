/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {useEffect} from 'react';
import {AppProps} from 'next/app';
import {useRouter} from 'next/router';
<<<<<<< HEAD
// @ts-ignore
import galite from 'ga-lite';
=======
import {ga} from '../utils/analytics';

>>>>>>> 664dd5736287e01a4557cd03c9a8736682911b34
import '@docsearch/css';
import '../styles/algolia.css';
import '../styles/index.css';
import '../styles/sandpack.css';

<<<<<<< HEAD
const EmptyAppShell: React.FC = ({children}) => <>{children}</>;
=======
if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    ga('create', process.env.NEXT_PUBLIC_GA_TRACKING_ID, 'auto');
  }
  const terminationEvent = 'onpagehide' in window ? 'pagehide' : 'unload';
  window.addEventListener(terminationEvent, function () {
    ga('send', 'timing', 'JS Dependencies', 'unload');
  });

  disableAllRuntimeStyleInjection();
}
>>>>>>> 664dd5736287e01a4557cd03c9a8736682911b34

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    galite('create', process.env.NEXT_PUBLIC_GA_TRACKING_ID, 'auto');
  }
  const terminationEvent = 'onpagehide' in window ? 'pagehide' : 'unload';
  window.addEventListener(terminationEvent, function () {
    galite('send', 'timing', 'JS Dependencies', 'unload');
  });
}

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
<<<<<<< HEAD
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      galite('set', 'page', url);
      galite('send', 'pageview');
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  let AppShell = (Component as any).appShell || EmptyAppShell;
  // In order to make sidebar scrolling between pages work as expected
  // we need to access the underlying MDX component.
  if ((Component as any).isMDXComponent) {
    AppShell = (Component as any)({}).props.originalType.appShell;
  }

  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
=======

  useEffect(() => {
    // Taken from StackOverflow. Trying to detect both Safari desktop and mobile.
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      // This is kind of a lie.
      // We still rely on the manual Next.js scrollRestoration logic.
      // However, we *also* don't want Safari grey screen during the back swipe gesture.
      // Seems like it doesn't hurt to enable auto restore *and* Next.js logic at the same time.
      history.scrollRestoration = 'auto';
    } else {
      // For other browsers, let Next.js set scrollRestoration to 'manual'.
      // It seems to work better for Chrome and Firefox which don't animate the back swipe.
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga('set', 'page', url);
      ga('send', 'pageview');
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

// HACK(css-in-js): We use Sandpack, which uses Stitches (css-in-js lib).
// This causes style recalc during hydration which is bad for perf.
// Instead, let's rely on the SSR'd <style> tag defined in _document.tsx.
// This is obviously quite fragile but hopefully it'll be solved upstream.
let didWarn = false;
function disableAllRuntimeStyleInjection() {
  // Prevent Stitches from finding the <style> tag from the server:
  Object.defineProperty(document, 'styleSheets', {
    get() {
      return [];
    },
  });
  // It will try to create a new <style> tag and insert stuff there...
  const realInsertRule = CSSStyleSheet.prototype.insertRule;
  CSSStyleSheet.prototype.insertRule = function () {
    if (process.env.NODE_ENV !== 'production') {
      if (!didWarn) {
        console.warn(
          'Something is trying to inject runtime CSS-in-JS.\n' +
            'All <style> insertions will be ignored.',
          arguments
        );
      }
      didWarn = true;
    }
    // ... but we'll prevent it from affecting the document:
    this.disabled = true;
    // @ts-ignore
    return realInsertRule.apply(this, arguments);
  };
  // We're not supposed to use any other library that inserts <style> tags.
  // In longer term, ideally, Sandpack should offer a zero-runtime option.
>>>>>>> 664dd5736287e01a4557cd03c9a8736682911b34
}
