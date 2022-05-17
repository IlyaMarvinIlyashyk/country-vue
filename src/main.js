import { createApp } from "vue";
import App from "./App.vue";
// import SearchResults from "./components/SearchResults.vue";
import SearchBar from "./components/SearchBar.vue";

const app = createApp(App);

app.component("search-bar", SearchBar);
// app.component("search-results", SearchResults);

app.mount("#app");
