---
title: "AT PF"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_pf_shortref.htm) Obsolete Syntax AT PFnn. Effect Reacts to an obsolete list event(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_event_glosry.htm 'Glossary Entry'). This obsolete stat
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_pfnn.htm"
abapFile: "abapat_pfnn.htm"
keywords: ["select", "do", "if", "try", "abapat", "pfnn"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlists_obsolete.htm) →  [Obsolete List Event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_event_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AT%20PF%2C%20ABAPAT_PFNN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AT PF

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_pf_shortref.htm)

Obsolete Syntax

AT PFnn.

Effect

Reacts to an obsolete [list event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_event_glosry.htm "Glossary Entry"). This obsolete statement defines an event block whose event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") when a list is displayed. This is provided the screen cursor is on a list line and a function is selected using the function code PFnn, where nn is a number between 01 and 24. In the [standard list status](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_list_status_glosry.htm "Glossary Entry"), these function codes are assigned to the function keys of the input device.

Hint

[AT USER-COMMAND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_user-command.htm) should always be used instead of AT PFnn and special function codes should be assigned to the required function keys.