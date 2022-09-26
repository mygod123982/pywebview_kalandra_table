import { defineStore } from 'pinia'
import { resetData } from "@/utils"
const table_type_reset = 0
export const useTableStatusStore = defineStore('tableStatus', {
    state: () => ({
        table_type: table_type_reset, // 0 for 4x5 1 for 5x5 2 for 5x4
        table_data_source: resetData(table_type_reset)
    }),

    actions: {
        // 设置 表格类型
        setTableType(type) {
            if (type === this.table_type) return
            this.table_type = type
            this.table_data_source = resetData(this.table_type)
        },

        setTableData(rowIdx, colIdx) {
            this.table_data_source[rowIdx][colIdx] = +!this.table_data_source[rowIdx][colIdx]
        }
    },

})