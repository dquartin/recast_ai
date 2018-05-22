// Comparaison des valeurs en recursive avec la fonction Math.max qui renvoie la valeur max
// Si l'arbre est null, renvoie 0;

module.exports = algo = (tree, max) => 
	!tree ? max : Math.max(tree.value, algo(tree.left, max), algo(tree.right, max));
