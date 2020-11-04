import React from 'react'
import {arrayOf, shape, number, string, boolean} from 'prop-types'

const childView = ({
    todoList,
    name,
    age,
    array,
    trueOrFalse,
    addFunc,
    obj
}) => {
    console.log(name, age, array, trueOrFalse, addFunc, obj)
    return (

        <div> {todoList.map(({ id, todo }) => {
            return <li key={id}>{todo}</li>
        })}</div>


    )
}

childView.propTypes = {
todoList: arrayOf(
shape({
id: string.isRequired,
todo: string.isRequired
})
)
}

export default childView
