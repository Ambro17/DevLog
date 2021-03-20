<template>
  <div class="bg-white dark:bg-gray-900 font-sans leading-normal tracking-normal">

    <!--Nav-->
    <Header />   
    
    <!--Title-->
    <div class="text-center pt-16 md:pt-32">
      <p class="text-sm md:text-base text-green-500 font-bold"> 
        {{ new Intl.DateTimeFormat('en-US', {day: "numeric", month: "long", year:"numeric"}).format(
            new Date(post.publishedOn)
          ) 
        }} 
        <span class="text-gray-900">/</span> {{post.topic}} 
      </p>
      <h1 class="font-bold break-normal text-3xl dark:text-gray-300 md:text-5xl">{{ post.title }}</h1>
    </div>

    <!--image-->
    <div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style="background-image:url('https://source.unsplash.com/collection/1118905/'); height: 75vh;"></div>
    
    <!--Container-->
    <div class="container max-w-5xl mx-auto -mt-32">
      
      <div class="mx-0 sm:mx-6">
        
        <div class="bg-white dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 dark:text-gray-400 leading-normal" style="font-family:Georgia,serif;">
          
          <!--Post Content-->
          

          <!--Lead Para-->
          <p class="text-2xl md:text-3xl mb-5">
            👋 Welcome fellow <a href="https://www.tailwindcss.com">Tailwind CSS</a> and <a href="https://www.ghost.org">Ghost</a> fan.  This starter template is an attempt to replicate the default Ghost theme <a href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
          </p>

          <p class="py-6">{{ post.content }}</p>				
        
                        
        </div>
          <!--Author-->
          <div class="flex w-full items-center font-sans p-8 md:p-12">
            <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
            <div class="flex-1">
              <p class="text-base dark:text-gray-300 font-bold text-base md:text-xl leading-none">UnwantedCrow</p>
              <p class="text-gray-600 dark:text-gray-500 text-xs md:text-base">Always looking to learn the next big thing</p>
            </div>
          </div>
          <!--/Author-->
        
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BlogPost',
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      post: {
          "topic": "🐍 Python",
          "title": "This is some post title",
          "preview": "This starter template is an attempt to replicate the default Ghost theme \"Casper\" using Tailwind CSS and vanilla Javascript.",
          "readingTime": 5,
          "content": "This is the blog content ...",
          "author": {
            "name": "Me"
          },
          "publishedOn": "2020-01-17"
      },
    }
  }
}
</script>