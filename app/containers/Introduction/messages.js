/*
 * Introduction Messages
 *
 * This contains all the text for the Introduction component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Introduction.header',
    defaultMessage: 'This is Introduction container !',
  },
  notice: {
    id: 'app.containers.Introduction.notice',
    defaultMessage: "Notice : L'objectif est de diviser par 4 les émissions de gaz à effet de serre (GES) liées à l'énergie"
    + "en France (par rapport à 1990), lorsque vous aurez réussie, le thermomètre ci-dessous"
    + "sera vert, en attendant il vous indique les émissions de GES par habitant. "
    + "Pour réduire les émissions en France vous disposez de 3 outils : "
    + "- La population française"
    + "- Le niveau de consommation énergétique pour des secteurs clés. Ce curseur représente"
    + "en même temps notre niveau de sobriété (changement social et culturel) et notre niveau"
    + "d'efficacité énergétique (changement technique)."
    + "- La répartition de la production selon les énergies dans chaque secteur."
    + "Bonne chance,"

  },
});
