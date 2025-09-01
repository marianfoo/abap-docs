---
title: "DELETE itab, duplicates"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_shortref.htm) Syntax ... ADJACENT DUPLICATES FROM itab USING KEY keyname(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) COMPARING  comp1(https://help
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_duplicates.htm"
abapFile: "abapdelete_duplicates.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapdelete", "duplicates"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20itab%2C%20duplicates%2C%20ABAPDELETE_DUPLICATES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE itab, duplicates

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_shortref.htm)

Syntax

... ADJACENT DUPLICATES FROM itab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]*
             *\[*COMPARING *{* [comp1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) ...*}**|**{*ALL FIELDS*}**\]* ...

Additions:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... COMPARING *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}*](#!ABAP_ADDITION_2@2@)

Effect

Using these additions, the statement DELETE deletes all lines except for the first line of the group in groups of consecutive lines that have the same content in certain components. If the addition COMPARING is not specified, the groups are determined by the content of the key fields of the table key used. If no explicit table key is specified, the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used implicitly.

The order of the table lines that are used to form the groups is determined by the table key used. If no key keyname is specified after USING KEY, the order is the same as when processing a statement [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) without an explicit key specification.

Lines are considered to be duplicate if the content of neighboring line matches in the components examined. In the case of multiple duplicate lines following one another, all but the first line are deleted.

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm), no lines are deleted. If this is known statically, the syntax check produces a warning.

Hints

-   The use of ADJACENT DUPLICATES usually requires a suitable sorting by the components compared in the statement.
-   When using the primary table key, it should be noted that this key can be the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can also have unexpected consequences:
    -   For structured line types, the standard key covers all character-like and byte-like components.
    -   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm).

Example

Deletion of all multiple lines with respect to the primary key in the internal table city\_connections.

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

The addition USING KEY can be used to specify a table key in [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified, the order in which the lines are accessed is as follows:

-   Specification of a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry")
    
    The lines are processed by ascending line number in the [secondary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry")
    
-   Specification of a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry")
    
    The lines are processed in the order in which they were inserted into the table.
    

Hint

Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT does not affect the processing order when a secondary hash key is specified.

Example

The statement DELETE deletes all multiple numbers from the internal table itab. The table then contains a maximum of ten lines.

DATA itab TYPE TABLE OF i WITH EMPTY KEY
               WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
FINAL(t) = CONV i( cl\_demo\_date\_time=>get\_utc\_time( ) ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = t
                                        min  = 1
                                        max  = 10 ).
itab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ).
DELETE ADJACENT DUPLICATES FROM itab USING KEY skey.

Addition 2   

... COMPARING *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}*

Effect

If the addition COMPARING is specified, the groups are determined either by the content of the specified components comp1 comp2 ... or the content of all components ALL FIELDS. The specification of individual components comp is made as described in the section [Specification of Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm). Access to class attributes is possible using the object component selector.

Hint

Specifying the [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line has the same effect as specifying ALL FIELDS.

Example

Reading of specific data from two tables in the ITF framework, where DOKIL is the index table for DOKHL. After the multiple numbers are deleted, it is expected that both tables contain the same number of lines. The table declared inline, dokhl\_tab, has an empty primary key, which means that the component object is specified explicitly using COMPARING.

SELECT object
       FROM dokil
       WHERE id = 'SD' AND
             object LIKE 'AB%' AND
             langu = @sy-langu AND
             typ   = 'E'
       ORDER BY object
       INTO TABLE @FINAL(dokil\_tab).
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
![Example](exa.gif "Example") [itab - Deleting Duplicate Lines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendelete_dup_lines_abexa.htm)