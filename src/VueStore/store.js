import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            monAnList: [
                {
                    id: '1',
                    nameMonAn: 'Cháo Hành',
                    noiDung: 'Món ăn rất là ngon',
                    hinhAnh: 'hihi',
                    loai: 'AnNhanh',
                    gia: 10000
                },
                {
                    id: '2',
                    nameMonAn: 'Thịt Chó Mắm Tôm',
                    noiDung: 'Món ăn rất là ngon',
                    hinhAnh: 'hihi',
                    loai: 'AnNhanh',
                    gia: 100300
                },
                {
                    id: '3',
                    nameMonAn: 'Cơm Đường Cháo Chợ',
                    noiDung: 'Món ăn rất là ngon',
                    hinhAnh: 'hihi',
                    loai: 'AnNhanh',
                    gia: 100300
                },
                {
                    id: '4',
                    nameMonAn: 'Cơm no rượu say',
                    noiDung: 'Món ăn rất là ngon',
                    hinhAnh: 'hihi',
                    loai: 'AnKem',
                    gia: 100300
                }
            ],
            searchName: '',
        }
    },


    getters: {
        filterLoaiMonAn(state) {
            return state.monAnList.filter(loai => loai.loai === 'AnNhanh')
        },
        monAnListSearchName(state) {
            return state.monAnList.filter(loai => loai.nameMonAn.toLowerCase().includes(state.searchName.toLowerCase()))
        }

    },
    mutations: {
        searchNameMutation(state, payload) {
            console.log('payload', payload)
            state.searchName = payload
        }
    },
    actions: {
        searchNameMutation(context, payload) {
            context.commit('searchNameMutation', payload)
        }
    }

})
export default store

