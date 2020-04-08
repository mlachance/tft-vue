<template>
  <div class="equipment">
    <p>
      <label>
        <span>Weapon:</span>
        <select v-model="character.weapon">
          <option value="">—</option>
          <option
            v-for="weapon in weapons"
            v-bind:value="weapon.uid"
            :key="weapon.uid"
          >
            {{ weapon.name }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <span>Backup weapon:</span>
        <select v-model="character.weapon_backup">
          <option value="">—</option>
          <option
            v-for="weapon in weapons"
            v-bind:value="weapon.uid"
            :key="weapon.uid"
          >
            {{ weapon.name }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <span>Armor:</span>
        <select v-model="character.armor">
          <option value="">—</option>
          <option
            v-for="armorPiece in armor"
            v-bind:value="armorPiece.uid"
            :key="armorPiece.uid"
          >
            {{ armorPiece.name }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <span>Shield:</span>
        <select v-model="character.shield">
          <option value="">—</option>
          <option
            v-for="shield in shields"
            v-bind:value="shield.uid"
            :key="shield.uid"
          >
            {{ shield.name }}
          </option>
        </select>
      </label>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Equipment.vue",
  props: ["character"],
  computed: {
    armor() {
      return this.getArmorList();
    },
    shields() {
      return this.getShieldList();
    },
    weapons() {
      return this.getWeapons();
    }
  },
  methods: {
    ...mapGetters({
      getArmorList: "armor/getArmorList",
      getShieldList: "armor/getShieldList",
      getArmorPiece: "armor/getItem",
      getWeapons: "weapons/getWeaponList",
      getWeaponFunction: "weapons/getItem"
    })
  }
};
</script>
