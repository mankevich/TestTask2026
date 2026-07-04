<script setup lang="ts">
import { useSubscriptionStore } from '@/stores/subscription'
import ProgressBar from './ProgressBar.vue'

const subscriptionStore = useSubscriptionStore()
</script>

<template>
  <header class="mobile-nav">
    <button 
      type="button" 
      class="burger-btn" 
      @click="subscriptionStore.toggleSidebar"
    >
      <span></span><span></span><span></span>
    </button>
    
    <div class="mobile-progress" v-show="!subscriptionStore.isSidebarOpen">
      <span v-once class="mobile-progress__label">FUN YOU GET</span>
      <div class="mobile-progress__track-wrapper">
        <ProgressBar :value="subscriptionStore.funPercentage" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.mobile-nav {
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    background: $white;
    border-bottom: 1px solid $button-border-gray;
    position: sticky;
    top: 0;
    z-index: 500;
    gap: 16px;
  }
}

.burger-btn {
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: $text-gray;
    border-radius: 2px;
  }
}

.mobile-progress {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
  gap: 4px 12px;

  &__label {
    @include apply-typography($typography-modal-micro);
    color: $text-light-gray;
    white-space: nowrap;

    @media (max-width: 340px) {
      width: 100%;
    }
  }

  &__track-wrapper {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 10px;
  }
}
</style>