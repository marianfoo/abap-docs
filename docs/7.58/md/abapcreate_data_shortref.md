---
title: "CREATE DATA - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) Syntax CREATE DATA dref  AREA HANDLE handle   TYPE  abap_type(name) LENGTH len DECIMALS dec  LINE OF type(name)  REF TO type(name)
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_shortref.htm"
abapFile: "abapcreate_data_shortref.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "abapcreate", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CREATE%20DATA%2C%20ABAPCREATE_DATA_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CREATE DATA - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm)

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

Creates an [anonymous data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") and sets the data reference in dref to the data object. If no TYPE or LIKE addition is specified, dref has to be completely typed and this type is used for the data object.

Additions   

-   [AREA HANDLE handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_area_handle.htm)
    Creates a [shared object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_object_glosry.htm "Glossary Entry"), where a reference to an [area handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_handle_glosry.htm "Glossary Entry") has to be specified in handle.
-   [TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm)
    Defines the type by referring to a data type.
-   [LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm)
    Defines the type by referring to a data object.
-   [abap\_type*|*(name) *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_built_in.htm)
    Specifies a [built-in](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry") [elementary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") statically or dynamically and defines the length and the number of [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry").
-   [*\[*LINE OF*\]* type*|*(name)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_existing.htm)
    Specifies a defined data type statically or dynamically. Here, LINE OF can be used to reference the line type of an internal table.
-   [REF TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_reference.htm)
    Creates a reference variable.
-   [*{**\[*STANDARD*\]* TABLE*}**|**{*SORTED TABLE*}**|**{*HASHED TABLE*}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm)
    Creates an internal table, see DATA.
-   [WITH *{**\[*UNIQUE*|*NON-UNIQUE*\]* KEY*{*comp1 comp2 ...*}**|*(keytab) *}**|**{*DEFAULT KEY*}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_itab.htm)
    Defines the primary table key. Here, components can be specified dynamically in an internal table keytab.
-   [WITH EMPTY KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_itab.htm)
    Defines an empty primary table key.
-   [INITIAL SIZE n](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_itab.htm)
    Defines the initial memory usage, see DATA.
-   [HANDLE handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_handle.htm)
    Specifies the data type using a handle reference to an [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") [type description object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_object_glosry.htm "Glossary Entry").