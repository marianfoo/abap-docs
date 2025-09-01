  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Special Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_move.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: destination1 = destination2 = ..., ABAPMOVE_MULTIPLES, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

destination1 = destination2 = ...

Syntax

destination1 = destination2 = ... = destination = rhs.

Effect

The [assignment operator \=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm) can be used to perform multiple assignments at once within a single statement. This statement is the same as:

destination  = rhs
         ... = destination
destination2 = ...
destination1 = destination2.

The same settings can be specified for rhs as for the simple [assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm). Only existing variables can be specified for destination, destination1, destination2, but no [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declarations.htm).

Hint

Any conversions are performed for each assignment, which means that a value assigned to a data object on the left side may be converted multiple times if the operands have different data types. To assign the value of lhs to different data objects with one conversion each, multiple statements are needed.

Example

After the assignments, all involved data objects are given the name "Hugo".

DATA: name  TYPE string,
      name1 TYPE string,
      name2 TYPE string,
      name3 TYPE string.
name = \`Hugo\`.
name3 = name2 = name1 = name.