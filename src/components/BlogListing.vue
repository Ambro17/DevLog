<template>
<div class="bg-gray-200 font-sans leading-normal tracking-normal">

  <!--Header-->
  <div class="w-full m-0 p-0 bg-cover bg-bottom" style="height: 30vh; max-height:460px;">
    <header class="topbar bg-white shadow border-t-4 border-indigo-600">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <a class="flex items-center text-gray-800 hover:text-indigo-600" href="#">
              <svg class="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="mx-3 font-medium text-sm md:text-base">Nahuel Ambrosini</span>
            </a>
          </div>
          <div class="flex items-center -mx-2">
            <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
              <svg class="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </a>

            <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="https://github.com/Ambro17/">
              <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
    
    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      
      <div class="mx-0 sm:mx-6">
        
        <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
          
        <!--Lead Card-->
        <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
          <a href="post.html" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full md:w-2/3 rounded-t">	
              <img src="https://source.unsplash.com/collection/494263/800x600" class="h-full w-full shadow">
            </div>

            <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS and Ghost fan</div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  This starter template is an attempt to replicate the default Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.
                </p>
              </div>

              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                  <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                  <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

          </a>
        </div>
        <!--/Lead Card-->


        <!--Posts Container-->
        <div class="flex flex-wrap justify-between pt-12 -mx-6">

          <!--1/3 col -->
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/225/800x600" class="h-64 w-full rounded-t pb-6">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>
        
          
          <!--1/3 col -->
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/3106804/800x600" class="h-64 w-full rounded-t pb-6">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
              </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/3 col -->
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/539527/800x600" class="h-64 w-full rounded-t pb-6">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div class="w-full  font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>


          <!--1/2 col -->
          <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/3657445/800x600" class="h-full w-full rounded-t pb-6">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/2 col -->
          <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">	
                <img src="https://source.unsplash.com/collection/764827/800x600" class="h-full w-full rounded-t pb-6">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

        </div>
        <!--/ Post Content-->
            
      </div>
    </div>
  

  </div>

    <footer class="bg-white">
        <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
            <div>
            <div class="text-gray-600">Made with ❤ by Nahuel Ambrosini</div>
            </div>

            <div class="flex items-center -mx-2">
            <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="https://github.com/Ambro17/DevLog">
                <svg class="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
                </svg>
            </a>
            </div>
        </div>
        </div>
    </footer>

</div>
</template>