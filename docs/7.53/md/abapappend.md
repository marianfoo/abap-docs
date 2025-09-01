  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) → 

APPEND

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_shortref.htm)

Syntax

APPEND [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm) TO itab *\[*SORTED BY comp*\]* *\[* [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_result.htm)*\]*.

Addition:

[... SORTED BY comp](#!ABAP_ONE_ADD@1@)

Effect

This statement appends one or more rows [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm) to an internal index table itab. It is appended so that a new last row is created with respect to the primary table index.

If itab is a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry"), SORTED BY can be used to sort the table in a specified way. Use [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_result.htm) when appending a single row to set a reference to the appended row in the form of a field symbol or a data reference.

For the individual table types, appending is done as follows:

-   To standard tables, rows are appended directly and without checking the content of the internal table.
    
-   Rows are appended to [sorted tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry") only if they match the sort order and do not create duplicate entries (if the primary table key is unique).
    
-   No rows can be appended to [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry").
    

Exceptions are raised in the following cases:

-   If a row to be appended would produce a duplicate entry in a unique primary table key, a non-handleable exception is raised.
    
-   If a row to be appended would produce a duplicate entry in a unique secondary table key, a handleable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
    
-   If a block of rows to be appended would produce a duplicate entry in a unique secondary table key, a non-handleable exception is raised.
    
-   If the row being appended would destroy the sort order of sorted tables, a non-handleable exception is raised (the secondary index of a sorted secondary key, however, is updated before it is used again).
    

System Fields

The APPEND statement sets sy-tabix to the row number of the last appended row in the primary table index.

Notes

-   The administration of a unique secondary table key is updated immediately; the administration of a non-unique key is not updated until the secondary table key is next used explicitly (lazy update). Runtime costs for creating or updating a non-unique secondary table key are not incurred therefore until it is used for the first time.
    
-   The [value operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) can also be used to [construct](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm) the content of internal tables.
    

Example

Appends 100 random numbers to the internal table itab with row type i.

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

Used correctly, this addition can produce ranking lists in descending order. This only works if a value greater than 0 is specified in the declaration of the internal table in the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm). If the value 0 is specified for INITIAL SIZE, the statement APPEND is ignored when used with the addition SORTED BY.

The addition SORTED BY can be used only when a work area wa is specified and for a standard table. Also, wa must be [compatible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") with the row type of the table. The component comp can be specified as shown in the section [Specifying Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_components.htm), however only a single component can be addressed using the object component selector, and no attributes of classes.

As long as the declaration of the internal table for INITIAL SIZE has a value greater than zero, the statement is executed in two steps:

-   Starting from the final row, the table is scanned for a row in which the value of the component comp is greater than or equal to the value of the component comp of wa. If a row like this exists, the work area wa is inserted after this row with respect to the primary index. In no such row is found, the work area wa is inserted before the first row with respect to the primary index. The row numbers of all rows after the inserted row are increased by 1 in the primary table index.
    
-   If the number of rows before the statement is executed is greater than or equal to the number specified in the declaration of the internal table in the addition INITIAL SIZE, the new final row is deleted with respect to the primary table index.
    

When using only the statement APPEND with the addition SORTED BY to fill an internal table with a value no greater than 0 for INITIAL SIZE, this rule produces an internal table that contains no more than the number of rows specified in its definition after INITIAL SIZE and that is sorted in descending order with respect to the primary table index by component comp (ranking).

Programming Guideline

[Create ranking lists with unsorted filling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensort_guidl.htm "Guideline")

Example

Creates a ranking of the three flights of a connection showing the most free seats.

DATA: carrid TYPE sflight-carrid VALUE 'LH',
      connid TYPE sflight-connid VALUE '0400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF seats,
        fldate TYPE sflight-fldate,
        seatsocc TYPE sflight-seatsocc,
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

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ITAB\_DUPLICATE\_KEY

-   Cause: Duplicate key values in unique secondary key
    Runtime error: ITAB\_DUPLICATE\_KEY
    

Non-Handleable Exceptions

-   Cause: Row with identical key inserted (target table defined using UNIQUE)
    Runtime error: ITAB\_DUPLICATE\_KEY\_IDX\_OP
    
-   Cause: Sort order violated after an APPEND on a sorted table
    Runtime error: ITAB\_ILLEGAL\_SORT\_ORDER:
    
-   Cause: Invalid index value (<= 0) when FROM, TO, or INDEX specified
    Runtime error: TABLE\_INVALID\_INDEX
    
-   Cause: [Memory area violated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION
    

Continue
[APPEND - line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm)
[APPEND - result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_result.htm)
![Example](exa.gif "Example") [Internal Table, Append Rows](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenappend_lines_abexa.htm)