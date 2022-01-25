export default {

    namespaced: true,
    state: {
        //  burgerIsActive: false,
        bodyLock: false,
        filterShow: true,
        defaultWidthParams: {
            mobile: '320',
            tablet: '768',
            pc: '1925',
        },
        minWidth: { //Наглядно, как будет использоваться:
            // '320': false,
            // '768': false,
            // '1024': false,
        },
    },
    getters: {
        //burgerIsActive: state => state.burgerIsActive,
        burgerIsActive: state => state.burgerIsActive,
        bodyLock: state => state.bodyLock,
        // filterShow: state => state.filterShow,
        nodeBody: () => document?.querySelector('body'),
        defaultWidthParams: state => state.defaultWidthParams,
        minWidth: state => state.minWidth,
        minWidthMobile: state => state.minWidth[state.defaultWidthParams.mobile],
        minWidthTablet: state => state.minWidth[state.defaultWidthParams.tablet],
        minWidthPC: state => state.minWidth[state.defaultWidthParams.pc]


    },
    mutations: {
        changeBurger(state, status) {
            state.burgerIsActive = status;
        },
        showFilter(state, status) {
            state.filterShow = status;
        },
        changeBodyLock(state, status) {
            state.bodyLock = status;
        },
        changeMinWidth(state, { width, status }) {
            state.minWidth[width] = status;
        },
    },
    actions: {
        toggleBurger(store) {
            store.commit('changeBurger', !store.getters.burgerIsActive);
            //store.actions.toggleBodyLock();
            store.dispatch('toggleBodyLock');
        },
        /*         toggleFilter(store) {
                    store.commit('showFilter', !store.getters.filterShow)
                    store.dispatch('toggleBodyLock');
                }, */
        toggleBodyLock({ getters, commit }) {
            commit('changeBodyLock', getters.burgerIsActive || getters.filterShow);   //* body lock, 
            //* может зависеть от нескольких параметров
            //  (store.getters.bodyLock) ? document.body.classList.add('lock') : document.body.classList.remove('lock')
            if (getters.nodeBody) {
                (getters.bodyLock) ? getters.nodeBody.classList.add('lock') : getters.nodeBody.classList.remove('lock')
            }
        },

        mediaQuery(store, { op, array, media }) {
            let deleteMathMedia = (media, value) => {
                let mediaQuery = `(${media}: ${value}px)`
                let mql = window.matchMedia(mediaQuery);
                mql.removeEventListener("change", addListener)
            }
            let addMathMedia = (media, value) => {
                let mediaQuery = `(${media}: ${value}px)`
                let mql = window.matchMedia(mediaQuery);
                mql.addEventListener("change", addListener)
                if (mql.matches) {
                    store.commit('changeMinWidth', { width: value, status: true });
                }
                else {
                    store.commit('changeMinWidth', { width: value, status: false });
                }
            }
            if (op === 'add') {
                array.forEach(el => {
                    addMathMedia(media, el)
                });
            }
            else if (op === 'delete') {
                array.forEach(el => {
                    deleteMathMedia(media, el)
                });
            }
            function addListener(e) {
                if (e.matches) {
                    store.commit('changeMinWidth', { width: e.media.replace(/[^0-9]+/g, ""), status: true });
                }
                else {
                    store.commit('changeMinWidth', { width: e.media.replace(/[^0-9]+/g, ""), status: false });
                }
            }
        }
    }
}