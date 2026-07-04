<script setup lang="ts">
import SubscribeButton from './SubscribeButton.vue'

// Объект подписки
defineProps<{
  item: {
    site: string;
    subscribed: boolean;
    title?: string;
    desc?: string;
    img?: string;
  }
}>();

defineEmits(['toggle']);
</script>

<template>
  <div class="card" :class="{ 'is-subscribed': item.subscribed }">
    <div class="card-media">
      <img :src="item.img" :alt="item.title" class="card-img" />
    </div>

    <p class="card-description">{{ item.desc }}</p>

    <SubscribeButton 
      :is-subscribed="item.subscribed" 
      @click="$emit('toggle')" 
    />
  </div>
</template>



<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: $white;
  padding: 24px;
  gap: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 318px;
  min-height: 327px;
  height: 100%;
  box-sizing: border-box;
  
  margin: 0 auto;
}

.card-media {
  width: 100%;
  max-width: 270px;
  aspect-ratio: 270 / 168;
  background: $white;
  border-radius: 8px;
  border: 1px solid $content-background;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.card-img {
  object-fit: contain;
}

.card-description {
  @include apply-typography($typography-modal-desc);
  color: $text-dark-gray;
  margin-bottom: 16px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>