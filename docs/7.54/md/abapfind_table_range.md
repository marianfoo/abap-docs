  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) →  [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab.htm) → 

FIND IN TABLE - table\_range

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_shortref.htm)

Syntax

... *\[*FROM lin1 *\[*OFFSET off1*\]**\]*
    *\[*TO   lin2 *\[*OFFSET off2*\]**\]* ...

Effect

This addition limits the search in the statement [FIND IN TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab.htm) to the table range specified in lin1, off1, lin2 and off2. Without this addition, the program searches the whole table, row by row. lin1, off1, lin2 and off2 are [numeric expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

The table range begins in the row lin1 after the [offset](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_glosry.htm "Glossary Entry") off1, and ends in the row lin2 in front of the offset off2. If FROM is specified without OFFSET, the range implicitly begins at the start of lin1. If TO is specified without OFFSET, the range ends implicitly at the end of the row lin2.

The value of lin1 must be greater than or equal to 1, and the value of lin2 must be greater than or equal to the value of lin1, and both must refer to valid table rows. The values of off1 and off2 must be greater than or equal to 0 and be within the respective row length. If lin1 and lin2 indicate the same row, the value of off2 must be greater than or equal to the value of off1. Both offsets may refer to the end of the row.

Note

This addition is also used in the statement [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab.htm).

Example

Reads a text into an internal table in ITF format and searches for the first string "AS" in a non-case-sensitive search. The row type of the internal table is interpreted as a single field of the type c despite being a structured type. The first search finds the first paragraph format "AS" in the column tdformat. The second search is limited to the lines of the first paragraph and finds the word "as" in the column tdline, if it exists here. If the offset is specified, the paragraph format is not found in the first line of the paragraph.

DATA itf\_tab TYPE tline\_tab.
IF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD'
                                         langu = 'E'
                                         object = 'ABENABAP\_XML'
                               IMPORTING itf = itf\_tab ) = 0.
  DELETE itf\_tab FROM 18.
  cl\_demo\_output=>write( itf\_tab ).
  FIND FIRST OCCURRENCE OF SUBSTRING 'as'
       IN TABLE itf\_tab
       IGNORING CASE
       MATCH LINE DATA(mline)
       MATCH OFFSET DATA(moff)
       MATCH LENGTH DATA(mlen).
  IF sy-subrc = 0.
    cl\_demo\_output=>write( |{ mline }, { moff }, { mlen }| ).
  ENDIF.
  DATA:
    idx1 TYPE i,
    idx2 TYPE i.
  LOOP AT itf\_tab TRANSPORTING NO FIELDS WHERE tdformat = 'AS'.
    idx2 = COND i( WHEN idx1 IS NOT INITIAL THEN sy-tabix ).
    IF idx2 IS NOT INITIAL.
      EXIT.
    ENDIF.
    idx1 = COND i( WHEN idx1 IS INITIAL THEN sy-tabix ).
  ENDLOOP.
  FIND FIRST OCCURRENCE OF SUBSTRING 'as'
       IN TABLE itf\_tab
       FROM idx1 OFFSET 2 TO idx2 - 1
       IGNORING CASE
       MATCH LINE mline
       MATCH OFFSET moff
       MATCH LENGTH mlen.
  IF sy-subrc = 0.
    cl\_demo\_output=>write( |{ mline }, { moff }, { mlen }| ).
  ENDIF.
  cl\_demo\_output=>display( ).
ENDIF.