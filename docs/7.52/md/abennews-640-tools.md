  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Tools in Release 6.40

[1\. Assertions and activatable breakpoints](#!ABAP_MODIFICATION_1@1@)
[
2\. New two-process debugger](#!ABAP_MODIFICATION_2@2@)
[
3\. Enhancements to the previous debugger](#!ABAP_MODIFICATION_3@3@)
[
4\. Memory Inspector](#!ABAP_MODIFICATION_4@4@)
[
5\. Code Inspector](#!ABAP_MODIFICATION_5@5@)
[
6\. ABAP Unit](#!ABAP_MODIFICATION_6@6@)
[
7\. Runtime analysis](#!ABAP_MODIFICATION_7@7@)

Modification 1

Assertions and activatable breakpoints

The new statement [ASSERT](javascript:call_link\('abapassert.htm'\)) can be used to define [assertions](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry"). Assertions help verify particular assumptions about the state of a program in a particular location, and they guarantee that these assumptions hold.
Assertions can be activated from outside the program using a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") and the addition ID. The same addition was also introduced for the statement [BREAK-POINT](javascript:call_link\('abapbreak-point.htm'\)) to activate breakpoints using checkpoint groups.

Note

This change was also transported to Release 6.20.

Modification 2

New two-process debugger

The new two-process debugger is a completely new development, with particular emphasis on the development of a more modern user interface. The main differences between this and the previous ABAP debugger are that the new debugger is executed in a separate [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") and the object that is being analyzed (the debuggee) is now the entire ABAP session instead of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

The new ABAP debugger provides the user with a flexible and freely configurable interface with over eight desktops, on which between one and four tools, such as source code display or structure display, can be placed and arranged. In Release 6.40, there is now a choice of the previous debugger and the new debugger; it is now also possible to switch between the two at any time during a debugger session.

Modification 3

Enhancements to the previous debugger

1.  When internal tables are displayed, offsets and lengths can be specified for the character-like components in the column headers.
    
2.  When internal tables are displayed, the corresponding icons next to the table names can be selected to list the names of all internal tables displayed in the previous debugger session and double-clicked to display them. The display starts from the row number and the component with which the selected table was last displayed.
    
3.  If the program flow is stuck on a CASE statement, the system branches in a single step to the affected WHEN block.
    
4.  In ABAP Editor, external debugging can be activated and deactivated under Utilities → Settings. Depending on the settings and whether a regular ABAP program or an ABAP Script for a [BSP](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry") is being edited, a prompt may appear (when creating breakpoints in ABAP Editor) asking whether these breakpoints are to be HTTP breakpoints or session breakpoints. HTTP breakpoints are persisted in the database for different logons; session breakpoints are regular breakpoints that refer to the current logon.
    

Modification 4

Memory Inspector

The Memory Inspector tool was introduced for the analysis of [memory snapshots](javascript:call_link\('abenmemory_snapshot_glosry.htm'\) "Glossary Entry").

Note

This change was also transported to Release 6.20.

Modification 5

Code Inspector

The Code Inspector tool was introduced to check [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") for performance, security, syntax, and the adherence to naming conventions.

Modification 6

ABAP Unit

The [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") tool was integrated in the ABAP runtime environment to test individual program sections. ABAP Unit is based on the execution of [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") in [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry").

Modification 7

Runtime Analysis

When measuring [BSP](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry") applications, it is now also possible to specify a different variant to the standard variant for restrictions (in the runtime analysis transaction SE30).

The class CL\_ABAP\_RUNTIME provides methods for creating objects. The method GET\_RUNTIME can be used to execute multiple runtime measurements with different resolutions and parallel measurements (see [Class for Runtime Measurements](javascript:call_link\('abencl_abap_runtime.htm'\))).