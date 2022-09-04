import Vue from "vue";

export const state = () => ({
  api: [],
  detail: {},
  answers: [],
});

export const getters = {
  instruksi(state: any) {
    return state.api.instructions;
  },
  duration(state: any) {
    return state.api.duration;
  },
  durationTotal(state: any) {
    return state.api.duration;
  },
};

export const mutations = {
  addAnswer(state: any, val: any) {
    let exist = false;
    if (state.answers.length > 0) {
      exist = state.answers.find((answer: any) => {
        return answer.id === val.id;
      });
    }
    if (exist) {
      const index = state.answers.indexOf(exist);
      state.answers[index] = Object.assign(exist, val);
    } else {
      state.answers = [...state.answers, val];
    }
  },
  state(state: any, payload: any) {
    Vue.set(state, payload.key, payload.val);
  },
};

export const actions = {
  nuxtServerInit() {},
};
