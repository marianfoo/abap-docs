---
title: "DATA - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm) Syntax DATA var(len) TYPE  abap_type LENGTH len DECIMALS dec  LINE OF type BOXED  REF TO type   STANDARD TABLE SOR
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_shortref.htm"
abapFile: "abapdata_shortref.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "abapdata", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, ABAPDATA_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

DATA - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)

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
                               *{* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]*
                                    COMPONENTS*\]* comp1 comp2 ...*}*
                               *|* *{*DEFAULT KEY*}* *}**}*
                          *|* *{*WITH EMPTY KEY*}* *\]*
                          *{**\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                             KEY key\_name1 *\[*ALIAS alias\_name1*\]* COMPONENTS comp1 comp2 ...*\]*
                           *\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                             KEY key\_name2 *\[*ALIAS alias\_name2*\]* COMPONENTS comp1 comp2 ...*\]*
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
                               *{* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]*
                                    COMPONENTS*\]* comp1 comp2 ...*}*
                               *|* *{*DEFAULT KEY*}* *}**}*
                          *|* *{*WITH EMPTY KEY*}* *\]*
                          *{**\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                             KEY key\_name1 *\[*ALIAS alias\_name1*\]* COMPONENTS comp1 comp2 ...*\]*
                           *\[*WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}*
                             KEY key\_name2 *\[*ALIAS alias\_name2*\]* COMPONENTS comp1 comp2 ...*\]*
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

-   [(len)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_simple.htm)
    Defines the length when making reference to generic built in ABAP types.
-   [TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)
    Defines the type by referring to a data type.
-   [LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)
    Defines the type by referring to a data object.
-   [*\[*LENGTH len*\]* *\[*DECIMALS dec*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_simple.htm)
    Defines the length and number of [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") when referencing generically built-in ABAP types.
-   [LINE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_referring.htm)
    Defines the type by referring to the line type of an internal table.
-   [BOXED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_boxed.htm)
    Declares a structure as a [static box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_box_glosry.htm "Glossary Entry").
-   [REF TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_references.htm)
    Creates a reference variable.
-   [*{**\[*STANDARD*\]* TABLE*}**|**{*SORTED TABLE*}**|**{*HASHED TABLE*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_tabcat.htm)
    Creates a [standard](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry"), [sorted](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry"), or [hashed table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry").
-   [WITH *{**\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}**}**|**{*DEFAULT KEY*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_primary_key.htm)
    Defines a unique or non-unique primary table key primary\_key. The components of the key are either specified explicitly or are defined by a [standard key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_key_glosry.htm "Glossary Entry"). ALIAS can be used to define an alias name alias\_name.
-   [WITH EMPTY KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_primary_key.htm)
    Defines an empty primary table key.
-   [WITH *{*UNIQUE HASHED*}**|**{**{*UNIQUE*|*NON-UNIQUE*}* SORTED*}* KEY key\_name *\[*ALIAS alias\_name*\]* COMPONENTS comp1 comp2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_secondary_key.htm)
    Defines a secondary table key key\_name. It is managed using either a unique hashed algorithm, a unique sorted secondary index, or a non-unique sorted secondary index. ALIAS can be used to define an alias name alias\_name.
-   [INITIAL SIZE n](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_itab.htm)
    Defines the initial memory usage of an internal table.
-   [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm)
    Obsolete: Defines a [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry") of the same name for an internal table.
-   [RANGE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_ranges.htm)
    Defines a [ranges table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry") with the line type of a [ranges table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry").
-   [VALUE *{* val *|* *{*IS INITIAL*}* *}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm)
    Defines a start value of the data object as val or as the initial value.
-   [READ-ONLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm)
    Protects non- [private](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprivate_glosry.htm "Glossary Entry") attributes from writes from outside of their own class.
-   [READER*|*WRITER*|*LOCATOR*|**{*LOB HANDLE*}* FOR ... COLUMNS ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_lob_handle.htm)
    Derives an [LOB handle structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") from the structure of a database table or DDIC database view.