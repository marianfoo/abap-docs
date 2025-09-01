---
title: "APPEND"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_shortref.htm) Syntax APPEND line_spec(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm) TO itab SORTED BY comp  result(https://help.sap.com/doc/abapdocu_755_inde
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm"
abapFile: "abapappend.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "field-symbol", "abapappend"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) → 

APPEND

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_shortref.htm)

Syntax

APPEND [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm) TO itab *\[*SORTED BY comp*\]* *\[* [result](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_result.htm)*\]*.

Addition:

[... SORTED BY comp](#!ABAP_ONE_ADD@1@)

Effect

This statement appends one or more lines [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm) to an internal index table itab. It is appended so that a new last line is created with regard to the primary table index.

If itab is a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry"), SORTED BY can be used to sort the table in a specified way. [result](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_result.htm) can be used when inserting a single line to set a reference to the inserted line in the form of a field symbol or a data reference.

For the individual table types, appending is done as follows:

-   To standard tables, lines are appended directly and without checking the content of the internal table.
    

-   Lines are appended to [sorted tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_table_glosry.htm "Glossary Entry") only if they match the sort order and do not create duplicate entries if the primary table key is unique.
    

-   No lines can be appended to [hashed tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhashed_table_glosry.htm "Glossary Entry").

Exceptions are raised in the following cases:

-   If a line to be appended would produce a duplicate entry in a unique primary table key, an uncatchable exception is raised.
    

-   If a line to be appended would produce a duplicate entry in a unique secondary table key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
    

-   If a block of lines to be appended would produce a duplicate entry in a unique secondary table key, an uncatchable exception is raised.
    

-   If a line to be appended would destroy the sort sequence of sorted tables, an uncatchable exception is raised (the secondary index of a sorted secondary key, however, is updated before it is used again).

System Fields

The statement APPEND sets sy-tabix to the line number of the last appended line in the primary table index.

Hints

-   The administration of a unique secondary table key is updated immediately; the administration of a non-unique key is not updated until the secondary table key is next used explicitly (lazy update). Runtime costs for creating or updating a non-unique secondary table key are not incurred therefore until it is used for the first time.

-   The [value operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_value.htm) can also be used to [construct](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_itab.htm) the content of internal tables.
    

Example

100 random numbers are appended to the internal table itab with line type i.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 100 ).
DO 100 TIMES.
  APPEND rnd->get\_next( ) TO itab.
ENDDO.

Addition

... SORTED BY comp

Effect

If used correctly, this addition can produce ranking lists in descending order. This only works if a value greater than 0 is specified in the declaration of the internal table in the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_itab.htm). If the value 0 is specified for INITIAL SIZE, the statement APPEND is ignored when used with the addition SORTED BY.

The addition SORTED BY can be used only when a work area wa is specified and for a standard table. wa must also be [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry") with the line type of the table. The component comp can be specified as shown in the section [Specifying Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm), however, only a single component can be addressed using the object component selector, and no attributes of classes.

Provided that the declaration of the internal table for INITIAL SIZE has a value greater than zero, the statement is executed in two steps:

-   Starting from the final line, the table is searched for a line in which the value of the component comp is greater than or equal to the value of the component comp of wa. If a line like this exists, the work area wa is inserted after this line with respect to the primary index. In no such line is found, the work area wa is inserted in front of the first line with respect to the primary index. The line numbers of all lines after the inserted line are increased by 1 in the primary table index.
    

-   If the number of lines before the statement is executed is greater than or equal to the number specified in the declaration of the internal table in the addition INITIAL SIZE, the new final line is deleted with respect to the primary table index.

When using only the statement APPEND with the addition SORTED BY to fill an internal table with a value no greater than 0 for INITIAL SIZE, this rule produces an internal table that contains as many lines as specified in its definition after INITIAL SIZE and that is sorted in descending order with respect to the primary table index by component comp (ranking list).

Programming Guideline

[Create ranking lists with unsorted filling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensort_guidl.htm "Guideline")

Example

Creation of a ranking of the three flights of a connection showing the most free seats.

DATA: carrid TYPE sflight-carrid VALUE 'LH',
      connid TYPE sflight-connid VALUE '0400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF seats,
        fldate    TYPE sflight-fldate,
        seatsocc  TYPE sflight-seatsocc,
        seatsmax  TYPE sflight-seatsmax,
        seatsfree TYPE sflight-seatsocc,
      END OF seats.
DATA seats\_tab LIKE STANDARD TABLE OF seats
               INITIAL SIZE 3.
SELECT fldate, seatsocc, seatsmax, seatsmax - seatsocc AS seatsfree
       FROM sflight
       WHERE carrid = @carrid AND
             connid = @connid
       INTO @seats.
  APPEND seats TO seats\_tab SORTED BY seatsfree.
ENDSELECT.
cl\_demo\_output=>display( seats\_tab ).

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ITAB\_DUPLICATE\_KEY

-   Cause: Duplicate key values in unique secondary key
    Runtime error: ITAB\_DUPLICATE\_KEY

Uncatchable Exceptions

-   Cause: Line with identical key inserted (target table defined using UNIQUE)
    Runtime error: ITAB\_DUPLICATE\_KEY\_IDX\_OP

-   Cause: Sort order violated after an APPEND on a sorted table
    Runtime error: ITAB\_ILLEGAL\_SORT\_ORDER:

-   Cause: Invalid index value (<= 0) when FROM, TO, or INDEX specified
    Runtime error: TABLE\_INVALID\_INDEX

-   Cause: [Memory area violated](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentables_parameters_restrictions.htm) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION
    

Continue
[APPEND, line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm)
[APPEND, result](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_result.htm)
![Example](exa.gif "Example") [itab - Appending Lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenappend_lines_abexa.htm)