  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_dynpro_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20PROCESS%2C%20DYNPPROCESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

The keyword PROCESS defines the processing blocks of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). The associated events are raised by the ABAP runtime framework when a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") is processed:

At least one PROCESS BEFORE OUTPUT statement must exist in the dynpro flow logic. In addition, PROCESS BEFORE OUTPUT must not be positioned after the statement PROCESS AFTER INPUT. If PROCESS ON HELP-REQUEST or PROCESS ON VALUE-REQUEST are specified, PROCESS AFTER INPUT must have been specified before. Other processing blocks besides the four starting with PROCESS are not allowed in the dynpro flow logic.

Alternative 1   

... BEFORE OUTPUT.

Effect

PROCESS BEFORE OUTPUT introduces a processing block for the event [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry") that is raised by the runtime framework before the screen of a dynpro is sent to SAP GUI. After processing the associated event block, the content of the global fields of the ABAP program is transported into identically named [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") and then the screen layout is displayed in the GUI window.

Alternative 2   

... AFTER INPUT.

Effect

PROCESS AFTER INPUT introduces a processing block for the event [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpai_glosry.htm "Glossary Entry") that is raised by a user action on the user interface, which is linked with a [function code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_code_glosry.htm "Glossary Entry"). At PAI or during the processing of the associated event block, the content of the dynpro fields is transported to the identically named data objects in the corresponding ABAP program. Before the relevant event block is executed, automatic input checks are performed, which are defined either in the system or in the ABAP Dictionary. While the event block and the PBO event block of the next dynpro are processed, the screen layout of the current dynpro remains in the display, but the user interface is inactive. After the PAI processing is finished, the event PBO of the next dynpro is raised or, if the current dynpro is the last one in its dynpro sequence, the execution returns to the position from which the dynpro sequence was called.

Hint

The processing of the event blocks for PAI of the current and PBO of the next dynpro together form a [dialog step](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_step_glosry.htm "Glossary Entry").

Alternative 3   

... ON HELP-REQUEST.

Alternative 4   

... ON VALUE-REQUEST.

Effect

PROCESS ON HELP-REQUEST and PROCESS ON VALUE-REQUEST introduce processing blocks for the events [POH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpoh_glosry.htm "Glossary Entry") and [POH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpov_glosry.htm "Glossary Entry") that are raised by the request for the [field help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_help_glosry.htm "Glossary Entry") (F1) or the [input help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_help_glosry.htm "Glossary Entry") (F4) for a screen element of the screen layout. In the associated event block, the statement MODULE is executed, which is linked with the FIELD statement for the dynpro field of the selected screen element. If multiple FIELD statements exist for the same dynpro field, only the first is executed. The content of the field specified under FIELD is not automatically passed to the called module in the event block at POH or POV. After the POH or POV is processed, the system returns to the processing of the displayed screen layout in SAP GUI without raising the event PBO.

Hint

Specifying the event blocks at POH and POV overrides the field helps and input helps defined in the system or in the ABAP Dictionary. They must be specified only if the predefined helps are not sufficient.