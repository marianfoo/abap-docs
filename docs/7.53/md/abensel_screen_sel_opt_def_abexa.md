---
title: "Selection Screens, Default Values for Selection Criteria"
description: |
  The example demonstrates which default values can be set for selection criteria. Source Code REPORT demo_sel_screen_select_default. DATA wa_spfli TYPE spfli. SELECT-OPTIONS airline FOR wa_spfli-carrid DEFAULT 'AA' TO 'LH' OPTION  nb SIGN  i. Description The symbol in front of the first field i
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_sel_opt_def_abexa.htm"
abapFile: "abensel_screen_sel_opt_def_abexa.htm"
keywords: ["select", "do", "data", "abensel", "screen", "sel", "opt", "def", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm) →  [SELECT-OPTIONS - value\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options_value.htm) → 

Selection Screens, Default Values for Selection Criteria

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

The symbol in front of the first field indicates that the field airline-option contains the operator NB. The green color indicates that the field airline-sign contains the value "I". The arrow on the right pushbutton is not green since only one row of the selection table is filled.