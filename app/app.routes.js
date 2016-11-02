"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var complex_inputs_component_1 = require('./complex-inputs/complex-inputs.component');
var vertical_alignment_component_1 = require('./vertical-alignment/vertical-alignment.component');
exports.routes = [
    {
        path: 'vertical-alignment',
        component: vertical_alignment_component_1.VerticalAlignmentComponent
    },
    {
        path: 'complex-inputs',
        component: complex_inputs_component_1.ComplexInputsComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
