---
title: "RESERVE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreserve_shortref.htm) Syntax RESERVE n LINES. Effect This statement creates a page break if there is not enough space left on the current list page between the last output and the page end or page footer(https://help.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreserve.htm"
abapFile: "abapreserve.htm"
keywords: ["select", "loop", "do", "if", "try", "class", "data", "abapreserve"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists.htm) → 

RESERVE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreserve_shortref.htm)

Syntax

RESERVE n LINES.

Effect

This statement creates a page break if there is not enough space left on the current list page between the last output and the page end or [page footer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpage_footer_glosry.htm "Glossary Entry"), as specified in n. n expects a data object of type i. No page break is triggered if the value of n is less than or equal to 0.

The page break triggers the list event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-page.htm) regardless of whether or not a page footer was defined in the introductory statement of the program.

Furthermore, the statement RESERVE influences the behavior of the statement [BACK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapback.htm).

Note

If the page length is greater than the value of n, line blocks can be defined using the statement RESERVE that can only be displayed closed on one side.

Example

The three lines produced by the DO loop and the blank line that follows them form a line block and are not separated by page breaks.

REPORT NO STANDARD PAGE HEADING LINE-COUNT 10(2).
START-OF-SELECTION.
  DO 5 TIMES.
    RESERVE 4 LINES.
    WRITE: / '1', / '2', / '3'.
    SKIP.
  ENDDO.
END-OF-PAGE.
  ULINE.
  WRITE sy-pagno.