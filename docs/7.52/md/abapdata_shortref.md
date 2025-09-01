  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DATA - Quick reference

[Reference](javascript:call_link\('abapdata.htm'\))

Syntax

DATA var*\[*(len)*\]* *\[*TYPE *{* *{*abap\_type *\[*LENGTH len*\]*
                                   *\[*DECIMALS dec*\]**}*
                      *|* *{**\[*LINE OF*\]* type *\[*BOXED*\]**}*
                      *|* *{*REF TO type*}*
                      *|* *{* *{**{**\[*STANDARD*\]* TABLE*}*
                          *|**{*SORTED TABLE*}*
                          *|**{*HASHED TABLE*}**}*
                          OF *\[*REF TO*\]* type
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
                          *\[*INITIAL SIZE n*\]*
                          *\[*WITH HEADER LINE*\]**}*
                        *|* *{*RANGE OF type *\[*INITIAL SIZE n*\]*
                                         *\[*WITH HEADER LINE*\]**}*
                        *|* *{*dbtab*|*view
                            *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
                          *|* *{* WRITER*|*LOCATOR *}* FOR
                            *{* COLUMNS blob1 blob2 ...  clob1 clob2 ... *}*
                          *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}*
                              *\[*...*\]**}**}* *\]*
              *|* *\[*LIKE *{* *{**\[*LINE OF*\]* dobj*}*
                      *|* *{*REF TO dobj*}*
                      *|* *{* *{**{**\[*STANDARD*\]* TABLE*}*
                          *|**{*SORTED TABLE*}*
                          *|**{*HASHED TABLE*}**}*
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
                          *\[*INITIAL SIZE n*\]*
                          *\[*WITH HEADER LINE*\]**}*
                        *|* *{*RANGE OF dobj *\[*INITIAL SIZE n*\]*
                                         *\[*WITH HEADER LINE*\]**}* *}**\]*
                *\[*VALUE *{* val *|* *{*IS INITIAL*}* *}**\]*
                *\[*READ-ONLY*\]*.

Effect

Declares a variable or an instance attribute var.

Additions

-   [(len)](javascript:call_link\('abapdata_simple.htm'\))
    Defines the length when referencing generic predefined ABAP types.
    
-   [TYPE](javascript:call_link\('abapdata.htm'\))
    Defines the type by referring to a data type.
    
-   [LIKE](javascript:call_link\('abapdata.htm'\))
    Defines the type by referring to a data object.
    
-   [*\[*LENGTH len*\]* *\[*DECIMALS dec*\]*](javascript:call_link\('abapdata_simple.htm'\))
    Defines the length and number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") when referencing generically predefined ABAP types.
    
-   [LINE OF](javascript:call_link\('abapdata_referring.htm'\))
    Defines the type by referencing the row type of an internal table.
    
-   [BOXED](javascript:call_link\('abapdata_boxed.htm'\))
    Declares a structure as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").
    
-   [REF TO](javascript:call_link\('abapdata_references.htm'\))
    Creates a reference variable.
    
-   [*{**\[*STANDARD*\]* TABLE*}**|**{*SORTED TABLE*}**|**{*HASHED TABLE*}*](javascript:call_link\('abaptypes_tabkind.htm'\))
    Creates a [standard](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), [sorted](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), or [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry").
    
-   [WITH *{**\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY *\[*primary\_key *\[*ALIAS key\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}**}**|**{*DEFAULT KEY*}*](javascript:call_link\('abapdata_primary_key.htm'\))
    Defines a unique or non-unique primary table key primary\_key. The components of the key are either specified explicitly or are defined by a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). ALIAS can be used to define an alias name key\_name.
    
-   [WITH EMPTY KEY](javascript:call_link\('abapdata_primary_key.htm'\))
    Defines an empty primary table key.
    
-   [WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}* KEY key\_name COMPONENTS comp1 comp2 ...](javascript:call_link\('abapdata_secondary_key.htm'\))
    Defines a secondary table key key\_name. It is managed using either a unique hashed algorithm, a unique sorted secondary index, or a non-unique sorted secondary index.
    
-   [INITIAL SIZE n](javascript:call_link\('abapdata_itab.htm'\))
    Defines the initial memory usage of an internal table.
    
-   [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\))
    Obsolete: Defines a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") of the same name for an internal table.
    
-   [RANGE OF](javascript:call_link\('abapdata_ranges.htm'\))
    Defines a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") with the row type of a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry").
    
-   [VALUE *{* val *|* *{*IS INITIAL*}* *}*](javascript:call_link\('abapdata_options.htm'\))
    Defines a start value of the data object as val or as the initial value.
    
-   [READ-ONLY](javascript:call_link\('abapdata_options.htm'\))
    Protects non- [private](javascript:call_link\('abenprivate_glosry.htm'\) "Glossary Entry") attributes from writes from outside of their own class.
    
-   [READER*|*WRITER*|*LOCATOR*|**{*LOB HANDLE*}* FOR ... COLUMNS ...](javascript:call_link\('abapdata_lob_handle.htm'\))
    Derives an [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") from the structure of a database table or database view.