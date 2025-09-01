  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) → 

Conversions, Performance Notes

Conversions in assignments between data objects with different data types or specifying a data object in an operand position where a different data type is expected, cause runtime costs. To avoid these costs, conversions should be avoided if possible and only data objects of the same type should be assigned to one another.

Executable Example

[Conversion Costs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_costs_abexa.htm)

Continue
![Example](exa.gif "Example") [Conversion Costs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_costs_abexa.htm)