<template>
  <div 
   class="card mb-5 p-4"
   :class="`has-background-${bgColor}-light`">
   <label
    v-if="label"
    class="label has-text-grey-dark"
    >Editar Note</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="valueText"
          @input="$emit('update:modelValue', valueText)"
          class="textarea"
          placeholder="Nova nota"
          ref="textareaRef"
        >
        </textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    bgColor: {
      type: String,
      default: 'grey'
    },
    label: {
      type: String,
      default: '',
    }
})

const textareaRef = ref(null);

const valueText = ref(props.modelValue);

const emit = defineEmits(['update:modelValue'])

const focusTextArea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextArea,
})

</script>