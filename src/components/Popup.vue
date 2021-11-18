<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text dark v-bind="attrs" v-on="on">
          <v-icon left>mdi-plus</v-icon>
          New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="primary lighten-2 white--text"
          >Add new Project
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false" class="white--text">mdi-close</v-icon>
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="nameRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="infoRules"
            ></v-textarea>

            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  clearable
                  label="Due date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  prepend-icon="mdi-calendar"
                  :value="formattedDate"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn class="success mx-0 mt-3" @click="submitHandler"
              >Add project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from "../fb.js";
export default {
  name: "Popup",
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length >= 3 || "Minimum length is 3 chars",
      ],
      infoRules: [
        (v) => !!v || "Information is required",
        (v) => v.length >= 10 || "Should me more than 10 chars",
      ],
    };
  },
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), "yyyy-MM-dd"),
          person: "Akash Pai",
          status: "ongoing",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            console.log("added to db");
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "yyyy-MM-dd") : "";
    },
  },
};
</script>
