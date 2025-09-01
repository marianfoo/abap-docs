---
title: "DATA, RANGE OF"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_shortref.htm) Syntax DATA range_tab TYPE RANGE OF typeLIKE RANGE OF dobj INITIAL SIZE n VALUE IS INITIAL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_ranges.htm"
abapFile: "abapdata_ranges.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abapdata", "ranges"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20RANGE%20OF%2C%20ABAPDATA_RANGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, RANGE OF

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_shortref.htm)

Syntax

DATA range\_tab *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
               *\[*INITIAL SIZE n*\]*
               [*\[*VALUE IS INITIAL*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm)
               [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm).

Effect

This statement defines a [ranges table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranges_table_glosry.htm "Glossary Entry") range\_tab with the table type described in the section [TYPES - RANGE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_ranges.htm). The table type defined here, however, is not a standalone type, but exists as a property of the data object range\_tab.

The addition [VALUE IS INITIAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm) can be used to specify an initial [start value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstart_value_glosry.htm "Glossary Entry").

Hints

-   Outside of classes, the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_header_line.htm) can also be used to declare an obsolete [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry").
-   The declaration of a ranges table using the statement [RANGES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapranges.htm) is obsolete.

Example

In this example, a ranges table is declared, filled, and evaluated in the [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) condition of a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement.

DATA carrid\_range TYPE RANGE OF spfli-carrid.
carrid\_range = VALUE #(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH' ) ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @FINAL(spfli\_tab).