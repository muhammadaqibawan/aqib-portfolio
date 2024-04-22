<script lang="ts" setup>
useHead({
  title: `Aqib's Blogs`,
});

definePageMeta({
  name: "Blogs",
});
</script>

<template>
  <div class="mx-auto p-2 sm:p-4 w-[300px] sm:w-[700px]">
    <ContentList path="/blogs" v-slot="{ list: blogs }">
      <template v-for="blog in blogs" :key="blog.slug">
        <div
          class="flex flex-col sm:flex-row gap-2 items-start justify-start sm:justify-start p-2 sm:p-4 rounded-md shadow hover:shadow-md text-slate-800 dark:text-white dark:bg-slate-800 mb-4"
        >
          <!-- <img class="w-full sm:w-[200px] h-full" :src="blog.featureImg" alt="featureImg" /> -->
          <NuxtImg
            :src="blog.image"
            placeholder
            alt="avatar"
            class="h-[200px] bg-slate-100 dark:bg-slate-700"
          />
          <div class="flex-1 flex flex-col items-start justify-center">
            <h2 class="text-2xl font-primary">{{ blog.title }}</h2>
            <p class="font-primary text-sm flex-1">
              {{ blog.description }}
              <span
                ><a
                  target="_blank"
                  class="text-violet-400 ml-2"
                  :href="blog.link"
                  >Read more</a
                ></span
              >
            </p>
          </div>
        </div>
      </template>
    </ContentList>
  </div>
</template>

<style lang="css" scoped></style>
