  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) →  [MODIFY itab, itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_single.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20itab%2C%20table_key%2C%20ABAPMODIFY_ITAB_TABLE_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY itab, table\_key

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_shortref.htm)

Syntax

... TABLE itab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]* ...

Effect

For wa, a work area compatible to the line type of the internal table must be specified. It is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of wa. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) is used.

The same applies when searching for a line to be modified as to key access using the statement [READ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm).

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm), the first line of the internal table is deleted. If this is known statically, the syntax check produces a warning.

Hint

When using the primary table key, it should be noted that this key can be the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can also have unexpected consequences:

-   For structured line types, the standard key covers all character-like and byte-like components.
-   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm).

Example

Conversion of the local currency of an airline using primary key access to the internal table scarr\_tab. The structure of the work area is constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) from the result of a read with a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"), in which the component currcode is assigned the new value. The addition TRANSPORTING modifies this component only in the associated table line.

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