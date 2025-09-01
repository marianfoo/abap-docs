---
title: "MODIFY itab, index"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_shortref.htm) Syntax ...    itab INDEX idx USING KEY keyname(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm)    itab USING KEY loop_key ... Alter
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_index.htm"
abapFile: "abapmodify_itab_index.htm"
keywords: ["select", "delete", "loop", "do", "if", "try", "catch", "data", "types", "internal-table", "abapmodify", "itab", "index"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm) →  [MODIFY itab, itab\_line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_single.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20itab%2C%20index%2C%20ABAPMODIFY_ITAB_INDEX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY itab, index

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_shortref.htm)

Syntax

...   *{* itab INDEX idx *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm)*\]* *}*
    *|* *{* itab *\[*USING KEY loop\_key*\]**}* ...

Alternatives:

[1\. ... itab INDEX idx *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... itab *\[*USING KEY loop\_key*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

These alternatives specify the lines to be changed using the specification of a line number relating to a table index.

Alternative 1   

... itab INDEX idx

Addition:

[... USING KEY keyname](#!ABAP_ONE_ADD@1@)

Effect

Using the addition INDEX, the statement MODIFY modifies the line in the line number specified in idx in a table index. idx is a [numeric expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the operand type i. If idx contains the value 0 or less, an uncatchable exception is raised.

If the addition USING KEY is not used, the addition INDEX can only be used with [index tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry") and determines the line to be modified from its [primary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").

If a line specified using INDEX is modified without the addition [TRANSPORTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_single.htm), all components of the line are transported. If it is known statically that write-protected [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") would be overwritten by this, a syntax error occurs. If it can only be determined at runtime, the corresponding runtime error occurs.

If the components of a primary sorted table key are modified in a line specified using INDEX, however, a runtime error occurs only if the value of the component changes.

Hint

The addition INDEX can also be positioned after FROM wa.

Example

Conversion of the local currency of an airline in the internal table scarr\_tab by accessing the index. The addition TRANSPORTING ensures that only the component currcode is modified and only this component is filled in the structure constructed by the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm).

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
FINAL(idx) = line\_index( scarr\_tab\[ carrid = carrid \] ).
IF idx IS NOT INITIAL.
  MODIFY scarr\_tab
         INDEX idx
         FROM VALUE #( currcode = currcode )
         TRANSPORTING currcode.
ENDIF.

Addition   

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key in [keyname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm) to specify the table index to be used explicitly.

If the table has a [sorted](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), this can be specified in keyname. The line to be modified is then determined from its [secondary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). A secondary [hash key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm "Glossary Entry") cannot be specified.

If the [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified under its name primary\_key, the table must be an index table, and the behavior is the same as if USING KEY were not specified.

Hint

If a sorted secondary key exists, the addition INDEX can be used for all table types if USING KEY is used.

Example

In this example, the letter D is replaced by X in the fourth line, since this line has the index value 1 in the sorted key skey.

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

This variant is only possible within a [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) across the same internal table. The current table line of the LOOP is modified implicitly. If the addition [USING KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm) is specified in LOOP, the addition USING KEY loop\_key must be specified for this variant.

If the current lines were already deleted in the same loop pass, the behavior is undefined.

This variant is not allowed outside of LOOP statements. A syntax check warning occurs if it cannot be known statically whether the variant is specified in a loop.

Hint

The use of this alternative is not recommended. Instead, the addition INDEX should be used to specify the line number explicitly.

Example

The internal table contains the numbers 11 to 20 after the loop. Each existing number is raised by 10 in the loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
LOOP AT itab INTO FINAL(wa).
  MODIFY itab FROM wa + 10.
ENDLOOP.

Addition   

... USING KEY loop\_key

Effect

This addition is required if the table key used by the LOOP is specified explicitly in the statement LOOP. It states explicitly that the current table line of the LOOP is modified. No other key can be specified apart from the predefined name [loop\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm). If no explicit table key is specified for LOOP, the addition USING KEY loop\_key is optional.

Example

In this example, the letters of the first column are replaced by the letters whose position in sy-abcde is given by the value sy-tabix. The table is processed in the order of the secondary index, which produces the same order with respect to this index in the first column as in the second column.

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
FINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`.
LOOP AT itab INTO FINAL(wa) USING KEY skey.
  MODIFY itab
         USING KEY loop\_key
         FROM VALUE #( col1 = substring( val = abcde
                                         off = sy-tabix - 1
                                         len = 1 ) )
         TRANSPORTING col1.
ENDLOOP.