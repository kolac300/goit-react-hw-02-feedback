import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './FeedbackOptions.styled'
export class FeedbackOptions extends Component {
	static {
		FeedbackOptions.propTypes = {
			options: PropTypes.arrayOf(PropTypes.string),
			onLeaveFeedback: PropTypes.func.isRequired
		}
	}
	render() {
		const { options, onLeaveFeedback } = this.props

		return (<>
			{options.map(
				(feedBack, idx) =>
					<Button feedBack={feedBack}
						key={idx}
						onClick={() => onLeaveFeedback(feedBack)}>
						{feedBack}
					</Button>)}
		</>
		)
	}
}