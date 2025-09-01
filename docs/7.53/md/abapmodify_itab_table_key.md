  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm) →  [MODIFY itab - itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm) → 

MODIFY itab - table\_key

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_shortref.htm)

Syntax

... TABLE itab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm)*\]* ...

Effect

For wa, a work area compatible to the row type of the internal table must be specified. This concerns [functional operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The first row of the internal table found, whose values in the columns of the table key used match those of the corresponding components of wa, is processed. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) is used.

The same applies when searching for a row to be modified as to key access using the statement [READ](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_key.htm).

If the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_empty_key.htm), the first row of the internal table is deleted. If this is statically identifiable, the syntax check produces a warning.

Note

When using the primary table key, note that this key can be the [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can also have unexpected consequences:

-   For structured row types, the standard key covers all character-like and byte-like components.
    
-   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_empty_key.htm).
    

Example

Converts the local currency of an airline using primary key access to the internal table scarr\_tab. The structure of the work area is constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) from the result of a read with a [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry"), in which the component currcode is assigned the new value. The addition TRANSPORTING modifies this component only in the respective table row.

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
MODIFY TABLE scarr\_tab
       FROM VALUE #(
              BASE scarr\_tab\[ KEY primary\_key carrid = carrid \]
              currcode = currcode )
       TRANSPORTING currcode.