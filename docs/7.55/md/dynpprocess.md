  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) → 

dynpro - PROCESS

Syntax

PROCESS *{* *{*BEFORE OUTPUT*}*
        *|* *{*AFTER INPUT*}*
        *|* *{*ON HELP-REQUEST*}*
        *|* *{*ON VALUE-REQUEST*}* *}*.

Alternatives:

[1\. ... BEFORE OUTPUT.](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... AFTER INPUT.](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ON HELP-REQUEST.](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... ON VALUE-REQUEST.](#!ABAP_ALTERNATIVE_4@4@)

Effect

The keyword PROCESS defines the processing blocks of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). The associated events are raised by the ABAP runtime environment when a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") is processed:

At least one PROCESS BEFORE OUTPUT statement must exist in the dynpro flow logic. In addition, PROCESS BEFORE OUTPUT must not be positioned after the statement PROCESS AFTER INPUT. If PROCESS ON HELP-REQUEST or PROCESS ON VALUE-REQUEST are specified, PROCESS AFTER INPUT must have been specified before. Other processing blocks besides the four starting with PROCESS are not allowed in the dynpro flow logic.

Alternative 1

... BEFORE OUTPUT.

Effect

The event PROCESS BEFORE OUTPUT (PBO) is raised by the runtime environment before the screen of a dynpro is sent to SAP GUI. After processing the related event block, the contents of the global fields of the ABAP program are transported into [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") of the same name and then the screen is displayed in the GUI window.

Alternative 2

... AFTER INPUT.

Effect

The event PROCESS AFTER INPUT (PAI) is raised by a user action on the user interface, which is associated with a [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry"). At PAI or during the processing of the relevant event block, the contents of the dynpro fields are transported to the data objects with the same names in the corresponding ABAP program. Before executing the relevant event block, automatic input checks are executed, which are defined either in the system or in ABAP Dictionary. While the event block and the PBO event block of the next dynpro are processed, the screen of the current dynpro remains in the display, but the user interface is inactive. After the PAI processing is finished, the event PBO of the next dynpro is raised or, if the current dynpro is the last one in its dynpro sequence, the execution returns to the position from which the dynpro sequence was called.

Hint

The processing of the event blocks for PAI of the current and PBO of the next dynpro together form a [dialog step](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry").

Alternative 3

... ON HELP-REQUEST.

Alternative 4

... ON VALUE-REQUEST.

Effect

The events PROCESS ON HELP-REQUEST (POH) and PROCESS ON VALUE-REQUEST (POV) are raised by the request for the [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") (F1) or the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") (F4) for a screen element of the screen. In the relevant event block, the statement MODULE is executed, which is associated with the FIELD statement for the dynpro field of the selected screen element. If multiple FIELD statements exist for the same dynpro field, only the first is executed. The content of the field specified under FIELD is not automatically passed to the called module in the event block at POH or POV. After the POH or POV is processed, the system returns to the processing of the displayed screen in SAP GUI without raising the event PBO.

Hint

If specified, the event blocks at POH and POV overrule the field helps and input helps defined in the system or in ABAP Dictionary. They must be specified only if the predefined helps are not sufficient.