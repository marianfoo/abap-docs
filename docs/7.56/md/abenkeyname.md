  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) → 

itab - keyname

The name of the [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry") can be specified in a range of statements and in table expressions for the processing of internal tables. The table key name can used to access a table line or to control processing. The following syntax applies to keyname:

Syntax

... key\_name *|* (name)  ...

Effect

The name of a table key can either be specified directly, as key\_name, or dynamically, as the content of a parenthesized character-like data object name. This is not case-sensitive. If the name is specified directly, it must be known statically that the internal table has this key. With generic data types, the name can only be specified dynamically. If the name is specified dynamically and is incorrect, this raises an uncatchable exception.

The following can be specified:

-   a [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") using its name
-   the [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") using its predefined name primary\_key
-   the [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") using an alias
-   the table key used in a [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm)\-loop using its predefined name loop\_key. In this case, the statement must be executed within the loop.

Hints

-   Normally secondary table keys are specified. Only if [searches](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_exp_itab_line.htm) are to be performed explicitly in a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm) using the primary table key does the key need be specified using its predefined name primary\_key or an alias name.
-   When specifying the primary table key using primary\_key, it is important to note that it can also be [empty](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm) for standard tables. This can produce unexpected behavior in statements where the key is used to specify the lines to be processed.

Example

Dynamic specification of the key according to which the LOOP loop is executed. The loop can be executed with the entries skey and primary\_key. This is not case sensitive. Any other entries produce a runtime error.

DATA(key) = \`skey\`.
cl\_demo\_input=>request( CHANGING field = key ).
DATA itab TYPE TABLE OF i
          WITH NON-UNIQUE KEY primary\_key COMPONENTS table\_line
          WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( ( 3 ) ( 2 ) ( 1 ) ).
LOOP AT itab INTO DATA(wa) USING KEY (key).
  cl\_demo\_output=>write( wa ).
ENDLOOP.
cl\_demo\_output=>display( ).