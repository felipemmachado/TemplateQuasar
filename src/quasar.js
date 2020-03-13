import Vue from 'vue';

import './styles/quasar.scss';
import lang from 'quasar/lang/pt-br';
import '@quasar/extras/material-icons/material-icons.css';
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSeparator,
  QCard,
  QCardSection,
  QInput,
  QForm,
  QCardActions,
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSeparator,
    QCard,
    QInput,
    QCardSection,
    QCardActions,
    QForm,
  },
  directives: {
  },
  plugins: {
  },
  lang,
});
