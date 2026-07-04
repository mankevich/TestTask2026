<script setup lang="ts">
import { useSubscriptionStore } from '@/stores/subscription'
import ProgressBar from '@/components/ProgressBar.vue'
import Logo from '@/components/icons/Logo.vue'

const subscriptionStore = useSubscriptionStore()
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <div v-once class="logo-container">
        <Logo class="logo-svg" />
      </div>
      
      <div class="fun-indicator">
        <div v-once>
          <p class="fun-text">How much fun do you want in your life?</p>
          
          <p class="user-email">harry.simon@yahoo.com</p>

          <div class="progress-info">
            <span class="progress-label" id="fun-label-text">FUN YOU GET</span>
          </div>
        </div>

		    <ProgressBar :value="subscriptionStore.funPercentage" aria-labelledby="fun-label-text" />
        
        <p v-once class="upgrade-text">
          <a href="#">Subscribe</a> to all our fun sites to upgrade your fun progress
        </p>
      </div>
    </div>

    <footer v-once class="sidebar-footer">
      <div class="address">
        <p>EntertainMeMore</p>
        <p>11807 Westheimer 550 PMB617</p>
        <p>Houston, TX 77077</p>
      </div>
      <a href="mailto:contact@entertainmemore.com" class="footer-link">contact@entertainmemore.com</a>
      <a href="#" class="footer-link">Privacy Policy</a>
    </footer>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 320px;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 128px 48px 48px;
  gap: 40px;
  flex-shrink: 0;
  background: $white;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 1100;
    transform: translateX(-100%);
    transition: transform $transition-base;
    
    width: 280px;
    max-width: 85vw;
    padding: 64px 24px 24px;

    &.is-open {
      transform: translateX(0);
    }
  }
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.logo-svg {
  width: 100%; 
  max-width: 224px;
  height: auto;  
  display: block;
  margin: 0 auto;
}

.fun-text {
  @include apply-typography($typography-modal-desc);
  color: $text-dark-gray;
  margin-bottom: 64px;
}

.user-email {
  @include apply-typography($typography-modal-small);
  color: $text-dark-gray;
  margin-bottom: 16px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
  
  .progress-label {
    @include apply-typography($typography-modal-micro);
    color: $text-light-gray;
  }
}

.upgrade-text {
  @include apply-typography($typography-modal-small);
  color: $text-light-gray;
  margin-top: 16px;
  a { 
    color: $primary-color;
    text-decoration: none;
  }
}

.sidebar-footer {
  @include apply-typography($typography-modal-micro);
  color: $text-gray;
  
  .address {
    margin-bottom: 24px;
  }

  .footer-link { 
    display: block; 
    color: inherit; 
    text-decoration: underline;
    margin-top: 24px;
  }
}
</style>