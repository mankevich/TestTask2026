<script setup lang="ts">
import { useSubscriptionStore } from '@/stores/subscription'
import IconClose from '@/components/icons/IconClose.vue'

const subscriptionStore = useSubscriptionStore()
</script>

<template>
  <div class="modal-overlay" @click.self="subscriptionStore.closeUnsubscribeModal()">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-header">
        <h3 class="modal-title">Are you sure?</h3>
        <button type="button" class="modal-close" @click="subscriptionStore.closeUnsubscribeModal()" aria-label="Close">
          <IconClose />
        </button>
      </div>

      <div class="modal-content">
        <p class="modal-text">
          Please confirm that you want to unsubscribe from all and lose {{ subscriptionStore.funBefore }}% fun.
        </p>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn-affirmative" @click="subscriptionStore.confirmUnsubscribeAll">
          Affirmative
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: $overlay-color;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
}

.modal {
  background: $white;
  box-shadow: $shadow-modal;
  border-radius: 8px;
  width: 100%;
  max-width: 512px;
  display: flex;
  flex-direction: column;
  padding: 0px;
}

.modal-header {
  padding: 16px 16px 16px 24px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.modal-title {
  @include apply-typography($typography-modal-title);
  color: $text-blue;
  margin: 0;
  flex-grow: 1;
}

.modal-close {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 18px;
  color: $grey-button;

  &:hover {
    color: $primary-hover;
  }
  &:active {
    color: $primary-active;
  }
}

.modal-content {
  padding: 0px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.modal-text {
  @include apply-typography($typography-modal-desc);
  color: $text-gray;
  margin: 0;
  max-width: 464px;
}

.modal-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 32px;
  width: 100%;
}

.btn-affirmative {
  width: 118px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
  border-radius: 4px;
  background: $primary-color;
  color: $white;
  @include apply-typography($typography-button);
  color: $text-white;
  transition: background-color $transition-base, transform 0.1s ease;

  &:hover {
    background-color: $primary-hover;
  }
  &:active {
    background-color: $primary-active;
  }
}
</style>