  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Function Modules](javascript:call_link\('abenfunction_modules_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Global%20Parameters%2C%20ABENGLOBAL_PARAMETERS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Global Parameters

The formal parameters of the [interface](javascript:call_link\('abenfunction.htm'\)) of a function module can be made known globally by choosing Edit → Interface → Globalize Parameters in the Function Builder. Then the field Global is selected in the properties of the function module. The formal parameters of a global interface have the following properties:

-   All parameters that are completely typed and for which pass by value is defined are handled as if identically named global data objects were declared in the top include. This means they are visible in the entire function pool and, when the function module is exited, they retain their value.
-   All other parameters are handled as if identically named data objects were declared in the top include (two in each case for [table parameters](javascript:call_link\('abaptables_parameters_obsolete.htm'\)), one for the table body and one for the header line). They can however only be used during execution of the function module. If a parameter of this type is accessed when the function module is not executed, the runtime error GETWA\_NOT\_ASSIGNED occurs, since these parameters are implemented internally by field symbols. A data object is only assigned to these field symbols during the execution of the function module.

In the function pool, no global data objects with the same name as a global parameter may be created. If multiple function modules in a function pool have global interfaces, identically named parameters must have identical definitions.

Hint

The use of global interface parameters is obsolete and interfaces should generally not be globalized in new function modules.