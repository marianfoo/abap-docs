  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [REPLACE IN TABLE itab](javascript:call_link\('abapreplace_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPLACE%20IN%20TABLE%2C%20table_range%2C%20ABAPREPLACE_TABLE_RANGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPLACE IN TABLE, table\_range

[Short Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax

... *\[*FROM lin1 *\[*OFFSET off1*\]**\]*
    *\[*TO   lin2 *\[*OFFSET off2*\]**\]* ...

Effect

This addition restricts the search performed by the statement [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)) on the table section specified in the [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") lin1, off1, lin2, and off2. The syntax and semantics are the same as for the statement [FIND](javascript:call_link\('abapfind_table_range.htm'\)).

Example

The following replacement creates the result shown below. It should be noted that the OFFSET addition of TO defines the end of the replacement range.

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

col1

col2

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