  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Checkpoints](javascript:call_link\('abencheckpoints.htm'\)) → 

BREAK-POINT

[Short Reference](javascript:call_link\('abapbreak-point_shortref.htm'\))

Syntax

BREAK-POINT *{* *\[*ID group*\]*
            *|* *\[*log\_text*\]* *}*.

Additions:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... log\_text](#!ABAP_ADDITION_2@2@)

Effect

This statement defines a [breakpoint](javascript:call_link\('abenbreakpoint_glosry.htm'\) "Glossary Entry"). The addition ID controls the activation. Without the addition ID, the breakpoint is always active.

Breakpoints in Dialog Processing

If the program reaches an active breakpoint in [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry"), the program execution is interrupted and the system branches to the ABAP Debugger. An inactive breakpoint is ignored and the program execution continues with the statement after BREAK-POINT.

Breakpoints in Background Processing

During [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"), program execution is not interrupted. When the program reaches a permanently active breakpoint (the addition ID is not used), the entry "Breakpoint reached" is written to the system log along with the program name and the location of the breakpoint in the program. Activatable breakpoints (where the addition ID is used) are ignored. The program execution continues in both cases with the statement following BREAK-POINT.

Breakpoints in Updates

During [synchronous](javascript:call_link\('abensynchronous_update_glosry.htm'\) "Glossary Entry") and [asynchronous updates](javascript:call_link\('abenasynchronous_update_glosry.htm'\) "Glossary Entry") in an [update session](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry"), the behavior depends on the setting of the ABAP Debugger:

-   If ABAP Debugger is not set to update debugging, a breakpoint behaves as in background processing.
-   If ABAP Debugger is set to update debugging, a breakpoint behaves as in dialog processing. The update is executed in a dialog work process of the current AS instance.

In [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry"), a breakpoint behaves as in dialog processing.

Breakpoints in RFC Processing

In [RFC processing](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), the system stops at an active breakpoint and branches to the ABAP Debugger of the SAP GUI whenever an [RFC dialog interaction](javascript:call_link\('abenrfc_dialog.htm'\)) is possible. The ABAP Debugger in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") can also be displayed if no dialog interaction is possible.

Breakpoints in ICF and APC Processing

In [ICF processing](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry") and [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry"), the system stops at an active breakpoint and branches to the ABAP Debugger of the SAP GUI only when external debugging is enabled. When programs or procedures are called in ICF processing and APC processing, they are executed in the context of the service context and their breakpoints behave accordingly.

External debugging can be switched on for a limited time period (by default two hours) using transaction SICF or by setting an external breakpoint in the ABAP Editor. If external debugging is not switched on, the breakpoints behave as in background processing. The ABAP Debugger in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") can also be displayed if external debugging is not enabled.

Breakpoints in ABAP daemon Processing

In [ABAP daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry"), the system stops at an active breakpoint and branches to the ABAP Debugger of the SAP GUI only when external debugging is enabled. This also applies to non-dialog users and in callback routines.

Breakpoints in System Programs

In system programs, system modules, system subroutines, and system function modules whose name begins with %\_ , the statement BREAK-POINT is only respected if system debugging is switched on in the ABAP Debugger (using the Settings menu or by entering "/hs" in the command field of the [system toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry")). Otherwise, breakpoints are ignored.

Hints

-   A breakpoint in [SELECT](javascript:call_link\('abapselect.htm'\)) loops can raise an exception due to the loss of the [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry"). This is because a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") may be triggered during debugging.
-   Breakpoints that are always active are used exclusively for test purposes and are not allowed in production programs. The statement BREAK-POINT without the addition ID therefore causes an error in the extended program check.
-   BREAK followed by a user name is not a statement, but a predefined [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry").
-   The statement BREAK-POINT defines a [checkpoint](javascript:call_link\('abencheckpoint_glosry.htm'\) "Glossary Entry") that is part of an ABAP program. In the ABAP Editor and the ABAP Debugger, the following breakpoints can be set and managed without changing the source code:
    -   Session breakpoints
        
        are set in the ABAP Editor. Session breakpoints are valid in all [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") of the current user session.
        
    -   External breakpoints
        
        are set in the ABAP Editor or in transaction SICF. External breakpoints have the same validity as session breakpoints but remain valid for other user sessions when the current session is ended. This makes them particularly well suited for debugging [RFC](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), [ICF](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry"), and [APC](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry") processing.
        
    -   Debugger breakpoints
        
        are set in the ABAP Debugger window. They are valid for the current debugging session and for all [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") of the debuggee. Debugger breakpoints can be saved as external breakpoints.
        

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

-   In dialog processing, activation from outside the program is controlled by a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group or an [activation variant](javascript:call_link\('abenactivation_variant_glosry.htm'\) "Glossary Entry"). The rules that apply to the statement [ASSERT](javascript:call_link\('abapassert.htm'\)) also apply when the checkpoint group is specified. However, only inactive or break can be chosen as operation mode.
-   In [background](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry"), [ICF](javascript:call_link\('abenicf_session_glosry.htm'\) "Glossary Entry"), and [APC](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") sessions without external debugging, the breakpoint is always inactive if the addition ID is used.

Example

Specification of a breakpoint whose behavior is specified by the [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

BREAK-POINT ID demo\_checkpoint\_group.

Addition 2   

... log\_text

Effect

A supplementary text can be entered for the system log in log\_text. log\_text is ignored in dialog processing. In background processing and during the [update task](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), the content of log\_text in the system log is inserted between the words "Breakpoint" and "reached". log\_text expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object with a length of 40 characters. If a data object of type string is specified, it is ignored.

Example

Breakpoint with a text specified for the system log.

TYPES log\_text TYPE c LENGTH 40.
DATA(log\_text) = CONV log\_text( |in program { sy-repid }| ).
BREAK-POINT log\_text.

Continue
[BREAK-POINT, Internal Addition](javascript:call_link\('abapbreak-point_internal.htm'\))