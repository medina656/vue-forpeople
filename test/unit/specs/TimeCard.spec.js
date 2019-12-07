import Vue from 'vue';
import TimeCard from '@/components/TimeCard';

describe('TimeCard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TimeCard);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App');
  });
});
