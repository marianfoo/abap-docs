---
title: "READ TABLE itab - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) Syntax READ TABLE itab  FROM wa USING KEY key_name(name) WITH TABLE KEY key_name(name) COMPONENTS comp_name1(name1) = dobj1 comp_name2(name2) = dob
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_itab_shortref.htm"
abapFile: "abapread_table_itab_shortref.htm"
keywords: ["do", "if", "try", "data", "internal-table", "field-symbol", "abapread", "table", "itab", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20TABLE%20itab%2C%20ABAPREAD_TABLE_ITAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ TABLE itab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm)

Syntax

READ TABLE itab
           *{* *{**{*FROM wa *\[*USING KEY key\_name*|*(name)*\]**}*
             *|**{*WITH TABLE KEY *\[*key\_name*|*(name) COMPONENTS*\]*
                              *{*comp\_name1*|*(name1)*}* = dobj1
                              *{*comp\_name2*|*(name2)*}* = dobj2
                              ...*}*
             *|* *{*WITH KEY comp1 = dobj1 comp2 = dobj2 ... *\[*BINARY SEARCH*\]**}*
             *|* *{*WITH KEY key\_name*|*(name)
                         COMPONENTS comp1 = dobj1 comp2 = dobj2 ... *}*
             *|* *{*INDEX idx *\[*USING KEY key\_name*|*(name)*\]**}* *}*
             *|* *{*WITH KEY dobj *\[*BINARY SEARCH*\]**}*
             *|* *{*WITH KEY = dobj *\[*BINARY SEARCH*\]**}* *}*
           *{* *{*INTO wa
              *\[*COMPARING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}**|**{*NO FIELDS*}* *}**\]*
              *\[*TRANSPORTING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}* *}**\]**}*
           *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
           *|* *{* REFERENCE INTO dref *}*
           *|* *{*TRANSPORTING NO FIELDS*}* *}*.

Effect

Reads a single line from an internal table itab.

Additions   

-   [FROM wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_key.htm)
    Specifies the line to be read by matching it with the key values of a work area wa.
-   [WITH TABLE KEY
    *{*comp\_name1*|*(name1)*}* = dobj1 *{*comp\_name2*|*(name2)*}* = dobj2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_key.htm)
    Specifies the line to be read by specifying components of the primary table key statically or dynamically.
-   [WITH KEY comp1 = dobj1 comp2 = dobj2 ... *\[*BINARY SEARCH*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_free.htm)
    Specifies the line to be read by specifying components comp1, comp2, .... Appropriately sorted standard tables are searched using a binary search BINARY SEARCH.
-   [WITH KEY *\[*key\_name*|*(name) COMPONENTS*\]* comp1 = dobj1 comp2 = dobj2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_free.htm)
    Specifies the line to be read by specifying components comp1, comp2, ... for a table key.
-   [INDEX idx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_index.htm)
    Specifies the line to be read by specifying the line number idx of a table index.
-   [KEY key\_name*|*(name)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm)
    Specifies (statically or dynamically) a (secondary) table key used to find the line to be read.
-   [WITH KEY dobj *\[*BINARY SEARCH*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_obsolet.htm)
    Obsolete: Reads the first line for which the left-aligned content matches the content of the data object dobj. The table line is [cast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") to the type of dobj. Tables sorted accordingly are searched using the addition BINARY SEARCH.
-   [WITH KEY = dobj *\[*BINARY SEARCH*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_obsolet.htm)
    Obsolete: Reads the first line whose entire content matches the content of the data object dobj. Appropriately sorted tables are sorted using a BINARY SEARCH.
-   [INTO wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm)
    Assigns the read line to a work area wa.
-   [COMPARING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}**|**{*NO FIELDS*}* *}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)
    Compares the components comp1, comp2, ..., all components, or no components of a found line with the corresponding components of the work area and sets sy-subrc accordingly.
-   [TRANSPORTING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}* *}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)
    Assigns the specified components comp1, comp2, ... or all components of the found line to the work area wa.
-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm)
    Assigns the line read to a field symbol <fs>; [casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") is an option.
-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm)
    Assigns the reference to the read line to a reference variable dref.
-   [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm)
    Does not assign the read line.