---
title: "UNASSIGN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunassign_shortref.htm) Syntax UNASSIGN <fs>. Effect This statement initializes the field symbol <fs>. After the statement, the field symbol does not reference a memory area and the predicate expression(https://he
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunassign.htm"
abapFile: "abapunassign.htm"
keywords: ["do", "if", "try", "data", "field-symbol", "abapunassign"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_field_symbols.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UNASSIGN%2C%20ABAPUNASSIGN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UNASSIGN

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunassign_shortref.htm)

Syntax

UNASSIGN <fs>.

Effect

This statement initializes the field symbol <fs>. After the statement, the field symbol does not reference a memory area and the [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_assigned.htm) is false.

Hints

-   The statement [CLEAR <fs>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm) does not initialize the field symbol and the memory area that is assigned to the field symbol is initialized instead.
-   Unlike the initialization of reference variables, the statement UNASSIGN does not affect the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry").

Example

A field symbol to which a memory area is assigned is initialized with UNASSIGN.

FIELD-SYMBOLS <fs> TYPE string.
ASSIGN \`text\` TO <fs>.
IF <fs> IS ASSIGNED.
  cl\_demo\_output=>write( 'assigned' ).
ENDIF.
UNASSIGN <fs>.
IF <fs> IS NOT ASSIGNED.
  cl\_demo\_output=>write( 'unassigned' ).
ENDIF.
cl\_demo\_output=>display( ).