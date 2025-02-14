/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as AuthImport } from './routes/_auth'
import { Route as AppImport } from './routes/_app'
import { Route as AppIndexImport } from './routes/_app/index'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AppChatIdImport } from './routes/_app/chat/$id'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexRoute = AppIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const AppChatIdRoute = AppChatIdImport.update({
  id: '/chat/$id',
  path: '/chat/$id',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/chat/$id': {
      id: '/_app/chat/$id'
      path: '/chat/$id'
      fullPath: '/chat/$id'
      preLoaderRoute: typeof AppChatIdImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppIndexRoute: typeof AppIndexRoute
  AppChatIdRoute: typeof AppChatIdRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppIndexRoute: AppIndexRoute,
  AppChatIdRoute: AppChatIdRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface AuthRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthSignupRoute: typeof AuthSignupRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthSignupRoute: AuthSignupRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthRouteWithChildren
  '/about': typeof AboutRoute
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof AppIndexRoute
  '/chat/$id': typeof AppChatIdRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/about': typeof AboutRoute
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof AppIndexRoute
  '/chat/$id': typeof AppChatIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/about': typeof AboutRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/signup': typeof AuthSignupRoute
  '/_app/': typeof AppIndexRoute
  '/_app/chat/$id': typeof AppChatIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/about' | '/login' | '/signup' | '/' | '/chat/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/about' | '/login' | '/signup' | '/' | '/chat/$id'
  id:
    | '__root__'
    | '/_app'
    | '/_auth'
    | '/about'
    | '/_auth/login'
    | '/_auth/signup'
    | '/_app/'
    | '/_app/chat/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/_auth",
        "/about"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/",
        "/_app/chat/$id"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/signup"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    },
    "/_app/": {
      "filePath": "_app/index.tsx",
      "parent": "/_app"
    },
    "/_app/chat/$id": {
      "filePath": "_app/chat/$id.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
