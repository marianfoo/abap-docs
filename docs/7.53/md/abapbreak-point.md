  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoints.htm) → 

BREAK-POINT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapbreak-point_shortref.htm)

Syntax

BREAK-POINT *{* *\[*ID group*\]*
            *|* *\[*log\_text*\]* *}*.

Extras:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... log\_text](#!ABAP_ADDITION_2@2@)

Effect

This statement defines a [breakpoint](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbreakpoint_glosry.htm "Glossary Entry"). The addition ID controls the activation. Without the addition ID, the breakpoint is always active.

Breakpoints in Dialog Processing

If the program reaches an active breakpoint in [dialog processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the execution of the program is interrupted and ABAP Debugger is opened. An inactive breakpoint is ignored and the program execution continues with the statement after BREAK-POINT.

Breakpoints in Background Processing

In [background processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), program execution is not interrupted. When the program reaches a (permanently) active breakpoint (the addition ID is not used), the entry "Breakpoint reached" is written to the system log along with the program name and the location of the breakpoint in the program. Activatable breakpoints (where the addition ID is used) are ignored. The program execution continues in both cases with the statement after BREAK-POINT.

Breakpoints in Updates

During [synchronous](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_update_glosry.htm "Glossary Entry") in an [update session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_session_glosry.htm "Glossary Entry"), the behavior depends on the setting of the ABAP Debugger:

-   If ABAP Debugger is not set to update debugging, a breakpoint behaves as in background processing.
    
-   If ABAP Debugger is set to update debugging, a breakpoint behaves as in dialog processing. The update is executed in a dialog work process of the current AS Instance.
    

In [local updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_update_glosry.htm "Glossary Entry"), a breakpoint behaves as in dialog processing.

Breakpoints in RFC Processing

In [RFC processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI whenever an [RFC dialog interaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_dialog.htm) is possible. The ABAP Debugger in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") can also be displayed if no dialog interaction is possible.

Breakpoints in ICF and APC Processing

In [ICF processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenicf_processing_glosry.htm "Glossary Entry") and [APC processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI only when external debugging is enabled. When programs or procedures are called in ICF processing and APC processing, they are executed in the context of the service context and their breakpoints behave accordingly.

External debugging can be switched on for a limited time period (by default two hours) using transaction SICF or by setting an external breakpoint in ABAP Editor. If external debugging is not switched on, the breakpoints behave as in background processing. The ABAP Debugger in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") can also be displayed if external debugging is not enabled.

Breakpoints in ABAP Daemon Processing

In [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI only when external debugging is enabled. This also applies to non-dialog users and in callback routines.

Breakpoints in System Programs

In system programs, system modules, system subroutines, and system function modules whose name begins with %\_ , the statement BREAK-POINT is only respected if system debugging is switched on in ABAP Debugger (this is done in the Settings menu or by entering "/hs" in the command field of the [system toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry")). Otherwise, breakpoints are ignored.

Notes

-   A breakpoint in [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) loops can raise an exception due to the loss of the [database cursor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). This is because a [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") may be triggered during debugging.
    
-   Breakpoints that are always active are used solely for test purposes and are not permitted in production programs. The statement BREAK-POINT without the addition ID therefore causes an error in the extended program check.
    
-   BREAK followed by a user name is not a statement, but a predefined [macro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry").
    
-   The statement BREAK-POINT defines a [checkpoint](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoint_glosry.htm "Glossary Entry") that is part of an ABAP program. In the ABAP Editor and ABAP Debugger, you can set and manage the following breakpoints without changing the source code:
    

-   Session breakpoints
    are set in ABAP editor. Session breakpoints are valid in all [ABAP sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_session_glosry.htm "Glossary Entry") of the current user session.

-   External breakpoints
    are set in ABAP Editor or in transaction SICF. External breakpoints have the same validity as session breakpoints, but remain valid for other user sessions when the current session is ended. This makes them particularly well suited for debugging [RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), [ICF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenicf_processing_glosry.htm "Glossary Entry"), and [APC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_processing_glosry.htm "Glossary Entry") processing.

-   Debugger breakpoints
    are set in the ABAP Debugger window. They are valid for the current debugging session and for all [internal sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") and [ABAP sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_session_glosry.htm "Glossary Entry") of the debuggee. Debugger breakpoints can be saved as external breakpoints.
    

Example

Breakpoint between two program sections.

\*Program section
...
BREAK-POINT.
\*Program section
...

Addition 1

... ID group

Effect

The following applies when using the addition ID:

-   In dialog processing, activation from outside the program is controlled by a [checkpoint group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group or an [activation variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). The rules that apply to the statement [ASSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassert.htm) also apply when the checkpoint group is specified. However, only inactive or break can be chosen as operation mode.
    
-   In [background](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_session_glosry.htm "Glossary Entry"), [update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_session_glosry.htm "Glossary Entry"), [ICF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenicf_session_glosry.htm "Glossary Entry"), and [APC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_session_glosry.htm "Glossary Entry") sessions without external debugging, the breakpoint is always inactive if the addition ID is used.
    

Example

Specifies a breakpoint whose behavior is specified using the [checkpoint group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

BREAK-POINT ID demo\_checkpoint\_group.

Addition 2

... log\_text

Effect

A supplementary text can be entered for the system log in log\_text. log\_text is ignored in dialog processing. In background processing and during the [update task](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_glosry.htm "Glossary Entry"), the contents of log\_text in the system log are inserted between the words "Breakpoint" and "reached". log\_text expects a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object with a length of 40 characters. If a data object of type string is specified, it is ignored.

Example

Breakpoint with a text specified for the system log.

TYPES log\_text TYPE c LENGTH 40.
DATA(log\_text) = CONV log\_text( |in program { sy-repid }| ).
BREAK-POINT log\_text.

Continue
[BREAK-POINT - interner Zusatz](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapbreak-point_internal.htm)