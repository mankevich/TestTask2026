<script setup lang="ts">
import IconClose from '@/components/icons/IconSubscribed.vue'

defineProps<{
  isSubscribed: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <button
    type="button"
    :class="['btn-subscribe', { 'is-subscribed': isSubscribed }]"
    @click="$emit('click')"
  >
    <div class="subscribe-btn-content">
      <IconClose v-show="isSubscribed" />
      <span class="btn-text">{{ isSubscribed ? 'Subscribed' : 'Subscribe' }}</span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.btn-subscribe {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  width: 99px;
  height: 32px;
  background: $primary-color;
  border-radius: 16px;
  border: none;
  
  @include apply-typography($typography-modal-desc);
  color: $text-white;

  &:hover {
    background-color: $primary-hover;
  }
  &:active {
    background-color: $primary-active;
  }

  &.is-subscribed {
    width: 137px;
    height: 32px;
    padding: 0px 12px 0px 0px;
    background: $button-subscribed;
    color: $primary-color;
  }

  &.is-subscribed:hover {
    background-color: $button-subscribed-hover;
  }
  &.is-subscribed:active {
    background-color: $button-subscribed-active;
  }
}

.subscribe-btn-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
</style>