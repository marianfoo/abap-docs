  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Event Blocks for Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_interactive.htm) → 

END-OF-PAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-page_shortref.htm)

Syntax

END-OF-PAGE.

Effect

This statement defines an event block triggered by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") when a basic list is created, if a line reservation was made in the addition LINE-COUNT of the introductory statement for a [page footer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpage_footer_glosry.htm "Glossary Entry") reached by a write operation on this page. List output made in the event block is placed in this area. Output statements that exceed the reserved area are ignored.

Example

This program displays a list of flights and creates a page for each connection with a header line and footer line.

REPORT demo\_page\_header\_footer NO STANDARD PAGE HEADING
                               LINE-COUNT 0(1).
TYPES: BEGIN OF sflight\_tab\_type,
         carrid TYPE sflight-carrid,
         connid TYPE sflight-connid,
         fldate TYPE sflight-fldate,
       END OF sflight\_tab\_type.
PARAMETERS p\_carrid TYPE sflight-carrid.
DATA: sflight\_tab TYPE TABLE OF sflight\_tab\_type,
      sflight\_wa  LIKE LINE OF sflight\_tab.
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
      lines = lines + 3.
      NEW-PAGE LINE-COUNT lines.
    ENDAT.
    WRITE / sflight\_wa-fldate.
  ENDLOOP.