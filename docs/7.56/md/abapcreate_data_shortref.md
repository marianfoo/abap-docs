  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CREATE DATA - Short Reference

[Reference](javascript:call_link\('abapcreate_data.htm'\))

Syntax

CREATE DATA dref *\[* AREA HANDLE handle *\]*
                 *\[* TYPE *{* *{*abap\_type*|*(name)
                           *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}*
                        *|* *{**\[*LINE OF*\]* type*|*(name)*}*
                        *|* *{*REF TO type*|*(name)*}*
                        *|* *{* *{**{**\[*STANDARD*\]* TABLE*}*
                           *|**{*SORTED TABLE*}*
                           *|**{*HASHED TABLE*}**}*
                           OF *\[*REF TO*\]* *{*type*|*(name)*}*
                           *\[* *{*WITH *\[*UNIQUE*|*NON-UNIQUE*\]*
                                *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}*
                           *|* *{*WITH EMPTY KEY*}* *\]*
                           *\[*INITIAL SIZE n*\]**}*
                        *|* *{*HANDLE handle*}* *}* *\]*
               *|* *\[* LIKE *{* *{**\[*LINE OF*\]* dobj*}*
                        *|* *{*REF TO dobj*}*
                        *|* *{* *{**{**\[*STANDARD*\]* TABLE*}*
                           *|**{*SORTED TABLE*}*
                           *|**{*HASHED TABLE*}**}*
                           OF dobj
                           *\[* *{*WITH *\[*UNIQUE*|*NON-UNIQUE*\]*
                                *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}*
                           *|* *{*WITH EMPTY KEY*}* *\]*
                           *\[*INITIAL SIZE n*\]**}* *}* *\]*.

Effect

Creates an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") and sets the data reference in dref to the data object. If no TYPE or LIKE addition is specified, dref has to be completely typed and this type is used for the data object.

Additions

-   [AREA HANDLE handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))
    Creates a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry"), where a reference to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") has to be specified in handle.
-   [TYPE](javascript:call_link\('abapcreate_data.htm'\))
    Defines the type by referring to a data type.
-   [LIKE](javascript:call_link\('abapcreate_data.htm'\))
    Defines the type by referring to a data object.
-   [abap\_type*|*(name) *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*](javascript:call_link\('abapcreate_data_built_in.htm'\))
    Specifies a [built-in](javascript:call_link\('abenbuiltin_data_type_glosry.htm'\) "Glossary Entry") [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") statically or dynamically and defines the length and the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry").
-   [*\[*LINE OF*\]* type*|*(name)](javascript:call_link\('abapcreate_data_existing.htm'\))
    Specifies a defined data type statically or dynamically. Here, LINE OF can be used to reference the line type of an internal table.
-   [REF TO](javascript:call_link\('abapcreate_data_reference.htm'\))
    Creates a reference variable.
-   [*{**\[*STANDARD*\]* TABLE*}**|**{*SORTED TABLE*}**|**{*HASHED TABLE*}*](javascript:call_link\('abaptypes_tabcat.htm'\))
    Creates an internal table, see DATA.
-   [WITH *{**\[*UNIQUE*|*NON-UNIQUE*\]* KEY*{*comp1 comp2 ...*}**|*(keytab) *}**|**{*DEFAULT KEY*}*](javascript:call_link\('abapcreate_data_itab.htm'\))
    Defines the primary table key. Here, components can be specified dynamically in an internal table keytab.
-   [WITH EMPTY KEY](javascript:call_link\('abapcreate_data_itab.htm'\))
    Defines an empty primary table key.
-   [INITIAL SIZE n](javascript:call_link\('abapcreate_data_itab.htm'\))
    Defines the initial memory usage, see DATA.
-   [HANDLE handle](javascript:call_link\('abapcreate_data_handle.htm'\))
    Specifies the data type using a handle reference to an [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") [type description object](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry").