  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm) →  [DELETE itab, itab\_line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_line.htm) → 

DELETE itab, index

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_shortref.htm)

Syntax

...   *{* itab INDEX idx *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyname.htm)*\]* *}*
    *|* *{* itab *\[*USING KEY loop\_key*\]**}* ...

Alternatives:

[1\. ... itab INDEX idx *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... itab *\[*USING KEY loop\_key*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

These alternatives specify the lines to be deleted using the specification of a line number relating to a table index.

Alternative 1   

... itab INDEX idx

Addition:

[... USING KEY keyname](#!ABAP_ONE_ADD@1@)

Effect

If the INDEX addition is used, the DELETE statement deletes the line in the line number specified in idx in a table index. idx is a [numeric expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the operand type i. If idx contains the value 0 or less, an uncatchable exception is raised.

If the addition USING KEY is not used, the addition INDEX can only be used with [index tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry") and determines the line to be deleted from the [primary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").

Example

Deletion of the table line that has the same value as the input field carrid in the key field carrid, by using the primary table index.

DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DATA(idx) = line\_index( scarr\_tab\[ KEY primary\_key carrid = carrid \] ).
IF idx is NOT INITIAL.
  DELETE scarr\_tab INDEX idx.
ENDIF.

Executable Example

[Deleting Lines Using an Index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendelete_line_idx_abexa.htm)

Addition   

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key can be specified in [keyname](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyname.htm) to specify the table index to be used explicitly.

If the table has a [sorted](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), this can be specified in keyname. The line to be deleted is then determined from its [secondary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). A secondary [hash key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhash_key_glosry.htm "Glossary Entry") cannot be specified.

If the [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified under its name primary\_key, the table must be an index table, and the behavior is the same as when USING KEY is not specified.

Hint

If a sorted secondary key exists, the INDEX addition can be used for all table types, if USING KEY is used.

Example

The DELETE statement deletes the third line of the internal table, since this has the line number 1 in the secondary table index belonging to the secondary table key skey.

DATA itab TYPE TABLE OF i WITH EMPTY KEY
          WITH UNIQUE SORTED KEY skey COMPONENTS TABLE\_LINE.
itab = VALUE #( ( 3 ) ( 2 ) ( 1 ) ).
DELETE itab INDEX 1 USING KEY skey.

Alternative 2   

... itab

Addition:

[... USING KEY loop\_key](#!ABAP_ONE_ADD@2@)

Effect

This variant is only possible within a [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab.htm) across the same internal table. The current table line of the LOOP is then deleted implicitly. If the addition [USING KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm) is specified in LOOP, the addition USING KEY loop\_key must be specified for this variant.

If the current line was already deleted in the same loop, however, the behavior is undefined.

This variant is not allowed outside of a LOOP and raises a warning in the syntax check if it is not known statically that is executed in a loop.

Hint

This alternative is not recommended. Instead, use the addition INDEX to specify the line number explicitly.

Example

The following loop deletes all lines of an internal table, since the short form of the statement [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm) always deletes the current first line.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  DELETE itab.
ENDLOOP.

Addition   

... USING KEY loop\_key

Effect

This addition is required if the table key used by the LOOP is specified explicitly in the statement LOOP. It states explicitly that the current table line is deleted by the LOOP. No other key can be specified apart from the predefined name [loop\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm). If no explicit table key is specified for LOOP, the addition USING KEY loop\_key is optional.

Example

Since the primary table key is specified explicitly for the LOOP loop, USING KEY loop\_key must be specified for DELETE as well.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
LOOP AT itab USING KEY primary\_key
             ASSIGNING FIELD-SYMBOL(<fs>).
  DELETE itab USING KEY loop\_key.
ENDLOOP.

Continue
![Example](exa.gif "Example") [itab - Deleting Lines Using the Index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendelete_line_idx_abexa.htm)