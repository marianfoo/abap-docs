  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [FIND IN TABLE itab](javascript:call_link\('abapfind_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIND%20IN%20TABLE%2C%20table_range%2C%20ABAPFIND_TABLE_RANGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIND IN TABLE, table\_range

[Short Reference](javascript:call_link\('abapfind_shortref.htm'\))

Syntax

... *\[*FROM lin1 *\[*OFFSET off1*\]**\]*
    *\[*TO   lin2 *\[*OFFSET off2*\]**\]* ...

Effect

This addition limits the search in the statement [FIND IN TABLE](javascript:call_link\('abapfind_itab.htm'\)) to the table range specified in lin1, off1, lin2 and off2. Without this addition, the program searches the entire table line by line. lin1, off1, lin2 and off2 are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i.

The table range begins in line lin1 after the [offset](javascript:call_link\('abenoffset_glosry.htm'\) "Glossary Entry") off1, and ends in line lin2 in front of the offset off2. If FROM is specified without OFFSET, the range implicitly begins at the start of lin1. If TO is specified without OFFSET, the range ends implicitly at the end of line lin2.

The value of lin1 must be greater than or equal to 1, and the value of lin2 must be greater than or equal to the value of lin1, and both must refer to valid table lines. The values of off1 and off2 must be greater than or equal to 0 and be within the respective line length. If lin1 and lin2 refer to the same line, the value of off2 must be greater than or equal to the value of off1. Both offsets may refer to the end of the line.

Hint

This addition is also used in the statement [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)).

Example

Reading of a text into an internal table in ITF format and search for the first string AS in a non-case-sensitive search. The line type of the internal table is interpreted as a single field of the type c despite being a structured type. The first search finds the first paragraph format AS in the column tdformat. The second search is limited to the lines of the first paragraph and finds the word as in the column tdline, if it exists here. By specifying the offset, the paragraph format is not found in the first line of the paragraph.

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