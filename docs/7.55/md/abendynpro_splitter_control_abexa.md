---
title: "Source Code"
description: |
  REPORT demo_dynpro_splitter_control. DATA splitter TYPE REF TO cl_dynpro_splitter. START-OF-SELECTION. CREATE OBJECT splitter EXPORTING splitter_name = 'SPLITTER'. CALL SCREEN 100. MODULE set_status OUTPUT. SET PF-STATUS 'SCREEN_100'. ENDMODULE. MODULE set_sash OUTPUT. splitter->set_sash(
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_splitter_control_abexa.htm"
abapFile: "abendynpro_splitter_control_abexa.htm"
keywords: ["select", "do", "try", "data", "abendynpro", "splitter", "control", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_subscreens.htm) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentab_strip_control_abexas.htm) → 

dynpro - Splitter Control

This example demonstrates a [splitter control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensplitter_control_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_dynpro\_splitter\_control.
DATA splitter TYPE REF TO cl\_dynpro\_splitter.
START-OF-SELECTION.
  CREATE OBJECT splitter
    EXPORTING
      splitter\_name = 'SPLITTER'.
  CALL SCREEN 100.
MODULE set\_status OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE set\_sash OUTPUT.
  splitter->set\_sash( ).
ENDMODULE.
MODULE cancel.
  LEAVE PROGRAM.
ENDMODULE.
MODULE get\_sash INPUT.
  splitter->get\_guisash( ).
ENDMODULE.

Description

A subscreen is assigned to both parts of the splitter control. The subscreens are called in the dynpro flow logic.