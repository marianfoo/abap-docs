# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / Initializations

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abeninitializations.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitializations.htm)
- [abapclear.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm)
- [abapfree_dataobject.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.261Z

---

### abeninitializations.htm

> **📖 Official SAP Documentation**: [abeninitializations.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitializations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Initializations, ABENINITIALIZATIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

Initializations

The following statements initialize data objects, which means they set the content of a data object to an initial value:

-   [CLEAR](javascript:call_link\('abapclear.htm'\))
-   [FREE](javascript:call_link\('abapfree_dataobject.htm'\))

Initialization does not delete the corresponding data objects. Data objects created by declarative statements are only deleted from the memory when exiting a program, together with the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). Objects created dynamically by the statement [CREATE](javascript:call_link\('abapcreate_object.htm'\)) are deleted by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). The initialization of reference variables can, however, cause the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") to delete the referenced objects.

Hint

[REFRESH](javascript:call_link\('abaprefresh_itab.htm'\)) is an obsolete statement used to initialize internal tables.

Continue
[CLEAR](javascript:call_link\('abapclear.htm'\))
[FREE](javascript:call_link\('abapfree_dataobject.htm'\))



**📖 Source**: [abeninitializations.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitializations.htm)

### abapclear.htm

> **📖 Official SAP Documentation**: [abapclear.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Initializations](javascript:call_link\('abeninitializations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLEAR, ABAPCLEAR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improve
ment:)

CLEAR

[Short Reference](javascript:call_link\('abapclear_shortref.htm'\))

Syntax

CLEAR dobj *\[* *{*WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]* *}*
           *|* *{*[WITH NULL](javascript:call_link\('abapclear_with_null.htm'\))*}* *\]*.

Addition:

[... WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*](#!ABAP_ONE_ADD@1@)

Effect

Without the optional additions, dobj is assigned the type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"). dobj is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), that is, either a variable or a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified.

-   Elementary data objects are assigned initial values in accordance with the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of [built-in ABAP types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry").
-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") are assigned to initial values in accordance with the elementary [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").
-   Reference variables are assigned the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry").
-   Structures are set to their initial values component by component.
-   All lines of an internal table are deleted. The memory space required for the lines of the table is released except the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry"). The statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) can be used for releasing also the initial memory requirement if necessary.

The optional additions enable dobj to be filled with values other than the initial value.

Hints

-   If dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), dobj\[\] must be specified to delete the lines, otherwise only the header line is deleted.
-   In the case of CLEAR, the initial memory request of an internal table is not released, which can have a positive effect on performance when inserting new lines in the internal table. The statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) is required only if as much memory as possible needs to be released.

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

If the addition WITH val is used and CHARACTER or BYTE MODE specified, all places in dobj are replaced either with the first character or the first byte in val. val is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). If dobj is of the type string or xstring, the string is processed in its current length.

If the MODE addition is not specified, the addition IN CHARACTER MODE applies. Depending on the addition, the data object dobj must be either character-like or byte-like. Depending on the addition, the operand val must be character-like or byte-like and have the length 1. If this is not the case, a syntax error occurs, or a uncatchable exception is raised.

Hint

If the obsolete addition [WITH NULL](javascript:call_link\('abapclear_with_null.htm'\)) is used, all bytes of a flat data object can be replaced by hexadecimal 0 outside classes.

Example

The byte string hexstring is assigned a specific byte value across the entire current length.

DATA: hexstring TYPE xstring,
      hex       TYPE x LENGTH 1 VALUE 'FF'.
...
hexstring = '00000000'.
...
CLEAR hexstring WITH hex IN BYTE MODE.
cl\_demo\_output=>display( hexstring ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Field val does not have length 1 for variant CLEAR fld WITH val IN BYTE MODE.
    Runtime error: CLEAR\_VALUE\_BYTEMODE\_WRONG\_LEN
-   Cause: Field val does not have length 1 for variant CLEAR fld WITH val *\[*IN CHARACTER MODE*\]*.
    Runtime error: CLEAR\_VALUE\_WRONG\_LENGTH



**📖 Source**: [abapclear.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm)

### abapfree_dataobject.htm

> **📖 Official SAP Documentation**: [abapfree_dataobject.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapfree_dataobject.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Initializations](javascript:call_link\('abeninitializations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE, ABAPFREE_DATAOBJECT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

FREE

[Short Reference](javascript:call_link\('abapfree_shortref.htm'\))

Syntax

FREE dobj.

Effect

The statement FREE deletes all lines from an internal table and releases the complete memory area that was occupied by the lines, including the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry").

On other data objects, FREE works like the statement [CLEAR](javascript:call_link\('abapclear.htm'\)).

If dobj is a structure with tabular components, the memory of all the tabular components is released.

Hints

-   If dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), FREE only affects the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") and not the header line.
-   Unlike CLEAR, the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry") does not remain occupied when FREE is used. This can become necessary when there is a lack of memory.
-   In general, FREE should only be used if the entire memory is to be released completely and the internal table is no longer needed or at the least not filled again immediately.
-   See also [Memory Requirements of Deep Data Objects](javascript:call_link\('abenmemory_consumption_1.htm'\)).

Example

At the breakpoints in the memory analysis of the ABAP debugger, it can be observed that FREE releases more allocated bound memory than CLEAR.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          INITIAL SIZE 10000.
itab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ).
CLEAR itab.
BREAK-POINT.
FREE itab.
BREAK-POINT.
