---
title: "MODIFY LINE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_shortref.htm) Syntax MODIFY  LINE line OF PAGE pageCURRENT PAGE INDEX idx  CURRENT LINE  source(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line.htm"
abapFile: "abapmodify_line.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapmodify", "line"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_lists_complex.htm) → 

MODIFY LINE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_shortref.htm)

Syntax

MODIFY *{* *{*LINE line *\[*OF *{*PAGE page*}**|**{*CURRENT PAGE*}**\]*
                     *\[*INDEX idx*\]**}*
       *|* *{*CURRENT LINE*}* *}*
       *\[*[source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm)*\]*.

Extras:

[1\. ... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEXidx*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CURRENT LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement overwrites a line saved in the list buffer with the content of the sy-lisel system field and permits additional modifications as specified in [source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm). In addition, all values for this line saved using HIDE are assigned to the respective variables.

The first output of a data object in the list buffer with the statement [WRITE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.htm) defines the output length, which cannot be changed by the MODIFY statement. The statement MODIFY ignores any output [alignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_glosry.htm "Glossary Entry") that are specified for the output with WRITE and [CENTERED, RIGHT-JUSTIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_options.htm).

System Fields

sy-subrc

Meaning

0

The specified line exists and was changed.

Not 0

The specified line does not exist.

Notes

-   It is recommended that the system field sy-lisel is filled with the content of the list line to be changed before the statement MODIFY LINE is executed, and that the line is modified exclusively using the information in [source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm), not by changing sy-lisel. The sy-lisel system field is filled either using list events or with the statement [READ LINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm).
    
-   The function modules LIST\_ICON\_PREPARE\_FOR\_MODIFY and LIST\_MODIFY\_QUICKINFO can be used to modify icons and tooltips in list lines.
    

Addition 1

... LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*

Addition 2

... CURRENT LINE

Effect

The line to be changed is specified using the addition LINE or CURRENT LINE. The syntax and description of the additions are the same as for the statement [READ LINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm).

Example

When a line in the basic list is double-clicked, the background of the number displayed becomes yellow, and the background of the remaining line becomes green.

START-OF-SELECTION.
  DO 10 TIMES.
    WRITE / sy-index.
  ENDDO.
AT LINE-SELECTION.
  MODIFY CURRENT LINE FIELD FORMAT sy-index COLOR 3
                      LINE FORMAT COLOR 5.

Continue
[MODIFY LINE - source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm)