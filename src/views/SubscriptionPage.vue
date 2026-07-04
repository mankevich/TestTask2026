<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import Sidebar from '@/components/Sidebar.vue'
import SubscriptionCard from '@/components/SubscriptionCard.vue'
import MobileHeader from '@/components/MobileHeader.vue'

const UnsubscribeModal = defineAsyncComponent(() => 
  import('@/components/UnsubscribeModal.vue')
)

const subscriptionStore = useSubscriptionStore()

onMounted(() => {
  subscriptionStore.fetchSubscriptions()    // загрузка подписок
})
</script>

<template>
  <div class="layout">
    <MobileHeader />

    <!-- Левый сайдбар -->
    <Sidebar :class="{ 'is-open': subscriptionStore.isSidebarOpen }" />

    <!-- Затемнение для открытоко сайдбара -->
    <div 
      v-if="subscriptionStore.isSidebarOpen" 
      class="sidebar-overlay" 
      @click="subscriptionStore.closeSidebar()"
    ></div>

    <!-- Контент -->
    <main class="main-content">
      <header class="header">
        <div class="header-top">
          <h1 class="header-title">Ok, let's change your preferences</h1>
          <button type="button" class="btn-unsubscribe" @click="subscriptionStore.openUnsubscribeModal">
            Unsubscribe from all
          </button>
        </div>
        <p class="header-subtitle">To unsubscribe, please uncheck the appropriate box(es).</p>
      </header>

      <section class="cards-grid">
        <SubscriptionCard 
          v-for="item in subscriptionStore.items" 
          :key="item.site" 
          :item="item"
          v-memo="[item.subscribed]"
          @toggle="subscriptionStore.toggleSubscription(item.site)"
        />
      </section>
    </main>

    <!-- Попап для отписки -->
    <UnsubscribeModal v-if="subscriptionStore.isModalOpen" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  background: $content-background;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.main-content {
  flex: 1;
  min-width: 0;
  padding: 128px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
  }
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px; 

  &-top {
    display: flex;
    justify-content: space-between; 
    align-items: baseline; 
    width: 100%;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  &-title {
    @include apply-typography($typography-page-title);
    color: $text-black;
    margin: 0;
    max-width: 500px;
  }

  &-subtitle {
    @include apply-typography($typography-modal-desc);
    color: $text-gray;
    margin: 6px 0 0 0; 
  }
}

.btn-unsubscribe {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 4px;
  height: 36px;
  min-width: 191px;
  background: transparent;
  border: 1px solid $button-border-gray;
  border-radius: 4px;
  @include apply-typography($typography-button);
  color: $primary-color;

  &.is-active {
    color: $primary-active;
  }
  &:hover:not(.is-active) {
    color: $primary-hover;
  }
}

.sidebar-overlay {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: $overlay-color;
    backdrop-filter: blur(4px);
    z-index: 1050;
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(318px, 100%), 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    gap: 16px;
  }
}
</style>
