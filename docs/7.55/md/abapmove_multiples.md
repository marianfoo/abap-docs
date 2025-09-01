  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Special Assignments](javascript:call_link\('abenabap_data_move.htm'\)) → 

destination1 = destination2 = ...

Syntax

destination1 = destination2 = ... = destination = rhs.

Effect

The [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)) can be used to perform multiple assignments at once within a single statement. This statement is the same as:

destination  = rhs
         ... = destination
destination2 = ...
destination1 = destination2.

The same settings can be specified for rhs as for the simple [assignment](javascript:call_link\('abenequals_operator.htm'\)). Only existing variables can be specified for destination, destination1, destination2, but no [inline declarations](javascript:call_link\('abendata_inline.htm'\)).

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