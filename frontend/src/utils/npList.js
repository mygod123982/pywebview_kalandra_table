
class Node {
    constructor({ is_del = false, value = 0, left , right, top , bottom, position }) {
        this.is_del = false
        this.value = value
        this.left = left
        this.right = right
        this.top = top
        this.bottom = bottom
        this.is_add = false
        this.pos = position
    }

    del() {
        this.is_del = true
    }

    add() {
        this.value = true
        this.is_add = true
    }

    toObj() {
        return {
           value: this.value,
           isDel: this.is_del,
           isAdd: this.is_add
        }
    }
}


class Grap {
    constructor({nodes = []}) {
        this.nodes = nodes
        this.vertices = null
        this.far_nodes = []
        this.Grap_nodes = []
    }

    // 找到顶点
    findVertices({ node = this.Grap_nodes[0][0], vertices = []}) {
        let has_slibs = 0
        if (node.value) {
            if (node.top) has_slibs ++ 
            if (node.bottom) has_slibs ++ 
            if (node.left) has_slibs ++
            if (node.right) has_slibs ++
            if (has_slibs == 1) vertices.push()
        }

        return vertices
    }

    // Serialization
    serialization() {
        // nodeRow is y axis
        for (let y = 0; y < this.nodes.length; y ++) {
            const nodeRow = this.nodes[y]
            if(!this.Grap_nodes[y]) this.Grap_nodes[y] = []
            for(let x = 0; x < nodeRow.length; x++) {
                let top = y === 0 ? null : this.Grap_nodes[y - 1][x]
                let bottom = y + 1 >=  this.nodes.length ? null : this.nodes[y + 1][x]
                let left = x === 0 ? null : this.Grap_nodes[y][x - 1]
                let right = x + 1 >= nodeRow.length ? null : nodeRow[x + 1]
               
                if (bottom !== null && !(bottom instanceof Node)) {
                    if(!this.Grap_nodes[y + 1]) this.Grap_nodes[y + 1] = []
                    bottom = new Node({
                        top: null,
                        bottom: null,
                        left: null,
                        right:null,
                        position: {x, y: y + 1},
                        value: bottom
                    })
                    this.Grap_nodes[y + 1][x] = bottom
                }
                
                if (right !== null && !(right instanceof Node)) {
                    right = new Node({
                        top: null,
                        bottom: null,
                        left: null,
                        right:null,
                        value: right
                    })
                    this.Grap_nodes[y][x + 1] = right
                }
                
                const current_node = this.Grap_nodes[y][x] instanceof Node? this.Grap_nodes[y][x] : new Node({
                    left,
                    right,
                    top,
                    bottom,
                    position: {x, y},
                    value: nodeRow[x]
                })

                top && (top.bottom = current_node)
                bottom && (bottom.top = current_node)
                left && (left.right = current_node)
                right && (right.left = current_node)

                this.Grap_nodes[y][x] = current_node
            }
        }
        
        return this.Grap_nodes
    }
}


function test () {
    const list = resetData(2)
    const grap_list = new Grap({
        nodes: list
    })

    console.log(grap_list.serialization())
}


export const types = {
    0: {
        x: 4,
        y: 5
    },
    1: {
        x: 5,
        y: 5
    },
    2: {
        x: 5,
        y: 4
    }
}

export const resetData = (type = 0) => {
    const {x, y} = types[type]
    const result = []
    for (let i = 0; i < y; i++) {
        result.push(Array(x).fill(0))
    }
    return result
}

test()