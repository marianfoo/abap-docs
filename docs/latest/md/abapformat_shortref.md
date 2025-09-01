---
title: "FORMAT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapformat.htm) Syntax FORMAT COLOR   =   COL_BACKGROUND  1  COL_HEADING   2  COL_NORMAL   3  COL_TOTAL   4  COL_KEY   5  COL_POSITIVE
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapformat_shortref.htm"
abapFile: "abapformat_shortref.htm"
keywords: ["do", "if", "abapformat", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FORMAT%2C%20ABAPFORMAT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FORMAT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapformat.htm)

Syntax

FORMAT *\[*COLOR *{* *{* *\[*\=*\]* *{* *{* COL\_BACKGROUND
                        *|* *{*1 *|* COL\_HEADING *}*
                        *|* *{*2 *|* COL\_NORMAL *}*
                        *|* *{*3 *|* COL\_TOTAL *}*
                        *|* *{*4 *|* COL\_KEY *}*
                        *|* *{*5 *|* COL\_POSITIVE *}*
                        *|* *{*6 *|* COL\_NEGATIVE *}*
                        *|* *{*7 *|* COL\_GROUP *}* *}* *\[*ON*\]* *}*
                      *|* OFF*}*
              *|* *{*\= col*}* *}**\]*
       *\[*INTENSIFIED *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*INVERSE     *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*HOTSPOT     *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*INPUT       *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*FRAMES      *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*RESET*\]*.

Effect

Formats a list by sections.

Additions   

-   ON *|* OFF *|* *{*\= flag*}*
    Enables and disables a format. In flag, the value is checked for 0 or not equal to 0.
-   COLOR
    Sets the color:
    COL\_BACKGROUND - GUI-dependent
    1 *|* COL\_HEADING - gray-blue
    2 *|* COL\_NORMAL - light gray
    3 *|* COL\_TOTAL - yellow
    4 *|* COL\_KEY - blue-green
    5 *|* COL\_POSITIVE - green
    6 *|* COL\_NEGATIVE - red
    7 *|* COL\_GROUP - purple
    \= col - specifies a color key figure dynamically in col.
-   INTENSIFIED
    Sets the intensity of the background color.
-   INVERSE
    Switches between the foreground and the background.
-   HOTSPOT
    Creates a hotspot for responding to single mouse clicks.
-   INPUT
    Creates an input area.
-   FRAMES
    Specifies how \- and | are transformed to line elements.
-   RESET
    Sets all settings apart from FRAMES to OFF.