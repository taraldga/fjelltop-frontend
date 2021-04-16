<template>
  <b-modal>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Lag ny topp</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="Navn">
            <b-input
              type="text"
              :value="name"
              placeholder="Toppens navn"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Sted">
            <b-input
              type="string"
              :value="location"
              placeholder="Område"
              required
            >
            </b-input>
          </b-field>
          <b-field label="Sted">
            <b-input
              type="string"
              :value="location"
              placeholder="Område"
              required
            >
            </b-input>
          </b-field>
          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Lukk" @click="$emit('close')" />
          <b-button label="Opprett" type="is-primary"  @click="$emit('create')"/>
        </footer>
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Vue } from "vue-property-decorator";
import { Mountain } from "../models/mountain";

@Component({
  props: {
    mountain: Object as PropType<Mountain>,
    isOpen: Boolean,
  },
  data: {
    name: String,
    
  }
})
export default class Mountains extends Vue {
  onSubmit(): void {
    if(this.$data.mountain) {
      this.$emit('updateMountain', {
        id: this.$props.mountain.id,

      })
    }
  }
}
</script>
