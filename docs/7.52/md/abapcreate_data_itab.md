  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) → 

CREATE DATA - TABLE OF

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_area_handle.htm)*\]*
                 *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF *\[*REF TO*\]* *{*type*|*(name)*}**}*
                 *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
                 *\[* WITH *{* *{**\[*UNIQUE*|*NON-UNIQUE*\]*
                           *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}**}*
                        *|* *{*EMPTY KEY*}*  *\]*
                 *\[*INITIAL SIZE n*\]*.

Effect

The statement CREATE DATA uses the addition tabkind OF to create an internal table. The meaning of the additions is the same as when declaring internal tables using the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm), but with special rules for [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_existing.htm) if dobj is specified after LIKE. The explicit definition of the primary table key is only optional if a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") is being created.

Whereas the content of DATA is specified statically, the following can be specified dynamically for CREATE DATA:

-   The row type after TYPE or the static type of a row flagged as a reference variable after TYPE REF TO can have a character-like data object called name. In this case, the same rules apply as in the other variants of CREATE DATA.
    
-   The definition of the primary table key can specify a parenthesized internal table keytab instead of a static component comp1 comp2 ...:
    ... WITH *\[*UNIQUE*|*NON-UNIQUE*\]* KEY (keytab) ...
    The table keytab must have a character-like data type and must contain the name of a valid component in each row or the identifier table\_line for the primary table key in a single row.
    
-   A numeric data object can be specified for n after INITIAL SIZE.
    

Notes

-   The definition of the table key is subject to the following conditions that do not apply to DATA:
    

-   No [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be defined in the statement CREATE DATA.

-   The name [primary\_key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm) and the addition [COMPONENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm) cannot be specified explicitly in the definition of the primary key.

[Runtime type creation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") should be used instead to create dynamic table types with secondary keys. The same applies when creating an [empty table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm) dynamically, since the internal table keytab can only be used to define non-empty keys.

-   CREATE DATA cannot be used to create internal tables with [header lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry").
    

Example

Creates and uses an anonymous hash table. The type of the data reference variable is generic, which means it can only be dereferenced in the case of assignment to a field symbol.

DATA dref TYPE REF TO data.
FIELD-SYMBOLS <fs> TYPE ANY TABLE.
CREATE DATA dref TYPE HASHED TABLE OF scarr
                 WITH UNIQUE KEY carrid.
ASSIGN dref->\* TO <fs>.
SELECT \*
       FROM scarr
       INTO TABLE @<fs>.
cl\_demo\_output=>display( <fs> ).

Executable Example

[Creating Tabular Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_tabular_data_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Tabular Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_tabular_data_abexa.htm)