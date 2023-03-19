import { request, gql } from "graphql-request";
import { BlogType } from "src/interfaces/blogs.props";
import { Categorytype } from "src/interfaces/category.interface";

const graphQlApi = process.env.NEXT_GRAPHQL_API as string;

export const BlogService = {
	async getAllBlogs() {
		const quary = gql`
			query getBlogs {
				blogs {
					title
					slug
					excerpt
					id
					updatedAt
					publishedAt
					category {
						... on Category {
							id
							label
							slug
						}
					}
					author {
						name
						avatar {
							url
						}
					}
					image {
						url
					}
					description {
						text
					}
				}
			}
		`;

		const result = await request<{ blogs: BlogType[] }>(graphQlApi, quary);
		return result.blogs;
	},

	async getLatestBlog() {
		const quary = gql`
			query LastBlogs {
				blogs(last: 2) {
					title
					slug
					id
					publishedAt
					author {
						name
						avatar {
							url
						}
					}
					image {
						url
					}
				}
			}
		`;

		const result = await request<{ blogs: BlogType[] }>(graphQlApi, quary);
		return result.blogs;
	},

	async Category() {
		const quary = gql`
			query Category {
				categories {
					slug
					label
					id
				}
			}
		`;

		const result = await request<{ categories: Categorytype[] }>(
			graphQlApi,
			quary
		);
		return result.categories;
	},
};
