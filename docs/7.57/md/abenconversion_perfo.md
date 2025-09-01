---
title: "Conversions, Performance Notes"
description: |
  Conversions in assignments between data objects with different data types or a data object specified in an operand position where a different data type is expected, cause runtime costs. To avoid these costs, conversions should be avoided if possible and only data objects of the same type should be a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_perfo.htm"
abapFile: "abenconversion_perfo.htm"
keywords: ["do", "if", "data", "types", "abenconversion", "perfo"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversions, Performance Notes, ABENCONVERSION_PERFO, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Conversions, Performance Notes

Conversions in assignments between data objects with different data types or a data object specified in an operand position where a different data type is expected, cause runtime costs. To avoid these costs, conversions should be avoided if possible and only data objects of the same type should be assigned to one another.

Executable Example

[Conversion Costs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_costs_abexa.htm)

Continue
![Example](exa.gif "Example") [Conversion Costs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_costs_abexa.htm)