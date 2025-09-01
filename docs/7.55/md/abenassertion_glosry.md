---
title: "assertion_glosry"
description: |
  assertion_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassertion_glosry.htm"
abapFile: "abenassertion_glosry.htm"
keywords: ["do", "if", "try", "abenassertion", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

assertion

Assertion in an [ABAP program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_glosry.htm "Glossary Entry"). An assertion is defined as a conditional [checkpoint](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoint_glosry.htm "Glossary Entry") using the [ASSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassert.htm) statement. Assertions are either always active or can be [activated](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenactivatable_checkpoint_glosry.htm "Glossary Entry") by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoint_group_glosry.htm "Glossary Entry"). When an active assertion is reached, the corresponding condition is evaluated. If the condition is violated, the program terminates with a runtime error, accesses the [ABAP Debugger](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_debugger_glosry.htm "Glossary Entry"), or creates a log entry. If a [checkpoint group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") is assigned, the program behavior is controlled by the corresponding activation settings, otherwise the program is terminated.