# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / Initializations

Included pages: 3


### abeninitializations.htm

---
title: "Initializations"
description: |
  The following statements initialize data objects, which means they set the content of a data object to an initial value: -   CLEAR(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm) -   FREE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_data
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitializations.htm"
abapFile: "abeninitializations.htm"
keywords: ["delete", "do", "if", "try", "data", "internal-table", "abeninitializations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Initializations%2C%20ABENINITIALIZATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Initializations

The following statements initialize data objects, which means they set the content of a data object to an initial value:

-   [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm)
-   [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm)

Initialization does not delete the corresponding data objects. Data objects created by declarative statements are only deleted from the memory when exiting a program, together with the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Objects created dynamically by the statement [CREATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object.htm) are deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The initialization of reference variables can, however, cause the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry") to delete the referenced objects.

Hint

[REFRESH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprefresh_itab.htm) is an obsolete statement used to initialize internal tables.

Continue
[CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm)
[FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm)


### abapclear.htm

---
title: "CLEAR"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_shortref.htm) Syntax CLEAR dobj  WITH val IN CHARACTERBYTE MODE   WITH NULL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_with_null.htm) .
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm"
abapFile: "abapclear.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abapclear"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Initializations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitializations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLEAR%2C%20ABAPCLEAR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLEAR

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_shortref.htm)

Syntax

CLEAR dobj *\[* *{*WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]* *}*
           *|* *{*[WITH NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_with_null.htm)*}* *\]*.

Addition:

[... WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*](#!ABAP_ONE_ADD@1@)

Effect

Without the optional additions, dobj is assigned the type-dependent [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry"). dobj is a [result position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry"), that is, either a variable or a [writable expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified.

-   Elementary data objects are assigned initial values in accordance with the [tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) of [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry").
-   [Enumerated variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") are assigned to initial values in accordance with the elementary [base type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase_type_glosry.htm "Glossary Entry").
-   Reference variables are assigned the [null reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_reference_glosry.htm "Glossary Entry").
-   Structures are set to their initial values component by component.
-   All lines of an internal table are deleted. The memory space required for the lines of the table is released except the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry"). The statement [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm) can be used for releasing also the initial memory requirement if necessary.

The optional additions enable dobj to be filled with values other than the initial value.

Hints

-   If dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), dobj\[\] must be specified to delete the lines, otherwise only the header line is deleted.
-   In the case of CLEAR, the initial memory request of an internal table is not released, which can have a positive effect on performance when inserting new lines in the internal table. The statement [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm) is required only if as much memory as possible needs to be released.

Example

After initialization with CLEAR, the internal table itab no longer contains any lines.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
ASSERT lines( itab ) = 10.
CLEAR itab.
ASSERT lines( itab ) = 0.

Addition   

... WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*

Effect

If the addition WITH val is used and CHARACTER or BYTE MODE specified, all places in dobj are replaced either with the first character or the first byte in val. val is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). If dobj is of the type string or xstring, the string is processed in its current length.

If the MODE addition is not specified, the addition IN CHARACTER MODE applies. Depending on the addition, the data object dobj must be either character-like or byte-like. Depending on the addition, the operand val must be character-like or byte-like and have the length 1. If this is not the case, a syntax error occurs, or a uncatchable exception is raised.

Hint

If the obsolete addition [WITH NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_with_null.htm) is used, all bytes of a flat data object can be replaced by hexadecimal 0 outside classes.

Example

The byte string hexstring is assigned a specific byte value across the entire current length.

DATA: hexstring TYPE xstring,
      hex       TYPE x LENGTH 1 VALUE 'FF'.
...
hexstring = '00000000'.
...
CLEAR hexstring WITH hex IN BYTE MODE.
cl\_demo\_output=>display( hexstring ).

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Field val does not have length 1 for variant CLEAR fld WITH val IN BYTE MODE.
    Runtime error: CLEAR\_VALUE\_BYTEMODE\_WRONG\_LEN
-   Cause: Field val does not have length 1 for variant CLEAR fld WITH val *\[*IN CHARACTER MODE*\]*.
    Runtime error: CLEAR\_VALUE\_WRONG\_LENGTH


### abapfree_dataobject.htm

---
title: "FREE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_shortref.htm) Syntax FREE dobj. Effect The statement FREE deletes all lines from an internal table and releases the complete memory area that was occupied by the lines, including the initial memory requiremen
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm"
abapFile: "abapfree_dataobject.htm"
keywords: ["delete", "do", "if", "try", "data", "internal-table", "abapfree", "dataobject"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Initializations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitializations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FREE%2C%20ABAPFREE_DATAOBJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FREE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_shortref.htm)

Syntax

FREE dobj.

Effect

The statement FREE deletes all lines from an internal table and releases the complete memory area that was occupied by the lines, including the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry").

On other data objects, FREE works like the statement [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm).

If dobj is a structure with tabular components, the memory of all the tabular components is released.

Hints

-   If dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), FREE only affects the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") and not the header line.
-   Unlike CLEAR, the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") does not remain occupied when FREE is used. This can become necessary when there is a lack of memory.
-   In general, FREE should only be used if the entire memory is to be released completely and the internal table is no longer needed or at the least not filled again immediately.
-   See also [Memory Requirements of Deep Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_1.htm).

Example

At the breakpoints in the memory analysis of the ABAP debugger, it can be observed that FREE releases more allocated bound memory than CLEAR.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          INITIAL SIZE 10000.
itab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ).
CLEAR itab.
BREAK-POINT.
FREE itab.
BREAK-POINT.
