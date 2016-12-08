import Ember from 'ember';
import {default as math, PI} from "math";

const { Route, getOwner, get } = Ember;

export default Route.extend({
    beforeModel() {
        this.replaceWith('posts.index');
    }
});
