---
title: "Syntax"
description: |
  destination1 = destination2 = ... = destination = rhs. Effect The assignment operator =(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) can be used to perform multiple assignments within a single statement. This statement is the same as: destination  = rhs ...
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_multiples.htm"
abapFile: "abapmove_multiples.htm"
keywords: ["do", "if", "data", "types", "abapmove", "multiples"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Special Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_move.htm) → 

destination1 = destination2 = ...

Syntax

destination1 = destination2 = ... = destination = rhs.

Effect

The [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) can be used to perform multiple assignments within a single statement. This statement is the same as:

destination  = rhs
         ... = destination
destination2 = ...
destination1 = destination2.

The same settings can be specified for rhs as for the simple [assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm). Only existing variables can be specified for destination, destination1, destination2, but no [inline declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm).

Note

Any conversions are performed in every single assignment, which means that a value assigned to a data object on the left side may be converted more than once if the operands have different data types. To assign the value of lhs to different data objects with one conversion each, multiple statements are needed.

Example

After the assignments, all data objects in question are given the name "Hugo".

DATA: name  TYPE string,
      name1 TYPE string,
      name2 TYPE string,
      name3 TYPE string.
name = \`Hugo\`.
name3 = name2 = name1 = name.