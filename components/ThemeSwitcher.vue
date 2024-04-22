<script setup>
const colorMode = useColorMode();

const modes = ["dark", "light"];

const changeTheme = () => {
  const index = modes.findIndex((mode) => mode === colorMode.preference);
  const mode = index < modes.length - 1 ? modes[index + 1] : modes[0];

  colorMode.preference = mode;
};
</script>

<template>
  <div
    class="flex gap-1 items-center justify-center fixed z-50 bottom-[5%] right-[5%] rounded-full border shadow-xl p-2 cursor-pointer bg-yellow-400 border-yellow-400 dark:bg-indigo-500 dark:border-indigo-500 overflow-hide"
    @click="changeTheme"
  >
    <Transition name="slide-in" mode="out-in">
      <IconsDark v-if="colorMode.preference === 'dark'" />
      <IconsLight v-else />
    </Transition>
  </div>
</template>

<style>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.25s ease-out;
}

.slide-in-enter-from {
  opacity: 0;
  transform: scale(0);
  transform: rotate(1turn);
}

.slide-in-leave-to {
  opacity: 0;
  transform: scale(1);
  transform: rotate(1turn);
}
</style>
