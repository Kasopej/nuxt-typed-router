import { assertType, test } from 'vitest';
import type { RouteLocationMatched } from 'vue-router';
import { TypedRouteFromName, useRoute } from '@typed-router';

const route = useRoute();

test('Basic', () => {
  const namedRoute = useRoute('user-foo-bar');

  assertType<TypedRouteFromName<'user-foo-bar'>>(namedRoute);
  assertType<'user-foo-bar'>(namedRoute.name);
  assertType<{
    foo: string;
    bar?: string | undefined;
  }>(namedRoute.params);
  assertType<string>(namedRoute.fullPath);
  assertType<string>(namedRoute.hash);
  assertType<string>(namedRoute.path);
  assertType<RouteLocationMatched[]>(namedRoute.matched);
});

// *  index.vue

if (route.name === 'index') {
  assertType<'index'>(route.name);
  assertType<unknown>(route.params);
}

// * --- [id].vue
if (route.name === 'user-id') {
  assertType<TypedRouteFromName<'user-id'>>(route);
  assertType<'user-id'>(route.name);
  assertType<{ id: string }>(route.params);
}

// * --- [foo]-[[bar]].vue
if (route.name === 'user-foo-bar') {
  assertType<TypedRouteFromName<'user-foo-bar'>>(route);
  assertType<'user-foo-bar'>(route.name);
  assertType<{
    foo: string;
    bar?: string | undefined;
  }>(route.params);
}

// * --- [...slug].vue
if (route.name === 'user-slug') {
  assertType<TypedRouteFromName<'user-slug'>>(route);
  assertType<'user-slug'>(route.name);
  assertType<{
    slug: string[];
  }>(route.params);
}

// * --- [one]-foo-[two].vue
if (route.name === 'user-one-foo-two') {
  assertType<TypedRouteFromName<'user-one-foo-two'>>(route);
  assertType<'user-one-foo-two'>(route.name);
  assertType<{
    one: string;
    two: string;
  }>(route.params);
}

// * --- [id]/[slug].vue
if (route.name === 'user-id-slug') {
  assertType<TypedRouteFromName<'user-id-slug'>>(route);
  assertType<'user-id-slug'>(route.name);
  assertType<{
    id: string;
    slug: string;
  }>(route.params);
}

// * --- Routes added by config extend
if (route.name === 'test-extend') {
  assertType<TypedRouteFromName<'test-extend'>>(route);
  assertType<'test-extend'>(route.name);
  assertType<{
    id: string;
  }>(route.params);
}

// * --- Routes added by modules
if (route.name === 'test-module') {
  assertType<TypedRouteFromName<'test-module'>>(route);
  assertType<'test-module'>(route.name);
  assertType<{
    foo: string;
  }>(route.params);
}
