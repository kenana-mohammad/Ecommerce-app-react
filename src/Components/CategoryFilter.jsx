import React from 'react'
import "./../index.css"
function CategoryFilter({categories,selected,onFilterChange}) {

return (
    <div className="category-filter">
      <label className="form-label me-2 ">Filter by category:</label>
        <select name="select" id=""
           className="form-select w-auto d-inline-block"
           value={selected}
           onChange={(e)=>{onFilterChange(e.target.value)}}
           
        >
            {
                categories.map((category)=>{
                    return(
 <option key={category} value={category}>{category}</option>

                    )
                })
            }

        </select>
      </div>
  )
}

export default CategoryFilter