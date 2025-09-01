---
title: "FORMAT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapformat.htm) Syntax FORMAT COLOR   =   COL_BACKGROUND  1  COL_HEADING   2  COL_NORMAL   3  COL_TOTAL   4  COL_KEY   5  COL_POSITIVE
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapformat_shortref.htm"
abapFile: "abapformat_shortref.htm"
keywords: ["do", "if", "abapformat", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  F

FORMAT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapformat.htm)

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
    Specifies how "-" and "|" are transformed to line elements.
    
-   RESET
    Sets all settings apart from FRAMES to OFF.