// Kombucha
import kombuchaOverview from './kombucha/overview.md';
import kombuchaMasterRecipe from './kombucha/masterRecipe.md';
import lavenderKombucha from './kombucha/lavenderKombucha.md';
//Kefir
import kefirOverview from './kefir/overview.md';
import kefirMasterRecipe from './kefir/masterRecipe.md';
//Tea
import teaOverview from './tea/overview.md';
import teaMasterRecipe from './tea/masterRecipe.md';


let md = require('markdown-it')({
	html: true,
})

let data = {
	"drinks": [
		{
			"name": "Kombucha",
			"overviewContent": md.render(kombuchaOverview),
			"masterRecipeContent": md.render(kombuchaMasterRecipe),
			"recipes": [
				{
					"name": "Lavender Kombucha",
					"recipeContent": md.render(lavenderKombucha)
				}
			]
		},
		{
			"name": "Kefir",
			"overviewContent": md.render(kefirOverview)
			// "masterRecipeContent": md.render(kefirMasterRecipe),
		}
		// {
		// 	"name": "Tea",
		// 	"overviewContent": md.render(teaOverview),
		// 	"masterRecipeContent": md.render(teaMasterRecipe),
		// }
	]
}

export default data;