  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dialog%20step%2C%20ABENDIALOG_STEP_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dialog step

State of a [user session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_session_glosry.htm "Glossary Entry") between a [user action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_action_glosry.htm "Glossary Entry") on the [user interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_interface_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") and the sending of a new [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry"). During a dialog step, [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") does not react to user actions. The current user session is assigned a [work process](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwork_process_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry"), which executes the program logic of the dialog step. Generally, the dialog step is made up of the logic programmed for the events [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") of the current dynpro and [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") time of the following dynpro.