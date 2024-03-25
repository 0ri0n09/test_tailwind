[![Netlify Status](https://api.netlify.com/api/v1/badges/8d15bbfe-78cd-4e0e-8729-68c1ca6d8bce/deploy-status)](https://app.netlify.com/sites/frosty-feynman-7686e6/deploys)
# Tailwind CSS Website Clones (Tailwind CSS examples)
These are website clones/examples made using [Tailwind CSS](tailwindcss.com). 

https://preline.co/docs/index.html

https://tailwindcss.com/docs/installation

https://www.figma.com/file/TFuT3mLoyZ6TJ3853QrkMC/Untitled?type=design&node-id=0%3A1&mode=design&t=cOT7VdkaNz1QJkYT-1

https://tailwindcss.com/showcase


void Theme::doRecomputePalette (void) {
    set_bgPrimary   QS ("#ffffff"));
    set_bgSecondary QS ("#fafafa"));
    set_bgHighlight QS ("#ffccbc"));
    set_bgClickable QS ("#fd5e0f"));
    set_bgGradient1 QS ("#ffdb8f"));
    set_bgGradient2 QS ("#fa5f6e"));
    set_bgDanger    QS ("#d40000"));
    set_bgSuccess   QS ("#5b993e"));
    set_bgWarning   QS ("#f3b000"));
    set_fgText      QS ("#000000"));
    set_fgSoft      QS ("#616161"));
    set_fgBorder    QS ("#e4e4e4"));
    set_fgNormal    QS ("#b9b9b9"));
    set_fgSelected  QS ("#fd5e0f"));
    set_fgDanger    QS ("#b40000"));
    set_fgSuccess   QS ("#2e710c"));
}

//////////////////////////////////// TO DO /////////////////////////////////////////


- Modifier SVG round-circle-add + webcam
- Sur le dashboard, mes résa à venir, si beaucoup de résa, envisager un accordeon avec un bouton "voir plus"
- Faire une modale détails d'une résa
- Pour les modales, comme la sidebar, fermer la modal si on clique en dehors du layout
- Sur mobile/tablette/ecran scrollable, quand tu es sur la sélection d'un animal (new resa par exemple), tu ne peux pas scroller sur tactile, la sélection t'en empeche, donc remplacer par un bouton +, puis X pour palier ce soucis
- Footer / sidebar, mettre en valeur le picto de la page actuelle
- Sur tablette, faire une sidebar déployable (comme sur mobile), mais voir si on peut pas faire une deployable avec picto déja apparent, comme footer mobile mais sur le coté
- Finir routing footer
- Carrousel promo dashboard
- Finir new resa services
- Calendar à transfomer en date range picker
- Enlever la sidebar en tablette, afficher le footer mobile

//////////////////////////////////// DONE /////////////////////////////////////////

- Remplacer label "caméra" par "webcam"
- Vaccins, mettre les calendriers (Pas mis pour éviter la surcharge de code en attendant les components)
- Vaccins chiens, enlever certains vaccins
- Bouton du carrousel placé differement selon les supports
- Finir le routing de la sidebar (modalInfo + modalPromo)
- Problème du footer mobile, avec le menu burger quand la sidebar est ouverte, ça casse l'apparition/disparition du footer
- Footer qui cache les boutons suivant/retour
- A la création du compte, empecher le copier coller des infos
- Horloge, choix de l'heure caché sur tablette et mobile
- Horloge, mini popup pas responsive
- Horloge, faire en sorte que les ":" se mettent seules quand on a rempli les heures
- Horloge des résa, bloquer les heures et minutes à 23h59