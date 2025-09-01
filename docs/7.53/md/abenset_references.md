---
title: "Setting Reference Variables"
description: |
  Special rules apply when setting the reference or pointer of a reference variable: -   Assignment Rules for Reference Variables(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_references.htm) A reference is always set as an up cast(https://help.sap.com/doc/abapdocu_753_
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenset_references.htm"
abapFile: "abenset_references.htm"
keywords: ["do", "if", "try", "data", "abenset", "references"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_assignments.htm) → 

Setting Reference Variables

Special rules apply when setting the reference or pointer of a reference variable:

-   [Assignment Rules for Reference Variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_references.htm)

A reference is always set as an [up cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenup_cast_glosry.htm "Glossary Entry") or as a [down cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendown_cast_glosry.htm "Glossary Entry"). When a reference variable is assigned to another reference variable, two different assignment operators are used plus a constructor operator.

-   [\=, ?= - UP Cast and Down Cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_cast.htm)

-   [CAST - Casting Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm)

References in data reference variables can point to existing data objects. Here, a statement and a constructor operator are used.

-   [GET REFERENCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_reference.htm)

-   [REF - Reference Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm)

Like all data objects, reference variables are initialized using the statement [CLEAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclear.htm). The content of an initial reference variable is the [null reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_reference_glosry.htm "Glossary Entry"), which does not point to an object and can be assigned to every reference variable.　

Notes

-   The same rules apply to references set when [objects are created](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) as to assignments.

-   When a reference variable containing a [heap reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheap_reference_glosry.htm "Glossary Entry") is initialized, this affects [Garbage Collector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengarbage_collector_glosry.htm "Glossary Entry").

Continue
[Assignment Rules for Reference Variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_references.htm)
[\=, ?= - Up Cast and Down Cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_cast.htm)
[CAST - Casting Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm)
[GET REFERENCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_reference.htm)
[REF - Reference Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm)