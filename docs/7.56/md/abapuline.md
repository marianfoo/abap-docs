---
title: "ULINE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapuline_shortref.htm) Syntax ULINE AT /pos(len) NO-GAP. Effect Output of horizontal lines in lists. This statement mainly has the same effect as the following WRITE(https://
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapuline.htm"
abapFile: "abapuline.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abapuline"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists.htm) → 

ULINE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapuline_shortref.htm)

Syntax

ULINE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

Effect

Output of horizontal lines in lists.

This statement mainly has the same effect as the following [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) statement:

WRITE line *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

In this case, line is a data object with type c and length 1023, which is completely filled with "-" characters. In accordance with the predefined formatting rule for the character "-", these are linked with each other to form a continuous line and are replaced by the appropriate [line element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenline_element_glosry.htm "Glossary Entry"). The same applies for directly consecutive characters "-" and "|". In contrast to the WRITE statement, ULINE replaces the characters with the line element for an output length of 1.

The position and length of the line are determined by the rules for the WRITE statement. In the simplest case, ULINE produces the following output:

-   A continuous horizontal line along an entire line, if no position and length are specified after AT. In contrast to the WRITE statement, the [list cursor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is positioned in the first position of the next line.
-   A line of length len at the horizontal position pos if a position and length are specified after AT.

Hints

-   If the statement [FORMAT FRAMES OFF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapformat.htm) is used beforehand, the output of ULINE is not displayed as a continuous line, as this statement prevents replacement of the "-" characters with line elements.
-   Output of the system field sy-uline using the statement [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) behaves like the statement ULINE.

Example

Output of a horizontal line along the entire line after the first WRITE output, and two horizontal lines as a part of a frame.

WRITE 'A text in a frame'.
ULINE.
SKIP.
ULINE AT 10(10).
WRITE: /10 '|', 11(8) 'Text' CENTERED, 19 '|'.
ULINE AT /10(10).