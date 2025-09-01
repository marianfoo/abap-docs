  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversions, Performance Notes, ABENCONVERSION_PERFO, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Conversions, Performance Notes

Conversions in assignments between data objects with different data types or a data object specified in an operand position where a different data type is expected, cause runtime costs. To avoid these costs, conversions should be avoided if possible and only data objects of the same type should be assigned to one another.

Executable Example

[Conversion Costs](javascript:call_link\('abenconversion_costs_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Conversion Costs](javascript:call_link\('abenconversion_costs_abexa.htm'\))