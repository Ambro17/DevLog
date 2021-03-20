<template>
<div class="bg-gray-200 dark:bg-gray-900 font-sans leading-normal tracking-normal">

  <!--Header-->
  <Header />   
  <!--Container-->
  <div class="container px-4 md:px-0 max-w-6xl mx-auto mt-20 mb-10">
    
    <div class="mx-0 sm:mx-6">
      
      <div class="bg-gray-200 dark:bg-gray-900 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
        
      <!--Lead Card-->
      <div class="lead-card flex h-full bg-white dark:bg-gray-900 rounded overflow-hidden shadow-lg">

        <router-link :to="`/${$i18n.locale}/post`" class="flex flex-wrap no-underline hover:no-underline">

          <div class="w-full md:w-2/3 rounded-t">	
            <img src="https://source.unsplash.com/collection/494263/800x600" class="h-full w-full shadow">
          </div>

          <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t dark:bg-gray-700  rounded-b-none overflow-hidden shadow-lg">
              <p class="w-full text-gray-600 dark:text-gray-300 text-xs md:text-sm pt-6 px-6">{{posts[0].topic.toUpperCase()}}</p>
              <div class="w-full font-bold text-xl text-gray-900 dark:text-gray-200 px-6">{{ posts[0].title }}</div>
              <p class="text-gray-800 dark:text-gray-300 font-serif text-base px-6 mb-5">
                {{posts[0].preview}}
              </p>
            </div>

            <div class="flex-none mt-auto bg-white dark:bg-gray-800 rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{{posts[0].readingTime}} MIN READ</p>
              </div>
            </div>
          </div>

        </router-link>


      </div>
      <!--/Lead Card-->


      <!--Posts Container-->
      <div class="flex flex-wrap justify-between pt-12 -mx-6">

        <!--1/2 col -->
        <div v-for="post in posts.slice(1)" :key="post.title" class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white dark:bg-gray-700 rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/225/800x400" class="h-64 w-full rounded-t pb-6">
              <p class="w-full text-gray-600 dark:text-gray-400 text-xs md:text-sm px-6">{{post.topic}}</p>
              <div class="w-full font-bold text-xl text-gray-900 dark:text-gray-200 px-6">{{post.title}}</div>
              <p class="text-gray-800 dark:text-gray-400 font-serif text-base px-6 mb-5">
                {{post.preview}}
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white dark:bg-gray-800 rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
              <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{{post.readingTime}} MIN READ</p>
            </div>
          </div>
        </div>
      </div>
      <!-- End Post Content-->
          
    </div>
  </div>


  </div>

  <Footer />

</div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BlogListing',
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      posts: [
        {
            "topic": "🐍 Python",
            "title": "This is some post title",
            "preview": "This starter template is an attempt to replicate the default Ghost theme \"Casper\" using Tailwind CSS and vanilla Javascript.",
            "readingTime": 5,
            "content": "Lorem Ipsum",
            "author": {
                "name": "Me"
            }
        },
        {
            "topic": "🔄 Git",
            "title": "#2 Second post title",
            "preview": "This starter template is an attempt to replicate the default Ghost theme \"Casper\" using Tailwind CSS and vanilla Javascript.",
            "readingTime": 10,
            "content": "Lorem Ipsum",
            "author": {
                "name": "Me"
            }
        },
        {
            "topic": "🛰️ GraphQL",
            "title": "#3 This is the thrid title",
            "preview": "This starter template is an attempt to replicate the default Ghost theme \"Casper\" using Tailwind CSS and vanilla Javascript.",
            "readingTime": 15,
            "content": "Lorem Ipsum",
            "author": {
                "name": "Me"
            }
        }
      ]
    }
  }
}
</script>
