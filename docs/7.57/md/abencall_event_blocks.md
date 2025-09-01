  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Call Event Blocks, ABENCALL_EVENT_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Call Event Blocks

Event blocks are processing blocks in an ABAP program that are executed when the associated event occurs in the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry"). In two cases, such events can be raised programmatically and the event blocks, if implemented, can be called:

-   Using the statement [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_user-command.htm) in classic list processing
-   Using the statement [PUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapput.htm) in logical databases

Both statements are effectively obsolete. For more information, see the relevant sections.