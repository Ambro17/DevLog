<template>
  <div class="bg-white dark:bg-gray-900 font-sans leading-normal tracking-normal">

    <!--Nav-->
    <Header />   
    
    <!--Title-->
    <div class="text-center pt-16 md:pt-32">
      <p class="text-sm md:text-base text-green-500 font-bold">08 APRIL 2019 <span class="text-gray-900">/</span> GETTING STARTED</p>
      <h1 class="font-bold break-normal text-3xl dark:text-gray-300 md:text-5xl">Welcome to Ghostwind CSS</h1>
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

          <p class="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>				
        
          <p class="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

          <ol>
            <li class="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
            <li class="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
            <li class="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
          </ol>

          <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>

          <p class="py-6">Example code block:</p>
          <pre class="bg-gray-900 rounded text-white font-mono text-base p-4">
            <code class="break-words whitespace-pre-wrap">
  &lt;header class="site-header outer"&gt;
    &lt;div class="inner"&gt;
      {{"&lt;p>Hello World!&lt;/p>"}}
    &lt;/div&gt;
  &lt;/header&gt;
            </code>
          </pre>

                          
          <!--/ Post Content-->
              
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
  }
}
</script>