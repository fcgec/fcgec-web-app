import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBox from "../components/searchBox"

import eventStyles from './events.module.scss'

const EventsPage = () => {
	const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
				filter:{fields:{type:{eq:"event"}}},
                sort: {fields: [frontmatter___date], order: DESC}
			) {
                edges {
                    node {
						id
                        frontmatter {
                            title
                            date
                            author
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

	function partition(array, callback) {
		return array.reduce(function (result, element, i) {
			callback(element, i, array)
				? result[0].push(element)
				: result[1].push(element);

			return result;
		}, [[], []]
		);
	};

	// Function to split array into into New Events and Old Events
	const [newEvents, oldEvents] = partition(data.allMarkdownRemark.edges, edge => new Date(edge.node.frontmatter.date) > Date.now())

	const [name, setName] = useState('');
	const [search, setSearch] = useState([]);

	// Function to handle search, might not be the most efficient
	// But it gets the job done for now
	const handleChange = event => {
		// Update value of name
		setName(event.target.value);
		// Reset search
		setSearch([]);

		// If no search term then, show all
		if (event.target.value.length === 0) {
			setSearch([]);
		} else {
			// If search term then
			oldEvents.forEach(event => {
				// Check if name matches members' name
				if (new RegExp(name, 'gi').test(event.node.frontmatter.title)) {
					// if matched, add to search array
					setSearch(prevArray => [...prevArray, event]);
				}
			})
		}
	}

	const reset = () => {
		// Rest Input if not empty
		if (name !== '')
			setName('');
		// Reset searched members only if not empty
		if (search.length !== 0)
			setSearch([]);
	}

	return (
		<Layout>
			<SEO title="Events"
				description="Workshops and Events by FOSS Community GEC."
			/>
			<section className="pageTitle">
				<h2>Events</h2>
			</section>

			<div className="container">
				<h3 className={eventStyles.whichEvent}>Upcoming Events</h3>
				{!newEvents.length ? <h4 className={eventStyles.checkEvent}>No upcoming events.</h4> :
					<div className={eventStyles.eventsGrid}>
						{newEvents.map(edge => (
							<div key={edge.node.id} className={eventStyles.event}>
								<Link to={`/events/${edge.node.fields.slug}`}>
									<h4>{edge.node.frontmatter.title}</h4>
									<p>{edge.node.frontmatter.date}</p>
									<p>{edge.node.excerpt}</p>
								</Link>
							</div>
						))}
					</div>
				}
			</div>

			<div className="container">
				<h3 className={eventStyles.whichEvent}>Past Events</h3>
				<SearchBox name={name} handleChange={handleChange} reset={reset} />


				<div className={eventStyles.eventsGrid}>
					{name === '' ? oldEvents.map(edge => (
						<div key={edge.node.id} className={eventStyles.event}>
							<Link to={`/events/${edge.node.fields.slug}`}>
								<h4>{edge.node.frontmatter.title}</h4>
								<p>{edge.node.frontmatter.date}</p>
								<p>By {edge.node.frontmatter.author}</p>
								<p>{edge.node.excerpt}</p>
							</Link>
						</div>
					)) : search.length !== 0 ? search.map(edge => (
						<div key={edge.node.id} className={eventStyles.event}>
							<Link to={`/events/${edge.node.fields.slug}`}>
								<h4>{edge.node.frontmatter.title}</h4>
								<p>{edge.node.frontmatter.date}</p>
								<p>By {edge.node.frontmatter.author}</p>
								<p>{edge.node.excerpt}</p>
							</Link>
						</div>)) : <h4>Couldn't find Event: "{name}"</h4>}
				</div>

			</div>
		</Layout >
	)
}

export default EventsPage
