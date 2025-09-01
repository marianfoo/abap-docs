  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Function Modules](javascript:call_link\('abenfunction_modules_obsolete.htm'\)) → 

Global Parameters

The formal parameters of the [interface](javascript:call_link\('abenfunction.htm'\)) of a function module can be made known globally by choosing Edit → Interface → Globalize Parameters in Function Builder. Then the field Global is selected in the properties of the function module. The formal parameters of a global interface have the following properties:

-   All parameters that are fully typed and are defined for being passed as a value are treated as if global data objects of the same name were declared in the Top Include. This means they are visible in the same function group and, when the function module is exited, they retain their value.

-   All the other parameters are handled as if data objects of the same name were declared in the top include (for [table parameters](javascript:call_link\('abaptables_parameters_obsolete.htm'\)), two in each case − one for the table body, one for the header line). But they can only be used during execution of the function module. If a parameter of this type is accessed when the function module is not executed, the runtime error GETWA\_NOT\_ASSIGNED occurs, since these parameters are realized internally by field symbols. A data object is only assigned to these field symbols while the function module is being executed.

In the function group, no global data objects with the same name (such as a global parameter) may be created. If multiple function modules in a function group have global interfaces, similarly named parameters must have identical definitions.

Note

The use of global interface parameters is obsolete and, in new function modules, interfaces should generally not be globalized.