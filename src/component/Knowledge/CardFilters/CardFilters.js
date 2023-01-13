import React from 'react'
import "./CardFilters.css"

function CardFilters(props) {
    const handleClick = (filter) =>{
        props.setFilterStatus(filter)
    }
  return (
    <div className="tools">
        <ul className="tools-filter">
          <li className={`tools-filter-option ${props.filterStatus==="ALL"?"active":""}`} onClick={()=>handleClick("ALL")}>ALL</li>
          <li className={`tools-filter-option ${props.filterStatus==="LIVE"?"active":""}`}  onClick={()=>handleClick("LIVE")}>LIVE</li>
          <li className={`tools-filter-option ${props.filterStatus==="DRAFT"?"active":""}`}  onClick={()=>handleClick("DRAFT")}>DRAFT</li>
          <li className={`tools-filter-option ${props.filterStatus==="ARCHIVE"?"active":""}`}  onClick={()=>handleClick("ARCHIVED")}>ARCHIVED</li>
        </ul>
        <select
          className="tools-filter-input"
          value={props.team}
          onChange={(e) => props.setTeam(e.target.value)}
        >
          <option value={"Select team"}>Select team</option>
          <option value={"Marketing"}>Marketing</option>
          <option value={"Sales"}>Sales</option>
        </select>
      </div>
  )
}

export default CardFilters