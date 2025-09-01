  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) → 

READ TABLE - index

[Quick Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Syntax

... INDEX idx *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* ...

Addition:

[... USING KEY keyname](#!ABAP_ONE_ADD@1@)

Effect

If the addition INDEX is used, the statement READ reads the row of the row number specified in idx with respect to a table index. idx is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of the operand type i. If the value of idx is less than or equal to 0 or greater than the number of table rows, no row is read and sy-subrc is set to 4. If the read is successful, the system field sy-tabix contains the row number specified in idx in the primary or secondary table index used.

If the addition USING KEY is not used, the addition INDEX can only be specified for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and determines the row to be read from the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry").

Note

[Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") enable reads to be performed in operand positions too. Here an index is specified as a numeric argument [idx](javascript:call_link\('abentable_exp_itab_line.htm'\)).

Example

Reads the first ten rows of the internal table sflight\_tab using the primary table index. Instead of the DO loop, a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) or a corresponding iteration expression with [FOR](javascript:call_link\('abenfor_itab.htm'\)) is used for this purpose.

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

If the addition USING KEY is used, a table key can be specified in [keyname](javascript:call_link\('abenkeyname.htm'\)) to specify the table index to be used explicitly.

If the table has a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), this can be specified in keyname. The row to be read is then determined from its [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). A secondary [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") cannot be specified.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified under the name primary\_key, the table must be an index table, and the behavior is the same as when USING KEY is not specified.

Notes

-   If a sorted secondary key exists, the addition INDEX can be used for all table categories, if USING KEY is used.
    
-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") enable reads to be performed in operand positions too. The table key for an index is specified using [KEY keyname INDEX](javascript:call_link\('abentable_exp_itab_line.htm'\)).
    

Example

Reads the first ten rows of the internal table sflight\_tab using a secondary table index. Instead of the DO loop, a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) or a corresponding iteration expression with [FOR](javascript:call_link\('abenfor_itab.htm'\)) is used for this purpose.

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