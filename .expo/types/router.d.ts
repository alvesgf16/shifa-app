/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ProfileScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/BottomNavBar`; params?: Router.UnknownInputParams; } | { pathname: `/contexts/AuthContext`; params?: Router.UnknownInputParams; } | { pathname: `/screens/CreatePasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DailyLogScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ForgetPasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RecoveryTrackerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RegisterScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/SignUpScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/VerifyPasswordScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ProfileScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/BottomNavBar`; params?: Router.UnknownOutputParams; } | { pathname: `/contexts/AuthContext`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/CreatePasswordScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/DailyLogScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ForgetPasswordScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/LoginScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/RecoveryTrackerScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/RegisterScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/SignUpScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/VerifyPasswordScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/screens/ProfileScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/BottomNavBar${`?${string}` | `#${string}` | ''}` | `/contexts/AuthContext${`?${string}` | `#${string}` | ''}` | `/screens/CreatePasswordScreen${`?${string}` | `#${string}` | ''}` | `/screens/DailyLogScreen${`?${string}` | `#${string}` | ''}` | `/screens/ForgetPasswordScreen${`?${string}` | `#${string}` | ''}` | `/screens/HomeScreen${`?${string}` | `#${string}` | ''}` | `/screens/LoginScreen${`?${string}` | `#${string}` | ''}` | `/screens/RecoveryTrackerScreen${`?${string}` | `#${string}` | ''}` | `/screens/RegisterScreen${`?${string}` | `#${string}` | ''}` | `/screens/SignUpScreen${`?${string}` | `#${string}` | ''}` | `/screens/VerifyPasswordScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ProfileScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/BottomNavBar`; params?: Router.UnknownInputParams; } | { pathname: `/contexts/AuthContext`; params?: Router.UnknownInputParams; } | { pathname: `/screens/CreatePasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DailyLogScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ForgetPasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RecoveryTrackerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RegisterScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/SignUpScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/VerifyPasswordScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
