<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import IconAvatar from '@/components/icons/IconAvatar.vue'
import ESize from '@/types/ESize'

export default defineComponent({
  props: {
    alt: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    size: {
      type: String as PropType<ESize>,
      default: ESize.MD,
    },
  },
  components: {
    IconAvatar,
  },
  setup(props) {
    const mapSizes = {
      [ESize.SM]: 40,
      [ESize.MD]: 80,
      [ESize.LG]: 140,
    }
    const scopedSize = computed(() => mapSizes[props.size])

    return {
      scopedSize,
    }
  },
})
</script>
<template>
  <img
    v-if="photo"
    :src="photo"
    :alt="alt"
    :width="scopedSize"
    :height="scopedSize"
    class="rounded-avatar"
    :class="`rounded-avatar--${size}`"
  />
  <IconAvatar v-else :height="scopedSize" :width="scopedSize" />
</template>
<style scoped lang="scss">
.rounded-avatar {
  border-radius: 40px;

  &--sm {
    border-radius: 20px;
  }

  &--lg {
    border-radius: 70px;
  }
}
</style>
