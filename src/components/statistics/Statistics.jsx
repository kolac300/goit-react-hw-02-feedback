import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Li } from './Statistics.styled'

export default class Statistics extends Component {
	static propTypes = {
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
		total: PropTypes.number.isRequired,
		positivePercentage: PropTypes.number.isRequired,
	}
	render() {
		const { good, neutral, bad, total, positivePercentage } = this.props
		return (
			<>
				<ul>
					<Li>good: {good}</Li>
					<Li>neutral: {neutral}</Li>
					<Li>bad: {bad}</Li>
					<Li>sumTotal: {total}</Li>
					<Li>percentage: {positivePercentage}%</Li>
				</ul>
			</>
		)
	}
}
