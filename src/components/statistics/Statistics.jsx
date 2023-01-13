import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Li } from './Statistics.styled'

export default class Statistics extends Component {
	static {
		Statistics.propTypes = {
			good: PropTypes.number.isRequired,
			neutral: PropTypes.number.isRequired,
			bad: PropTypes.number.isRequired,
			total: PropTypes.func.isRequired,
			positivePercentage: PropTypes.func.isRequired,
		}
	}
	render() {
		const { good, neutral, bad, total, positivePercentage } = this.props
		const sumTotal = total(good, neutral, bad)
		const percentage = Math.floor(positivePercentage(good, sumTotal))
		return (
			<>
				{sumTotal ?
					<ul>
						<Li>good: {good}</Li>
						<Li>neutral: {neutral}</Li>
						<Li>bad: {bad}</Li>
						<Li>sumTotal: {sumTotal}</Li>
						<Li>percentage: {percentage}%</Li>
					</ul> :
					<p>No feedback given</p>
				}
			</>
		)
	}
}
