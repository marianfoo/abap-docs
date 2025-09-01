---
title: "SET BLANK LINES"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_blank_lines_shortref.htm) Syntax SET BLANK LINES ONOFF. Effect This statement specifies whether the blank lines created using WRITE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.ht
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_blank_lines.htm"
abapFile: "abapset_blank_lines.htm"
keywords: ["loop", "do", "if", "class", "data", "abapset", "blank", "lines"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_lists.htm) → 

SET BLANK LINES

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_blank_lines_shortref.htm)

Syntax

SET BLANK LINES *{*ON*|*OFF*}*.

Effect

This statement specifies whether the blank lines created using [WRITE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.htm) are displayed. If the addition ON is specified, all the subsequent lines created using WRITE statements are written in the list. If the addition OFF is specified (default), all subsequent lines that contain only blanks after a line break are not written to the list.

Notes

-   Blank lines are suppressed regardless of the formatting of the output. Lines that contain only empty checkboxes or input fields are also suppressed.
    
-   Blank lines created using [SKIP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapskip.htm) are independent of the statement SET BLANK LINES. They do not contain any output.
    

Example

Displays a text file loaded from the current presentation server as a list. Blank lines are respected.

DATA: text\_line TYPE c LENGTH 80,
      text\_tab LIKE TABLE OF text\_line.
CALL FUNCTION 'GUI\_UPLOAD'
     EXPORTING
          filename    = 'Gone\_with\_the\_Wind.txt'
          filetype         = 'ASC'
     TABLES
          data\_tab = text\_tab.
SET BLANK LINES ON.
LOOP AT text\_tab INTO text\_line.
  WRITE / text\_line.
ENDLOOP.