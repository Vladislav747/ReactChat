import { axios } from "../../core";

export default {
    getAll: () => axios.get("/dialogs"),
    create: ({ partner, text }) => axios.post("/dialogs", { partner, text }),
    delete: (id) => axios.delete(`/dialogs/${id}`),
};
