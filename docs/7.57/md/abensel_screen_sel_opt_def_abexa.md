---
title: "Selection Screens - Default Values for Selection Criteria"
description: |
  The example demonstrates which default values can be set for selection criteria. Source Code REPORT demo_sel_screen_select_default. DATA wa_spfli TYPE spfli. SELECT-OPTIONS airline FOR wa_spfli-carrid DEFAULT 'AA' TO 'LH' OPTION  nb SIGN  i. Description The symbol in front of the first field i
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensel_screen_sel_opt_def_abexa.htm"
abapFile: "abensel_screen_sel_opt_def_abexa.htm"
keywords: ["select", "do", "if", "data", "abensel", "screen", "sel", "opt", "def", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options.htm) →  [SELECT-OPTIONS, value\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options_value.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Default Values for Selection Criteria, ABENSEL_SCREEN_SEL_OPT_DEF
_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Default Values for Selection Criteria

The example demonstrates which default values can be set for selection criteria.

Source Code   

REPORT demo\_sel\_screen\_select\_default.
DATA wa\_spfli TYPE spfli.
SELECT-OPTIONS airline FOR wa\_spfli-carrid
               DEFAULT 'AA'
                    TO 'LH'
                OPTION  nb
                  SIGN  i.

Description   

The symbol in front of the first field indicates that the field airline-option contains the operator NB. The green color indicates that the field airline-sign contains the value "I". The arrow on the right pushbutton is not green since only one line of the selection table is filled.