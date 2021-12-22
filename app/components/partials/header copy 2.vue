<template>
  <div class="relative bg-white overflow-hidden px-2">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-shrink-0 flex items-center">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="flex-shrink-0 flex items-center">
        <a href="/">
          <img
            class="block lg:hidden w-32 h-auto"
            src="/images/logo.png"
            srcset="/images/logo.png 2x"
            alt="Workflow"
          />
          <img
            class="hidden lg:block w-48 h-auto"
            src="/images/logo.png"
            srcset="/images/logo.png 2x"
            alt="Workflow"
          />
        </a>
      </div>
      <div class="flex-shrink-0 flex items-center">
        <button class="h-14 px-3 py-1 rounded-sm">Join In</button>
      </div>
    </div>
  </div>
</template>
