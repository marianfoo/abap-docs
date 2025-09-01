---
title: "assertion_glosry"
description: |
  assertion_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassertion_glosry.htm"
abapFile: "abenassertion_glosry.htm"
keywords: ["do", "if", "try", "abenassertion", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20assertion%2C%20ABENASSERTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

assertion

Assertion in an [ABAP program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_glosry.htm "Glossary Entry"). An assertion is defined as a conditional [checkpoint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_glosry.htm "Glossary Entry") using the [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm) statement. Assertions are either always active or can be [activated](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenactivatable_checkpoint_glosry.htm "Glossary Entry") by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry"). When an active assertion is reached, the corresponding condition is evaluated. If the condition is violated, the program terminates with a runtime error, accesses the [ABAP Debugger](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_debugger_glosry.htm "Glossary Entry"), or creates a log entry. If a [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") is assigned, the program behavior is controlled by the corresponding activation settings. Otherwise, the program is terminated.