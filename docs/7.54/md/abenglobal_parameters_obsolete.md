---
title: "Global Parameters"
description: |
  The formal parameters of the interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) of a function module can be made known globally by choosing Edit → Interface → Globalize Parameters in Function Builder. Then the field Global is selected in the properties of the fu
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_parameters_obsolete.htm"
abapFile: "abenglobal_parameters_obsolete.htm"
keywords: ["select", "do", "while", "if", "case", "data", "field-symbol", "abenglobal", "parameters", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_modules_obsolete.htm) → 

Global Parameters

The formal parameters of the [interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) of a function module can be made known globally by choosing Edit → Interface → Globalize Parameters in Function Builder. Then the field Global is selected in the properties of the function module. The formal parameters of a global interface have the following properties:

-   All parameters that are fully typed and are defined for being passed as a value are treated as if global data objects of the same name were declared in the Top Include. This means they are visible in the same function group and, when the function module is exited, they retain their value.

-   All the other parameters are handled as if data objects of the same name were declared in the top include (for [table parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm), two in each case − one for the table body, one for the header line). But they can only be used during execution of the function module. If a parameter of this type is accessed when the function module is not executed, the runtime error GETWA\_NOT\_ASSIGNED occurs, since these parameters are realized internally by field symbols. A data object is only assigned to these field symbols while the function module is being executed.

In the function group, no global data objects with the same name (such as a global parameter) may be created. If multiple function modules in a function group have global interfaces, similarly named parameters must have identical definitions.

Note

The use of global interface parameters is obsolete and, in new function modules, interfaces should generally not be globalized.