<template>
  <!-- App Start -->
  <v-app light>
    <!-- Navigation -->
    <v-navigation-drawer temporary v-model="drawer" light overflow absolute>
      <v-list class="pt-0" dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation End -->
    <!-- Toolbar -->
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- Toolbar End -->
    <!-- Main -->
    <main>
      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <!-- Welcome -->
          <v-flex xs6>
            <v-card>
              <v-layout row>
                <v-flex xs6>
                  <v-card-title primary-title>
                    <h3 class="headline">Kingston Vue Material Framework</h3>
                  </v-card-title>
                </v-flex>
                <v-flex xs6>
                  <v-card-media src="/public/v.png" height="150" contain>
                  </v-card-media>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <!-- Welcome End -->
          <!-- Buttons -->
          <v-flex xs6>
            <v-card>
              <v-card-title primary-title>
                <div class="title">BUTTON</div>
                <div>
                  <br>
                  <v-btn>normal</v-btn>
                  <v-btn class='primary'>primary</v-btn>
                  <v-btn class='accent'>accent</v-btn>
                  <v-btn class='secondary'>secondary</v-btn>
                  <v-btn class='info'>info</v-btn>
                  <v-btn class='warning'>warning</v-btn>
                  <v-btn class='error'>error</v-btn>
                  <v-btn class='success'>success</v-btn>
                  <v-btn class='primary' disabled>disabled</v-btn>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <!-- Buttons End -->
          <!-- Select -->
          <v-flex xs6>
            <v-card>
              <v-card-title primary-title>
                <v-flex xs12>
                  <div class="title">SELECT</div>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Standard</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    v-bind:items="selects"
                    v-model="select1"
                    label="Label"
                    item-value="text"
                  ></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Disabled</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    v-bind:items="selects"
                    v-model="select2"
                    label="Label"
                    item-value="text"
                    disabled
                  ></v-select>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>
          <!-- Select End -->
          <!-- Input -->
          <v-flex xs6>
            <v-card>
              <v-card-title primary-title>
                <v-flex xs12>
                  <div class="title">INPUT</div>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Standard</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Label"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Disabled</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    name="input-2"
                    label="Label"
                    value="Input text"
                    disabled
                  ></v-text-field>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>
          <!-- Input End -->
        </v-layout>
      </v-container>
    </main>
    <!-- Main End -->
    <!-- Float Button -->
    <v-fab-transition>
      <v-btn fixed dark fab right bottom class="secondary" >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <!-- Float Button End -->
  </v-app>
  <!-- App End -->
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        select2: 'State 1',
        selects: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
