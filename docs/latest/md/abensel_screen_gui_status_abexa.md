---
title: "Selection Screens - Change Standard GUI Status"
description: |
  The example demonstrates how the GUI status of a selection screen can be changed. Source Code REPORT demo_sel_screen_status . DATA itab TYPE TABLE OF sy-ucomm. PARAMETERS test(10) TYPE c. AT SELECTION-SCREEN OUTPUT. itab = VALUE #( ( CONV sy-ucomm( 'PRIN' ) ) ( CONV sy-ucomm( 'SPOS' ) ) ). CALL F
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensel_screen_gui_status_abexa.htm"
abapFile: "abensel_screen_gui_status_abexa.htm"
keywords: ["select", "do", "if", "data", "abensel", "screen", "gui", "status", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_overview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Change%20Standard%20GUI%20Status%2C%20ABENSEL_SCREEN_GUI_STATUS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Selection Screens - Change Standard GUI Status

The example demonstrates how the GUI status of a selection screen can be changed.

Source Code   

REPORT demo\_sel\_screen\_status .
DATA itab TYPE TABLE OF sy-ucomm.
PARAMETERS test(10) TYPE c.
AT SELECTION-SCREEN OUTPUT.
  itab = VALUE #( ( CONV sy-ucomm( 'PRIN' ) )
                  ( CONV sy-ucomm( 'SPOS' ) ) ).
  CALL FUNCTION 'RS\_SET\_SELSCREEN\_STATUS'
       EXPORTING
            p\_status  = sy-pfkey
       TABLES
            p\_exclude = itab.

Description   

In this example program, the two functions Print and Save as Variant are disabled. The function codes of the default GUI status can be found in the field GUI Status which can be displayed by choosing System → Status.