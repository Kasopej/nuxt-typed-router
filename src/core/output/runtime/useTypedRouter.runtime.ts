import { watermarkTemplate } from '../templates';

export function createRuntimeUseTypedRouterFile(routesDeclTemplate: string): string {
  return `
  ${watermarkTemplate}
  import { useRouter as defaultRouter } from '#app';
  import type { TypedRouter } from './typed-router';

  /** Returns instances of $typedRouter and $routesList fully typed to use in your components or your Vuex/Pinia store
   * 
   * @exemple
   * 
   * \`\`\`ts
   * const { router, routes } = useRouter();
   * \`\`\`
   */
  export function useRouter(): TypedRouter {
    const router = defaultRouter();

    return router;
  };

  `;
}
