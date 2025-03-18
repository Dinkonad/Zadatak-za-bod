<script setup>
</script>

<template>
  <div ref="dark" class="min-h-screen w-screen bg-gradient-to-br from-emerald-950 to-indigo-950">
    <div @click="$refs.dark.classList.toggle('dark');" class="dark:bg-gray-950 min-h-screen">
      <div class="text-teal-100 text-[2.25rem] sm:text-[3.75rem] text-center pt-10 dark:text-white">
        Pozdrav, ja sam <span class="text-cyan-400 font-bold dark:text-red-500">Dinko Nađ</span>
      </div>
      <div class="w-full sm:w-[1024px] border-b-2 text-teal-100 opacity-75 mx-auto pt-6 dark:text-white">
        <hr>
      </div>
      <div class="text-[1rem] sm:text-[1.5rem] text-teal-100/75 mt-4 ml-4 dark:text-white">
        Moji omiljeni filmovi:
      </div>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-4">
        <div class="flex flex-col items-center">
          <div class="h-[320px] sm:h-[480px] w-full max-w-[320px] rounded-[6px] bg-white mt-4 ">
            <img src="https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" class="w-full h-full object-cover rounded-[6px]" />
          </div>
          <div class="text-[1.25rem] sm:text-[1.5rem] text-teal-100/75 mt-4 dark:text-white">Titanic</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="h-[320px] sm:h-[480px] w-full max-w-[320px] bg-white rounded-[6px] mt-4 ">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/ea4f1c75ddd9fd937a77875d48f9ce8225ed954afcefabe7a2195311b1a97ddd.jpg" class="w-full h-full object-cover rounded-[6px]" />
          </div>
          <div class="text-[1.25rem] sm:text-[1.5rem] text-teal-100/75 mt-4 dark:text-white">Social Network</div>
        </div>

        <div class="flex flex-col items-center">
          <div class="h-[320px] sm:h-[480px] w-full max-w-[320px] bg-white rounded-[6px] mt-4 ">
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Fast_X_poster.jpg" class="w-full h-full object-cover rounded-[6px]" />
          </div>
          <div class="text-[1.25rem] sm:text-[1.5rem] text-teal-100/75 mt-4 dark:text-white">Fast and Furious 10</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
