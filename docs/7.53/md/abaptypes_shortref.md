  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  T

TYPES - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)

Syntax

TYPES dtype*\[*(len)*\]* *{*TYPE *{* *{*abap\_type *\[*LENGTH len*\]*
                                      *\[*DECIMALS dec*\]**}*
                         *|* *{**\[*LINE OF*\]* type*}*
                         *|* *{*REF TO type*}*
                         *|* *{* *{**{**\[*STANDARD*\]* TABLE*}*
                             *|* *{*SORTED TABLE*}*
                             *|**{*HASHED TABLE*}**}*
                             OF *\[*REF TO*\]* type
                             *\[* *{*WITH *\[*UNIQUE*|*NON-UNIQUE*\]*
                                  *{* *{*KEY *\[*primary\_key *\[*ALIAS key\_name*\]*
                                       COMPONENTS*\]* comp1 comp2 ...*}*
                                  *|* *{*DEFAULT KEY*}* *}*  *}*
                             *|* *{*WITH EMPTY KEY*}* *\]*
                             *{**\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name1 COMPONENTS comp1 comp2 ...*\]*
                              *\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name2 COMPONENTS comp1 comp2 ...*\]*
                              ...*}*
                             *\[**{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS*\]*
                             *\[*INITIAL SIZE n*\]**}*
                           *|* *{*RANGE OF type *\[*INITIAL SIZE n*\]**}* *}*
                           *|* *{*dbtab*|*view
                               *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
                             *|* *{* WRITER*|*LOCATOR *}* FOR
                               *{* COLUMNS blob1 blob2 ...  clob1 clob2 ... *}*
                             *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}*
                                 *\[*...*\]**}**}*
                 *|* *{*LIKE *{* *{**\[*LINE OF*\]* dobj*}*
                         *|* *{*REF TO dobj*}*
                         *|* *{* *{**{**\[*STANDARD*\]* TABLE*}*
                             *|**{*SORTED TABLE*}*
                             *|**{*HASHED TABLE*}*
                             *|**{*ANY TABLE*}*
                             *|**{*INDEX TABLE*}**}*
                             OF *\[*REF TO*\]* dobj
                             *\[* *{*WITH *\[*UNIQUE*|*NON-UNIQUE*\]*
                                  *{* *{*KEY *\[*primary\_key *\[*ALIAS key\_name*\]*
                                       COMPONENTS*\]* comp1 comp2 ...*}*
                                  *|* *{*DEFAULT KEY*}* *}**}*
                             *|* *{*WITH EMPTY KEY*}* *\]*
                             *{**\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name1 COMPONENTS comp1 comp2 ...*\]*
                              *\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name2 COMPONENTS comp1 comp2 ...*\]*
                              ...*}*
                             *\[**{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS*\]*
                             *\[*INITIAL SIZE n*\]**}*
                           *|* *{*RANGE OF dobj *\[*INITIAL SIZE n*\]**}* *}**}*.

Effect

Defines a data type dtype.

Additions

-   [(len)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_simple.htm)
    Defines the length when referencing generic built-in ABAP types.
    
-   [TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)
    Defines the type referencing a data type.
    
-   [LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)
    Defines the type by referencing a data object.
    
-   [*\[*LENGTH len*\]* *\[*DECIMALS dec*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_simple.htm)
    Defines the length and number of [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") when referencing generically built-in ABAP types.
    
-   [LINE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_referring.htm)
    Reference to the row type of an internal table.
    
-   [REF TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_references.htm)
    Creates a reference type.
    
-   [*{**\[*STANDARD*\]* TABLE*}**|**{*SORTED TABLE*}**|**{*HASHED TABLE*}**|**{*ANY TABLE*}**|**{*INDEX TABLE*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_tabkind.htm)
    Creates a table type for the non-generic table categories [standard](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry"), [sorted](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry"), or [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry") or for the generic table categories ANY TABLE or INDEX TABLE.
    
-   [WITH *{**\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY *\[*primary\_key *\[*ALIAS key\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}**}**|**{*DEFAULT KEY*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_primary_key.htm)
    Defines a unique or non-unique primary table key primary\_key. The components of the key are either specified explicitly or are defined by a [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry"). ALIAS can be used to define an alias name key\_name.
    
-   [WITH EMPTY KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_primary_key.htm)
    Defines an empty primary table key.
    
-   [WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}* KEY key\_name COMPONENTS comp1 comp2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_secondary_key.htm)
    Defines a secondary table key key\_name. It is managed using either a unique hashed algorithm, a unique sorted secondary index, or a non-unique sorted secondary index.
    
-   [*{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_keydef.htm)
    Defines the genericness of the table type with respect to the secondary table key.
    
-   [INITIAL SIZE n](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm)
    Defines the initial memory usage of an internal table.
    
-   [RANGE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_ranges.htm)
    Derives a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry").
    
-   [READER*|*WRITER*|*LOCATOR*|**{*LOB HANDLE*}* FOR ... COLUMNS ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle.htm)
    Derives an [LOB handle structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") from the structure of a database table or database view.