import posts from '$lib/data/posts.json';
import c4rrus from '$lib/assets/c4rrus.png';
import Ucup_Menjelajah_Nusantara from '$lib/assets/webgame.png';

const imageMap: Record<string, string> = {
	'c4rrus.png': c4rrus,
	'webgame.png': Ucup_Menjelajah_Nusantara
};

export const load = () => {
	return {
		posts: posts.map((post) => ({
			...post,
			image: imageMap[post.image] ?? c4rrus
		}))
	};
};
