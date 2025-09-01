# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Assignments / Initializations

Included pages: 3


### abeninitializations.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

Initializations

The following statements initialize data objects, which means they set the content of a data object to an initial value:

-   [CLEAR](javascript:call_link\('abapclear.htm'\))

-   [FREE](javascript:call_link\('abapfree_dataobject.htm'\))

Initialization does not delete the data objects in question. Data objects created by declarative statements are only deleted from the memory when leaving a program, together with the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). Objects created dynamically by the statement [CREATE](javascript:call_link\('abapcreate_object.htm'\)) are deleted by [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). The initialization of reference variables can, however, cause [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") to delete the referenced objects.

Note

[REFRESH](javascript:call_link\('abaprefresh_itab.htm'\)) is an obsolete statement used to initialize internal tables.

Continue
[CLEAR](javascript:call_link\('abapclear.htm'\))
[FREE](javascript:call_link\('abapfree_dataobject.htm'\))


### abapclear.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Initializations](javascript:call_link\('abeninitializations.htm'\)) → 

CLEAR

[Quick Reference](javascript:call_link\('abapclear_shortref.htm'\))

Syntax

CLEAR dobj *\[* *{*WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]* *}*
           *|* *{*[WITH NULL](javascript:call_link\('abapclear_with_null.htm'\))*}* *\]*.

Addition:

[... WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*](#!ABAP_ONE_ADD@1@)

Effect

Without the optional additions, dobj is assigned the type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"). In the case of dobj, this is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), which means either a variable or a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") ´can be specified.

-   Elementary data types are assigned initial values in accordance with the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of [built-in ABAP types](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry").
    
-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") are assigned to initial values in accordance with the elementary [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").
    
-   Reference variables are assigned the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry").
    
-   Structures are set to their initial values component by component.
    
-   All rows in an internal table are deleted. This frees up the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\))). The statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) is used to release the memory space occupied by the rows of internal tables.
    

The optional additions enable dobj to be filled with values other than the initial value.

Notes

-   If dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), dobj\[\] must be specified to delete the rows, otherwise only the header line is deleted.
    
-   In the case of CLEAR, the initial memory requirements of an internal table are not released, which can have a positive effect on performance when inserting new rows in the internal table. The statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) is required only if it is as much memory as possible really needs to be released.
    

Example

After initialization with CLEAR, the internal table itab no longer contains any rows.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
ASSERT lines( itab ) = 10.
CLEAR itab.
ASSERT lines( itab ) = 0.

Addition

... WITH val *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*

Effect

If the addition WITH val is used and CHARACTER or BYTE MODE specified, all places in dobj are replaced either with the first character or the first byte in val. In val a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry") is involved. If dobj is of the type string or xstring, the string is processed in its current length.

If the MODE addition is not specified, the addition IN CHARACTER MODE applies. Depending on the addition, the data object dobj must be either character-like or byte-like. Depending on the addition, the operand val must be character-like or byte-like and have the length 1. If this is not the case, a syntax error occurs or a non-handleable exception is raised.

Note

If the obsolete addition [WITH NULL](javascript:call_link\('abapclear_with_null.htm'\)) is used, all bytes of a flat data object can be replaced by hexadecimal 0 outside classes.

Example

The byte string hexstring as assigned a specific byte value over the entire current length.

DATA: hexstring TYPE xstring,
      hex       TYPE x LENGTH 1 VALUE 'FF'.
...
hexstring = '00000000'.
...
CLEAR hexstring WITH hex IN BYTE MODE.
cl\_demo\_output=>display( hexstring ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Field val does not have length 1 for variant CLEAR fld WITH val IN BYTE MODE.
    Runtime error: CLEAR\_VALUE\_BYTEMODE\_WRONG\_LEN
    
-   Cause: Field val does not have length 1 for variant CLEAR fld WITH val *\[*IN CHARACTER MODE*\]*.
    Runtime error: CLEAR\_VALUE\_WRONG\_LENGTH


### abapfree_dataobject.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Initializations](javascript:call_link\('abeninitializations.htm'\)) → 

FREE

[Quick Reference](javascript:call_link\('abapfree_shortref.htm'\))

Syntax

FREE dobj.

Effect

The statement FREE deletes all rows from an internal table and releases the memory area that the rows occupied.

On other data objects, FREE works like the statement [CLEAR](javascript:call_link\('abapclear.htm'\)).

If dobj is a structure with table-like components, the memory of all the table-like components is released.

Notes

-   If dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), FREE is only applied to the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") and not the header line.
    
-   Unlike CLEAR, the initial memory area (see [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\))) remains unoccupied when FREE is used. This can become necessary when there is a lack of memory.
    
-   In general, FREE should be used only if the entire memory is to be released in full and the internal table is no longer needed (or at the least not filled again right away).
    
-   See also [Memory Requirements of Deep Data Objects](javascript:call_link\('abenmemory_consumption_1.htm'\)).
    

Example

At the breakpoints in the memory analysis of the ABAP debugger you can see that FREE frees up more allocated bound memory than CLEAR.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          INITIAL SIZE 10000.
itab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ).
CLEAR itab.
BREAK-POINT.
FREE itab.
BREAK-POINT.
