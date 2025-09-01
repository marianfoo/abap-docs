---
title: "END-OF-PAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-page_shortref.htm) Syntax END-OF-PAGE. Effect This statement defines an event block, whose event is raised by the ABAP runtime framework(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runti
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-page.htm"
abapFile: "abapend-of-page.htm"
keywords: ["select", "loop", "do", "if", "try", "class", "data", "types", "abapend", "page"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists_interactive.htm) → 

END-OF-PAGE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-page_shortref.htm)

Syntax

END-OF-PAGE.

Effect

This statement defines an event block, whose event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the creation of a basic list at the following time:

-   If lines were reserved in the addition [LINE-COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport_list_options.htm) of the program-initiating statement for a [page footer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpage_footer_glosry.htm "Glossary Entry") that was reached by a write on this page. List output made in the event block is placed in this area. Output statements that exceed the reserved area are ignored.
-   If no lines were reserved in the addition [LINE-COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport_list_options.htm) for a [page footer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpage_footer_glosry.htm "Glossary Entry") and the end of page was reached by a write on this page. List outputs made in the event block have no effect.

Hint

The event END-OF-PAGE is intended for writing list outputs in the page footer and is raised only when the page footer or end of page is reached. Statements such as [NEW-PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page.htm) do not raise the event.

Example

This program outputs a list of flights and creates a page for each connection with a header line and footer line.

REPORT demo\_page\_header\_footer NO STANDARD PAGE HEADING
                               LINE-COUNT 0(1).
TYPES: BEGIN OF sflight\_tab\_type,
         carrid TYPE sflight-carrid,
         connid TYPE sflight-connid,
         fldate TYPE sflight-fldate,
       END OF sflight\_tab\_type.
PARAMETERS p\_carrid TYPE sflight-carrid.
DATA: sflight\_tab TYPE TABLE OF sflight\_tab\_type,
      sflight\_wa  LIKE LINE  OF sflight\_tab.
DATA lines TYPE i.
TOP-OF-PAGE.
  WRITE: / sflight\_wa-carrid, sflight\_wa-connid.
  ULINE.
END-OF-PAGE.
  ULINE.
START-OF-SELECTION.
  SELECT carrid, connid, fldate
         FROM sflight
         WHERE carrid = @p\_carrid
         ORDER BY carrid, connid
         INTO CORRESPONDING FIELDS OF TABLE @sflight\_tab.
  LOOP AT sflight\_tab INTO sflight\_wa.
    AT NEW connid.
      SELECT COUNT( DISTINCT fldate )
             FROM sflight
             WHERE carrid = @sflight\_wa-carrid AND
                   connid = @sflight\_wa-connid
             INTO @lines.
      lines += 3.
      NEW-PAGE LINE-COUNT lines.
    ENDAT.
    WRITE / sflight\_wa-fldate.
  ENDLOOP.