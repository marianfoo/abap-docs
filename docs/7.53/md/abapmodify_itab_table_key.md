  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)) →  [MODIFY itab - itab\_line](javascript:call_link\('abapmodify_itab_single.htm'\)) → 

MODIFY itab - table\_key

[Quick Reference](javascript:call_link\('abapmodify_itab_shortref.htm'\))

Syntax

... TABLE itab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* ...

Effect

For wa, a work area compatible to the row type of the internal table must be specified. This concerns [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The first row of the internal table found, whose values in the columns of the table key used match those of the corresponding components of wa, is processed. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](javascript:call_link\('abenkeyname.htm'\)) is used.

The same applies when searching for a row to be modified as to key access using the statement [READ](javascript:call_link\('abapread_table_key.htm'\)).

If the [primary table key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") is used to access a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and the key is [empty](javascript:call_link\('abenitab_empty_key.htm'\)), the first row of the internal table is deleted. If this is statically identifiable, the syntax check produces a warning.

Note

When using the primary table key, note that this key can be the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), which can also have unexpected consequences:

-   For structured row types, the standard key covers all character-like and byte-like components.
    
-   The standard key of a standard table can be [empty](javascript:call_link\('abenitab_empty_key.htm'\)).
    

Example

Converts the local currency of an airline using primary key access to the internal table scarr\_tab. The structure of the work area is constructed using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) from the result of a read with a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), in which the component currcode is assigned the new value. The addition TRANSPORTING modifies this component only in the respective table row.

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