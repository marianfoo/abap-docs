  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

Conversions - Performance Notes

Conversions in assignments between data objects with different data types, or specifying a data object in an operand position where a different data type is expected, produce runtime costs. To avoid these costs, conversions should be avoided where possible and only data objects of the same type should be assigned to one another.

Executable Example

[Conversion Costs](javascript:call_link\('abenconversion_costs_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Conversion Costs](javascript:call_link\('abenconversion_costs_abexa.htm'\))