---
title: "Dynpro Flow"
description: |
  Dynpros(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm 'Glossary Entry') are called either using transaction codes(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_code_glosry.htm 'Glossary Entry') or using the statement CALL SCREEN(h
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_processing.htm"
abapFile: "abenabap_dynpros_processing.htm"
keywords: ["do", "if", "case", "try", "abenabap", "dynpros", "processing"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Dynpro Flow and Dynpro Sequences, ABENABAP_DYNPROS_PROCESSING, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Dynpro Flow and Dynpro Sequences

Dynpro Flow   

[Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") are called either using [transaction codes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_code_glosry.htm "Glossary Entry") or using the statement [CALL SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_screen.htm). The call raises the event [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") and its event block is processed in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). Afterwards, the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") of the dynpro is displayed in the current [popup level](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpop-up_level_glosry.htm "Glossary Entry") or in a new level (in the case of modal dialog boxes). After a user action in the user interface of this GUI window, the event [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") (or [POH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpoh_glosry.htm "Glossary Entry") or [POV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpov_glosry.htm "Glossary Entry")) is raised and its event block is processed in the dynpro flow logic. In the event blocks of the dynpro flow logic, dialog modules of the associated ABAP program are called. When PAI processing is complete, the [next dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the current dynpro is called.

The display language of a general dynpro is the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") and not the [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which can be set with statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm).

Dynpro Sequence   

Each dynpro has a next dynpro. In particular, a dynpro can also be its own special next dynpro. The next dynpro is either statically predefined or it is set in the ABAP program using the statements [SET SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_screen.htm) or [LEAVE TO SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_screen.htm). In this way, a dynpro is automatically part of a dynpro sequence. Each next dynpro always belongs to a single popup level and is executed in a single GUI window. The number of the current dynpro can be taken from the system field sy-dynnr.

The flow of a dynpro sequence is determined by the respective next dynpro of the dynpro involved. During processing, a dynpro always has a next dynpro. At the start of processing, this is statically predefined, but it can be overwritten in the program. The first dynpro of a dynpro sequence is the initial dynpro. A dynpro sequence is ended by calling the next dynpro with the dynpro number 0.

If a dynpro sequence is embedded in another sequence, the calling dynpro sequence is continued after completion of a dynpro sequence. If the dynpro sequence is not embedded, the current program is ended.

Continue
![Example](exa.gif "Example") [dynpro - Dynpro Sequences](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_abexa.htm)