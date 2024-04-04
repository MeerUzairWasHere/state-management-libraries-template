
export const createSelectors = (_store) => {
    let store = _store
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ; (store.use)[k] = () => store((s) => s[k])
    }

    return store
}