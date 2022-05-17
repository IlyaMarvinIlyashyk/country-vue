import { createApp } from "vue";
import App from "./App.vue";
import SearchResults from "./components/SearchResults.vue";

const app = createApp(App);

app.component("search-results", SearchResults);

app.mount("#app");
