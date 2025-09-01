  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Call%20Event%20Blocks%2C%20ABENCALL_EVENT_BLOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Call Event Blocks

Event blocks are processing blocks in an ABAP program that are executed when the associated event occurs in the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry"). In two cases, such events can be raised programmatically and the event blocks, if implemented, can be called:

-   Using the statement [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\)) in classic list processing
-   Using the statement [PUT](javascript:call_link\('abapput.htm'\)) in logical databases

Both statements are effectively obsolete. For more information, see the relevant sections.