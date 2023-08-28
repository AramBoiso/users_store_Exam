<template>
    <div>
      <Navbar/>
        <main class="container p-3 my-5">
          <slot/>
        </main>
      <Footer/>
    </div>
  </template>
  
  <script setup>
  // const { data, error } = await useFetch<User[]>('http://localhost:3001/api/v1/users');
    useHead({
      titleTemplate: '%s - Intro Nuxt',
        bodyAttrs: [{
          class: "text-center"
        }],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
            integrity: 'sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9',
            crossorigin: 'anonymous'
          }
        ],
        script: [
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"',
            integrity: 'sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm',
            crossorigin: 'anonymous'
          }
        ]
    });
  </script>