  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) →  [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab.htm) → 

REPLACE IN TABLE - table\_range

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_shortref.htm)

Syntax

... *\[*FROM lin1 *\[*OFFSET off1*\]**\]*
    *\[*TO   lin2 *\[*OFFSET off2*\]**\]* ...

Effect

This addition restricts the search performed by the statement [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab.htm) on the table section specified in the [numeric expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") lin1, off1, lin2, and off2. The syntax and semantics are the same as for the statement [FIND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_table_range.htm).

Example

The following replacement creates the result shown below. Note that the OFFSET addition of TO defines the end of the replacement range.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 5,
    col2 TYPE c LENGTH 5,
  END OF line,
  itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 5
                       ( col1 = 'abcde' col2 = 'abcde' ) ).
REPLACE ALL OCCURRENCES OF \`cd\`
        IN TABLE itab
        FROM 2 OFFSET 5
        TO   4 OFFSET 5
        WITH 'XX'.
cl\_demo\_output=>display( itab ).

Result:

COL1

COL2

abcde

abcde

abcde

abXXe

abXXe

abXXe

abXXe

abcde

abcde

abcde