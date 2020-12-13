import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order
                    <select>
                        <option value="">All</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-category" >
                    Filter
                    <select>
                        <option value="">All</option>
                        <option value="oldest">Oldest</option>
                        <option value="latest">Latest</option>
                    </select>
                </div>
            </div>
        )
    }
}
