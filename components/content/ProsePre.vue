<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const preRef = ref()
const { copy, copied, isSupported } = useClipboard()

const onCopy = () => {
  copy(preRef.value?.innerText)
}
</script>

<template>
  <div class="relative bg-gray-200 text-black dark:bg-gray-800 dark:text-white p-4 my-2 rounded">
    <div class="absolute top-0 right-0 p-2 flex gap-2 cursor-pointer items-center" v-if="isSupported" @click="onCopy">
      <IconsCopy />
      <span>
        {{ copied ? 'copied' : 'copy' }}
      </span>
    </div>
    <pre ref="preRef" class="break-words whitespace-pre-wrap"><slot></slot></pre>
  </div>
</template>
<style lang="css" scoped></style>