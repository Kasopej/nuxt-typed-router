// @ts-nocheck
// eslint-disable
/**
 * ---------------------------------------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------------------------------------
 * */

export const routerPagesNames = {
  activate: 'activate' as const,
  index: 'index' as const,
  childOne: {
    childOneChildOneSubOne: 'parent-child-one-child-one-sub-one' as const,
    user: { index: 'parent-child-one-child-one-sub-one-user' as const },
    childOneChildOneSubTwo: 'parent-child-one-child-one-sub-two' as const,
    index: 'parent-child-one' as const,
  },
  childTwo: {
    childTwoId: 'parent-child-two-id' as const,
    childTwoChildOneSubOne: 'parent-child-two-child-one-sub-one' as const,
    index: 'parent-child-two' as const,
    profile: {
      id: {
        slug: {
          idSlugArticles: 'parent-child-two-profile-id-slug-articles' as const,
          index: 'parent-child-two-profile-id-slug' as const,
        },
        index: 'parent-child-two-profile-id' as const,
      },
      index: 'parent-child-two-profile' as const,
    },
  },
  rootPage: 'rootPage' as const,
};

export type TypedRouteList =
  | 'activate'
  | 'index'
  | 'parent-child-one-child-one-sub-one'
  | 'parent-child-one-child-one-sub-one-user'
  | 'parent-child-one-child-one-sub-two'
  | 'parent-child-one'
  | 'parent-child-two-id'
  | 'parent-child-two-child-one-sub-one'
  | 'parent-child-two'
  | 'parent-child-two-profile-id-slug-articles'
  | 'parent-child-two-profile-id-slug'
  | 'parent-child-two-profile-id'
  | 'parent-child-two-profile'
  | 'rootPage';

export type RouteListDecl = {
  activate: 'activate';
  index: 'index';
  childOne: {
    childOneChildOneSubOne: 'parent-child-one-child-one-sub-one';
    user: { index: 'parent-child-one-child-one-sub-one-user' };
    childOneChildOneSubTwo: 'parent-child-one-child-one-sub-two';
    index: 'parent-child-one';
  };
  childTwo: {
    childTwoId: 'parent-child-two-id';
    childTwoChildOneSubOne: 'parent-child-two-child-one-sub-one';
    index: 'parent-child-two';
    profile: {
      id: {
        slug: {
          idSlugArticles: 'parent-child-two-profile-id-slug-articles';
          index: 'parent-child-two-profile-id-slug';
        };
        index: 'parent-child-two-profile-id';
      };
      index: 'parent-child-two-profile';
    };
  };
  rootPage: 'rootPage';
};

/**
 * Routes params are only required for the exact targeted route name,
 * vue-router behaviour allow to navigate between children routes without the need to provide all the params every time.
 * So we can't enforce params when navigating between routes, only a `[xxx].vue` page will have required params in the type definition
 *
 *
 * */

export type TypedRouteParams = {
  activate: never;
  index: never;
  'parent-child-one-child-one-sub-one': never;
  'parent-child-one-child-one-sub-one-user': never;
  'parent-child-one-child-one-sub-two': never;
  'parent-child-one': never;
  'parent-child-two-id': {
    id: string | number;
  };
  'parent-child-two-child-one-sub-one': never;
  'parent-child-two': never;
  'parent-child-two-profile-id-slug-articles': {
    id?: string | number;
    slug?: string | number;
  };
  'parent-child-two-profile-id-slug': {
    id?: string | number;
    slug: string | number;
  };
  'parent-child-two-profile-id': {
    id: string | number;
  };
  'parent-child-two-profile': never;
  rootPage: never;
};

export type TypedRouteNamedMapper =
  | { name: 'activate' }
  | { name: 'index' }
  | { name: 'parent-child-one-child-one-sub-one' }
  | { name: 'parent-child-one-child-one-sub-one-user' }
  | { name: 'parent-child-one-child-one-sub-two' }
  | { name: 'parent-child-one' }
  | {
      name: 'parent-child-two-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'parent-child-two-child-one-sub-one' }
  | { name: 'parent-child-two' }
  | {
      name: 'parent-child-two-profile-id-slug-articles';
      params?: {
        id?: string | number;
        slug?: string | number;
      };
    }
  | {
      name: 'parent-child-two-profile-id-slug';
      params: {
        id?: string | number;
        slug: string | number;
      };
    }
  | {
      name: 'parent-child-two-profile-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'parent-child-two-profile' }
  | { name: 'rootPage' };

export type ResolvedTypedRouteNamedMapper = {
  name: TypedRouteList;
  params: unknown;
} & (
  | { name: 'activate' }
  | { name: 'index' }
  | { name: 'parent-child-one-child-one-sub-one' }
  | { name: 'parent-child-one-child-one-sub-one-user' }
  | { name: 'parent-child-one-child-one-sub-two' }
  | { name: 'parent-child-one' }
  | {
      name: 'parent-child-two-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'parent-child-two-child-one-sub-one' }
  | { name: 'parent-child-two' }
  | {
      name: 'parent-child-two-profile-id-slug-articles';
      params: {
        id: string | number;
        slug: string | number;
      };
    }
  | {
      name: 'parent-child-two-profile-id-slug';
      params: {
        id: string | number;
        slug: string | number;
      };
    }
  | {
      name: 'parent-child-two-profile-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'parent-child-two-profile' }
  | { name: 'rootPage' }
);
