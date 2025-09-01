---
title: "CONTROLS"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_shortref.htm) Syntax Forms Declaration of Table Controls(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_tableview.htm) 1. CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr. Declarat
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols.htm"
abapFile: "abapcontrols.htm"
keywords: ["loop", "do", "if", "try", "class", "abapcontrols"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) → 

CONTROLS

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_shortref.htm)

Syntax Forms

[Declaration of Table Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_tableview.htm)
1\. CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr.
[Declaration of Tabstrip Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_tabstrip.htm)
2\. CONTROLS contrl TYPE TABSTRIP.

Effect

For each [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") used in the program, all [table controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") and [tabstrip controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentabstrip_control_glosry.htm "Glossary Entry") defined there have to be declared in the declaration part using the statement CONTROLS, otherwise a non-handleable exception is raised when the dynpro in question is called. contrl expects the name of the control defined in the dynpro to be specified directly. After TYPE, TABLEVIEW, or TABSTRIP must be used to specify whether it is a table control or a tabstrip control.

For each control, the CONTROLS statement creates a structure with the name of the control in the ABAP program. The structure components enable the respective control to be processed in the ABAP program.

Notes

-   For table controls, corresponding [loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop.htm) have to be programmed in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). For tabstrip controls, suitable [subscreens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpcall.htm) have to be called.
    
-   [Splitter controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensplitter_control_glosry.htm "Glossary Entry") cannot be declared using the CONTROLS statement. Instead the class CL\_DYNPRO\_SPLITTER is used.
    

Continue
[CONTROLS - TYPE TABLEVIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_tableview.htm)
[CONTROLS - TYPE TABSTRIP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols_tabstrip.htm)