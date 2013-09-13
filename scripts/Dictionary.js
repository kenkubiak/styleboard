define(["./Module"], function ( Module ) {

    var Dictionary = Backbone.Collection.extend({

        model: Module,

        theModule: function theModule( name ) {
            var dict = this,
                result = this.findWhere({ name: name });

            if (!result) {
                result = new Module({ name: name });
                this.add(result);
            }

            return result;
        },

        comparator: function comparator( dict ) {
            return dict.get('name');
        }

    }); // end of Dictionary collection

    return Dictionary;
});
