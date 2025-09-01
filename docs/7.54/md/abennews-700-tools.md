  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70.htm) → 

Tools in Release 7.00

[1\. ABAP Debugger](#!ABAP_MODIFICATION_1@1@)
[
2\. Memory Inspector](#!ABAP_MODIFICATION_2@2@)
[
3\. ABAP Unit](#!ABAP_MODIFICATION_3@3@)
[
4\. Logpoints](#!ABAP_MODIFICATION_4@4@)

Modification 1

ABAP Debugger

The new two-process debugger has been further developed as follows:

1.  Alignment to the functions of the previous debugger:
    Rows can be inserted and deleted in the display of internal tables.
    Watchpoints can be created.
    External programs (RFC, update function modules, BSP, ...) can be debugged.
    Integration of memory analysis and Memory Inspector.
    
2.  New tools:
    New Editor Control used for source code, which displays the content of variables as a tooltip.
    Display of differences between complex data objects.
    Display of data object graphs.
    Display of global data objects of all loaded programs.
    Structured display of the current screens and container controls.
    
3.  Enhancements:
    Variable fast display split into global and local data. Display of current parameter interface with local data.
    Complete screen and ABAP stack in the stack display.
    Pausing of a running process at a particular point by setting a session breakpoint in a parallel [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry").
    

Note

From Release 7.0, the default setting is the use of the two-process debugger. This setting can be changed in ABAP Editor by choosing Utilities → Settings → ABAP Editor → Debugging.

Modification 2

Memory Inspector

-   Memory Inspector can now be called in every transaction by choosing System → Utilities → Memory Analysis → Compare Memory Snapshots.
    
-   Memory snapshots can now be created in every transaction by choosing System → Utilities → Memory Analysis → Create Memory Snapshot.
    

Modification 3

ABAP Unit

1.  The [pseudo comments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_comment_glosry.htm "Glossary Entry")
    "#AU Risk\_Level ...
    "#AU Duration ...
    can be used to define test properties when creating [test classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_class_glosry.htm "Glossary Entry") using the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_options.htm).
    
2.  To enable the reuse of extensive test preparations, global [test classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_class_glosry.htm "Glossary Entry") can be defined in [Class Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_builder_glosry.htm "Glossary Entry"). Global test classes should always be abstract, can only be used in local test classes, and, like these, are not generated in production systems.
    

Modification 4

Logpoints

-   The new [LOG-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplog-point.htm) statement enables unconditional log entries to the log also used by [ASSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm). Logpoints are [activatable checkpoints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactivatable_checkpoint_glosry.htm "Glossary Entry"), whose activation must be controlled using [checkpoint groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") or [activation variants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). Logpoints replace the incorrect usage of ASSERT for logging-only purposes.