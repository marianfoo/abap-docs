---
title: "dialog_step_glosry"
description: |
  dialog_step_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_step_glosry.htm"
abapFile: "abendialog_step_glosry.htm"
keywords: ["do", "try", "abendialog", "step", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

dialog step

State of a [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry") between a [user action](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_action_glosry.htm "Glossary Entry") on the [user interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_interface_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") and the sending of a new [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry"). During a dialog step, [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") does not react to user actions. The current user session is assigned a [work process](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_process_glosry.htm "Glossary Entry") of the current [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry"), which executes the program logic of the dialog step. Generally, the dialog step consists of the logic programmed for the [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") time of the current dynpro and [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") time of the following dynpro.