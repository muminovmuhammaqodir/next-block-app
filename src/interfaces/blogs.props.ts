export interface BlogType {
	title: string;
	slug: string;
	excerpt: string;
	id: string;
	updatedAt: string;
  createdAt: string;
  publishedAt: string;
	category: {
		Category: {
			id: string;
			label: string;
			slug: string;
		};
	};
	author: {
		name: string;
		avatar: {
			url: string;
		};
	};
	image: {
		url: string;
	};
	description: {
		text: string;
		html: string;
	};
}
