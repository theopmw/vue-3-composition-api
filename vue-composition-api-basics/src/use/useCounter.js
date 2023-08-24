import { reactive, computed, watch, onMounted, nextTick } from 'vue';

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: 'My Counter',
  });

  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) {
        alert('Way to go! You made it to 20!!');
      }
    }
  );

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even';
    return 'odd';
  });

  const increaseCounter = (amount, e) => {
    counterData.count += amount;
    nextTick(() => {
      console.log('Do something when the counter value has updated in the DOM');
    });
  };

  // Same functionality as abovebut using async/await
  // const increaseCounter = async (amount, e) => {
  //   counterData.count += amount;
  //   await nextTick();
  //   console.log('Do something when the counter value has updated in the DOM');
  // };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log('Do stuff related to Counter');
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
