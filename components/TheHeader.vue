<script lang="ts" setup>
const pages = [
  { name: "About", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
];

const color = computed(() => {
  const { preference } = useColorMode();
  return preference === "light" ? "black" : "white";
});
</script>

<template>
  <!-- theme switch -->
  <ThemeSwitcher />
  <!-- the avatar -->
  <NuxtLink to="/">
    <NuxtImg
      src="/aqib.jpg"
      placeholder
      alt="avatar"
      class="rounded-full ring-offset-2 ring-2 ring-gray-400 w-[12rem] h-[12rem] mx-auto mt-4 mb-12 cursor-pointer"
    />
  </NuxtLink>
  <!-- social links -->

  <!-- the navigation links -->
  <div
    class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center"
  >
    <NuxtLink
      v-for="page in pages"
      :key="page.name"
      :to="page.path"
      class="text-2xl font-primary font-regular text-black dark:text-white transition:border duration-200"
      :class="[page.name === $route.meta.name ? 'nav-active' : 'nav-inactive']"
    >
      {{ page.name }}
    </NuxtLink>
  </div>
</template>

<style lang="css" scoped>
.nav-active,
.nav-inactive {
  position: relative;
}

.nav-active::before,
.nav-inactive::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: -6px;
  width: 0px;
  height: 2px;
  background: v-bind(color);
  transition: width 0.2s linear;
}

.nav-active::before {
  background: v-bind(color);
  transition: unset;
  width: 100%;
}

.nav-inactive:hover::before {
  width: 100%;
}
</style>
