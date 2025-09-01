  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) → 

DELETE itab - duplicates

[Quick Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

... ADJACENT DUPLICATES FROM itab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
             *\[*COMPARING *{* [comp1](javascript:call_link\('abenitab_components.htm'\)) [comp2](javascript:call_link\('abenitab_components.htm'\)) ...*}**|**{*ALL FIELDS*}**\]* ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... COMPARING *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}*](#!ABAP_ADDITION_2@2@)

Effect

Using these additions, the statement DELETE deletes all rows in certain groups of rows, except for the first row of the group. These are groups of rows that are sequential and have the same content in certain components. If the addition COMPARING is not specified, the groups are determined by the content of the key fields of the table key being used. If no explicit table key is specified, the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is used implicitly.

The order of the table rows that are used to form the groups is determined by the table key being used. If no key keyname is specified after USING KEY, the order is the same as when processing a statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) without explicit specification of a key.

Rows are considered to be duplicate if the content of neighboring row is the same in the components examined. In the case of multiple duplicate rows following one another, all the rows (except for the first) are deleted.

If the [primary table key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") is used to access a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and the key is [empty](javascript:call_link\('abenitab_empty_key.htm'\)), no rows are deleted. If this is statically identifiable, the syntax check produces a warning.

Notes

-   The use of ADJACENT DUPLICATES usually requires a suitable sorting by the components compared in the statement.
    
-   When using the primary table key, note that this key can be the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), which can also have unexpected consequences:
    

-   For structured row types, the standard key covers all character-like and byte-like components.

-   The standard key of a standard table can be [empty](javascript:call_link\('abenitab_empty_key.htm'\)).

Example

Deletes all multiple rows with respect to the primary key in the internal table city\_connections.

TYPES: BEGIN OF city\_connection,
         cityfrom TYPE spfli-cityfrom,
         cityto   TYPE spfli-cityto,
         distid   TYPE spfli-distid,
         distance TYPE spfli-distance,
       END OF city\_connection.
DATA city\_connections TYPE SORTED TABLE OF city\_connection
                      WITH NON-UNIQUE KEY cityfrom cityto
                                          distid distance.
SELECT cityfrom, cityto, distid, distance
       FROM spfli
       INTO TABLE @city\_connections.
DELETE ADJACENT DUPLICATES FROM city\_connections.
cl\_demo\_output=>display( city\_connections ).

Addition 1

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key [keyname](javascript:call_link\('abenkeyname.htm'\)) with which the processing is carried out. The specified table key influences the order in which the table rows are accessed, and the evaluation of the remaining conditions.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified, the processing behaves in the same way as when no key is explicitly specified. If a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is specified, the order in which the rows are accessed is as follows:

-   [Sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") specified
    The rows are processed by ascending row number in the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry")
    
-   [Hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") specified
    The rows are processed in the order in which they were inserted into the table.
    

Note

Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no influence on the processing order when a secondary hash key is specified.

Example

The statement DELETE deletes all multiple numbers from the internal table itab. The table then contains a maximum of ten rows.

DATA itab TYPE TABLE OF i WITH EMPTY KEY
               WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 10 ).
itab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ).
DELETE ADJACENT DUPLICATES FROM itab USING KEY skey.

Addition 2

... COMPARING *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}*

Effect

If the addition COMPARING is specified, the groups are determined either by the content of the specified components comp1 comp2 ... or the content of all components ALL FIELDS. The specification of individual components comp is made as described in the section [Specification of Components](javascript:call_link\('abenitab_components.htm'\)). Access to class attributes is possible using the object component selector.

Example

Reads specific data from two tables in the ITF framework. Here, DOKIL is the index table for DOKHL. After the multiple numbers are deleted, it is expected that both tables contain the same number of rows. The table declared inline, \>dokhl\_tab, has an empty primary key, which means that the component object is specified explicitly using COMPARING.

SELECT object
       FROM dokil
       WHERE id = 'SD' AND
             object LIKE 'AB%' AND
             langu = @sy-langu AND
             typ   = 'E'
       ORDER BY object
       INTO TABLE @DATA(dokil\_tab).
SELECT object
       FROM dokhl
       WHERE id = 'SD' AND
             object LIKE 'AB%' AND
             langu = @sy-langu AND
             typ   = 'E'
       ORDER BY object, dokversion DESCENDING
       INTO TABLE @DATA(dokhl\_tab).
DELETE ADJACENT DUPLICATES FROM dokhl\_tab COMPARING object.
ASSERT lines( dokhl\_tab ) = lines( dokil\_tab ).

Continue
![Example](exa.gif "Example") [Internal Tables, Deleting Duplicate Rows](javascript:call_link\('abendelete_dup_lines_abexa.htm'\))