/* This function is completely auto-generated via the `yarn bootstrap` phase of
   the app. You can re-run it when adding new localized handbook pages by running:

   yarn workspace documentation create-handbook-nav

   Find the source of truth at packages/documentation/scripts/generateDocsNavigationPerLanguage.js
*/

export interface SidebarNavItem {
  title: string;
  id: string;
  permalink?: string;
  chronological?: boolean;
  oneline?: string;
  items?: SidebarNavItem[];
}

/** ---INSERT--- */

export function getDocumentationNavForLanguage(
  langRequest: string
): SidebarNavItem[] {
  const langs = ["en", "id", "ko", "pl", "pt", "vo"];
  const lang = langs.includes(langRequest) ? langRequest : "en";
  const navigations: Record<string, SidebarNavItem[]> = {};

  navigations.en = [
    {
      title: "Get Started",
      oneline: "Quick introductions based on your background or preference.",
      id: "get-started",
      chronological: false,

      items: [
        {
          title: "TS for the New Programmer",
          id: "0typescript-for-the-new-programmer",
          permalink: "/docs/handbook/typescript-from-scratch.html",
          oneline: "Learn TypeScript from scratch",
        },
        {
          title: "TypeScript for JS Programmers",
          id: "0typescript-for-javascript-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes.html",
          oneline: "Learn how TypeScript extends JavaScript",
        },
        {
          title: "TS for Java/C# Programmers",
          id: "0typescript-for-java/c#-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-oop.html",
          oneline:
            "Learn TypeScript if you have a background in object-oriented languages",
        },
        {
          title: "TS for Functional Programmers",
          id: "0typescript-for-functional-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-func.html",
          oneline:
            "Learn TypeScript if you have a background in functional programming",
        },
        {
          title: "TypeScript Tooling in 5 minutes",
          id: "0typescript-tooling-in-5-minutes",
          permalink: "/docs/handbook/typescript-tooling-in-5-minutes.html",
          oneline:
            "A tutorial to understand how to create a small website with TypeScript",
        },
      ],
    },
    {
      title: "Handbook",
      oneline: "A good first read for your daily TS work.",
      id: "handbook",
      chronological: true,

      items: [
        {
          title: "The TypeScript Handbook",
          id: "1the-typescript-handbook",
          permalink: "/docs/handbook/intro.html",
          oneline: "Your first step to learn TypeScript",
        },
        {
          title: "Basic Types",
          id: "1basic-types",
          permalink: "/docs/handbook/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Interfaces",
          id: "1interfaces",
          permalink: "/docs/handbook/interfaces.html",
          oneline: "How to write an interface with TypeScript",
        },
        {
          title: "Functions",
          id: "1functions",
          permalink: "/docs/handbook/functions.html",
          oneline: "How to add types to a function",
        },
        {
          title: "Literal Types",
          id: "1literal-types",
          permalink: "/docs/handbook/literal-types.html",
          oneline: "Using literal types with TypeScript",
        },
        {
          title: "Unions and Intersection Types",
          id: "1unions-and-intersection-types",
          permalink: "/docs/handbook/unions-and-intersections.html",
          oneline: "How to use unions and intersection types in TypeScript",
        },
        {
          title: "Classes",
          id: "1classes",
          permalink: "/docs/handbook/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Enums",
          id: "1enums",
          permalink: "/docs/handbook/enums.html",
          oneline: "How TypeScript enums work",
        },
        {
          title: "Generics",
          id: "1generics",
          permalink: "/docs/handbook/generics.html",
          oneline: "Introduction to TypeScript and Generics",
        },
      ],
    },
    {
      title: "Handbook Reference",
      oneline: "Deep dive reference materials.",
      id: "handbook-reference",
      chronological: false,

      items: [
        {
          title: "Advanced Types",
          id: "2advanced-types",
          permalink: "/docs/handbook/advanced-types.html",
          oneline: "Advanced concepts around types in TypeScript",
        },
        {
          title: "Utility Types",
          id: "2utility-types",
          permalink: "/docs/handbook/utility-types.html",
          oneline: "Types which are globally included in TypeScript",
        },
        {
          title: "Decorators",
          id: "2decorators",
          permalink: "/docs/handbook/decorators.html",
          oneline: "TypeScript Decorators overview",
        },
        {
          title: "Declaration Merging",
          id: "2declaration-merging",
          permalink: "/docs/handbook/declaration-merging.html",
          oneline: "How merging namespaces and interfaces works",
        },
        {
          title: "Iterators and Generators",
          id: "2iterators-and-generators",
          permalink: "/docs/handbook/iterators-and-generators.html",
          oneline: "How Iterators and Generators work in TypeScript",
        },
        {
          title: "JSX",
          id: "2jsx",
          permalink: "/docs/handbook/jsx.html",
          oneline: "Using JSX with TypeScript",
        },
        {
          title: "Mixins",
          id: "2mixins",
          permalink: "/docs/handbook/mixins.html",
          oneline: "Using the mixin pattern with TypeScript",
        },
        {
          title: "Modules",
          id: "2modules",
          permalink: "/docs/handbook/modules.html",
          oneline: "How modules work in TypeScript",
        },
        {
          title: "Module Resolution",
          id: "2module-resolution",
          permalink: "/docs/handbook/module-resolution.html",
          oneline: "How TypeScript resolves modules in JavaScript",
        },
        {
          title: "Namespaces",
          id: "2namespaces",
          permalink: "/docs/handbook/namespaces.html",
          oneline: "How TypeScript namespaces work",
        },
        {
          title: "Namespaces and Modules",
          id: "2namespaces-and-modules",
          permalink: "/docs/handbook/namespaces-and-modules.html",
          oneline:
            "How to organize code in TypeScript via modules or namespaces",
        },
        {
          title: "Symbols",
          id: "2symbols",
          permalink: "/docs/handbook/symbols.html",
          oneline: "Using the JavaScript Symbol primitive in TypeScript",
        },
        {
          title: "Triple-Slash Directives",
          id: "2triple-slash-directives",
          permalink: "/docs/handbook/triple-slash-directives.html",
          oneline: "How to use triple slash directives in TypeScript",
        },
        {
          title: "Type Compatibility",
          id: "2type-compatibility",
          permalink: "/docs/handbook/type-compatibility.html",
          oneline: "How type-checking works in TypeScript",
        },
        {
          title: "Type Inference",
          id: "2type-inference",
          permalink: "/docs/handbook/type-inference.html",
          oneline: "How code flow analysis works in TypeScript",
        },
        {
          title: "Variable Declaration",
          id: "2variable-declaration",
          permalink: "/docs/handbook/variable-declarations.html",
          oneline: "How TypeScript handles variable declaration",
        },
      ],
    },
    {
      title: "Tutorials",
      oneline: "Using TypeScript in several environments.",
      id: "tutorials",
      chronological: false,

      items: [
        {
          title: "ASP.NET Core",
          id: "3asp.net-core",
          permalink: "/docs/handbook/asp-net-core.html",
          oneline: "Using TypeScript in ASP.NET Core",
        },
        {
          title: "Gulp",
          id: "3gulp",
          permalink: "/docs/handbook/gulp.html",
          oneline: "Using TypeScript with Gulp",
        },
        {
          title: "DOM Manipulation",
          id: "3dom-manipulation",
          permalink: "/docs/handbook/dom-manipulation.html",
          oneline: "Using the DOM with TypeScript",
        },
        {
          title: "Migrating from JavaScript",
          id: "3migrating-from-javascript",
          permalink: "/docs/handbook/migrating-from-javascript.html",
          oneline: "How to migrate from JavaScript to TypeScript",
        },
        {
          title: "Using Babel with TypeScript",
          id: "3using-babel-with-typescript",
          permalink: "/docs/handbook/babel-with-typescript.html",
          oneline: "How to create a hybrid Babel + TypeScript project",
        },
      ],
    },
    {
      title: "What's New",
      oneline:
        "Find out how TypeScript has evolved and what's new in the releases.",
      id: "what's-new",
      chronological: false,

      items: [
        {
          title: "Overview",
          id: "4overview",
          permalink: "/docs/handbook/release-notes/overview.html",
          oneline: "All TypeScript release notes",
        },
        {
          title: "TypeScript 4.0",
          id: "4typescript-4.0",
          permalink: "/docs/handbook/release-notes/typescript-4-0.html",
          oneline: "TypeScript 4.0 Release Notes",
        },
        {
          title: "TypeScript 3.9",
          id: "4typescript-3.9",
          permalink: "/docs/handbook/release-notes/typescript-3-9.html",
          oneline: "TypeScript 3.9 Release Notes",
        },
        {
          title: "TypeScript 3.8",
          id: "4typescript-3.8",
          permalink: "/docs/handbook/release-notes/typescript-3-8.html",
          oneline: "TypeScript 3.8 Release Notes",
        },
        {
          title: "TypeScript 3.7",
          id: "4typescript-3.7",
          permalink: "/docs/handbook/release-notes/typescript-3-7.html",
          oneline: "TypeScript 3.7 Release Notes",
        },
        {
          title: "TypeScript 3.6",
          id: "4typescript-3.6",
          permalink: "/docs/handbook/release-notes/typescript-3-6.html",
          oneline: "TypeScript 3.6 Release Notes",
        },
        {
          title: "TypeScript 3.5",
          id: "4typescript-3.5",
          permalink: "/docs/handbook/release-notes/typescript-3-5.html",
          oneline: "TypeScript 3.5 Release Notes",
        },
        {
          title: "TypeScript 3.4",
          id: "4typescript-3.4",
          permalink: "/docs/handbook/release-notes/typescript-3-4.html",
          oneline: "TypeScript 3.4 Release Notes",
        },
        {
          title: "TypeScript 3.3",
          id: "4typescript-3.3",
          permalink: "/docs/handbook/release-notes/typescript-3-3.html",
          oneline: "TypeScript 3.3 Release Notes",
        },
        {
          title: "TypeScript 3.2",
          id: "4typescript-3.2",
          permalink: "/docs/handbook/release-notes/typescript-3-2.html",
          oneline: "TypeScript 3.2 Release Notes",
        },
        {
          title: "TypeScript 3.1",
          id: "4typescript-3.1",
          permalink: "/docs/handbook/release-notes/typescript-3-1.html",
          oneline: "TypeScript 3.1 Release Notes",
        },
        {
          title: "TypeScript 3.0",
          id: "4typescript-3.0",
          permalink: "/docs/handbook/release-notes/typescript-3-0.html",
          oneline: "TypeScript 3.0 Release Notes",
        },
        {
          title: "TypeScript 2.9",
          id: "4typescript-2.9",
          permalink: "/docs/handbook/release-notes/typescript-2-9.html",
          oneline: "TypeScript 2.9 Release Notes",
        },
        {
          title: "TypeScript 2.8",
          id: "4typescript-2.8",
          permalink: "/docs/handbook/release-notes/typescript-2-8.html",
          oneline: "TypeScript 2.8 Release Notes",
        },
        {
          title: "TypeScript 2.7",
          id: "4typescript-2.7",
          permalink: "/docs/handbook/release-notes/typescript-2-7.html",
          oneline: "TypeScript 2.7 Release Notes",
        },
        {
          title: "TypeScript 2.6",
          id: "4typescript-2.6",
          permalink: "/docs/handbook/release-notes/typescript-2-6.html",
          oneline: "TypeScript 2.6 Release Notes",
        },
        {
          title: "TypeScript 2.5",
          id: "4typescript-2.5",
          permalink: "/docs/handbook/release-notes/typescript-2-5.html",
          oneline: "TypeScript 2.5 Release Notes",
        },
        {
          title: "TypeScript 2.4",
          id: "4typescript-2.4",
          permalink: "/docs/handbook/release-notes/typescript-2-4.html",
          oneline: "TypeScript 2.4 Release Notes",
        },
        {
          title: "TypeScript 2.3",
          id: "4typescript-2.3",
          permalink: "/docs/handbook/release-notes/typescript-2-3.html",
          oneline: "TypeScript 2.3 Release Notes",
        },
        {
          title: "TypeScript 2.2",
          id: "4typescript-2.2",
          permalink: "/docs/handbook/release-notes/typescript-2-2.html",
          oneline: "TypeScript 2.2 Release Notes",
        },
        {
          title: "TypeScript 2.1",
          id: "4typescript-2.1",
          permalink: "/docs/handbook/release-notes/typescript-2-1.html",
          oneline: "TypeScript 2.1 Release Notes",
        },
        {
          title: "TypeScript 2.0",
          id: "4typescript-2.0",
          permalink: "/docs/handbook/release-notes/typescript-2-0.html",
          oneline: "TypeScript 2.0 Release Notes",
        },
        {
          title: "TypeScript 1.8",
          id: "4typescript-1.8",
          permalink: "/docs/handbook/release-notes/typescript-1-8.html",
          oneline: "TypeScript 1.8 Release Notes",
        },
        {
          title: "TypeScript 1.7",
          id: "4typescript-1.7",
          permalink: "/docs/handbook/release-notes/typescript-1-7.html",
          oneline: "TypeScript 1.7 Release Notes",
        },
        {
          title: "TypeScript 1.6",
          id: "4typescript-1.6",
          permalink: "/docs/handbook/release-notes/typescript-1-6.html",
          oneline: "TypeScript 1.6 Release Notes",
        },
        {
          title: "TypeScript 1.5",
          id: "4typescript-1.5",
          permalink: "/docs/handbook/release-notes/typescript-1-5.html",
          oneline: "TypeScript 1.5 Release Notes",
        },
        {
          title: "TypeScript 1.4",
          id: "4typescript-1.4",
          permalink: "/docs/handbook/release-notes/typescript-1-4.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.3",
          id: "4typescript-1.3",
          permalink: "/docs/handbook/release-notes/typescript-1-3.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.1",
          id: "4typescript-1.1",
          permalink: "/docs/handbook/release-notes/typescript-1-1.html",
          oneline: "TypeScript 1.1 Release Notes",
        },
      ],
    },
    {
      title: "Declaration Files",
      oneline:
        "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
      id: "declaration-files",
      chronological: true,

      items: [
        {
          title: "Introduction",
          id: "5introduction",
          permalink: "/docs/handbook/declaration-files/introduction.html",
          oneline:
            "How to write a high-quality TypeScript Declaration (d.ts) file",
        },
        {
          title: "Declaration Reference",
          id: "5declaration-reference",
          permalink: "/docs/handbook/declaration-files/by-example.html",
          oneline: "How to create a d.ts file for a module",
        },
        {
          title: "Library Structures",
          id: "5library-structures",
          permalink: "/docs/handbook/declaration-files/library-structures.html",
          oneline: "How to structure your d.ts files",
        },
        {
          title: ".d.ts Templates",
          id: "5.d.ts-templates",
          oneline: "undefined",

          items: [
            {
              title: "Modules .d.ts",
              id: "5modules-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/module-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Plugin",
              id: "5module:-plugin",
              permalink:
                "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Class",
              id: "5module:-class",
              permalink:
                "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Function",
              id: "5module:-function",
              permalink:
                "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global .d.ts",
              id: "5global-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/global-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global: Modifying Module",
              id: "5global:-modifying-module",
              permalink:
                "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
              oneline: "undefined",
            },
          ],
        },
        {
          title: "Do's and Don'ts",
          id: "5do's-and-don'ts",
          permalink: "/docs/handbook/declaration-files/do-s-and-don-ts.html",
          oneline: "Recommendations for writing d.ts files",
        },
        {
          title: "Deep Dive",
          id: "5deep-dive",
          permalink: "/docs/handbook/declaration-files/deep-dive.html",
          oneline: "How do d.ts files work, a deep dive",
        },
        {
          title: "Publishing",
          id: "5publishing",
          permalink: "/docs/handbook/declaration-files/publishing.html",
          oneline: "How to get your d.ts files to users",
        },
        {
          title: "Consumption",
          id: "5consumption",
          permalink: "/docs/handbook/declaration-files/consumption.html",
          oneline: "How to download d.ts files for your project",
        },
      ],
    },
    {
      title: "JavaScript",
      oneline: "How to use TypeScript-powered JavaScript tooling.",
      id: "javascript",
      chronological: true,

      items: [
        {
          title: "JS Projects Utilizing TypeScript",
          id: "6js-projects-utilizing-typescript",
          permalink: "/docs/handbook/intro-to-js-ts.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "Type Checking JavaScript Files",
          id: "6type-checking-javascript-files",
          permalink: "/docs/handbook/type-checking-javascript-files.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "JSDoc Reference",
          id: "6jsdoc-reference",
          permalink: "/docs/handbook/jsdoc-supported-types.html",
          oneline: "What JSDoc does TypeScript-powered JavaScript support?",
        },
        {
          title: "Creating .d.ts Files from .js files",
          id: "6creating-.d.ts-files-from-.js-files",
          permalink: "/docs/handbook/declaration-files/dts-from-js.html",
          oneline: "How to add d.ts generation to JavaScript projects",
        },
      ],
    },
    {
      title: "Project Configuration",
      oneline: "Compiler configuration reference.",
      id: "project-configuration",
      chronological: false,

      items: [
        {
          title: "What is a tsconfig.json",
          id: "7what-is-a-tsconfig.json",
          permalink: "/docs/handbook/tsconfig-json.html",
          oneline: "Learn about how a TSConfig works",
        },
        {
          title: "Compiler Options in MSBuild",
          id: "7compiler-options-in-msbuild",
          permalink: "/docs/handbook/compiler-options-in-msbuild.html",
          oneline: "Which compiler options are available in MSBuild projects.",
        },
        {
          title: "TSConfig Reference",
          id: "7tsconfig-reference",
          permalink: "/tsconfig",
          oneline: "The page covering every TSConfig option",
        },
        {
          title: "tsc CLI Options",
          id: "7tsc-cli-options",
          permalink: "/docs/handbook/compiler-options.html",
          oneline:
            "A very high-level overview of the CLI compiler options for tsc",
        },
        {
          title: "Project References",
          id: "7project-references",
          permalink: "/docs/handbook/project-references.html",
          oneline: "How to split up a large TypeScript project",
        },
        {
          title: "Integrating with Build Tools",
          id: "7integrating-with-build-tools",
          permalink: "/docs/handbook/integrating-with-build-tools.html",
          oneline: "How to use TypeScript with other build tools",
        },
        {
          title: "Configuring Watch",
          id: "7configuring-watch",
          permalink: "/docs/handbook/configuring-watch.html",
          oneline: "How to configure the watch mode of TypeScript",
        },
        {
          title: "Nightly Builds",
          id: "7nightly-builds",
          permalink: "/docs/handbook/nightly-builds.html",
          oneline: "How to use a nightly build of TypeScript",
        },
      ],
    },
    {
      title: "Handbook v2: Beta",
      oneline: "The new handbook which is a work in progress.",
      id: "handbook-v2:-beta",
      chronological: true,

      items: [
        {
          title: "The Basics",
          id: "8the-basics",
          permalink: "/docs/handbook/2/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Everyday Types",
          id: "8everyday-types",
          permalink: "/docs/handbook/2/everyday-types.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Object Types",
          id: "8object-types",
          permalink: "/docs/handbook/2/objects.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Narrowing",
          id: "8narrowing",
          permalink: "/docs/handbook/2/narrowing.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "More on Functions",
          id: "8more-on-functions",
          permalink: "/docs/handbook/2/functions.html",
          oneline: "Learn about how Functions work in TypeScript.",
        },
        {
          title: "Classes",
          id: "8classes",
          permalink: "/docs/handbook/2/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Type Manipulation",
          id: "8type-manipulation",
          oneline: "undefined",

          items: [
            {
              title: "Creating Types from Types",
              id: "8creating-types-from-types",
              permalink: "/docs/handbook/2/types-from-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Keyof Type Operator",
              id: "8keyof-type-operator",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Typeof Type Operator",
              id: "8typeof-type-operator",
              permalink: "/docs/handbook/2/typeof-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Indexed Access Types",
              id: "8indexed-access-types",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Conditional Types",
              id: "8conditional-types",
              permalink: "/docs/handbook/2/conditional-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
          ],
        },
        {
          title: "Modules",
          id: "8modules",
          permalink: "/docs/handbook/2/modules.html",
          oneline: "Learn how TypeScript handles different module styles.",
        },
        {
          title: "Type Declarations",
          id: "8type-declarations",
          permalink: "/docs/handbook/2/type-declarations.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Understanding Errors",
          id: "8understanding-errors",
          permalink: "/docs/handbook/2/understanding-errors.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
      ],
    },
  ];
  navigations.id = [
    {
      title: "Get Started",
      oneline: "Quick introductions based on your background or preference.",
      id: "get-started",
      chronological: false,

      items: [
        {
          title: "TS for the New Programmer",
          id: "0typescript-for-the-new-programmer",
          permalink: "/docs/handbook/typescript-from-scratch.html",
          oneline: "Learn TypeScript from scratch",
        },
        {
          title: "TypeScript for JS Programmers",
          id: "0typescript-for-javascript-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes.html",
          oneline: "Learn how TypeScript extends JavaScript",
        },
        {
          title: "TS for Java/C# Programmers",
          id: "0typescript-for-java/c#-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-oop.html",
          oneline:
            "Learn TypeScript if you have a background in object-oriented languages",
        },
        {
          title: "TS for Functional Programmers",
          id: "0typescript-for-functional-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-func.html",
          oneline:
            "Learn TypeScript if you have a background in functional programming",
        },
        {
          title: "TypeScript Tooling dalam 5 menit",
          id: "0typescript-tooling-dalam-5-menit",
          permalink: "/id/docs/handbook/typescript-tooling-in-5-minutes.html",
          oneline:
            "Sebuah tutorial untuk memahami cara membuat situs web kecil dengan TypeScript",
        },
      ],
    },
    {
      title: "Handbook",
      oneline: "A good first read for your daily TS work.",
      id: "handbook",
      chronological: true,

      items: [
        {
          title: "The TypeScript Handbook",
          id: "1the-typescript-handbook",
          permalink: "/docs/handbook/intro.html",
          oneline: "Your first step to learn TypeScript",
        },
        {
          title: "Basic Types",
          id: "1basic-types",
          permalink: "/docs/handbook/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Interfaces",
          id: "1interfaces",
          permalink: "/docs/handbook/interfaces.html",
          oneline: "How to write an interface with TypeScript",
        },
        {
          title: "Functions",
          id: "1functions",
          permalink: "/docs/handbook/functions.html",
          oneline: "How to add types to a function",
        },
        {
          title: "Literal Types",
          id: "1literal-types",
          permalink: "/docs/handbook/literal-types.html",
          oneline: "Using literal types with TypeScript",
        },
        {
          title: "Unions and Intersection Types",
          id: "1unions-and-intersection-types",
          permalink: "/docs/handbook/unions-and-intersections.html",
          oneline: "How to use unions and intersection types in TypeScript",
        },
        {
          title: "Classes",
          id: "1classes",
          permalink: "/docs/handbook/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Enums",
          id: "1enums",
          permalink: "/docs/handbook/enums.html",
          oneline: "How TypeScript enums work",
        },
        {
          title: "Generics",
          id: "1generics",
          permalink: "/docs/handbook/generics.html",
          oneline: "Introduction to TypeScript and Generics",
        },
      ],
    },
    {
      title: "Handbook Reference",
      oneline: "Deep dive reference materials.",
      id: "handbook-reference",
      chronological: false,

      items: [
        {
          title: "Advanced Types",
          id: "2advanced-types",
          permalink: "/docs/handbook/advanced-types.html",
          oneline: "Advanced concepts around types in TypeScript",
        },
        {
          title: "Utility Types",
          id: "2utility-types",
          permalink: "/docs/handbook/utility-types.html",
          oneline: "Types which are globally included in TypeScript",
        },
        {
          title: "Decorators",
          id: "2decorators",
          permalink: "/id/docs/handbook/decorators.html",
          oneline: "Ringkasan Dekorator TypeScript",
        },
        {
          title: "Declaration Merging",
          id: "2declaration-merging",
          permalink: "/docs/handbook/declaration-merging.html",
          oneline: "How merging namespaces and interfaces works",
        },
        {
          title: "Iterators dan Generators",
          id: "2iterators-dan-generators",
          permalink: "/id/docs/handbook/iterators-and-generators.html",
          oneline: "Bagaimana Iterator dan Generator bekerja di TypeScript",
        },
        {
          title: "JSX",
          id: "2jsx",
          permalink: "/id/docs/handbook/jsx.html",
          oneline: "Menggunakan JSX dengan TypeScript",
        },
        {
          title: "Mixins",
          id: "2mixins",
          permalink: "/id/docs/handbook/mixins.html",
          oneline: "Menggunakan pola mixin dengan TypeScript",
        },
        {
          title: "Modules",
          id: "2modules",
          permalink: "/docs/handbook/modules.html",
          oneline: "How modules work in TypeScript",
        },
        {
          title: "Module Resolution",
          id: "2module-resolution",
          permalink: "/docs/handbook/module-resolution.html",
          oneline: "How TypeScript resolves modules in JavaScript",
        },
        {
          title: "Namespaces",
          id: "2namespaces",
          permalink: "/docs/handbook/namespaces.html",
          oneline: "How TypeScript namespaces work",
        },
        {
          title: "Namespaces and Modules",
          id: "2namespaces-and-modules",
          permalink: "/docs/handbook/namespaces-and-modules.html",
          oneline:
            "How to organize code in TypeScript via modules or namespaces",
        },
        {
          title: "Symbols",
          id: "2symbols",
          permalink: "/id/docs/handbook/symbols.html",
          oneline: "Menggunakan Simbol JavaScript primitif di TypeScript",
        },
        {
          title: "Triple-Slash Directives",
          id: "2triple-slash-directives",
          permalink: "/docs/handbook/triple-slash-directives.html",
          oneline: "How to use triple slash directives in TypeScript",
        },
        {
          title: "Type Compatibility",
          id: "2type-compatibility",
          permalink: "/docs/handbook/type-compatibility.html",
          oneline: "How type-checking works in TypeScript",
        },
        {
          title: "Type Inference",
          id: "2type-inference",
          permalink: "/docs/handbook/type-inference.html",
          oneline: "How code flow analysis works in TypeScript",
        },
        {
          title: "Variable Declaration",
          id: "2variable-declaration",
          permalink: "/docs/handbook/variable-declarations.html",
          oneline: "How TypeScript handles variable declaration",
        },
      ],
    },
    {
      title: "Tutorials",
      oneline: "Using TypeScript in several environments.",
      id: "tutorials",
      chronological: false,

      items: [
        {
          title: "ASP.NET Core",
          id: "3asp.net-core",
          permalink: "/docs/handbook/asp-net-core.html",
          oneline: "Using TypeScript in ASP.NET Core",
        },
        {
          title: "Gulp",
          id: "3gulp",
          permalink: "/docs/handbook/gulp.html",
          oneline: "Using TypeScript with Gulp",
        },
        {
          title: "Manipulasi DOM",
          id: "3manipulasi-dom",
          permalink: "/id/docs/handbook/dom-manipulation.html",
          oneline: "Menggunakan DOM dengan TypeScript",
        },
        {
          title: "Migrating from JavaScript",
          id: "3migrating-from-javascript",
          permalink: "/docs/handbook/migrating-from-javascript.html",
          oneline: "How to migrate from JavaScript to TypeScript",
        },
        {
          title: "Menggunakan Babel dengan TypeScript",
          id: "3menggunakan-babel-dengan-typescript",
          permalink: "/id/docs/handbook/babel-with-typescript.html",
          oneline: "Cara membuat proyek hybrid Babel + TypeScript",
        },
      ],
    },
    {
      title: "What's New",
      oneline:
        "Find out how TypeScript has evolved and what's new in the releases.",
      id: "what's-new",
      chronological: false,

      items: [
        {
          title: "Overview",
          id: "4overview",
          permalink: "/docs/handbook/release-notes/overview.html",
          oneline: "All TypeScript release notes",
        },
        {
          title: "TypeScript 4.0",
          id: "4typescript-4.0",
          permalink: "/docs/handbook/release-notes/typescript-4-0.html",
          oneline: "TypeScript 4.0 Release Notes",
        },
        {
          title: "TypeScript 3.9",
          id: "4typescript-3.9",
          permalink: "/docs/handbook/release-notes/typescript-3-9.html",
          oneline: "TypeScript 3.9 Release Notes",
        },
        {
          title: "TypeScript 3.8",
          id: "4typescript-3.8",
          permalink: "/docs/handbook/release-notes/typescript-3-8.html",
          oneline: "TypeScript 3.8 Release Notes",
        },
        {
          title: "TypeScript 3.7",
          id: "4typescript-3.7",
          permalink: "/docs/handbook/release-notes/typescript-3-7.html",
          oneline: "TypeScript 3.7 Release Notes",
        },
        {
          title: "TypeScript 3.6",
          id: "4typescript-3.6",
          permalink: "/docs/handbook/release-notes/typescript-3-6.html",
          oneline: "TypeScript 3.6 Release Notes",
        },
        {
          title: "TypeScript 3.5",
          id: "4typescript-3.5",
          permalink: "/docs/handbook/release-notes/typescript-3-5.html",
          oneline: "TypeScript 3.5 Release Notes",
        },
        {
          title: "TypeScript 3.4",
          id: "4typescript-3.4",
          permalink: "/docs/handbook/release-notes/typescript-3-4.html",
          oneline: "TypeScript 3.4 Release Notes",
        },
        {
          title: "TypeScript 3.3",
          id: "4typescript-3.3",
          permalink: "/docs/handbook/release-notes/typescript-3-3.html",
          oneline: "TypeScript 3.3 Release Notes",
        },
        {
          title: "TypeScript 3.2",
          id: "4typescript-3.2",
          permalink: "/docs/handbook/release-notes/typescript-3-2.html",
          oneline: "TypeScript 3.2 Release Notes",
        },
        {
          title: "TypeScript 3.1",
          id: "4typescript-3.1",
          permalink: "/docs/handbook/release-notes/typescript-3-1.html",
          oneline: "TypeScript 3.1 Release Notes",
        },
        {
          title: "TypeScript 3.0",
          id: "4typescript-3.0",
          permalink: "/docs/handbook/release-notes/typescript-3-0.html",
          oneline: "TypeScript 3.0 Release Notes",
        },
        {
          title: "TypeScript 2.9",
          id: "4typescript-2.9",
          permalink: "/docs/handbook/release-notes/typescript-2-9.html",
          oneline: "TypeScript 2.9 Release Notes",
        },
        {
          title: "TypeScript 2.8",
          id: "4typescript-2.8",
          permalink: "/docs/handbook/release-notes/typescript-2-8.html",
          oneline: "TypeScript 2.8 Release Notes",
        },
        {
          title: "TypeScript 2.7",
          id: "4typescript-2.7",
          permalink: "/docs/handbook/release-notes/typescript-2-7.html",
          oneline: "TypeScript 2.7 Release Notes",
        },
        {
          title: "TypeScript 2.6",
          id: "4typescript-2.6",
          permalink: "/docs/handbook/release-notes/typescript-2-6.html",
          oneline: "TypeScript 2.6 Release Notes",
        },
        {
          title: "TypeScript 2.5",
          id: "4typescript-2.5",
          permalink: "/docs/handbook/release-notes/typescript-2-5.html",
          oneline: "TypeScript 2.5 Release Notes",
        },
        {
          title: "TypeScript 2.4",
          id: "4typescript-2.4",
          permalink: "/docs/handbook/release-notes/typescript-2-4.html",
          oneline: "TypeScript 2.4 Release Notes",
        },
        {
          title: "TypeScript 2.3",
          id: "4typescript-2.3",
          permalink: "/docs/handbook/release-notes/typescript-2-3.html",
          oneline: "TypeScript 2.3 Release Notes",
        },
        {
          title: "TypeScript 2.2",
          id: "4typescript-2.2",
          permalink: "/docs/handbook/release-notes/typescript-2-2.html",
          oneline: "TypeScript 2.2 Release Notes",
        },
        {
          title: "TypeScript 2.1",
          id: "4typescript-2.1",
          permalink: "/docs/handbook/release-notes/typescript-2-1.html",
          oneline: "TypeScript 2.1 Release Notes",
        },
        {
          title: "TypeScript 2.0",
          id: "4typescript-2.0",
          permalink: "/docs/handbook/release-notes/typescript-2-0.html",
          oneline: "TypeScript 2.0 Release Notes",
        },
        {
          title: "TypeScript 1.8",
          id: "4typescript-1.8",
          permalink: "/docs/handbook/release-notes/typescript-1-8.html",
          oneline: "TypeScript 1.8 Release Notes",
        },
        {
          title: "TypeScript 1.7",
          id: "4typescript-1.7",
          permalink: "/docs/handbook/release-notes/typescript-1-7.html",
          oneline: "TypeScript 1.7 Release Notes",
        },
        {
          title: "TypeScript 1.6",
          id: "4typescript-1.6",
          permalink: "/docs/handbook/release-notes/typescript-1-6.html",
          oneline: "TypeScript 1.6 Release Notes",
        },
        {
          title: "TypeScript 1.5",
          id: "4typescript-1.5",
          permalink: "/docs/handbook/release-notes/typescript-1-5.html",
          oneline: "TypeScript 1.5 Release Notes",
        },
        {
          title: "TypeScript 1.4",
          id: "4typescript-1.4",
          permalink: "/docs/handbook/release-notes/typescript-1-4.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.3",
          id: "4typescript-1.3",
          permalink: "/docs/handbook/release-notes/typescript-1-3.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.1",
          id: "4typescript-1.1",
          permalink: "/docs/handbook/release-notes/typescript-1-1.html",
          oneline: "TypeScript 1.1 Release Notes",
        },
      ],
    },
    {
      title: "Declaration Files",
      oneline:
        "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
      id: "declaration-files",
      chronological: true,

      items: [
        {
          title: "Introduction",
          id: "5introduction",
          permalink: "/docs/handbook/declaration-files/introduction.html",
          oneline:
            "How to write a high-quality TypeScript Declaration (d.ts) file",
        },
        {
          title: "Declaration Reference",
          id: "5declaration-reference",
          permalink: "/docs/handbook/declaration-files/by-example.html",
          oneline: "How to create a d.ts file for a module",
        },
        {
          title: "Library Structures",
          id: "5library-structures",
          permalink: "/docs/handbook/declaration-files/library-structures.html",
          oneline: "How to structure your d.ts files",
        },
        {
          title: ".d.ts Templates",
          id: "5.d.ts-templates",
          oneline: "undefined",

          items: [
            {
              title: "Modules .d.ts",
              id: "5modules-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/module-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Plugin",
              id: "5module:-plugin",
              permalink:
                "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Class",
              id: "5module:-class",
              permalink:
                "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Function",
              id: "5module:-function",
              permalink:
                "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global .d.ts",
              id: "5global-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/global-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global: Modifying Module",
              id: "5global:-modifying-module",
              permalink:
                "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
              oneline: "undefined",
            },
          ],
        },
        {
          title: "Do's and Don'ts",
          id: "5do's-and-don'ts",
          permalink: "/docs/handbook/declaration-files/do-s-and-don-ts.html",
          oneline: "Recommendations for writing d.ts files",
        },
        {
          title: "Deep Dive",
          id: "5deep-dive",
          permalink: "/docs/handbook/declaration-files/deep-dive.html",
          oneline: "How do d.ts files work, a deep dive",
        },
        {
          title: "Publishing",
          id: "5publishing",
          permalink: "/docs/handbook/declaration-files/publishing.html",
          oneline: "How to get your d.ts files to users",
        },
        {
          title: "Consumption",
          id: "5consumption",
          permalink: "/docs/handbook/declaration-files/consumption.html",
          oneline: "How to download d.ts files for your project",
        },
      ],
    },
    {
      title: "JavaScript",
      oneline: "How to use TypeScript-powered JavaScript tooling.",
      id: "javascript",
      chronological: true,

      items: [
        {
          title: "Memanfaatkan Typescript pada Proyek JS",
          id: "6memanfaatkan-typescript-pada-proyek-js",
          permalink: "/id/docs/handbook/intro-to-js-ts.html",
          oneline:
            "Cara menambahkan pemeriksaan tipe data pada berkas JavaScript menggunakan TypeScript",
        },
        {
          title: "Type Checking JavaScript Files",
          id: "6type-checking-javascript-files",
          permalink: "/docs/handbook/type-checking-javascript-files.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "Referensi JSDoc",
          id: "6referensi-jsdoc",
          permalink: "/id/docs/handbook/jsdoc-supported-types.html",
          oneline: "JSDoc apa yang didukung JavaScript dan TypeScript?",
        },
        {
          title: "Membuat Berkas .d.ts dari berkas .js",
          id: "6membuat-berkas-.d.ts-dari-berkas-.js",
          permalink: "/id/docs/handbook/declaration-files/dts-from-js.html",
          oneline: "Bagaimana cara menambahkan hasil d.ts ke proyek JavaScript",
        },
      ],
    },
    {
      title: "Project Configuration",
      oneline: "Compiler configuration reference.",
      id: "project-configuration",
      chronological: false,

      items: [
        {
          title: "What is a tsconfig.json",
          id: "7what-is-a-tsconfig.json",
          permalink: "/docs/handbook/tsconfig-json.html",
          oneline: "Learn about how a TSConfig works",
        },
        {
          title: "Compiler Options in MSBuild",
          id: "7compiler-options-in-msbuild",
          permalink: "/docs/handbook/compiler-options-in-msbuild.html",
          oneline: "Which compiler options are available in MSBuild projects.",
        },
        {
          title: "TSConfig Reference",
          id: "7tsconfig-reference",
          permalink: "/tsconfig",
          oneline: "The page covering every TSConfig option",
        },
        {
          title: "tsc CLI Options",
          id: "7tsc-cli-options",
          permalink: "/docs/handbook/compiler-options.html",
          oneline:
            "A very high-level overview of the CLI compiler options for tsc",
        },
        {
          title: "Project References",
          id: "7project-references",
          permalink: "/docs/handbook/project-references.html",
          oneline: "How to split up a large TypeScript project",
        },
        {
          title: "Integrating with Build Tools",
          id: "7integrating-with-build-tools",
          permalink: "/docs/handbook/integrating-with-build-tools.html",
          oneline: "How to use TypeScript with other build tools",
        },
        {
          title: "Mengkonfigurasi Watch",
          id: "7mengkonfigurasi-watch",
          permalink: "/id/docs/handbook/configuring-watch.html",
          oneline: "Cara mengkonfigurasi mode watch TypeScript",
        },
        {
          title: "Nightly Builds",
          id: "7nightly-builds",
          permalink: "/id/docs/handbook/nightly-builds.html",
          oneline: "Cara menggunakan nightly build TypeScript",
        },
      ],
    },
    {
      title: "Handbook v2: Beta",
      oneline: "The new handbook which is a work in progress.",
      id: "handbook-v2:-beta",
      chronological: true,

      items: [
        {
          title: "The Basics",
          id: "8the-basics",
          permalink: "/docs/handbook/2/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Everyday Types",
          id: "8everyday-types",
          permalink: "/docs/handbook/2/everyday-types.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Object Types",
          id: "8object-types",
          permalink: "/docs/handbook/2/objects.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Narrowing",
          id: "8narrowing",
          permalink: "/docs/handbook/2/narrowing.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "More on Functions",
          id: "8more-on-functions",
          permalink: "/docs/handbook/2/functions.html",
          oneline: "Learn about how Functions work in TypeScript.",
        },
        {
          title: "Classes",
          id: "8classes",
          permalink: "/docs/handbook/2/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Type Manipulation",
          id: "8type-manipulation",
          oneline: "undefined",

          items: [
            {
              title: "Creating Types from Types",
              id: "8creating-types-from-types",
              permalink: "/docs/handbook/2/types-from-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Keyof Type Operator",
              id: "8keyof-type-operator",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Typeof Type Operator",
              id: "8typeof-type-operator",
              permalink: "/docs/handbook/2/typeof-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Indexed Access Types",
              id: "8indexed-access-types",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Conditional Types",
              id: "8conditional-types",
              permalink: "/docs/handbook/2/conditional-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
          ],
        },
        {
          title: "Modules",
          id: "8modules",
          permalink: "/docs/handbook/2/modules.html",
          oneline: "Learn how TypeScript handles different module styles.",
        },
        {
          title: "Type Declarations",
          id: "8type-declarations",
          permalink: "/docs/handbook/2/type-declarations.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Understanding Errors",
          id: "8understanding-errors",
          permalink: "/docs/handbook/2/understanding-errors.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
      ],
    },
  ];
  navigations.ko = [
    {
      title: "Get Started",
      oneline: "Quick introductions based on your background or preference.",
      id: "get-started",
      chronological: false,

      items: [
        {
          title: "TS for the New Programmer",
          id: "0typescript-for-the-new-programmer",
          permalink: "/docs/handbook/typescript-from-scratch.html",
          oneline: "Learn TypeScript from scratch",
        },
        {
          title: "TypeScript for JS Programmers",
          id: "0typescript-for-javascript-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes.html",
          oneline: "Learn how TypeScript extends JavaScript",
        },
        {
          title: "TS for Java/C# Programmers",
          id: "0typescript-for-java/c#-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-oop.html",
          oneline:
            "Learn TypeScript if you have a background in object-oriented languages",
        },
        {
          title: "TS for Functional Programmers",
          id: "0typescript-for-functional-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-func.html",
          oneline:
            "Learn TypeScript if you have a background in functional programming",
        },
        {
          title: "TypeScript Tooling in 5 minutes",
          id: "0typescript-tooling-in-5-minutes",
          permalink: "/ko/docs/handbook/typescript-tooling-in-5-minutes.html",
          oneline:
            "A tutorial to understand how to create a small website with TypeScript",
        },
      ],
    },
    {
      title: "Handbook",
      oneline: "A good first read for your daily TS work.",
      id: "handbook",
      chronological: true,

      items: [
        {
          title: "The TypeScript Handbook",
          id: "1the-typescript-handbook",
          permalink: "/docs/handbook/intro.html",
          oneline: "Your first step to learn TypeScript",
        },
        {
          title: "Basic Types",
          id: "1basic-types",
          permalink: "/docs/handbook/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Interfaces",
          id: "1interfaces",
          permalink: "/docs/handbook/interfaces.html",
          oneline: "How to write an interface with TypeScript",
        },
        {
          title: "Functions",
          id: "1functions",
          permalink: "/docs/handbook/functions.html",
          oneline: "How to add types to a function",
        },
        {
          title: "Literal Types",
          id: "1literal-types",
          permalink: "/docs/handbook/literal-types.html",
          oneline: "Using literal types with TypeScript",
        },
        {
          title: "Unions and Intersection Types",
          id: "1unions-and-intersection-types",
          permalink: "/docs/handbook/unions-and-intersections.html",
          oneline: "How to use unions and intersection types in TypeScript",
        },
        {
          title: "Classes",
          id: "1classes",
          permalink: "/docs/handbook/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Enums",
          id: "1enums",
          permalink: "/docs/handbook/enums.html",
          oneline: "How TypeScript enums work",
        },
        {
          title: "Generics",
          id: "1generics",
          permalink: "/docs/handbook/generics.html",
          oneline: "Introduction to TypeScript and Generics",
        },
      ],
    },
    {
      title: "Handbook Reference",
      oneline: "Deep dive reference materials.",
      id: "handbook-reference",
      chronological: false,

      items: [
        {
          title: "Advanced Types",
          id: "2advanced-types",
          permalink: "/docs/handbook/advanced-types.html",
          oneline: "Advanced concepts around types in TypeScript",
        },
        {
          title: "Utility Types",
          id: "2utility-types",
          permalink: "/docs/handbook/utility-types.html",
          oneline: "Types which are globally included in TypeScript",
        },
        {
          title: "Decorators",
          id: "2decorators",
          permalink: "/docs/handbook/decorators.html",
          oneline: "TypeScript Decorators overview",
        },
        {
          title: "Declaration Merging",
          id: "2declaration-merging",
          permalink: "/docs/handbook/declaration-merging.html",
          oneline: "How merging namespaces and interfaces works",
        },
        {
          title: "Iterators and Generators",
          id: "2iterators-and-generators",
          permalink: "/docs/handbook/iterators-and-generators.html",
          oneline: "How Iterators and Generators work in TypeScript",
        },
        {
          title: "JSX",
          id: "2jsx",
          permalink: "/docs/handbook/jsx.html",
          oneline: "Using JSX with TypeScript",
        },
        {
          title: "Mixins",
          id: "2mixins",
          permalink: "/docs/handbook/mixins.html",
          oneline: "Using the mixin pattern with TypeScript",
        },
        {
          title: "Modules",
          id: "2modules",
          permalink: "/docs/handbook/modules.html",
          oneline: "How modules work in TypeScript",
        },
        {
          title: "Module Resolution",
          id: "2module-resolution",
          permalink: "/docs/handbook/module-resolution.html",
          oneline: "How TypeScript resolves modules in JavaScript",
        },
        {
          title: "Namespaces",
          id: "2namespaces",
          permalink: "/docs/handbook/namespaces.html",
          oneline: "How TypeScript namespaces work",
        },
        {
          title: "Namespaces and Modules",
          id: "2namespaces-and-modules",
          permalink: "/docs/handbook/namespaces-and-modules.html",
          oneline:
            "How to organize code in TypeScript via modules or namespaces",
        },
        {
          title: "Symbols",
          id: "2symbols",
          permalink: "/docs/handbook/symbols.html",
          oneline: "Using the JavaScript Symbol primitive in TypeScript",
        },
        {
          title: "Triple-Slash Directives",
          id: "2triple-slash-directives",
          permalink: "/docs/handbook/triple-slash-directives.html",
          oneline: "How to use triple slash directives in TypeScript",
        },
        {
          title: "Type Compatibility",
          id: "2type-compatibility",
          permalink: "/docs/handbook/type-compatibility.html",
          oneline: "How type-checking works in TypeScript",
        },
        {
          title: "Type Inference",
          id: "2type-inference",
          permalink: "/docs/handbook/type-inference.html",
          oneline: "How code flow analysis works in TypeScript",
        },
        {
          title: "Variable Declaration",
          id: "2variable-declaration",
          permalink: "/docs/handbook/variable-declarations.html",
          oneline: "How TypeScript handles variable declaration",
        },
      ],
    },
    {
      title: "Tutorials",
      oneline: "Using TypeScript in several environments.",
      id: "tutorials",
      chronological: false,

      items: [
        {
          title: "ASP.NET Core",
          id: "3asp.net-core",
          permalink: "/docs/handbook/asp-net-core.html",
          oneline: "Using TypeScript in ASP.NET Core",
        },
        {
          title: "Gulp",
          id: "3gulp",
          permalink: "/docs/handbook/gulp.html",
          oneline: "Using TypeScript with Gulp",
        },
        {
          title: "DOM Manipulation",
          id: "3dom-manipulation",
          permalink: "/docs/handbook/dom-manipulation.html",
          oneline: "Using the DOM with TypeScript",
        },
        {
          title: "Migrating from JavaScript",
          id: "3migrating-from-javascript",
          permalink: "/docs/handbook/migrating-from-javascript.html",
          oneline: "How to migrate from JavaScript to TypeScript",
        },
        {
          title: "Using Babel with TypeScript",
          id: "3using-babel-with-typescript",
          permalink: "/ko/docs/handbook/babel-with-typescript.html",
          oneline: "How to create a hybrid Babel + TypeScript project",
        },
      ],
    },
    {
      title: "What's New",
      oneline:
        "Find out how TypeScript has evolved and what's new in the releases.",
      id: "what's-new",
      chronological: false,

      items: [
        {
          title: "Overview",
          id: "4overview",
          permalink: "/docs/handbook/release-notes/overview.html",
          oneline: "All TypeScript release notes",
        },
        {
          title: "TypeScript 4.0",
          id: "4typescript-4.0",
          permalink: "/docs/handbook/release-notes/typescript-4-0.html",
          oneline: "TypeScript 4.0 Release Notes",
        },
        {
          title: "TypeScript 3.9",
          id: "4typescript-3.9",
          permalink: "/docs/handbook/release-notes/typescript-3-9.html",
          oneline: "TypeScript 3.9 Release Notes",
        },
        {
          title: "TypeScript 3.8",
          id: "4typescript-3.8",
          permalink: "/docs/handbook/release-notes/typescript-3-8.html",
          oneline: "TypeScript 3.8 Release Notes",
        },
        {
          title: "TypeScript 3.7",
          id: "4typescript-3.7",
          permalink: "/docs/handbook/release-notes/typescript-3-7.html",
          oneline: "TypeScript 3.7 Release Notes",
        },
        {
          title: "TypeScript 3.6",
          id: "4typescript-3.6",
          permalink: "/docs/handbook/release-notes/typescript-3-6.html",
          oneline: "TypeScript 3.6 Release Notes",
        },
        {
          title: "TypeScript 3.5",
          id: "4typescript-3.5",
          permalink: "/docs/handbook/release-notes/typescript-3-5.html",
          oneline: "TypeScript 3.5 Release Notes",
        },
        {
          title: "TypeScript 3.4",
          id: "4typescript-3.4",
          permalink: "/docs/handbook/release-notes/typescript-3-4.html",
          oneline: "TypeScript 3.4 Release Notes",
        },
        {
          title: "TypeScript 3.3",
          id: "4typescript-3.3",
          permalink: "/docs/handbook/release-notes/typescript-3-3.html",
          oneline: "TypeScript 3.3 Release Notes",
        },
        {
          title: "TypeScript 3.2",
          id: "4typescript-3.2",
          permalink: "/docs/handbook/release-notes/typescript-3-2.html",
          oneline: "TypeScript 3.2 Release Notes",
        },
        {
          title: "TypeScript 3.1",
          id: "4typescript-3.1",
          permalink: "/docs/handbook/release-notes/typescript-3-1.html",
          oneline: "TypeScript 3.1 Release Notes",
        },
        {
          title: "TypeScript 3.0",
          id: "4typescript-3.0",
          permalink: "/docs/handbook/release-notes/typescript-3-0.html",
          oneline: "TypeScript 3.0 Release Notes",
        },
        {
          title: "TypeScript 2.9",
          id: "4typescript-2.9",
          permalink: "/docs/handbook/release-notes/typescript-2-9.html",
          oneline: "TypeScript 2.9 Release Notes",
        },
        {
          title: "TypeScript 2.8",
          id: "4typescript-2.8",
          permalink: "/docs/handbook/release-notes/typescript-2-8.html",
          oneline: "TypeScript 2.8 Release Notes",
        },
        {
          title: "TypeScript 2.7",
          id: "4typescript-2.7",
          permalink: "/docs/handbook/release-notes/typescript-2-7.html",
          oneline: "TypeScript 2.7 Release Notes",
        },
        {
          title: "TypeScript 2.6",
          id: "4typescript-2.6",
          permalink: "/docs/handbook/release-notes/typescript-2-6.html",
          oneline: "TypeScript 2.6 Release Notes",
        },
        {
          title: "TypeScript 2.5",
          id: "4typescript-2.5",
          permalink: "/docs/handbook/release-notes/typescript-2-5.html",
          oneline: "TypeScript 2.5 Release Notes",
        },
        {
          title: "TypeScript 2.4",
          id: "4typescript-2.4",
          permalink: "/docs/handbook/release-notes/typescript-2-4.html",
          oneline: "TypeScript 2.4 Release Notes",
        },
        {
          title: "TypeScript 2.3",
          id: "4typescript-2.3",
          permalink: "/docs/handbook/release-notes/typescript-2-3.html",
          oneline: "TypeScript 2.3 Release Notes",
        },
        {
          title: "TypeScript 2.2",
          id: "4typescript-2.2",
          permalink: "/docs/handbook/release-notes/typescript-2-2.html",
          oneline: "TypeScript 2.2 Release Notes",
        },
        {
          title: "TypeScript 2.1",
          id: "4typescript-2.1",
          permalink: "/docs/handbook/release-notes/typescript-2-1.html",
          oneline: "TypeScript 2.1 Release Notes",
        },
        {
          title: "TypeScript 2.0",
          id: "4typescript-2.0",
          permalink: "/docs/handbook/release-notes/typescript-2-0.html",
          oneline: "TypeScript 2.0 Release Notes",
        },
        {
          title: "TypeScript 1.8",
          id: "4typescript-1.8",
          permalink: "/docs/handbook/release-notes/typescript-1-8.html",
          oneline: "TypeScript 1.8 Release Notes",
        },
        {
          title: "TypeScript 1.7",
          id: "4typescript-1.7",
          permalink: "/docs/handbook/release-notes/typescript-1-7.html",
          oneline: "TypeScript 1.7 Release Notes",
        },
        {
          title: "TypeScript 1.6",
          id: "4typescript-1.6",
          permalink: "/docs/handbook/release-notes/typescript-1-6.html",
          oneline: "TypeScript 1.6 Release Notes",
        },
        {
          title: "TypeScript 1.5",
          id: "4typescript-1.5",
          permalink: "/docs/handbook/release-notes/typescript-1-5.html",
          oneline: "TypeScript 1.5 Release Notes",
        },
        {
          title: "TypeScript 1.4",
          id: "4typescript-1.4",
          permalink: "/docs/handbook/release-notes/typescript-1-4.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.3",
          id: "4typescript-1.3",
          permalink: "/docs/handbook/release-notes/typescript-1-3.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.1",
          id: "4typescript-1.1",
          permalink: "/docs/handbook/release-notes/typescript-1-1.html",
          oneline: "TypeScript 1.1 Release Notes",
        },
      ],
    },
    {
      title: "Declaration Files",
      oneline:
        "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
      id: "declaration-files",
      chronological: true,

      items: [
        {
          title: "Introduction",
          id: "5introduction",
          permalink: "/docs/handbook/declaration-files/introduction.html",
          oneline:
            "How to write a high-quality TypeScript Declaration (d.ts) file",
        },
        {
          title: "Declaration Reference",
          id: "5declaration-reference",
          permalink: "/docs/handbook/declaration-files/by-example.html",
          oneline: "How to create a d.ts file for a module",
        },
        {
          title: "Library Structures",
          id: "5library-structures",
          permalink: "/docs/handbook/declaration-files/library-structures.html",
          oneline: "How to structure your d.ts files",
        },
        {
          title: ".d.ts Templates",
          id: "5.d.ts-templates",
          oneline: "undefined",

          items: [
            {
              title: "Modules .d.ts",
              id: "5modules-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/module-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Plugin",
              id: "5module:-plugin",
              permalink:
                "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Class",
              id: "5module:-class",
              permalink:
                "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Function",
              id: "5module:-function",
              permalink:
                "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global .d.ts",
              id: "5global-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/global-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global: Modifying Module",
              id: "5global:-modifying-module",
              permalink:
                "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
              oneline: "undefined",
            },
          ],
        },
        {
          title: "Do's and Don'ts",
          id: "5do's-and-don'ts",
          permalink: "/docs/handbook/declaration-files/do-s-and-don-ts.html",
          oneline: "Recommendations for writing d.ts files",
        },
        {
          title: "Deep Dive",
          id: "5deep-dive",
          permalink: "/docs/handbook/declaration-files/deep-dive.html",
          oneline: "How do d.ts files work, a deep dive",
        },
        {
          title: "Publishing",
          id: "5publishing",
          permalink: "/docs/handbook/declaration-files/publishing.html",
          oneline: "How to get your d.ts files to users",
        },
        {
          title: "Consumption",
          id: "5consumption",
          permalink: "/docs/handbook/declaration-files/consumption.html",
          oneline: "How to download d.ts files for your project",
        },
      ],
    },
    {
      title: "JavaScript",
      oneline: "How to use TypeScript-powered JavaScript tooling.",
      id: "javascript",
      chronological: true,

      items: [
        {
          title: "JS Projects Utilizing TypeScript",
          id: "6js-projects-utilizing-typescript",
          permalink: "/docs/handbook/intro-to-js-ts.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "Type Checking JavaScript Files",
          id: "6type-checking-javascript-files",
          permalink: "/docs/handbook/type-checking-javascript-files.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "JSDoc Reference",
          id: "6jsdoc-reference",
          permalink: "/docs/handbook/jsdoc-supported-types.html",
          oneline: "What JSDoc does TypeScript-powered JavaScript support?",
        },
        {
          title: "Creating .d.ts Files from .js files",
          id: "6creating-.d.ts-files-from-.js-files",
          permalink: "/docs/handbook/declaration-files/dts-from-js.html",
          oneline: "How to add d.ts generation to JavaScript projects",
        },
      ],
    },
    {
      title: "Project Configuration",
      oneline: "Compiler configuration reference.",
      id: "project-configuration",
      chronological: false,

      items: [
        {
          title: "What is a tsconfig.json",
          id: "7what-is-a-tsconfig.json",
          permalink: "/docs/handbook/tsconfig-json.html",
          oneline: "Learn about how a TSConfig works",
        },
        {
          title: "Compiler Options in MSBuild",
          id: "7compiler-options-in-msbuild",
          permalink: "/docs/handbook/compiler-options-in-msbuild.html",
          oneline: "Which compiler options are available in MSBuild projects.",
        },
        {
          title: "TSConfig Reference",
          id: "7tsconfig-reference",
          permalink: "/tsconfig",
          oneline: "The page covering every TSConfig option",
        },
        {
          title: "tsc CLI Options",
          id: "7tsc-cli-options",
          permalink: "/docs/handbook/compiler-options.html",
          oneline:
            "A very high-level overview of the CLI compiler options for tsc",
        },
        {
          title: "Project References",
          id: "7project-references",
          permalink: "/docs/handbook/project-references.html",
          oneline: "How to split up a large TypeScript project",
        },
        {
          title: "Integrating with Build Tools",
          id: "7integrating-with-build-tools",
          permalink: "/docs/handbook/integrating-with-build-tools.html",
          oneline: "How to use TypeScript with other build tools",
        },
        {
          title: "Configuring Watch",
          id: "7configuring-watch",
          permalink: "/docs/handbook/configuring-watch.html",
          oneline: "How to configure the watch mode of TypeScript",
        },
        {
          title: "Nightly Builds",
          id: "7nightly-builds",
          permalink: "/docs/handbook/nightly-builds.html",
          oneline: "How to use a nightly build of TypeScript",
        },
      ],
    },
    {
      title: "Handbook v2: Beta",
      oneline: "The new handbook which is a work in progress.",
      id: "handbook-v2:-beta",
      chronological: true,

      items: [
        {
          title: "The Basics",
          id: "8the-basics",
          permalink: "/docs/handbook/2/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Everyday Types",
          id: "8everyday-types",
          permalink: "/docs/handbook/2/everyday-types.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Object Types",
          id: "8object-types",
          permalink: "/docs/handbook/2/objects.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Narrowing",
          id: "8narrowing",
          permalink: "/docs/handbook/2/narrowing.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "More on Functions",
          id: "8more-on-functions",
          permalink: "/docs/handbook/2/functions.html",
          oneline: "Learn about how Functions work in TypeScript.",
        },
        {
          title: "Classes",
          id: "8classes",
          permalink: "/docs/handbook/2/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Type Manipulation",
          id: "8type-manipulation",
          oneline: "undefined",

          items: [
            {
              title: "Creating Types from Types",
              id: "8creating-types-from-types",
              permalink: "/docs/handbook/2/types-from-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Keyof Type Operator",
              id: "8keyof-type-operator",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Typeof Type Operator",
              id: "8typeof-type-operator",
              permalink: "/docs/handbook/2/typeof-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Indexed Access Types",
              id: "8indexed-access-types",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Conditional Types",
              id: "8conditional-types",
              permalink: "/docs/handbook/2/conditional-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
          ],
        },
        {
          title: "Modules",
          id: "8modules",
          permalink: "/docs/handbook/2/modules.html",
          oneline: "Learn how TypeScript handles different module styles.",
        },
        {
          title: "Type Declarations",
          id: "8type-declarations",
          permalink: "/docs/handbook/2/type-declarations.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Understanding Errors",
          id: "8understanding-errors",
          permalink: "/docs/handbook/2/understanding-errors.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
      ],
    },
  ];
  navigations.pl = [
    {
      title: "Get Started",
      oneline: "Quick introductions based on your background or preference.",
      id: "get-started",
      chronological: false,

      items: [
        {
          title: "TS for the New Programmer",
          id: "0typescript-for-the-new-programmer",
          permalink: "/docs/handbook/typescript-from-scratch.html",
          oneline: "Learn TypeScript from scratch",
        },
        {
          title: "TypeScript for JS Programmers",
          id: "0typescript-for-javascript-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes.html",
          oneline: "Learn how TypeScript extends JavaScript",
        },
        {
          title: "TS for Java/C# Programmers",
          id: "0typescript-for-java/c#-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-oop.html",
          oneline:
            "Learn TypeScript if you have a background in object-oriented languages",
        },
        {
          title: "TS for Functional Programmers",
          id: "0typescript-for-functional-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-func.html",
          oneline:
            "Learn TypeScript if you have a background in functional programming",
        },
        {
          title: "TypeScript Tooling in 5 minutes",
          id: "0typescript-tooling-in-5-minutes",
          permalink: "/docs/handbook/typescript-tooling-in-5-minutes.html",
          oneline:
            "A tutorial to understand how to create a small website with TypeScript",
        },
      ],
    },
    {
      title: "Handbook",
      oneline: "A good first read for your daily TS work.",
      id: "handbook",
      chronological: true,

      items: [
        {
          title: "Przewodnik po TypeScript",
          id: "1przewodnik-po-typescript",
          permalink: "/pl/docs/handbook/intro.html",
          oneline: "Twoje pierwsze kroki w nauce TypeScript",
        },
        {
          title: "Basic Types",
          id: "1basic-types",
          permalink: "/docs/handbook/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Interfaces",
          id: "1interfaces",
          permalink: "/docs/handbook/interfaces.html",
          oneline: "How to write an interface with TypeScript",
        },
        {
          title: "Functions",
          id: "1functions",
          permalink: "/docs/handbook/functions.html",
          oneline: "How to add types to a function",
        },
        {
          title: "Literal Types",
          id: "1literal-types",
          permalink: "/docs/handbook/literal-types.html",
          oneline: "Using literal types with TypeScript",
        },
        {
          title: "Unions and Intersection Types",
          id: "1unions-and-intersection-types",
          permalink: "/docs/handbook/unions-and-intersections.html",
          oneline: "How to use unions and intersection types in TypeScript",
        },
        {
          title: "Classes",
          id: "1classes",
          permalink: "/docs/handbook/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Enums",
          id: "1enums",
          permalink: "/docs/handbook/enums.html",
          oneline: "How TypeScript enums work",
        },
        {
          title: "Generics",
          id: "1generics",
          permalink: "/docs/handbook/generics.html",
          oneline: "Introduction to TypeScript and Generics",
        },
      ],
    },
    {
      title: "Handbook Reference",
      oneline: "Deep dive reference materials.",
      id: "handbook-reference",
      chronological: false,

      items: [
        {
          title: "Advanced Types",
          id: "2advanced-types",
          permalink: "/docs/handbook/advanced-types.html",
          oneline: "Advanced concepts around types in TypeScript",
        },
        {
          title: "Utility Types",
          id: "2utility-types",
          permalink: "/docs/handbook/utility-types.html",
          oneline: "Types which are globally included in TypeScript",
        },
        {
          title: "Decorators",
          id: "2decorators",
          permalink: "/docs/handbook/decorators.html",
          oneline: "TypeScript Decorators overview",
        },
        {
          title: "Declaration Merging",
          id: "2declaration-merging",
          permalink: "/docs/handbook/declaration-merging.html",
          oneline: "How merging namespaces and interfaces works",
        },
        {
          title: "Iterators and Generators",
          id: "2iterators-and-generators",
          permalink: "/docs/handbook/iterators-and-generators.html",
          oneline: "How Iterators and Generators work in TypeScript",
        },
        {
          title: "JSX",
          id: "2jsx",
          permalink: "/docs/handbook/jsx.html",
          oneline: "Using JSX with TypeScript",
        },
        {
          title: "Mixins",
          id: "2mixins",
          permalink: "/docs/handbook/mixins.html",
          oneline: "Using the mixin pattern with TypeScript",
        },
        {
          title: "Modules",
          id: "2modules",
          permalink: "/docs/handbook/modules.html",
          oneline: "How modules work in TypeScript",
        },
        {
          title: "Module Resolution",
          id: "2module-resolution",
          permalink: "/docs/handbook/module-resolution.html",
          oneline: "How TypeScript resolves modules in JavaScript",
        },
        {
          title: "Namespaces",
          id: "2namespaces",
          permalink: "/docs/handbook/namespaces.html",
          oneline: "How TypeScript namespaces work",
        },
        {
          title: "Namespaces and Modules",
          id: "2namespaces-and-modules",
          permalink: "/docs/handbook/namespaces-and-modules.html",
          oneline:
            "How to organize code in TypeScript via modules or namespaces",
        },
        {
          title: "Symbols",
          id: "2symbols",
          permalink: "/docs/handbook/symbols.html",
          oneline: "Using the JavaScript Symbol primitive in TypeScript",
        },
        {
          title: "Triple-Slash Directives",
          id: "2triple-slash-directives",
          permalink: "/docs/handbook/triple-slash-directives.html",
          oneline: "How to use triple slash directives in TypeScript",
        },
        {
          title: "Type Compatibility",
          id: "2type-compatibility",
          permalink: "/docs/handbook/type-compatibility.html",
          oneline: "How type-checking works in TypeScript",
        },
        {
          title: "Type Inference",
          id: "2type-inference",
          permalink: "/docs/handbook/type-inference.html",
          oneline: "How code flow analysis works in TypeScript",
        },
        {
          title: "Variable Declaration",
          id: "2variable-declaration",
          permalink: "/docs/handbook/variable-declarations.html",
          oneline: "How TypeScript handles variable declaration",
        },
      ],
    },
    {
      title: "Tutorials",
      oneline: "Using TypeScript in several environments.",
      id: "tutorials",
      chronological: false,

      items: [
        {
          title: "ASP.NET Core",
          id: "3asp.net-core",
          permalink: "/docs/handbook/asp-net-core.html",
          oneline: "Using TypeScript in ASP.NET Core",
        },
        {
          title: "Gulp",
          id: "3gulp",
          permalink: "/docs/handbook/gulp.html",
          oneline: "Using TypeScript with Gulp",
        },
        {
          title: "DOM Manipulation",
          id: "3dom-manipulation",
          permalink: "/docs/handbook/dom-manipulation.html",
          oneline: "Using the DOM with TypeScript",
        },
        {
          title: "Migrating from JavaScript",
          id: "3migrating-from-javascript",
          permalink: "/docs/handbook/migrating-from-javascript.html",
          oneline: "How to migrate from JavaScript to TypeScript",
        },
        {
          title: "Using Babel with TypeScript",
          id: "3using-babel-with-typescript",
          permalink: "/docs/handbook/babel-with-typescript.html",
          oneline: "How to create a hybrid Babel + TypeScript project",
        },
      ],
    },
    {
      title: "What's New",
      oneline:
        "Find out how TypeScript has evolved and what's new in the releases.",
      id: "what's-new",
      chronological: false,

      items: [
        {
          title: "Overview",
          id: "4overview",
          permalink: "/docs/handbook/release-notes/overview.html",
          oneline: "All TypeScript release notes",
        },
        {
          title: "TypeScript 4.0",
          id: "4typescript-4.0",
          permalink: "/docs/handbook/release-notes/typescript-4-0.html",
          oneline: "TypeScript 4.0 Release Notes",
        },
        {
          title: "TypeScript 3.9",
          id: "4typescript-3.9",
          permalink: "/docs/handbook/release-notes/typescript-3-9.html",
          oneline: "TypeScript 3.9 Release Notes",
        },
        {
          title: "TypeScript 3.8",
          id: "4typescript-3.8",
          permalink: "/docs/handbook/release-notes/typescript-3-8.html",
          oneline: "TypeScript 3.8 Release Notes",
        },
        {
          title: "TypeScript 3.7",
          id: "4typescript-3.7",
          permalink: "/docs/handbook/release-notes/typescript-3-7.html",
          oneline: "TypeScript 3.7 Release Notes",
        },
        {
          title: "TypeScript 3.6",
          id: "4typescript-3.6",
          permalink: "/docs/handbook/release-notes/typescript-3-6.html",
          oneline: "TypeScript 3.6 Release Notes",
        },
        {
          title: "TypeScript 3.5",
          id: "4typescript-3.5",
          permalink: "/docs/handbook/release-notes/typescript-3-5.html",
          oneline: "TypeScript 3.5 Release Notes",
        },
        {
          title: "TypeScript 3.4",
          id: "4typescript-3.4",
          permalink: "/docs/handbook/release-notes/typescript-3-4.html",
          oneline: "TypeScript 3.4 Release Notes",
        },
        {
          title: "TypeScript 3.3",
          id: "4typescript-3.3",
          permalink: "/docs/handbook/release-notes/typescript-3-3.html",
          oneline: "TypeScript 3.3 Release Notes",
        },
        {
          title: "TypeScript 3.2",
          id: "4typescript-3.2",
          permalink: "/docs/handbook/release-notes/typescript-3-2.html",
          oneline: "TypeScript 3.2 Release Notes",
        },
        {
          title: "TypeScript 3.1",
          id: "4typescript-3.1",
          permalink: "/docs/handbook/release-notes/typescript-3-1.html",
          oneline: "TypeScript 3.1 Release Notes",
        },
        {
          title: "TypeScript 3.0",
          id: "4typescript-3.0",
          permalink: "/docs/handbook/release-notes/typescript-3-0.html",
          oneline: "TypeScript 3.0 Release Notes",
        },
        {
          title: "TypeScript 2.9",
          id: "4typescript-2.9",
          permalink: "/docs/handbook/release-notes/typescript-2-9.html",
          oneline: "TypeScript 2.9 Release Notes",
        },
        {
          title: "TypeScript 2.8",
          id: "4typescript-2.8",
          permalink: "/docs/handbook/release-notes/typescript-2-8.html",
          oneline: "TypeScript 2.8 Release Notes",
        },
        {
          title: "TypeScript 2.7",
          id: "4typescript-2.7",
          permalink: "/docs/handbook/release-notes/typescript-2-7.html",
          oneline: "TypeScript 2.7 Release Notes",
        },
        {
          title: "TypeScript 2.6",
          id: "4typescript-2.6",
          permalink: "/docs/handbook/release-notes/typescript-2-6.html",
          oneline: "TypeScript 2.6 Release Notes",
        },
        {
          title: "TypeScript 2.5",
          id: "4typescript-2.5",
          permalink: "/docs/handbook/release-notes/typescript-2-5.html",
          oneline: "TypeScript 2.5 Release Notes",
        },
        {
          title: "TypeScript 2.4",
          id: "4typescript-2.4",
          permalink: "/docs/handbook/release-notes/typescript-2-4.html",
          oneline: "TypeScript 2.4 Release Notes",
        },
        {
          title: "TypeScript 2.3",
          id: "4typescript-2.3",
          permalink: "/docs/handbook/release-notes/typescript-2-3.html",
          oneline: "TypeScript 2.3 Release Notes",
        },
        {
          title: "TypeScript 2.2",
          id: "4typescript-2.2",
          permalink: "/docs/handbook/release-notes/typescript-2-2.html",
          oneline: "TypeScript 2.2 Release Notes",
        },
        {
          title: "TypeScript 2.1",
          id: "4typescript-2.1",
          permalink: "/docs/handbook/release-notes/typescript-2-1.html",
          oneline: "TypeScript 2.1 Release Notes",
        },
        {
          title: "TypeScript 2.0",
          id: "4typescript-2.0",
          permalink: "/docs/handbook/release-notes/typescript-2-0.html",
          oneline: "TypeScript 2.0 Release Notes",
        },
        {
          title: "TypeScript 1.8",
          id: "4typescript-1.8",
          permalink: "/docs/handbook/release-notes/typescript-1-8.html",
          oneline: "TypeScript 1.8 Release Notes",
        },
        {
          title: "TypeScript 1.7",
          id: "4typescript-1.7",
          permalink: "/docs/handbook/release-notes/typescript-1-7.html",
          oneline: "TypeScript 1.7 Release Notes",
        },
        {
          title: "TypeScript 1.6",
          id: "4typescript-1.6",
          permalink: "/docs/handbook/release-notes/typescript-1-6.html",
          oneline: "TypeScript 1.6 Release Notes",
        },
        {
          title: "TypeScript 1.5",
          id: "4typescript-1.5",
          permalink: "/docs/handbook/release-notes/typescript-1-5.html",
          oneline: "TypeScript 1.5 Release Notes",
        },
        {
          title: "TypeScript 1.4",
          id: "4typescript-1.4",
          permalink: "/docs/handbook/release-notes/typescript-1-4.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.3",
          id: "4typescript-1.3",
          permalink: "/docs/handbook/release-notes/typescript-1-3.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.1",
          id: "4typescript-1.1",
          permalink: "/docs/handbook/release-notes/typescript-1-1.html",
          oneline: "TypeScript 1.1 Release Notes",
        },
      ],
    },
    {
      title: "Declaration Files",
      oneline:
        "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
      id: "declaration-files",
      chronological: true,

      items: [
        {
          title: "Introduction",
          id: "5introduction",
          permalink: "/docs/handbook/declaration-files/introduction.html",
          oneline:
            "How to write a high-quality TypeScript Declaration (d.ts) file",
        },
        {
          title: "Declaration Reference",
          id: "5declaration-reference",
          permalink: "/docs/handbook/declaration-files/by-example.html",
          oneline: "How to create a d.ts file for a module",
        },
        {
          title: "Library Structures",
          id: "5library-structures",
          permalink: "/docs/handbook/declaration-files/library-structures.html",
          oneline: "How to structure your d.ts files",
        },
        {
          title: ".d.ts Templates",
          id: "5.d.ts-templates",
          oneline: "undefined",

          items: [
            {
              title: "Modules .d.ts",
              id: "5modules-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/module-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Plugin",
              id: "5module:-plugin",
              permalink:
                "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Class",
              id: "5module:-class",
              permalink:
                "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Function",
              id: "5module:-function",
              permalink:
                "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global .d.ts",
              id: "5global-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/global-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global: Modifying Module",
              id: "5global:-modifying-module",
              permalink:
                "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
              oneline: "undefined",
            },
          ],
        },
        {
          title: "Do's and Don'ts",
          id: "5do's-and-don'ts",
          permalink: "/docs/handbook/declaration-files/do-s-and-don-ts.html",
          oneline: "Recommendations for writing d.ts files",
        },
        {
          title: "Deep Dive",
          id: "5deep-dive",
          permalink: "/docs/handbook/declaration-files/deep-dive.html",
          oneline: "How do d.ts files work, a deep dive",
        },
        {
          title: "Publishing",
          id: "5publishing",
          permalink: "/docs/handbook/declaration-files/publishing.html",
          oneline: "How to get your d.ts files to users",
        },
        {
          title: "Consumption",
          id: "5consumption",
          permalink: "/docs/handbook/declaration-files/consumption.html",
          oneline: "How to download d.ts files for your project",
        },
      ],
    },
    {
      title: "JavaScript",
      oneline: "How to use TypeScript-powered JavaScript tooling.",
      id: "javascript",
      chronological: true,

      items: [
        {
          title: "JS Projects Utilizing TypeScript",
          id: "6js-projects-utilizing-typescript",
          permalink: "/docs/handbook/intro-to-js-ts.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "Type Checking JavaScript Files",
          id: "6type-checking-javascript-files",
          permalink: "/docs/handbook/type-checking-javascript-files.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "JSDoc Reference",
          id: "6jsdoc-reference",
          permalink: "/docs/handbook/jsdoc-supported-types.html",
          oneline: "What JSDoc does TypeScript-powered JavaScript support?",
        },
        {
          title: "Creating .d.ts Files from .js files",
          id: "6creating-.d.ts-files-from-.js-files",
          permalink: "/docs/handbook/declaration-files/dts-from-js.html",
          oneline: "How to add d.ts generation to JavaScript projects",
        },
      ],
    },
    {
      title: "Project Configuration",
      oneline: "Compiler configuration reference.",
      id: "project-configuration",
      chronological: false,

      items: [
        {
          title: "What is a tsconfig.json",
          id: "7what-is-a-tsconfig.json",
          permalink: "/docs/handbook/tsconfig-json.html",
          oneline: "Learn about how a TSConfig works",
        },
        {
          title: "Compiler Options in MSBuild",
          id: "7compiler-options-in-msbuild",
          permalink: "/docs/handbook/compiler-options-in-msbuild.html",
          oneline: "Which compiler options are available in MSBuild projects.",
        },
        {
          title: "TSConfig Reference",
          id: "7tsconfig-reference",
          permalink: "/tsconfig",
          oneline: "The page covering every TSConfig option",
        },
        {
          title: "tsc CLI Options",
          id: "7tsc-cli-options",
          permalink: "/docs/handbook/compiler-options.html",
          oneline:
            "A very high-level overview of the CLI compiler options for tsc",
        },
        {
          title: "Project References",
          id: "7project-references",
          permalink: "/docs/handbook/project-references.html",
          oneline: "How to split up a large TypeScript project",
        },
        {
          title: "Integrating with Build Tools",
          id: "7integrating-with-build-tools",
          permalink: "/docs/handbook/integrating-with-build-tools.html",
          oneline: "How to use TypeScript with other build tools",
        },
        {
          title: "Configuring Watch",
          id: "7configuring-watch",
          permalink: "/docs/handbook/configuring-watch.html",
          oneline: "How to configure the watch mode of TypeScript",
        },
        {
          title: "Nightly Builds",
          id: "7nightly-builds",
          permalink: "/docs/handbook/nightly-builds.html",
          oneline: "How to use a nightly build of TypeScript",
        },
      ],
    },
    {
      title: "Handbook v2: Beta",
      oneline: "The new handbook which is a work in progress.",
      id: "handbook-v2:-beta",
      chronological: true,

      items: [
        {
          title: "The Basics",
          id: "8the-basics",
          permalink: "/docs/handbook/2/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Everyday Types",
          id: "8everyday-types",
          permalink: "/docs/handbook/2/everyday-types.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Object Types",
          id: "8object-types",
          permalink: "/docs/handbook/2/objects.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Narrowing",
          id: "8narrowing",
          permalink: "/docs/handbook/2/narrowing.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "More on Functions",
          id: "8more-on-functions",
          permalink: "/docs/handbook/2/functions.html",
          oneline: "Learn about how Functions work in TypeScript.",
        },
        {
          title: "Classes",
          id: "8classes",
          permalink: "/docs/handbook/2/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Type Manipulation",
          id: "8type-manipulation",
          oneline: "undefined",

          items: [
            {
              title: "Creating Types from Types",
              id: "8creating-types-from-types",
              permalink: "/docs/handbook/2/types-from-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Keyof Type Operator",
              id: "8keyof-type-operator",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Typeof Type Operator",
              id: "8typeof-type-operator",
              permalink: "/docs/handbook/2/typeof-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Indexed Access Types",
              id: "8indexed-access-types",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Conditional Types",
              id: "8conditional-types",
              permalink: "/docs/handbook/2/conditional-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
          ],
        },
        {
          title: "Modules",
          id: "8modules",
          permalink: "/docs/handbook/2/modules.html",
          oneline: "Learn how TypeScript handles different module styles.",
        },
        {
          title: "Type Declarations",
          id: "8type-declarations",
          permalink: "/docs/handbook/2/type-declarations.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Understanding Errors",
          id: "8understanding-errors",
          permalink: "/docs/handbook/2/understanding-errors.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
      ],
    },
  ];
  navigations.pt = [
    {
      title: "Get Started",
      oneline: "Quick introductions based on your background or preference.",
      id: "get-started",
      chronological: false,

      items: [
        {
          title: "TS for the New Programmer",
          id: "0typescript-for-the-new-programmer",
          permalink: "/docs/handbook/typescript-from-scratch.html",
          oneline: "Learn TypeScript from scratch",
        },
        {
          title: "TypeScript for JS Programmers",
          id: "0typescript-for-javascript-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes.html",
          oneline: "Learn how TypeScript extends JavaScript",
        },
        {
          title: "TS for Java/C# Programmers",
          id: "0typescript-for-java/c#-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-oop.html",
          oneline:
            "Learn TypeScript if you have a background in object-oriented languages",
        },
        {
          title: "TS for Functional Programmers",
          id: "0typescript-for-functional-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-func.html",
          oneline:
            "Learn TypeScript if you have a background in functional programming",
        },
        {
          title: "Ferramentas TypeScript em 5 minutos",
          id: "0ferramentas-typescript-em-5-minutos",
          permalink: "/pt/docs/handbook/typescript-tooling-in-5-minutes.html",
          oneline:
            "Um tutorial para entender como criar um pequeno site com TypeScript",
        },
      ],
    },
    {
      title: "Handbook",
      oneline: "A good first read for your daily TS work.",
      id: "handbook",
      chronological: true,

      items: [
        {
          title: "The TypeScript Handbook",
          id: "1the-typescript-handbook",
          permalink: "/docs/handbook/intro.html",
          oneline: "Your first step to learn TypeScript",
        },
        {
          title: "Basic Types",
          id: "1basic-types",
          permalink: "/docs/handbook/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Interfaces",
          id: "1interfaces",
          permalink: "/docs/handbook/interfaces.html",
          oneline: "How to write an interface with TypeScript",
        },
        {
          title: "Functions",
          id: "1functions",
          permalink: "/docs/handbook/functions.html",
          oneline: "How to add types to a function",
        },
        {
          title: "Literal Types",
          id: "1literal-types",
          permalink: "/docs/handbook/literal-types.html",
          oneline: "Using literal types with TypeScript",
        },
        {
          title: "Unions and Intersection Types",
          id: "1unions-and-intersection-types",
          permalink: "/docs/handbook/unions-and-intersections.html",
          oneline: "How to use unions and intersection types in TypeScript",
        },
        {
          title: "Classes",
          id: "1classes",
          permalink: "/docs/handbook/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Enums",
          id: "1enums",
          permalink: "/docs/handbook/enums.html",
          oneline: "How TypeScript enums work",
        },
        {
          title: "Generics",
          id: "1generics",
          permalink: "/docs/handbook/generics.html",
          oneline: "Introduction to TypeScript and Generics",
        },
      ],
    },
    {
      title: "Handbook Reference",
      oneline: "Deep dive reference materials.",
      id: "handbook-reference",
      chronological: false,

      items: [
        {
          title: "Advanced Types",
          id: "2advanced-types",
          permalink: "/docs/handbook/advanced-types.html",
          oneline: "Advanced concepts around types in TypeScript",
        },
        {
          title: "Utility Types",
          id: "2utility-types",
          permalink: "/docs/handbook/utility-types.html",
          oneline: "Types which are globally included in TypeScript",
        },
        {
          title: "Decoradores",
          id: "2decoradores",
          permalink: "/pt/docs/handbook/Decorators.html",
          oneline: "Visão geral dos Decoradores no TypeScript",
        },
        {
          title: "Declaration Merging",
          id: "2declaration-merging",
          permalink: "/docs/handbook/declaration-merging.html",
          oneline: "How merging namespaces and interfaces works",
        },
        {
          title: "Iterators and Generators",
          id: "2iterators-and-generators",
          permalink: "/docs/handbook/iterators-and-generators.html",
          oneline: "How Iterators and Generators work in TypeScript",
        },
        {
          title: "JSX",
          id: "2jsx",
          permalink: "/docs/handbook/jsx.html",
          oneline: "Using JSX with TypeScript",
        },
        {
          title: "Mixins",
          id: "2mixins",
          permalink: "/docs/handbook/mixins.html",
          oneline: "Using the mixin pattern with TypeScript",
        },
        {
          title: "Modules",
          id: "2modules",
          permalink: "/pt/docs/handbook/modules.html",
          oneline: "Como módulos funcionam no TypeScript",
        },
        {
          title: "Resolução de módulos",
          id: "2resolução-de-módulos",
          permalink: "/pt/docs/handbook/module-resolution.html",
          oneline: "Como o TypeScript resolve módulos em JavaScript",
        },
        {
          title: "Namespaces",
          id: "2namespaces",
          permalink: "/pt/docs/handbook/namespaces.html",
          oneline: "Como funcionam os Namespaces no TypeScript",
        },
        {
          title: "Namespaces e Módulos",
          id: "2namespaces-e-módulos",
          permalink: "/pt/docs/handbook/namespaces-and-modules.html",
          oneline:
            "Como organizar o código em TypeScript através de módulos ou namespaces",
        },
        {
          title: "Símbolos (Symbols)",
          id: "2símbolos-(symbols)",
          permalink: "/pt/docs/handbook/symbols.html",
          oneline: "Usando o símbolo primitivo do JavaScript no TypeScript",
        },
        {
          title: "Diretivas de barra tripla",
          id: "2diretivas-de-barra-tripla",
          permalink: "/pt/docs/handbook/triple-slash-directives.html",
          oneline: "Como usar diretivas de barra tripla no TypeScript",
        },
        {
          title: "Compatibilidade de Tipos",
          id: "2compatibilidade-de-tipos",
          permalink: "/pt/docs/handbook/type-compatibility.html",
          oneline: "Como checagem de tipos funciona em TypeScript",
        },
        {
          title: "Inferência de Tipo",
          id: "2inferência-de-tipo",
          permalink: "/pt/docs/handbook/type-inference.html",
          oneline: "Como a analise do fluxo de código funciona em TypeScript",
        },
        {
          title: "Variable Declaration",
          id: "2variable-declaration",
          permalink: "/docs/handbook/variable-declarations.html",
          oneline: "How TypeScript handles variable declaration",
        },
      ],
    },
    {
      title: "Tutorials",
      oneline: "Using TypeScript in several environments.",
      id: "tutorials",
      chronological: false,

      items: [
        {
          title: "ASP.NET Core",
          id: "3asp.net-core",
          permalink: "/docs/handbook/asp-net-core.html",
          oneline: "Using TypeScript in ASP.NET Core",
        },
        {
          title: "Gulp",
          id: "3gulp",
          permalink: "/docs/handbook/gulp.html",
          oneline: "Using TypeScript with Gulp",
        },
        {
          title: "DOM Manipulation",
          id: "3dom-manipulation",
          permalink: "/docs/handbook/dom-manipulation.html",
          oneline: "Using the DOM with TypeScript",
        },
        {
          title: "Migrating from JavaScript",
          id: "3migrating-from-javascript",
          permalink: "/docs/handbook/migrating-from-javascript.html",
          oneline: "How to migrate from JavaScript to TypeScript",
        },
        {
          title: "Usando Babel com TypeScript",
          id: "3usando-babel-com-typescript",
          permalink: "/pt/docs/handbook/babel-with-typescript.html",
          oneline: "Como criar um projeto híbrido com Babel + TypeScript",
        },
      ],
    },
    {
      title: "What's New",
      oneline:
        "Find out how TypeScript has evolved and what's new in the releases.",
      id: "what's-new",
      chronological: false,

      items: [
        {
          title: "Overview",
          id: "4overview",
          permalink: "/docs/handbook/release-notes/overview.html",
          oneline: "All TypeScript release notes",
        },
        {
          title: "TypeScript 4.0",
          id: "4typescript-4.0",
          permalink: "/docs/handbook/release-notes/typescript-4-0.html",
          oneline: "TypeScript 4.0 Release Notes",
        },
        {
          title: "TypeScript 3.9",
          id: "4typescript-3.9",
          permalink: "/docs/handbook/release-notes/typescript-3-9.html",
          oneline: "TypeScript 3.9 Release Notes",
        },
        {
          title: "TypeScript 3.8",
          id: "4typescript-3.8",
          permalink: "/docs/handbook/release-notes/typescript-3-8.html",
          oneline: "TypeScript 3.8 Release Notes",
        },
        {
          title: "TypeScript 3.7",
          id: "4typescript-3.7",
          permalink: "/docs/handbook/release-notes/typescript-3-7.html",
          oneline: "TypeScript 3.7 Release Notes",
        },
        {
          title: "TypeScript 3.6",
          id: "4typescript-3.6",
          permalink: "/docs/handbook/release-notes/typescript-3-6.html",
          oneline: "TypeScript 3.6 Release Notes",
        },
        {
          title: "TypeScript 3.5",
          id: "4typescript-3.5",
          permalink: "/docs/handbook/release-notes/typescript-3-5.html",
          oneline: "TypeScript 3.5 Release Notes",
        },
        {
          title: "TypeScript 3.4",
          id: "4typescript-3.4",
          permalink: "/docs/handbook/release-notes/typescript-3-4.html",
          oneline: "TypeScript 3.4 Release Notes",
        },
        {
          title: "TypeScript 3.3",
          id: "4typescript-3.3",
          permalink: "/docs/handbook/release-notes/typescript-3-3.html",
          oneline: "TypeScript 3.3 Release Notes",
        },
        {
          title: "TypeScript 3.2",
          id: "4typescript-3.2",
          permalink: "/docs/handbook/release-notes/typescript-3-2.html",
          oneline: "TypeScript 3.2 Release Notes",
        },
        {
          title: "TypeScript 3.1",
          id: "4typescript-3.1",
          permalink: "/docs/handbook/release-notes/typescript-3-1.html",
          oneline: "TypeScript 3.1 Release Notes",
        },
        {
          title: "TypeScript 3.0",
          id: "4typescript-3.0",
          permalink: "/docs/handbook/release-notes/typescript-3-0.html",
          oneline: "TypeScript 3.0 Release Notes",
        },
        {
          title: "TypeScript 2.9",
          id: "4typescript-2.9",
          permalink: "/docs/handbook/release-notes/typescript-2-9.html",
          oneline: "TypeScript 2.9 Release Notes",
        },
        {
          title: "TypeScript 2.8",
          id: "4typescript-2.8",
          permalink: "/docs/handbook/release-notes/typescript-2-8.html",
          oneline: "TypeScript 2.8 Release Notes",
        },
        {
          title: "TypeScript 2.7",
          id: "4typescript-2.7",
          permalink: "/docs/handbook/release-notes/typescript-2-7.html",
          oneline: "TypeScript 2.7 Release Notes",
        },
        {
          title: "TypeScript 2.6",
          id: "4typescript-2.6",
          permalink: "/docs/handbook/release-notes/typescript-2-6.html",
          oneline: "TypeScript 2.6 Release Notes",
        },
        {
          title: "TypeScript 2.5",
          id: "4typescript-2.5",
          permalink: "/docs/handbook/release-notes/typescript-2-5.html",
          oneline: "TypeScript 2.5 Release Notes",
        },
        {
          title: "TypeScript 2.4",
          id: "4typescript-2.4",
          permalink: "/docs/handbook/release-notes/typescript-2-4.html",
          oneline: "TypeScript 2.4 Release Notes",
        },
        {
          title: "TypeScript 2.3",
          id: "4typescript-2.3",
          permalink: "/docs/handbook/release-notes/typescript-2-3.html",
          oneline: "TypeScript 2.3 Release Notes",
        },
        {
          title: "TypeScript 2.2",
          id: "4typescript-2.2",
          permalink: "/docs/handbook/release-notes/typescript-2-2.html",
          oneline: "TypeScript 2.2 Release Notes",
        },
        {
          title: "TypeScript 2.1",
          id: "4typescript-2.1",
          permalink: "/docs/handbook/release-notes/typescript-2-1.html",
          oneline: "TypeScript 2.1 Release Notes",
        },
        {
          title: "TypeScript 2.0",
          id: "4typescript-2.0",
          permalink: "/docs/handbook/release-notes/typescript-2-0.html",
          oneline: "TypeScript 2.0 Release Notes",
        },
        {
          title: "TypeScript 1.8",
          id: "4typescript-1.8",
          permalink: "/docs/handbook/release-notes/typescript-1-8.html",
          oneline: "TypeScript 1.8 Release Notes",
        },
        {
          title: "TypeScript 1.7",
          id: "4typescript-1.7",
          permalink: "/docs/handbook/release-notes/typescript-1-7.html",
          oneline: "TypeScript 1.7 Release Notes",
        },
        {
          title: "TypeScript 1.6",
          id: "4typescript-1.6",
          permalink: "/docs/handbook/release-notes/typescript-1-6.html",
          oneline: "TypeScript 1.6 Release Notes",
        },
        {
          title: "TypeScript 1.5",
          id: "4typescript-1.5",
          permalink: "/docs/handbook/release-notes/typescript-1-5.html",
          oneline: "TypeScript 1.5 Release Notes",
        },
        {
          title: "TypeScript 1.4",
          id: "4typescript-1.4",
          permalink: "/docs/handbook/release-notes/typescript-1-4.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.3",
          id: "4typescript-1.3",
          permalink: "/docs/handbook/release-notes/typescript-1-3.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.1",
          id: "4typescript-1.1",
          permalink: "/docs/handbook/release-notes/typescript-1-1.html",
          oneline: "TypeScript 1.1 Release Notes",
        },
      ],
    },
    {
      title: "Declaration Files",
      oneline:
        "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
      id: "declaration-files",
      chronological: true,

      items: [
        {
          title: "Introduction",
          id: "5introduction",
          permalink: "/docs/handbook/declaration-files/introduction.html",
          oneline:
            "How to write a high-quality TypeScript Declaration (d.ts) file",
        },
        {
          title: "Declaration Reference",
          id: "5declaration-reference",
          permalink: "/docs/handbook/declaration-files/by-example.html",
          oneline: "How to create a d.ts file for a module",
        },
        {
          title: "Library Structures",
          id: "5library-structures",
          permalink: "/docs/handbook/declaration-files/library-structures.html",
          oneline: "How to structure your d.ts files",
        },
        {
          title: ".d.ts Templates",
          id: "5.d.ts-templates",
          oneline: "undefined",

          items: [
            {
              title: "Modules .d.ts",
              id: "5modules-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/module-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Plugin",
              id: "5module:-plugin",
              permalink:
                "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Class",
              id: "5module:-class",
              permalink:
                "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Function",
              id: "5module:-function",
              permalink:
                "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global .d.ts",
              id: "5global-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/global-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global: Modifying Module",
              id: "5global:-modifying-module",
              permalink:
                "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
              oneline: "undefined",
            },
          ],
        },
        {
          title: "Do's and Don'ts",
          id: "5do's-and-don'ts",
          permalink: "/docs/handbook/declaration-files/do-s-and-don-ts.html",
          oneline: "Recommendations for writing d.ts files",
        },
        {
          title: "Deep Dive",
          id: "5deep-dive",
          permalink: "/docs/handbook/declaration-files/deep-dive.html",
          oneline: "How do d.ts files work, a deep dive",
        },
        {
          title: "Publishing",
          id: "5publishing",
          permalink: "/docs/handbook/declaration-files/publishing.html",
          oneline: "How to get your d.ts files to users",
        },
        {
          title: "Consumption",
          id: "5consumption",
          permalink: "/docs/handbook/declaration-files/consumption.html",
          oneline: "How to download d.ts files for your project",
        },
      ],
    },
    {
      title: "JavaScript",
      oneline: "How to use TypeScript-powered JavaScript tooling.",
      id: "javascript",
      chronological: true,

      items: [
        {
          title: "Projetos JS utilizando TypeScript",
          id: "6projetos-js-utilizando-typescript",
          permalink: "/pt/docs/handbook/intro-to-js-ts.html",
          oneline:
            "Como adicionar verificação de tipo a arquivos JavaScript usando TypeScript",
        },
        {
          title: "Type Checking JavaScript Files",
          id: "6type-checking-javascript-files",
          permalink: "/docs/handbook/type-checking-javascript-files.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "JSDoc Reference",
          id: "6jsdoc-reference",
          permalink: "/docs/handbook/jsdoc-supported-types.html",
          oneline: "What JSDoc does TypeScript-powered JavaScript support?",
        },
        {
          title: "Creating .d.ts Files from .js files",
          id: "6creating-.d.ts-files-from-.js-files",
          permalink: "/docs/handbook/declaration-files/dts-from-js.html",
          oneline: "How to add d.ts generation to JavaScript projects",
        },
      ],
    },
    {
      title: "Project Configuration",
      oneline: "Compiler configuration reference.",
      id: "project-configuration",
      chronological: false,

      items: [
        {
          title: "tsconfig.json",
          id: "7tsconfig.json",
          permalink: "/pt/docs/handbook/tsconfig-json.html",
          oneline: "Aprenda sobre como o TSConfig funciona",
        },
        {
          title: "Compiler Options in MSBuild",
          id: "7compiler-options-in-msbuild",
          permalink: "/docs/handbook/compiler-options-in-msbuild.html",
          oneline: "Which compiler options are available in MSBuild projects.",
        },
        {
          title: "TSConfig Reference",
          id: "7tsconfig-reference",
          permalink: "/tsconfig",
          oneline: "The page covering every TSConfig option",
        },
        {
          title: "tsc CLI Options",
          id: "7tsc-cli-options",
          permalink: "/docs/handbook/compiler-options.html",
          oneline:
            "A very high-level overview of the CLI compiler options for tsc",
        },
        {
          title: "Project References",
          id: "7project-references",
          permalink: "/docs/handbook/project-references.html",
          oneline: "How to split up a large TypeScript project",
        },
        {
          title: "Integrating with Build Tools",
          id: "7integrating-with-build-tools",
          permalink: "/docs/handbook/integrating-with-build-tools.html",
          oneline: "How to use TypeScript with other build tools",
        },
        {
          title: "Configuring Watch",
          id: "7configuring-watch",
          permalink: "/docs/handbook/configuring-watch.html",
          oneline: "How to configure the watch mode of TypeScript",
        },
        {
          title: "Compilação Noturna",
          id: "7compilação-noturna",
          permalink: "/pt/docs/handbook/nightly-builds.html",
          oneline: "Como usar uma compilação noturna de TypeScript",
        },
      ],
    },
    {
      title: "Handbook v2: Beta",
      oneline: "The new handbook which is a work in progress.",
      id: "handbook-v2:-beta",
      chronological: true,

      items: [
        {
          title: "The Basics",
          id: "8the-basics",
          permalink: "/docs/handbook/2/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Everyday Types",
          id: "8everyday-types",
          permalink: "/docs/handbook/2/everyday-types.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Object Types",
          id: "8object-types",
          permalink: "/docs/handbook/2/objects.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Narrowing",
          id: "8narrowing",
          permalink: "/docs/handbook/2/narrowing.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "More on Functions",
          id: "8more-on-functions",
          permalink: "/docs/handbook/2/functions.html",
          oneline: "Learn about how Functions work in TypeScript.",
        },
        {
          title: "Classes",
          id: "8classes",
          permalink: "/docs/handbook/2/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Type Manipulation",
          id: "8type-manipulation",
          oneline: "undefined",

          items: [
            {
              title: "Creating Types from Types",
              id: "8creating-types-from-types",
              permalink: "/docs/handbook/2/types-from-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Keyof Type Operator",
              id: "8keyof-type-operator",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Typeof Type Operator",
              id: "8typeof-type-operator",
              permalink: "/docs/handbook/2/typeof-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Indexed Access Types",
              id: "8indexed-access-types",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Conditional Types",
              id: "8conditional-types",
              permalink: "/docs/handbook/2/conditional-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
          ],
        },
        {
          title: "Modules",
          id: "8modules",
          permalink: "/docs/handbook/2/modules.html",
          oneline: "Learn how TypeScript handles different module styles.",
        },
        {
          title: "Type Declarations",
          id: "8type-declarations",
          permalink: "/docs/handbook/2/type-declarations.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Understanding Errors",
          id: "8understanding-errors",
          permalink: "/docs/handbook/2/understanding-errors.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
      ],
    },
  ];
  navigations.vo = [
    {
      title: "Get Started",
      oneline: "Quick introductions based on your background or preference.",
      id: "get-started",
      chronological: false,

      items: [
        {
          title: "TS for the New Programmer",
          id: "0typescript-for-the-new-programmer",
          permalink: "/docs/handbook/typescript-from-scratch.html",
          oneline: "Learn TypeScript from scratch",
        },
        {
          title: "TypeScript for JS Programmers",
          id: "0typescript-for-javascript-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes.html",
          oneline: "Learn how TypeScript extends JavaScript",
        },
        {
          title: "TS for Java/C# Programmers",
          id: "0typescript-for-java/c#-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-oop.html",
          oneline:
            "Learn TypeScript if you have a background in object-oriented languages",
        },
        {
          title: "TS for Functional Programmers",
          id: "0typescript-for-functional-programmers",
          permalink: "/docs/handbook/typescript-in-5-minutes-func.html",
          oneline:
            "Learn TypeScript if you have a background in functional programming",
        },
        {
          title: "TypeScript Tooling in 5 minutes",
          id: "0typescript-tooling-in-5-minutes",
          permalink: "/docs/handbook/typescript-tooling-in-5-minutes.html",
          oneline:
            "A tutorial to understand how to create a small website with TypeScript",
        },
      ],
    },
    {
      title: "Handbook",
      oneline: "A good first read for your daily TS work.",
      id: "handbook",
      chronological: true,

      items: [
        {
          title: "The TypeScript Handbook",
          id: "1the-typescript-handbook",
          permalink: "/docs/handbook/intro.html",
          oneline: "Your first step to learn TypeScript",
        },
        {
          title: "B4s1c Typ3s",
          id: "1b4s1c-typ3s",
          permalink: "/vo/docs/handbook/basic-types.html",
          oneline: "5tep on3 in learning 7ype5cript: The basics types.",
        },
        {
          title: "Interfaces",
          id: "1interfaces",
          permalink: "/docs/handbook/interfaces.html",
          oneline: "How to write an interface with TypeScript",
        },
        {
          title: "Functions",
          id: "1functions",
          permalink: "/docs/handbook/functions.html",
          oneline: "How to add types to a function",
        },
        {
          title: "Literal Types",
          id: "1literal-types",
          permalink: "/docs/handbook/literal-types.html",
          oneline: "Using literal types with TypeScript",
        },
        {
          title: "Unions and Intersection Types",
          id: "1unions-and-intersection-types",
          permalink: "/docs/handbook/unions-and-intersections.html",
          oneline: "How to use unions and intersection types in TypeScript",
        },
        {
          title: "Classes",
          id: "1classes",
          permalink: "/docs/handbook/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Enums",
          id: "1enums",
          permalink: "/docs/handbook/enums.html",
          oneline: "How TypeScript enums work",
        },
        {
          title: "Generics",
          id: "1generics",
          permalink: "/docs/handbook/generics.html",
          oneline: "Introduction to TypeScript and Generics",
        },
      ],
    },
    {
      title: "Handbook Reference",
      oneline: "Deep dive reference materials.",
      id: "handbook-reference",
      chronological: false,

      items: [
        {
          title: "Advanced Types",
          id: "2advanced-types",
          permalink: "/docs/handbook/advanced-types.html",
          oneline: "Advanced concepts around types in TypeScript",
        },
        {
          title: "Utility Types",
          id: "2utility-types",
          permalink: "/docs/handbook/utility-types.html",
          oneline: "Types which are globally included in TypeScript",
        },
        {
          title: "Decorators",
          id: "2decorators",
          permalink: "/docs/handbook/decorators.html",
          oneline: "TypeScript Decorators overview",
        },
        {
          title: "Declaration Merging",
          id: "2declaration-merging",
          permalink: "/docs/handbook/declaration-merging.html",
          oneline: "How merging namespaces and interfaces works",
        },
        {
          title: "Iterators and Generators",
          id: "2iterators-and-generators",
          permalink: "/docs/handbook/iterators-and-generators.html",
          oneline: "How Iterators and Generators work in TypeScript",
        },
        {
          title: "JSX",
          id: "2jsx",
          permalink: "/docs/handbook/jsx.html",
          oneline: "Using JSX with TypeScript",
        },
        {
          title: "Mixins",
          id: "2mixins",
          permalink: "/docs/handbook/mixins.html",
          oneline: "Using the mixin pattern with TypeScript",
        },
        {
          title: "Modules",
          id: "2modules",
          permalink: "/docs/handbook/modules.html",
          oneline: "How modules work in TypeScript",
        },
        {
          title: "Module Resolution",
          id: "2module-resolution",
          permalink: "/docs/handbook/module-resolution.html",
          oneline: "How TypeScript resolves modules in JavaScript",
        },
        {
          title: "Namespaces",
          id: "2namespaces",
          permalink: "/docs/handbook/namespaces.html",
          oneline: "How TypeScript namespaces work",
        },
        {
          title: "Namespaces and Modules",
          id: "2namespaces-and-modules",
          permalink: "/docs/handbook/namespaces-and-modules.html",
          oneline:
            "How to organize code in TypeScript via modules or namespaces",
        },
        {
          title: "Symbols",
          id: "2symbols",
          permalink: "/docs/handbook/symbols.html",
          oneline: "Using the JavaScript Symbol primitive in TypeScript",
        },
        {
          title: "Triple-Slash Directives",
          id: "2triple-slash-directives",
          permalink: "/docs/handbook/triple-slash-directives.html",
          oneline: "How to use triple slash directives in TypeScript",
        },
        {
          title: "Type Compatibility",
          id: "2type-compatibility",
          permalink: "/docs/handbook/type-compatibility.html",
          oneline: "How type-checking works in TypeScript",
        },
        {
          title: "Type Inference",
          id: "2type-inference",
          permalink: "/docs/handbook/type-inference.html",
          oneline: "How code flow analysis works in TypeScript",
        },
        {
          title: "Variable Declaration",
          id: "2variable-declaration",
          permalink: "/docs/handbook/variable-declarations.html",
          oneline: "How TypeScript handles variable declaration",
        },
      ],
    },
    {
      title: "Tutorials",
      oneline: "Using TypeScript in several environments.",
      id: "tutorials",
      chronological: false,

      items: [
        {
          title: "ASP.NET Core",
          id: "3asp.net-core",
          permalink: "/docs/handbook/asp-net-core.html",
          oneline: "Using TypeScript in ASP.NET Core",
        },
        {
          title: "Gulp",
          id: "3gulp",
          permalink: "/docs/handbook/gulp.html",
          oneline: "Using TypeScript with Gulp",
        },
        {
          title: "DOM Manipulation",
          id: "3dom-manipulation",
          permalink: "/docs/handbook/dom-manipulation.html",
          oneline: "Using the DOM with TypeScript",
        },
        {
          title: "Migrating from JavaScript",
          id: "3migrating-from-javascript",
          permalink: "/docs/handbook/migrating-from-javascript.html",
          oneline: "How to migrate from JavaScript to TypeScript",
        },
        {
          title: "Using Babel with TypeScript",
          id: "3using-babel-with-typescript",
          permalink: "/docs/handbook/babel-with-typescript.html",
          oneline: "How to create a hybrid Babel + TypeScript project",
        },
      ],
    },
    {
      title: "What's New",
      oneline:
        "Find out how TypeScript has evolved and what's new in the releases.",
      id: "what's-new",
      chronological: false,

      items: [
        {
          title: "Overview",
          id: "4overview",
          permalink: "/docs/handbook/release-notes/overview.html",
          oneline: "All TypeScript release notes",
        },
        {
          title: "TypeScript 4.0",
          id: "4typescript-4.0",
          permalink: "/docs/handbook/release-notes/typescript-4-0.html",
          oneline: "TypeScript 4.0 Release Notes",
        },
        {
          title: "TypeScript 3.9",
          id: "4typescript-3.9",
          permalink: "/docs/handbook/release-notes/typescript-3-9.html",
          oneline: "TypeScript 3.9 Release Notes",
        },
        {
          title: "TypeScript 3.8",
          id: "4typescript-3.8",
          permalink: "/docs/handbook/release-notes/typescript-3-8.html",
          oneline: "TypeScript 3.8 Release Notes",
        },
        {
          title: "TypeScript 3.7",
          id: "4typescript-3.7",
          permalink: "/docs/handbook/release-notes/typescript-3-7.html",
          oneline: "TypeScript 3.7 Release Notes",
        },
        {
          title: "TypeScript 3.6",
          id: "4typescript-3.6",
          permalink: "/docs/handbook/release-notes/typescript-3-6.html",
          oneline: "TypeScript 3.6 Release Notes",
        },
        {
          title: "TypeScript 3.5",
          id: "4typescript-3.5",
          permalink: "/docs/handbook/release-notes/typescript-3-5.html",
          oneline: "TypeScript 3.5 Release Notes",
        },
        {
          title: "TypeScript 3.4",
          id: "4typescript-3.4",
          permalink: "/docs/handbook/release-notes/typescript-3-4.html",
          oneline: "TypeScript 3.4 Release Notes",
        },
        {
          title: "TypeScript 3.3",
          id: "4typescript-3.3",
          permalink: "/docs/handbook/release-notes/typescript-3-3.html",
          oneline: "TypeScript 3.3 Release Notes",
        },
        {
          title: "TypeScript 3.2",
          id: "4typescript-3.2",
          permalink: "/docs/handbook/release-notes/typescript-3-2.html",
          oneline: "TypeScript 3.2 Release Notes",
        },
        {
          title: "TypeScript 3.1",
          id: "4typescript-3.1",
          permalink: "/docs/handbook/release-notes/typescript-3-1.html",
          oneline: "TypeScript 3.1 Release Notes",
        },
        {
          title: "TypeScript 3.0",
          id: "4typescript-3.0",
          permalink: "/docs/handbook/release-notes/typescript-3-0.html",
          oneline: "TypeScript 3.0 Release Notes",
        },
        {
          title: "TypeScript 2.9",
          id: "4typescript-2.9",
          permalink: "/docs/handbook/release-notes/typescript-2-9.html",
          oneline: "TypeScript 2.9 Release Notes",
        },
        {
          title: "TypeScript 2.8",
          id: "4typescript-2.8",
          permalink: "/docs/handbook/release-notes/typescript-2-8.html",
          oneline: "TypeScript 2.8 Release Notes",
        },
        {
          title: "TypeScript 2.7",
          id: "4typescript-2.7",
          permalink: "/docs/handbook/release-notes/typescript-2-7.html",
          oneline: "TypeScript 2.7 Release Notes",
        },
        {
          title: "TypeScript 2.6",
          id: "4typescript-2.6",
          permalink: "/docs/handbook/release-notes/typescript-2-6.html",
          oneline: "TypeScript 2.6 Release Notes",
        },
        {
          title: "TypeScript 2.5",
          id: "4typescript-2.5",
          permalink: "/docs/handbook/release-notes/typescript-2-5.html",
          oneline: "TypeScript 2.5 Release Notes",
        },
        {
          title: "TypeScript 2.4",
          id: "4typescript-2.4",
          permalink: "/docs/handbook/release-notes/typescript-2-4.html",
          oneline: "TypeScript 2.4 Release Notes",
        },
        {
          title: "TypeScript 2.3",
          id: "4typescript-2.3",
          permalink: "/docs/handbook/release-notes/typescript-2-3.html",
          oneline: "TypeScript 2.3 Release Notes",
        },
        {
          title: "TypeScript 2.2",
          id: "4typescript-2.2",
          permalink: "/docs/handbook/release-notes/typescript-2-2.html",
          oneline: "TypeScript 2.2 Release Notes",
        },
        {
          title: "TypeScript 2.1",
          id: "4typescript-2.1",
          permalink: "/docs/handbook/release-notes/typescript-2-1.html",
          oneline: "TypeScript 2.1 Release Notes",
        },
        {
          title: "TypeScript 2.0",
          id: "4typescript-2.0",
          permalink: "/docs/handbook/release-notes/typescript-2-0.html",
          oneline: "TypeScript 2.0 Release Notes",
        },
        {
          title: "TypeScript 1.8",
          id: "4typescript-1.8",
          permalink: "/docs/handbook/release-notes/typescript-1-8.html",
          oneline: "TypeScript 1.8 Release Notes",
        },
        {
          title: "TypeScript 1.7",
          id: "4typescript-1.7",
          permalink: "/docs/handbook/release-notes/typescript-1-7.html",
          oneline: "TypeScript 1.7 Release Notes",
        },
        {
          title: "TypeScript 1.6",
          id: "4typescript-1.6",
          permalink: "/docs/handbook/release-notes/typescript-1-6.html",
          oneline: "TypeScript 1.6 Release Notes",
        },
        {
          title: "TypeScript 1.5",
          id: "4typescript-1.5",
          permalink: "/docs/handbook/release-notes/typescript-1-5.html",
          oneline: "TypeScript 1.5 Release Notes",
        },
        {
          title: "TypeScript 1.4",
          id: "4typescript-1.4",
          permalink: "/docs/handbook/release-notes/typescript-1-4.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.3",
          id: "4typescript-1.3",
          permalink: "/docs/handbook/release-notes/typescript-1-3.html",
          oneline: "TypeScript 1.3 Release Notes",
        },
        {
          title: "TypeScript 1.1",
          id: "4typescript-1.1",
          permalink: "/docs/handbook/release-notes/typescript-1-1.html",
          oneline: "TypeScript 1.1 Release Notes",
        },
      ],
    },
    {
      title: "Declaration Files",
      oneline:
        "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
      id: "declaration-files",
      chronological: true,

      items: [
        {
          title: "Introduction",
          id: "5introduction",
          permalink: "/docs/handbook/declaration-files/introduction.html",
          oneline:
            "How to write a high-quality TypeScript Declaration (d.ts) file",
        },
        {
          title: "Declaration Reference",
          id: "5declaration-reference",
          permalink: "/docs/handbook/declaration-files/by-example.html",
          oneline: "How to create a d.ts file for a module",
        },
        {
          title: "Library Structures",
          id: "5library-structures",
          permalink: "/docs/handbook/declaration-files/library-structures.html",
          oneline: "How to structure your d.ts files",
        },
        {
          title: ".d.ts Templates",
          id: "5.d.ts-templates",
          oneline: "undefined",

          items: [
            {
              title: "Modules .d.ts",
              id: "5modules-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/module-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Plugin",
              id: "5module:-plugin",
              permalink:
                "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Class",
              id: "5module:-class",
              permalink:
                "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Module: Function",
              id: "5module:-function",
              permalink:
                "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global .d.ts",
              id: "5global-.d.ts",
              permalink:
                "/docs/handbook/declaration-files/templates/global-d-ts.html",
              oneline: "undefined",
            },
            {
              title: "Global: Modifying Module",
              id: "5global:-modifying-module",
              permalink:
                "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
              oneline: "undefined",
            },
          ],
        },
        {
          title: "Do's and Don'ts",
          id: "5do's-and-don'ts",
          permalink: "/docs/handbook/declaration-files/do-s-and-don-ts.html",
          oneline: "Recommendations for writing d.ts files",
        },
        {
          title: "Deep Dive",
          id: "5deep-dive",
          permalink: "/docs/handbook/declaration-files/deep-dive.html",
          oneline: "How do d.ts files work, a deep dive",
        },
        {
          title: "Publishing",
          id: "5publishing",
          permalink: "/docs/handbook/declaration-files/publishing.html",
          oneline: "How to get your d.ts files to users",
        },
        {
          title: "Consumption",
          id: "5consumption",
          permalink: "/docs/handbook/declaration-files/consumption.html",
          oneline: "How to download d.ts files for your project",
        },
      ],
    },
    {
      title: "JavaScript",
      oneline: "How to use TypeScript-powered JavaScript tooling.",
      id: "javascript",
      chronological: true,

      items: [
        {
          title: "JS Projects Utilizing TypeScript",
          id: "6js-projects-utilizing-typescript",
          permalink: "/docs/handbook/intro-to-js-ts.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "Type Checking JavaScript Files",
          id: "6type-checking-javascript-files",
          permalink: "/docs/handbook/type-checking-javascript-files.html",
          oneline:
            "How to add type checking to JavaScript files using TypeScript",
        },
        {
          title: "JSDoc Reference",
          id: "6jsdoc-reference",
          permalink: "/docs/handbook/jsdoc-supported-types.html",
          oneline: "What JSDoc does TypeScript-powered JavaScript support?",
        },
        {
          title: "Creating .d.ts Files from .js files",
          id: "6creating-.d.ts-files-from-.js-files",
          permalink: "/docs/handbook/declaration-files/dts-from-js.html",
          oneline: "How to add d.ts generation to JavaScript projects",
        },
      ],
    },
    {
      title: "Project Configuration",
      oneline: "Compiler configuration reference.",
      id: "project-configuration",
      chronological: false,

      items: [
        {
          title: "What is a tsconfig.json",
          id: "7what-is-a-tsconfig.json",
          permalink: "/docs/handbook/tsconfig-json.html",
          oneline: "Learn about how a TSConfig works",
        },
        {
          title: "Compiler Options in MSBuild",
          id: "7compiler-options-in-msbuild",
          permalink: "/docs/handbook/compiler-options-in-msbuild.html",
          oneline: "Which compiler options are available in MSBuild projects.",
        },
        {
          title: "TSConfig Reference",
          id: "7tsconfig-reference",
          permalink: "/tsconfig",
          oneline: "The page covering every TSConfig option",
        },
        {
          title: "tsc CLI Options",
          id: "7tsc-cli-options",
          permalink: "/docs/handbook/compiler-options.html",
          oneline:
            "A very high-level overview of the CLI compiler options for tsc",
        },
        {
          title: "Project References",
          id: "7project-references",
          permalink: "/docs/handbook/project-references.html",
          oneline: "How to split up a large TypeScript project",
        },
        {
          title: "Integrating with Build Tools",
          id: "7integrating-with-build-tools",
          permalink: "/docs/handbook/integrating-with-build-tools.html",
          oneline: "How to use TypeScript with other build tools",
        },
        {
          title: "Configuring Watch",
          id: "7configuring-watch",
          permalink: "/docs/handbook/configuring-watch.html",
          oneline: "How to configure the watch mode of TypeScript",
        },
        {
          title: "Nightly Builds",
          id: "7nightly-builds",
          permalink: "/docs/handbook/nightly-builds.html",
          oneline: "How to use a nightly build of TypeScript",
        },
      ],
    },
    {
      title: "Handbook v2: Beta",
      oneline: "The new handbook which is a work in progress.",
      id: "handbook-v2:-beta",
      chronological: true,

      items: [
        {
          title: "The Basics",
          id: "8the-basics",
          permalink: "/docs/handbook/2/basic-types.html",
          oneline: "Step one in learning TypeScript: The basic types.",
        },
        {
          title: "Everyday Types",
          id: "8everyday-types",
          permalink: "/docs/handbook/2/everyday-types.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Object Types",
          id: "8object-types",
          permalink: "/docs/handbook/2/objects.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Narrowing",
          id: "8narrowing",
          permalink: "/docs/handbook/2/narrowing.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "More on Functions",
          id: "8more-on-functions",
          permalink: "/docs/handbook/2/functions.html",
          oneline: "Learn about how Functions work in TypeScript.",
        },
        {
          title: "Classes",
          id: "8classes",
          permalink: "/docs/handbook/2/classes.html",
          oneline: "How classes work in TypeScript",
        },
        {
          title: "Type Manipulation",
          id: "8type-manipulation",
          oneline: "undefined",

          items: [
            {
              title: "Creating Types from Types",
              id: "8creating-types-from-types",
              permalink: "/docs/handbook/2/types-from-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Keyof Type Operator",
              id: "8keyof-type-operator",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Typeof Type Operator",
              id: "8typeof-type-operator",
              permalink: "/docs/handbook/2/typeof-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Indexed Access Types",
              id: "8indexed-access-types",
              permalink: "/docs/handbook/2/indexed-access-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
            {
              title: "Conditional Types",
              id: "8conditional-types",
              permalink: "/docs/handbook/2/conditional-types.html",
              oneline: "Step one in learning TypeScript: The basics types.",
            },
          ],
        },
        {
          title: "Modules",
          id: "8modules",
          permalink: "/docs/handbook/2/modules.html",
          oneline: "Learn how TypeScript handles different module styles.",
        },
        {
          title: "Type Declarations",
          id: "8type-declarations",
          permalink: "/docs/handbook/2/type-declarations.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
        {
          title: "Understanding Errors",
          id: "8understanding-errors",
          permalink: "/docs/handbook/2/understanding-errors.html",
          oneline: "Step one in learning TypeScript: The basics types.",
        },
      ],
    },
  ];

  return navigations[lang];
}

/** ---INSERT-END--- */

const findInNav = (
  item: SidebarNavItem | SidebarNavItem[],
  fun: (item: SidebarNavItem) => boolean
): SidebarNavItem | undefined => {
  if (Array.isArray(item)) {
    for (const subItem of item) {
      const sub = findInNav(subItem, fun);
      if (sub) return sub;
    }
  } else {
    if (fun(item)) return item;
    if (!item.items) return undefined;
    for (const subItem of item.items) {
      const sub = findInNav(subItem, fun);
      if (sub) return sub;
    }
    return undefined;
  }
};

export function getNextPageID(navs: SidebarNavItem[], currentID: string) {
  // prettier-ignore
  const section = findInNav(navs, (i) => i && !!i.items && !!i.items.find(i => i.id === currentID)) || false
  if (!section) return undefined;
  if (!section.chronological) return undefined;
  if (!section.items) return;

  const currentIndex = section.items.findIndex((i) => i.id === currentID);
  const next = section.items[currentIndex + 1];
  if (next) {
    return {
      path: next.permalink,
      ...section.items[currentIndex + 1],
    };
  }
}

export function getPreviousPageID(navs: SidebarNavItem[], currentID: string) {
  // prettier-ignore
  const section = findInNav(navs, (i) => i && !!i.items && !!i.items.find(i => i.id === currentID)) || false

  if (!section) return undefined;
  if (!section.chronological) return undefined;
  if (!section.items) return;

  const currentIndex = section.items.findIndex((i) => i.id === currentID);
  const prev = section.items[currentIndex - 1];

  if (prev) {
    return {
      path: prev.permalink,
      ...section.items[currentIndex - 1],
    };
  }
}
