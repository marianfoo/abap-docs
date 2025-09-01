---
title: "Dynpros, Splitter Control"
description: |
  This example demonstrates a splitter control(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensplitter_control_glosry.htm 'Glossary Entry'). Source Code REPORT demo_dynpro_splitter_control. DATA splitter TYPE REF TO cl_dynpro_splitter. START-OF-SELECTION. CREATE OBJECT splitter
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_splitter_control_abexa.htm"
abapFile: "abendynpro_splitter_control_abexa.htm"
keywords: ["select", "do", "try", "data", "abendynpro", "splitter", "control", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_subscreens.htm) →  [Subscreens, Tabstrips, and Splitter Controls - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentab_strip_control_abexas.htm) → 

Dynpros, Splitter Control

This example demonstrates a [splitter control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensplitter_control_glosry.htm "Glossary Entry").

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