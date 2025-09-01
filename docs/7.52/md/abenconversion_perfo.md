  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) → 

Conversions - Performance Notes

Conversions in assignments between data objects with different data types, or specifying a data object in an operand position where a different data type is expected, produce runtime costs. To avoid these costs, conversions should be avoided where possible and only data objects of the same type should be assigned to one another.

Executable Example

[Conversion Costs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_costs_abexa.htm)

Continue
![Example](exa.gif "Example") [Conversion Costs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_costs_abexa.htm)