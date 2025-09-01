  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)) →  [MODIFY itab - itab\_line](javascript:call_link\('abapmodify_itab_single.htm'\)) → 

MODIFY itab - index

[Quick Reference](javascript:call_link\('abapmodify_itab_shortref.htm'\))

Syntax

...   *{* itab INDEX idx *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* *}*
    *|* *{* itab *\[*USING KEY loop\_key*\]**}* ...

Alternatives:

[1\. ... itab INDEX idx *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... itab *\[*USING KEY loop\_key*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

These alternatives specify the rows to be changed using the specification of a row number relating to a table index.

Alternative 1

... itab INDEX idx

Addition:

[... USING KEY keyname](#!ABAP_ONE_ADD@1@)

Effect

If the addition INDEX is used, the statement MODIFY modifies the row of the row number specified in idx with respect to a table index. idx is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of the operand type i. If idx contains a value of 0 or less, an exception is raised that cannot be handled.

If the addition USING KEY is not used, the addition INDEX can only be used with [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and determines the row to be modified from the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry").

If a row specified using INDEX is modified without the addition [TRANSPORTING](javascript:call_link\('abapmodify_itab_single.htm'\)), all components of the row are transported. If it is known statically here that write-protected [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") would be overwritten by this, this produces a syntax error. If this is only known at runtime, the corresponding runtime error occurs.

If the components of a primary sorted table key are modified in a row specified using INDEX, however, a runtime error occurs only if the value of the component changes.

Note

The addition INDEX can also be positioned after FROM wa.

Example

Converts the local currency of an airline in the internal table scarr\_tab by accessing the index. The addition TRANSPORTING dictates that only the component currcode is modified and that only this component is filled in the structure constructed by the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

DATA: carrid   TYPE scarr-carrid   VALUE 'LH',
      currcode TYPE scarr-currcode VALUE 'EUR'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = currcode )->request( ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DATA(idx) = line\_index( scarr\_tab\[ carrid = carrid \] ).
IF idx IS NOT INITIAL.
  MODIFY scarr\_tab
         INDEX idx
         FROM VALUE #( currcode = currcode )
         TRANSPORTING currcode.
ENDIF.

Addition

... USING KEY keyname

Effect

If the addition USING KEY is used, a table key can be specified in [keyname](javascript:call_link\('abenkeyname.htm'\)) to specify the table index to be used explicitly.

If the table has a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), this can be specified in keyname. The row to be modified is then determined from its [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). A secondary [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") cannot be specified.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified under the name primary\_key, the table must be an index table, and the behavior is the same as when USING KEY is not specified.

Note

If a sorted secondary key exists, the addition INDEX can be used for all table categories, if USING KEY is used.

Example

In this example, the letter "D" is replaced by "X" in the fourth row, since this row has the index value 1 in the sorted key skey.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH EMPTY KEY
               WITH NON-UNIQUE SORTED KEY skey COMPONENTS col2.
itab = VALUE #( ( col1 = 'A' col2 = 6 )
                ( col1 = 'B' col2 = 4 )
                ( col1 = 'B' col2 = 7 )
                ( col1 = 'D' col2 = 1 )
                ( col1 = 'E' col2 = 3 )
                ( col1 = 'F' col2 = 9 )
                ( col1 = 'G' col2 = 2 )
                ( col1 = 'H' col2 = 5 )
                ( col1 = 'I' col2 = 8 ) ).
MODIFY itab INDEX 1
            USING KEY skey
            FROM VALUE #( col1 = 'X' )
            TRANSPORTING col1.

Alternative 2

... itab

Addition:

[... USING KEY loop\_key](#!ABAP_ONE_ADD@2@)

Effect

This variant is only possible within a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) across the same internal table. The current table row of the LOOP is modified implicitly. If the addition [USING KEY](javascript:call_link\('abaploop_at_itab_cond.htm'\)) is specified in LOOP, the variant USING KEY loop\_key must be specified for this variant.

If the current rows were already deleted in the same loop pass, the behavior is undefined.

This variant is not allowed outside of LOOPs. A syntax check warning occurs if the check cannot know statically whether the variant is specified in a loop.

Note

This alternative is not recommended. Instead, use the addition INDEX to specify the row number explicitly.

Example

The internal table contains the numbers 11 to 20 after the loop. Each existing number is raised by 10 in the loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
LOOP AT itab INTO DATA(wa).
  MODIFY itab FROM wa + 10.
ENDLOOP.

Addition

... USING KEY loop\_key

Effect

This addition is required if the table key used by the LOOP is specified explicitly in the statement LOOP. It states explicitly that the current table row is modified by the LOOP. No other key can be specified apart from the predefined name [loop\_key](javascript:call_link\('abaploop_at_itab_cond.htm'\)). If no explicit table key is specified for LOOP, the addition USING KEY loop\_key is optional.

Example

In this example, the letters of the first column are replaced by the letters whose position in sy-abcde is given by the value sy-tabix. The table is processed in the order of the secondary index. This specifies the same order with respect to this index in the first column as in the second column.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH EMPTY KEY
               WITH NON-UNIQUE SORTED KEY skey COMPONENTS col2.
itab = VALUE #( ( col1 = 'A' col2 = 6 )
                ( col1 = 'B' col2 = 4 )
                ( col1 = 'B' col2 = 7 )
                ( col1 = 'D' col2 = 1 )
                ( col1 = 'E' col2 = 3 )
                ( col1 = 'F' col2 = 9 )
                ( col1 = 'G' col2 = 2 )
                ( col1 = 'H' col2 = 5 )
                ( col1 = 'I' col2 = 8 ) ).
LOOP AT itab INTO DATA(wa) USING KEY skey.
  MODIFY itab
         USING KEY loop\_key
         FROM VALUE #( col1 = substring( val = sy-abcde
                                         off = sy-tabix - 1
                                         len = 1 ) )
         TRANSPORTING col1.
ENDLOOP.