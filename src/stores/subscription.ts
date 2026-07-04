import { defineStore } from 'pinia'
import { SUBSCRIPTION_CONTENT } from '@/data/subscriptionContent'

// Интерфейс данных из JSON
interface ISubscription {
  site: string
  subscribed: boolean
  title?: string
  desc?: string
  img?: string
}

interface ISubscriptionState {
  items: ISubscription[]
  isModalOpen: boolean
  funBefore: number
  isSidebarOpen: boolean
}

export const useSubscriptionStore = defineStore('subscription', {
  state: (): ISubscriptionState => ({
    items: [],
    isModalOpen: false,
    funBefore: 0,
    isSidebarOpen: false,
  }),

  getters: {
    funPercentage(state): number {
      const total = state.items.length
      if (total === 0) return 0
      const active = state.items.filter(i => i.subscribed).length
      return Math.round((active / total) * 100)
    }
  },

  actions: {
    async fetchSubscriptions(): Promise<void> {
      try {
        const res = await fetch('/subscribe.json')
        const jsonItems: ISubscription[] = await res.json()

        // Добавление дополнительных атрибутов карточек
        this.items = jsonItems.map(item => {
          const content = SUBSCRIPTION_CONTENT[item.site]
          
          return {
            ...item,
            title: content?.title || item.site,
            desc: content?.desc || '',
            img: content?.img || ''
          }
        })

      } catch (e) {
        console.error('Failed to load subscriptions', e)
      }
    },

    toggleSidebar(): void {
      this.isSidebarOpen = !this.isSidebarOpen
    },

    closeSidebar(): void {
      this.isSidebarOpen = false
    },

    toggleSubscription(siteName: string): void {
      const item = this.items.find(i => i.site === siteName)
      if (item) {
        item.subscribed = !item.subscribed
        this.logState()
      }
    },

    openUnsubscribeModal(): void {
      this.funBefore = this.funPercentage
      this.isModalOpen = true
      this.isSidebarOpen = false
    },
    
    confirmUnsubscribeAll(): void {
      this.items.forEach(i => i.subscribed = false)
      this.closeUnsubscribeModal()
      this.logState()
    },

    closeUnsubscribeModal(): void {
        this.isModalOpen = false
    },

    logState(): void {
      //console.log('Current state:', JSON.parse(JSON.stringify(this.items)))
      //console.log('Current state:', JSON.stringify(this.items))
      
      // 1. Оставляем только те поля, которые были в исходном JSON
      const cleanData = this.items.map(item => ({
        site: item.site,
        subscribed: item.subscribed
      }));

      // 2. Превращаем в красивую JSON-строку с отступами
      const jsonOutput = JSON.stringify(cleanData, null, 2);

      // 3. Выводим в консоль
      console.log('%c CURRENT SUBSCRIPTIONS STATE:', 'color: #346DF1; font-weight: bold;');
      console.log(jsonOutput);
    }
  }
})
