---
title: "Syntax"
description: |
  ... COLOR       =color ONOFF= col INTENSIFIED ONOFF= flag INVERSE     ONOFF= flag HOTSPOT     ONOFF= flag INPUT       ONOFF
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_ext_options.htm"
abapFile: "abapwrite_ext_options.htm"
keywords: ["do", "if", "class", "data", "abapwrite", "ext", "options"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WRITE, ext_format_options, ABAPWRITE_EXT_OPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

WRITE, ext\_format\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_shortref.htm)

Syntax

... *\[*COLOR       *{**\[*\=*\]**{*color *\[*ON*\]**}**|*OFF*}**|**{*\= col*}**\]*
    *\[*INTENSIFIED *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
    *\[*INVERSE     *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
    *\[*HOTSPOT     *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
    *\[*INPUT       *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
    *\[*FRAMES      *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
    *\[*RESET*\]* ...

Effect

The meaning of the additions is the same as for the statement [FORMAT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapformat.htm), with the difference that they only affect the output of the current WRITE statement. If the additions are not specified, the standard settings described in FORMAT or the settings set by the previous FORMAT statements are used.

Hint

The use of such an addition in the WRITE statement overrides the standard settings or the formats set by the previous FORMAT statements for exactly one output and for exactly the property concerned. All the other properties and the subsequent WRITE statements are not affected.

Example

Changes the background color for output of the data object sum. All other output and any spaces between the output have the background color that is set in the FORMAT statement.

DATA sum TYPE i.
FORMAT COLOR COL\_NORMAL.
DO 10 TIMES.
  WRITE / sy-index.
  sum += sy-index.
  WRITE sum COLOR COL\_TOTAL.
ENDDO.
ULINE.
WRITE sum UNDER sum COLOR COL\_GROUP.

Continue
![Example](exa.gif "Example") [Lists - Using Colors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_format_color_abexa.htm)