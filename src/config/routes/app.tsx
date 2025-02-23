import {
  CreditCard,
  File,
  MessageSquare,
  Settings,
  User,
} from '@/components/icons';

const appRootPath = '/app';

export const appRoutes = {
  home: {
    path: '/',
  },
  public: {
    home: {
      path: '/',
      name: 'Home',
    },
    about: {
      path: '/',
      name: 'About',
    },
    pricing: {
      path: '/',
      name: 'Pricing',
    },
    privacyPolicy: {
      path: '/',
      name: 'Privacy Policy',
    },
    termsOfService: {
      path: '/',
      name: 'Terms',
    },
  },
  auth: {
    signup: {
      path: '/signup',
      name: 'Signup',
    },
    login: {
      path: '/login',
      name: 'Login',
    },
  },
  app: {
    chat: {
      path: `${appRootPath}/chat`,
      name: 'Chat',
      icon: MessageSquare,
    },
  },
  account: {
    root: {
      name: 'Account',
      icon: User,
    },
    profile: {
      path: `${appRootPath}/account/profile`,
      name: 'Profile',
      icon: User,
    },
    preferences: {
      path: `${appRootPath}/account/preferences`,
      name: 'Preferences',
      icon: Settings,
    },
    billing: {
      path: `${appRootPath}/account/billing`,
      name: 'Billing',
      icon: CreditCard,
    },
    settings: {
      path: `${appRootPath}/account/settings`,
      name: 'Settings',
      icon: Settings,
    },
    files: {
      path: `${appRootPath}/account/files`,
      name: 'Files',
      icon: File,
    },
  },
} as const;
