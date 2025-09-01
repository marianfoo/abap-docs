  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ TABLE, index, ABAPREAD_TABLE_INDEX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

READ TABLE, index

[Short Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Syntax

... INDEX idx *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* ...

Addition:

[... USING KEY keyname](#!ABAP_ONE_ADD@1@)

Effect

Using the INDEX addition, the READ statement reads the line in the line number specified in idx in a table index. idx is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with the operand type i. If the value of idx is less than or equal to 0 or greater than the number of table lines, no line is read and sy-subrc is set to 4. After a successful read, the system field sy-tabix contains the line number specified in idx in the primary or secondary table index used.

If the addition USING KEY is not used, the addition INDEX can only be specified for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and determines the line to be read from the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry").

Hint

[Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") allow corresponding reads to also be performed in operand positions. Here, an index is specified as a numeric argument [idx](javascript:call_link\('abentable_exp_itab_line.htm'\)).

Example

Reading of the first ten lines of the internal table sflight\_tab using the primary table index. Instead of the DO loop, a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) or a corresponding iteration expression with [FOR](javascript:call_link\('abenfor_itab.htm'\)) is used for this purpose.

DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                  WITH NON-UNIQUE KEY seatsocc,
      sflight\_wa  LIKE LINE OF sflight\_tab.
...
SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '400'
       INTO TABLE @sflight\_tab.
...
DO 10 TIMES.
  READ TABLE sflight\_tab INDEX sy-index INTO sflight\_wa.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  ...
ENDDO.

Addition   

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key in [keyname](javascript:call_link\('abenkeyname.htm'\)) to specify the table index to be used explicitly.

If the table has a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), this can be specified in keyname and the line to be read is then determined from its [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). A secondary [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") cannot be specified.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified using its name primary\_key, the table must be an index table, and the behavior is the same as if USING KEY was not specified.

Hints

-   If a sorted secondary key exists, the addition INDEX can be used for all table categories, if USING KEY is used.
-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") allow corresponding reads to also be performed in operand positions. The table key for an index is specified using [KEY keyname INDEX](javascript:call_link\('abentable_exp_itab_line.htm'\)).

Example

Reading of the first ten lines of the internal table sflight\_tab using a secondary table index. Instead of the DO loop, a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) or a corresponding iteration expression with [FOR](javascript:call_link\('abenfor_itab.htm'\)) is used for this purpose.

DATA: sflight\_tab TYPE HASHED TABLE OF sflight
                  WITH UNIQUE KEY primary\_key
                       COMPONENTS carrid connid fldate
                  WITH NON-UNIQUE SORTED KEY occupied\_seats
                       COMPONENTS seatsocc,
      sflight\_wa  LIKE LINE OF sflight\_tab.
...
SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '400'
       INTO TABLE @sflight\_tab.
...
DO 10 TIMES.
  READ TABLE sflight\_tab
       INDEX sy-index USING KEY occupied\_seats
       INTO sflight\_wa.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  ...
ENDDO.