  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

Dynpro Flow and Dynpro Sequences

Dynpro Flow

[Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are called either using [transaction codes](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") or using the statement [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). The call raises the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and its event block is processed in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). Afterwards, the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the dynpro (dynamic program) is displayed in the current [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") or in a new level (in the case of modal dialog boxes). After a user action in the user interface of this GUI window, the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") (or [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") or [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry")) is raised and its event block is processed in the dynpro flow logic. In the event blocks of the dynpro flow logic, dialog modules of the associated ABAP program are called. When PAI processing is complete, the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the current dynpro is called.

The display language of a general dynpro is the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") and not the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which can be set with statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

Dynpro Sequence

Each dynpro has a next dynpro. In particular, a dynpro can also have its own special next dynpro. The next dynpro is either statically predefined or it is set in the ABAP program using the statements [SET SCREEN](javascript:call_link\('abapset_screen.htm'\)) or [LEAVE TO SCREEN](javascript:call_link\('abapleave_screen.htm'\)). In this way, a dynpro is automatically part of a dynpro sequence. Each next dynpro always belongs to a single popup level and is executed in a single GUI window. The number of the current dynpro can be taken from the system field sy-dynnr.

The flow of a dynpro sequence is determined by the respective next dynpro of the dynpro in question. During processing, a dynpro always has a next dynpro. At the start of processing, this is statically predefined, but it can be overwritten in the program. The first dynpro of a dynpro sequence is the initial dynpro. A dynpro sequence is ended by calling the next dynpro with the dynpro number 0.

If a dynpro sequence is embedded in another sequence, the calling dynpro sequence is continued after completion of a dynpro sequence. If the dynpro sequence is not embedded, the current program is ended.

Continue
![Example](exa.gif "Example") [Dynpros, Dynpro Sequences](javascript:call_link\('abendynpro_flow_abexa.htm'\))