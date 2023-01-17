import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SectionWrapper } from './Section.styled'

export default class Section extends Component {
	static propTypes = {
		tittle: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired
	}
	render() {
		const { tittle, children } = this.props
		return (
			<SectionWrapper>
				<h1>{tittle}</h1>
				<div>{children}</div>
			</SectionWrapper>
		)
	}
}
