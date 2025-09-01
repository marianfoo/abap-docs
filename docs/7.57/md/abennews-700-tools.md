  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Tools in Release 7.00, ABENNEWS-700-TOOLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Tools in Release 7.00

[1\. ABAP Debugger](#!ABAP_MODIFICATION_1@1@)
[2\. Memory Inspector](#!ABAP_MODIFICATION_2@2@)
[3\. ABAP Unit](#!ABAP_MODIFICATION_3@3@)
[4\. Logpoints](#!ABAP_MODIFICATION_4@4@)

Modification 1   

ABAP Debugger

The new two-process debugger has been further developed as follows:

-   Alignment to the functions of the previous debugger:
    
    Lines can be inserted and deleted in the display of internal tables.
    Watchpoints can be created.
    External programs (RFC, update function modules, BSP, ...) can be debugged.
    Integration of memory analysis and Memory Inspector.
    
-   New tools:
    
    New Editor Control used for source code, which displays the content of variables as a tooltip.
    Display of differences between complex data objects.
    Display of data object graphs.
    Display of global data objects of all loaded programs.
    Structured display of the current screens and container controls.
    
-   Enhancements:
    
    Variable fast display split into global and local data. Display of current parameter interface with local data.
    Complete screen and ABAP stack in the stack display.
    Pausing of a running process at a particular point by setting a session breakpoint in a parallel [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry").
    

Hint

From Release 7.0, the default setting is the use of the two-process debugger. This setting can be changed in ABAP Editor by choosing Utilities → Settings → ABAP Editor → Debugging.

Modification 2   

Memory Inspector

-   Memory Inspector can now be called in every transaction by choosing System → Utilities → Memory Analysis → Compare Memory Snapshots.
-   Memory snapshots can now be created in every transaction by choosing System → Utilities → Memory Analysis → Create Memory Snapshot.

Modification 3   

ABAP Unit

-   The [pseudo comments](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry")
    
    "#AU Risk\_Level ...
    "#AU Duration ...
    can be used to define test properties when creating [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") using the statement [CLASS ... FOR TESTING](javascript:call_link\('abapclass_options.htm'\)).
    
-   To enable the reuse of extensive test preparations, global [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") can be defined in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"). Global test classes should always be abstract, can only be used in local test classes, and, like these, are not generated in production systems.

Modification 4   

Logpoints

-   The new [LOG-POINT](javascript:call_link\('abaplog-point.htm'\)) statement enables unconditional log entries to the log also used by [ASSERT](javascript:call_link\('abapassert.htm'\)). Logpoints are [activatable checkpoints](javascript:call_link\('abenactivatable_checkpoint_glosry.htm'\) "Glossary Entry"), whose activation must be controlled using [checkpoint groups](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") or [activation variants](javascript:call_link\('abenactivation_variant_glosry.htm'\) "Glossary Entry"). Logpoints replace the incorrect usage of ASSERT for logging-only purposes.