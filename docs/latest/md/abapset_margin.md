---
title: "SET MARGIN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_margin_shortref.htm) Syntax SET MARGIN macol marow. Effect This statement defines the left margin of a spool list as the columns specified in macol, and the upper margin as the rows specified in marow,
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_margin.htm"
abapFile: "abapset_margin.htm"
keywords: ["select", "insert", "do", "while", "if", "try", "class", "data", "abapset", "margin"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_list.htm) →  [Lists - Spool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprint.htm) →  [Lists - Spool Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprint_control.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20MARGIN%2C%20ABAPSET_MARGIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET MARGIN

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_margin_shortref.htm)

Syntax

SET MARGIN macol *\[*marow*\]*.

Effect

This statement defines the left margin of a spool list as the columns specified in macol, and the upper margin as the rows specified in marow, and sets the system fields sy-macol and sy-marow to these values. macol and marow expect data objects with the type i, with values within the current page width and page length. If macol or marow contain invalid values, the associated operand is ignored.

The set values apply to the current page and all subsequent pages until the next SET MARGIN statement. If more than one SET MARGIN statement is specified on a page, the last one applies.

SET MARGIN is ignored when screen lists are displayed. The set margins are only inserted in the list as blanks or empty lines if a list page is sent to the SAP spool system. This applies to spool lists created using [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnew-page_print.htm), [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_list_options.htm), and by the selection of Execute and Print on the [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry"). SET MARGIN also applies if a screen list is spooled while it is being displayed, when Print (function code PRI) is selected.

Hint

For printers with an active list driver, margins can be defined in millimeters in the spool dialog. When pages are sent from the spool system to the printer, the pages, including the margins set using SET MARGIN, are positioned within these margins.