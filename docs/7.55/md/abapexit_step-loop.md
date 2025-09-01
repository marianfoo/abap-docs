---
title: "EXIT FROM STEP-LOOP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexit_from_step-loop_shortref.htm) Syntax EXIT FROM STEP-LOOP. Effect When processing table controls(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm 'Glossary Entry') or step lo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexit_step-loop.htm"
abapFile: "abapexit_step-loop.htm"
keywords: ["loop", "do", "if", "try", "abapexit", "step"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_abap_statements.htm) → 

EXIT FROM STEP-LOOP

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexit_from_step-loop_shortref.htm)

Syntax

EXIT FROM STEP-LOOP.

Effect

When processing [table controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm "Glossary Entry") or [step loops](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstep_loop_glosry.htm "Glossary Entry") with the statement [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynploop.htm) in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), this statement causes the loop to be terminated immediately. The current ABAP- [processing block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocessing_block_glosry.htm "Glossary Entry") is exited instantly and the dynpro flow logic continues after the statement ENDLOOP. During [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry") processing, the statement causes the current table control line and the following lines or step loop groups to be hidden on the screen. If the statement is not executed in the processing of a LOOP loop in the dynpro flow logic, the program terminates with a [termination message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentermination_message_glosry.htm "Glossary Entry").