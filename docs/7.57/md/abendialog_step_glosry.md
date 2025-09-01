  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dialog step, ABENDIALOG_STEP_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

dialog step

State of a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") between a [user action](javascript:call_link\('abenuser_action_glosry.htm'\) "Glossary Entry") on the [user interface](javascript:call_link\('abenuser_interface_glosry.htm'\) "Glossary Entry") of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") and the sending of a new [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). During a dialog step, [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") does not react to user actions. The current user session is assigned a [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"), which executes the program logic of the dialog step. Generally, the dialog step is made up of the logic programmed for the events [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") of the current dynpro and [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") time of the following dynpro.