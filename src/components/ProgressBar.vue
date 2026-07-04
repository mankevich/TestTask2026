<script setup lang="ts">
defineProps<{
  value: number
}>()
</script>

<template>
  <div class="progress-wrapper">
    <div class="progress-bar" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-fill" :style="{ width: value + '%' }"></div>
    </div>
    <span class="progress-value">{{ value }}%</span>
  </div>
</template>

<style lang="scss" scoped>
.progress-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px
}

.progress-bar {
  height: 16px;
  background: $progres-bar-gray;
  border-radius: 8px;
  overflow: hidden;
  flex-grow: 1;

  .progress-fill {
    height: 100%;
    background: $progres-bar;
    transition: width 0.4s ease;
  }
}

.progress-value {
  @include apply-typography($typography-modal-progress);
  color: $progres-bar;
}
</style>