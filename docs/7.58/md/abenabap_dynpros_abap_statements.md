---
title: "Continue"
description: |
  CALL SCREEN(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_screen.htm) SET PF-STATUS, Dynpro(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_pf-status_dynpro.htm) GET PF-STATUS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_pf.htm) S
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_abap_statements.htm"
abapFile: "abenabap_dynpros_abap_statements.htm"
keywords: ["loop", "do", "if", "try", "data", "abenabap", "dynpros", "abap", "statements"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20ABAP%20Statements%2C%20ABENABAP_DYNPROS_ABAP_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - ABAP Statements

The following statements can be used to call and process [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") in an ABAP program:

-   [CALL SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_screen.htm)
-   [SET PF-STATUS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_pf-status_dynpro.htm)
-   [GET PF-STATUS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_pf.htm)
-   [SET TITLEBAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_dynpro.htm)
-   [SUPPRESS DIALOG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsuppress.htm)
-   [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_screen.htm)
-   [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_screen.htm)
-   [SET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_cursor_dynpro.htm)
-   [GET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_dynpro.htm)
-   [CONTROLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontrols.htm)
-   [REFRESH CONTROL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_control.htm)
-   [EXIT FROM STEP-LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_step-loop.htm)
-   [SET HOLD DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_hold_data.htm)
-   [SET SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen.htm)
-   [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_screen.htm)

Continue
[CALL SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_screen.htm)
[SET PF-STATUS, Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_pf-status_dynpro.htm)
[GET PF-STATUS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_pf.htm)
[SET TITLEBAR, Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_dynpro.htm)
[SUPPRESS DIALOG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsuppress.htm)
[LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_screen.htm)
[SET CURSOR, Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_cursor_dynpro.htm)
[GET CURSOR, Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_dynpro.htm)
[CONTROLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontrols.htm)
[REFRESH CONTROL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_control.htm)
[EXIT FROM STEP-LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_step-loop.htm)
[SET HOLD DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_hold_data.htm)
[SET SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen.htm)
[LEAVE \[TO\] SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_screen.htm)