---
title: "Assigning Reference Variables"
description: |
  Special rules apply when setting the reference or pointer of a reference variable: -   Assignment Rules for Reference Variables(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm) A reference is always set as an upcast(https://help.sap.com/doc/abapdocu_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_references.htm"
abapFile: "abenset_references.htm"
keywords: ["do", "if", "try", "data", "abenset", "references"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assigning%20Reference%20Variables%2C%20ABENSET_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assigning Reference Variables

Special rules apply when setting the reference or pointer of a reference variable:

-   [Assignment Rules for Reference Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm)

A reference is always set as an [upcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenup_cast_glosry.htm "Glossary Entry") or as a [downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm "Glossary Entry"). When a reference variable is assigned to another reference variable, two different assignment operators are used, as well as a constructor operator.

-   [\=, ?= - Upcast and Downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_cast.htm)
-   [CAST - Casting Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm)

References in data reference variables can point to existing data objects. There is a statement and a constructor operator for this.

-   [GET REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_reference.htm)
-   [REF - Reference Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm)

Like all data objects, reference variables are initialized using the statement [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm). The content of an initial reference variable is the [null reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_reference_glosry.htm "Glossary Entry"), which does not point to an object and can be assigned to every reference variable.　

Hints

-   The same rules apply to references set when [objects are created](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) as to assignments.
-   When a reference variable containing a [heap reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry") is initialized, this affects [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry").

Continue
[Assignment Rules for Reference Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm)
[\=, ?=, Upcast and Downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_cast.htm)
[CAST, Casting Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm)
[GET REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_reference.htm)
[REF, Reference Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm)