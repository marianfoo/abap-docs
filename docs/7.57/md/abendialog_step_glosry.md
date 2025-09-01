  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dialog step, ABENDIALOG_STEP_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

dialog step

State of a [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry") between a [user action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_action_glosry.htm "Glossary Entry") on the [user interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_interface_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") and the sending of a new [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry"). During a dialog step, [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") does not react to user actions. The current user session is assigned a [work process](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"), which executes the program logic of the dialog step. Generally, the dialog step is made up of the logic programmed for the events [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") of the current dynpro and [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") time of the following dynpro.