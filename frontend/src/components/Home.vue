<template>

<main class="font-sans bg-white">
  <div>
    <!-- Header -->
    <Header />

    <!-- Lead Intro -->
    <section class="
      section-main 
      bg-white
      dark:bg-gray-900
      border-t-80 
      border-white 
      dark:border-gray-900
      "
    >
      <div class="max-w-2xl px-6 text-center mx-auto mt-10">
        <h2 
          class="text-3xl font-semibold text-gray-800 dark:text-gray-50">
          {{ $t('home.intro.pre.hi') }}, 
          <span class="
            bg-indigo-600 
            dark:bg-indigo-500 
            text-white 
            rounded px-1"
          >{{ $t('home.intro.pre.whoami') }}</span> .
            {{ $t('home.intro.pre.nice') }}
        </h2>

        <i18n path="home.intro.full_text" tag="p" 
          class="text-xl leading-loose text-gray-600 dark:text-gray-50 pt-8">
          <template #br>
            <br>
          </template>
          <template #tech1>
            <b>{{ $t('home.intro.tech1') }}</b>
          </template>
          <template #and>
            {{ $t('home.intro.and') }}
          </template>
          <template #tech2>
            <b>{{ $t('home.intro.tech2') }}</b>
          </template>
          <template #interest1>
            <i>{{ $t('home.intro.interest1') }}</i>
          </template>
          <template #interest2>
            <i>{{ $t('home.intro.interest2') }}</i>
          </template>
          <template #interest3>
            <i>{{ $t('home.intro.interest3') }}</i>
          </template>
          <template #onapsis_link>
            <a 
              class="
                underline 
                text-blue-600 
                dark:text-gray-100 
                hover:text-blue-800 
                dark:hover:text-indigo-500 
                visited:text-purple-600
              "
              href='https://onapsis.com/'
              target="_blank"
            >Onapsis</a>
          </template>
        </i18n>
        <div class="flex items-end justify-center mt-12">
          <div class="w-48 h-48 relative mb-6">
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img 
                src="../assets/images/profile.svg"
                alt="Nahuel Emoji"
                class="object-cover object-center w-full h-full visible group-hover:hidden"
              >
            </div>
          </div>
        </div>
        <div class="
          avatar-icons-row
          flex items-center justify-center space-x-4 mt-0
          text-gray-800 
          dark:text-gray-100 
          ">
          <a href="mailto:ambro17.1@gmail.com" class="hover:text-indigo-600 dark:hover:text-indigo-500" target="_blank">
            <svg
              class="h-6 w-6 sm:h-6 sm:w-6 mail"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                id="path81" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nahuel-ambrosini-65a625b2/" class="hover:text-indigo-600 dark:hover:text-indigo-500" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 sm:h-6 sm:w-6 linkedin"
              viewBox="0 5 24 24"
              fill="currentColor"
              >
              <path
                id="path2"
                d="m 0.65298466,8.5056968 c 0,-0.7315145 0.256032,-1.335002 0.76807634,-1.8104626 0.5120433,-0.4754828 1.1777229,-0.7132127 1.9969952,-0.7132127 0.8046559,0 1.4556755,0.2340648 1.9531036,0.7022402 0.5120432,0.4827902 0.7680751,1.1118657 0.7680751,1.8872714 0,0.7022394 -0.2486994,1.2874259 -0.7461276,1.7555999 -0.5120443,0.482791 -1.1850321,0.724185 -2.0189438,0.724185 h -0.021936 c -0.804656,0 -1.4556768,-0.241394 -1.9531037,-0.724185 C 0.90169516,9.844343 0.65299086,9.2371906 0.65299086,8.5056968 Z m 0.285284,19.2018812 V 13.048314 H 5.8100595 v 14.659264 z m 7.57102964,0 H 13.381088 V 19.52209 c 0,-0.512063 0.05852,-0.907074 0.175561,-1.185029 0.204812,-0.497428 0.515707,-0.918048 0.932663,-1.261838 0.416952,-0.343813 0.939969,-0.515708 1.569068,-0.515708 1.638567,0 2.457839,1.104558 2.457839,3.313696 v 7.834367 h 4.871791 v -8.404937 c 0,-2.165249 -0.512045,-3.807459 -1.536152,-4.926655 -1.024107,-1.119194 -2.377367,-1.678792 -4.059822,-1.678792 -1.887272,0 -3.357587,0.811965 -4.410948,2.435895 v 0.04389 h -0.02193 l 0.02193,-0.04389 V 13.048314 H 8.5092983 c 0.02925,0.468153 0.04389,1.923831 0.04389,4.367056 0,2.443204 -0.01462,5.873933 -0.04389,10.292208 z"
                style="stroke-width:0.0219449" />
            </svg>
          </a>
          <a href="https://github.com/Ambro17" class="hover:text-indigo-600 dark:hover:text-indigo-500" target="_blank">
            <svg
              class="h-6 w-6 sm:h-6 sm:w-6 github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 255.96217"
              fill="currentColor"
            >
              <path
                d="M 127.505,0 C 57.095,0 0,57.085 0,127.505 c 0,56.336 36.534,104.13 87.196,120.99 6.372,1.18 8.712,-2.766 8.712,-6.134 0,-3.04 -0.119,-13.085 -0.173,-23.739 -35.473,7.713 -42.958,-15.044 -42.958,-15.044 -5.8,-14.738 -14.157,-18.656 -14.157,-18.656 -11.568,-7.914 0.872,-7.752 0.872,-7.752 12.804,0.9 19.546,13.14 19.546,13.14 11.372,19.493 29.828,13.857 37.104,10.6 1.144,-8.242 4.449,-13.866 8.095,-17.05 -28.32,-3.225 -58.092,-14.158 -58.092,-63.014 0,-13.92 4.981,-25.295 13.138,-34.224 -1.324,-3.212 -5.688,-16.18 1.235,-33.743 0,0 10.707,-3.427 35.073,13.07 10.17,-2.826 21.078,-4.242 31.914,-4.29 10.836,0.048 21.752,1.464 31.942,4.29 24.337,-16.497 35.029,-13.07 35.029,-13.07 6.94,17.563 2.574,30.531 1.25,33.743 8.175,8.929 13.122,20.303 13.122,34.224 0,48.972 -29.828,59.756 -58.22,62.912 4.573,3.957 8.648,11.717 8.648,23.612 0,17.06 -0.148,30.791 -0.148,34.991 0,3.393 2.295,7.369 8.759,6.117 50.634,-16.879 87.122,-64.656 87.122,-120.973 C 255.009,57.085 197.922,0 127.505,0"
                id="path2" />
            </svg>
          </a>
        </div>
      </div>
      <!-- Extra Div to mimic a background-colorable mb-10-->
      <div class="
        fake-margin-bottom-20 
        border-b-80
        border-white
        dark:border-gray-900">
      </div>
    </section>

    <!-- About -->
    <section class="section-secondary bg-gray-800 dark:bg-gray-900 pattern py-20">
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">{{ $t('home.about.header') }}</h2>

        <p class="text-gray-400 dark:text-gray-200 mt-10">
          {{ $t('home.about.pre') }}
          <br>
          {{ $t('home.about.post') }}
        </p>
      </div>
    </section>

    <!-- Latest Posts -->
    <section class="section-posts bg-white dark:bg-gray-900 py-20">
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">{{ $t('posts_header') }}</h2>

        <div class="flex flex-col items-center justify-center mt-6">
          <a class="max-w-2xl w-full block bg-white dark:bg-gray-700 shadow-md rounded-md border-t-4 border-indigo-600 dark:border-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" 
             href="#">
            <div class="flex items-center justify-between px-4 py-2">
              <h3 class="text-lg text-center font-medium text-gray-700 dark:text-gray-300">Why i use emojis in all my git commits 🙌</h3>
              <span class="block text-gray-600 dark:text-gray-100 font-light text-sm">20 Jan 2020</span>
            </div>
          </a>

          <a class="mt-8 max-w-2xl w-full block bg-white dark:bg-gray-700 shadow-md rounded-md border-t-4 border-indigo-600 dark:border-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
            <div class="flex items-center justify-between px-4 py-2">
              <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">Direnv: Automate your environment variables handling 🗜️</h3>
              <span class="block text-gray-600 dark:text-gray-100 font-light text-sm">29 Oct 2019</span>
            </div>
          </a>

          <a class="mt-8 max-w-2xl w-full block bg-white dark:bg-gray-700 shadow-md rounded-md border-t-4 border-indigo-600 dark:border-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
            <div class="flex items-center justify-between px-4 py-2">
              <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">Strawberry: The best approach to GraphQL Schema Design 🍓</h3>
              <span class="block text-gray-600 dark:text-gray-100 font-light text-sm">15 Oct 2019</span>
            </div>
          </a>

        </div>

        <div class="flex items-center justify-center mt-12">
          <a class="flex items-center text-gray-600 dark:text-gray-100 hover:underline hover:text-gray-500 dark:hover:text-indigo-500" 
             href="https://dev.to/ambro17"
             target="_blank">
            <span>{{ $t('view_all_posts') }}</span>
            <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Project -->
    <section class="section-projects bg-gray-800 dark:bg-gray-900 pattern pt-20 pb-10">
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">{{ $t('projects') }}</h2>

        <div class="flex items-center justify-center mt-10">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div class="max-w-xs w-full">
              <div class="flex items-center justify-center h-56 
                border-b-8 
                rounded-md 
                overflow-hidden
                bg-white 
                dark:bg-gray-800 
                border-teal-400 
                dark:border-gray-800"
              >
                <img class="object-cover h-48" src="https://raw.githubusercontent.com/Ambro17/slackify/master/docs/logopro.svg" alt="">
              </div>

              <a target="_blank" href="https://github.com/Ambro17/Slackify" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div class="py-2 px-3 text-center text-sm">
                  <p class="text-gray-300 dark:text-gray-100">🚀 Slackify</p>
                  <span class="block text-gray-500 dark:text-gray-300 mt-2">Lightweight framework to develop modern Slack bots.</span>
                </div>
              </a>
            </div>

            <div class="max-w-xs w-full">
              <div class="flex items-center justify-center h-56 bg-white dark:bg-gray-800 border-b-8 border-teal-400 dark:border-gray-800 rounded-md overflow-hidden">
                <img class="object-cover h-34" src="https://raw.githubusercontent.com/Ambro17/graphql-schema-diff/master/images/logo.svg?sanitize=true" alt="">
              </div>

              <a target="_blank" href="https://github.com/Ambro17/graphql-schema-diff" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div class="py-2 px-3 text-center text-sm">
                  <p class="text-gray-300 dark:text-gray-100">🔎 GraphQL Schema Diff</p>
                  <span class="block text-gray-500 dark:text-gray-300 mt-2">Compare GraphQL Schemas to detect breaking changes</span>
                </div>
              </a>
            </div>

            <div class="max-w-xs w-full">
              <div class="flex items-center justify-center h-56 bg-white dark:bg-gray-800 border-b-8 border-teal-400 dark:border-gray-800 rounded-md overflow-hidden">
                <img class="object-cover h-48" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="">
              </div>

              <a target="_blank" href="https://github.com/Ambro17/AmbroBot" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div class="py-2 px-3 text-center text-sm">
                  <p class="text-gray-300 dark:text-gray-100">AmbroBot</p>
                  <span class="block text-gray-500 dark:text-gray-300 mt-2">🤖 Telegram bot to show series, subway status and a few other things</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Talks -->
    <section class="section-projects bg-gray-800 dark:bg-gray-900 pattern pt-10 pb-20">
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">{{ $t('talks') }}</h2>

        <div class="flex items-center justify-center mt-10 mb-10">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div class="max-w-xs w-full">
              <div class="flex items-center justify-center h-56 bg-white dark:bg-gray-800 border-b-8 border-teal-400 dark:border-gray-800 rounded-md overflow-hidden">
                <img class="object-cover h-48" src="https://i2.wp.com/gist.github.com/uttamukkoji/c9da31a439f3b31bcddba714cc424fcd/raw/e422e0902f00851ed4e4cf485aafac02a2423d12/RESTvsGraphQL.png" alt="">
              </div>

              <a target="_blank" href="https://www.youtube.com/watch?v=FEl9C5Ui5OM" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div class="py-2 px-3 text-center text-sm">
                  <p class="text-gray-300 dark:text-gray-100">GraphQL vs REST</p>
                  <span class="block text-gray-400 dark:text-gray-300 mt-2">A comparison between two API paradigms</span>
                  <span class="block text-gray-500 dark:text-gray-400 mt-2">@ Pyar Meetup July</span>
                </div>
              </a>
            </div>
            <div class="max-w-xs w-full">
              <div class="flex items-center justify-center h-56 bg-white dark:bg-gray-800 border-b-8 border-teal-400 dark:border-gray-800 rounded-md overflow-hidden">
                <img class="object-cover h-48" src="https://eventos.python.org.ar/media/images_thumbnails/gql.png.700x450_q85_box-108%2C0%2C1091%2C630_crop_detail.jpg" alt="">
              </div>

              <a target="_blank" href="https://www.youtube.com/watch?v=ePSRREuTZq4" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div class="py-2 px-3 text-center text-sm">
                  <p class="text-gray-300 dark:text-gray-100">Pythonic APIs with GraphQL</p>
                  <span class="block text-gray-400 dark:text-gray-300 mt-2">How to write easy to use APIs with GraphQL</span>
                  <span class="block text-gray-500 dark:text-gray-400 mt-2">@ Pyconar 2020</span>
                </div>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Footer -->
    <Footer />

  </div>
</main>

</template>

<style>
  .pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23a0aec0' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track{
    background: #CBD5E0;
  }
  ::-webkit-scrollbar-thumb{
    background: #2D3748;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #718096;
  }
</style>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>