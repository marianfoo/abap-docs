---
title: "dialog_step_glosry"
description: |
  dialog_step_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendialog_step_glosry.htm"
abapFile: "abendialog_step_glosry.htm"
keywords: ["do", "try", "abendialog", "step", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

dialog step

State of a [user session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_session_glosry.htm "Glossary Entry") between a [user action](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_action_glosry.htm "Glossary Entry") on the [user interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_interface_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") and the sending of a new [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry"). During a dialog step, [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry") does not react to user actions. The current user session is assigned a [work process](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwork_process_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry"), which executes the program logic of the dialog step. Generally, the dialog step is made up of the logic programmed for the events [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry") of the current dynpro and [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry") time of the following dynpro.