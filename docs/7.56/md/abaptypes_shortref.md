  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TYPES - Short Reference

[Reference](javascript:call_link\('abaptypes.htm'\))

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
                                  *{* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]*
                                       COMPONENTS*\]* comp1 comp2 ...*}*
                                  *|* *{*DEFAULT KEY*}* *}*  *}*
                             *|* *{*WITH EMPTY KEY*}* *\]*
                             *{**\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name1 *\[*ALIAS alias\_name1*\]* COMPONENTS comp1 comp2 ...*\]*
                              *\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name2 *\[*ALIAS alias\_name2*\]* COMPONENTS comp1 comp2 ...*\]*
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
                                  *{* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]*
                                       COMPONENTS*\]* comp1 comp2 ...*}*
                                  *|* *{*DEFAULT KEY*}* *}**}*
                             *|* *{*WITH EMPTY KEY*}* *\]*
                             *{**\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name1 *\[*ALIAS alias\_name1*\]* COMPONENTS comp1 comp2 ...*\]*
                              *\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                                KEY key\_name2 *\[*ALIAS alias\_name2*\]* COMPONENTS comp1 comp2 ...*\]*
                              ...*}*
                             *\[**{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS*\]*
                             *\[*INITIAL SIZE n*\]**}*
                           *|* *{*RANGE OF dobj *\[*INITIAL SIZE n*\]**}* *}**}*.

Effect

Defines a data type dtype.

Additions

-   [(len)](javascript:call_link\('abapdata_simple.htm'\))
    Defines the length when referencing generic built-in ABAP types.
-   [TYPE](javascript:call_link\('abaptypes.htm'\))
    Defines the type referencing a data type.
-   [LIKE](javascript:call_link\('abaptypes.htm'\))
    Defines the type by referencing a data object.
-   [*\[*LENGTH len*\]* *\[*DECIMALS dec*\]*](javascript:call_link\('abaptypes_simple.htm'\))
    Defines the length and number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") when referencing generically built-in ABAP types.
-   [LINE OF](javascript:call_link\('abaptypes_referring.htm'\))
    Reference to the line type of an internal table.
-   [REF TO](javascript:call_link\('abaptypes_references.htm'\))
    Creates a reference type.
-   [*{**\[*STANDARD*\]* TABLE*}**|**{*SORTED TABLE*}**|**{*HASHED TABLE*}**|**{*ANY TABLE*}**|**{*INDEX TABLE*}*](javascript:call_link\('abaptypes_tabcat.htm'\))
    Creates a table type for the non-generic table categories [standard](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), [sorted](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), or [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") or for the generic table categories ANY TABLE or INDEX TABLE.
-   [WITH *{**\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}**}**|**{*DEFAULT KEY*}*](javascript:call_link\('abaptypes_primary_key.htm'\))
    Defines a unique or non-unique primary table key primary\_key. The components of the key are either specified explicitly or are defined by a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). ALIAS can be used to define an alias name alias\_name.
-   [WITH EMPTY KEY](javascript:call_link\('abaptypes_primary_key.htm'\))
    Defines an empty primary table key.
-   [WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}* KEY key\_name *\[*ALIAS alias\_name*\]* COMPONENTS comp1 comp2 ...](javascript:call_link\('abaptypes_secondary_key.htm'\))
    Defines a secondary table key key\_name. It is managed using either a unique hashed algorithm, a unique sorted secondary index, or a non-unique sorted secondary index. ALIAS can be used to define an alias name alias\_name.
-   [*{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\))
    Defines the genericness of the table type with respect to the secondary table key.
-   [INITIAL SIZE n](javascript:call_link\('abaptypes_itab.htm'\))
    Defines the initial memory usage of an internal table.
-   [RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\))
    Derives a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry").
-   [READER*|*WRITER*|*LOCATOR*|**{*LOB HANDLE*}* FOR ... COLUMNS ...](javascript:call_link\('abaptypes_lob_handle.htm'\))
    Derives an [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") from the structure of a database table or DDIC database view.