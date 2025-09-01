# ABAP - Keyword Documentation / ABAP - Reference / program editing / Testing and Checking Programs / Checkpoints

Included pages: 7


### abencheckpoints.htm

---
title: "Checkpoints"
description: |
  Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional and unconditional. Conditional checkpoints are defined by assertions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertion_glosry.h
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm"
abapFile: "abencheckpoints.htm"
keywords: ["do", "if", "try", "abencheckpoints"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) → 

Checkpoints

Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional and unconditional. Conditional checkpoints are defined by [assertions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertion_glosry.htm "Glossary Entry"), unconditional checkpoints by [breakpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbreakpoint_glosry.htm "Glossary Entry") or [logpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogpoint_glosry.htm "Glossary Entry"). Checkpoints, and breakpoints from outside the program, can be activated and deactivated by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") using the transaction SAAB.

-   [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm)

-   [BREAK-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm)

-   [LOG-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point.htm)

More information about activatible checkpoints can be found in the Activatable Checkpoints documentation on [SAP Help Portal](http://help.sap.com).

Executable Example

[Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_abexa.htm).

Continue
[ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm)
[BREAK-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm)
[LOG-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point.htm)
![Example](exa.gif "Example") [Checkpoints and checkpoint groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_abexa.htm)


### abapassert.htm

---
title: "ASSERT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert_shortref.htm) Syntax ASSERT  ID group SUBKEY sub FIELDS val1 val2 ... CONDITION  log_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm). Extras: 1.
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm"
abapFile: "abapassert.htm"
keywords: ["update", "do", "if", "case", "try", "method", "data", "types", "internal-table", "abapassert"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) → 

ASSERT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert_shortref.htm)

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm).

Extras:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... SUBKEY sub](#!ABAP_ADDITION_2@2@)
[3\. ... FIELDS val1 val2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... CONDITION](#!ABAP_ADDITION_4@4@)

Effect

This statement defines an [assertion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertion_glosry.htm "Glossary Entry"). Any [logical expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm). An assertion is either active or inactive.

-   Without the addition ID, the assertion is always active.
    
-   When using addition ID, the activation and the behavior of the statement are controlled from outside the program by means of a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry").
    

When the program reaches an active assertion, the logical expression is evaluated and the program execution continues from the statement after ASSERT only if the result of log\_exp is true. After an inactive assertion, the logical expression log\_exp is not evaluated and the program execution continues at the statement after ASSERT.

-   If the result of log\_exp is false, a non-handleable exception is raised for an assertion that is always active (without the addition ID) and the program terminates with the runtime error ASSERTION\_FAILED.
    
-   For an assertion activated externally (with the addition ID specified), the operation mode specified for a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") or the current [compilation unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompilation_unit_glosry.htm "Glossary Entry") determines how the program execution is continued.
    

Programming Guideline

[Using Assertions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertions_guidl.htm "Guideline")

Notes

-   Assertions help verify particular assumptions about the state of a program in a particular location and ensure that these assumptions are maintained. Unlike implementation with an IF statement and, for example, an exit message, the statement ASSERT is shorter, its meaning is known directly and it can be activated externally.
    
-   If [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified as operands of a [relational expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry") in the logical expression log\_exp, they must be free of side effects. This must especially be the case for assertions that can be activated externally, since the program behavior is otherwise dependent on activation.
    

Example

Before a dynpro is called, the statement ASSERT ensures that a SAP GUI exists. If this is not the case, the program cancels with the runtime error ASSERTION\_FAILED.

DATA gui\_flag TYPE abap\_bool.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui\_flag.
ASSERT gui\_flag = abap\_true.
CALL SCREEN 100.

Addition 1

... ID group

Effect

The addition ID defines how the statement ASSERT is activated and behaves outside of the program using the [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group. If the addition ID is specified, the addition CONDITION must be specified before the log\_exp logical expression.

The name of the checkpoint group must be specified directly and the group must exist in the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry"). A checkpoint group is managed using the transaction SAAB. In a checkpoint group, activation settings can be made for the assigned checkpoints either directly or using [activation variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactivation_variant_glosry.htm "Glossary Entry").

All checkpoint statements associated with the checkpoint group (ASSERT, BREAK-POINT, LOG-POINT) can be activated or deactivated from the checkpoint group. An activation setting consists of the following components:

-   Validity area - Checkpoints specified in the checkpoint group or [compilation unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompilation_unit_glosry.htm "Glossary Entry")
    
-   Context - User and/or application server specified
    
-   Operation mode - System behavior of the various checkpoint types (assertions, breakpoints, or logpoints)
    The following settings are possible:
    

-   Inactive
    The assertion is inactive.

-   Log
    Creates an entry in a special log and continues program execution with the statement after ASSERT. The log entries are collected in the shared memory and are written periodically in a database table by a background job. By default, any existing entries of the same ASSERT statement are overwritten. Each time an entry is written, a counter for the entry is incremented. The log can be evaluated using transaction SAAB.

-   stop / log or stop / cancel
    Go to the ABAP Debugger. In [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the statement ASSERT behaves like the statement [BREAK-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm). The setting specified as alternative is used for the cases in which the statement BREAK-POINT writes an entry in the system log, namely for [background sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_session_glosry.htm "Glossary Entry"), [update sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry"), [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_session_glosry.htm "Glossary Entry") sessions, and [APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_session_glosry.htm "Glossary Entry") sessions without external debugging.

-   Cancel
    Raise an unhandleable exception and terminate the program with runtime error ASSERTION\_FAILED.

If the checkpoint statements are activated from the compilation unit, then the association with a specific checkpoint group no longer has any meaning.

Notes

-   If the checkpoint statements are activated from the compilation unit, it is necessary to specify a checkpoint group, since a checkpoint statement without the addition ID is always active.
    
-   The validity period of activation settings with active operation modes is limited.
    
-   The statement [LOG-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point.htm) can be used to define a [logpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogpoint_glosry.htm "Glossary Entry") if entries are to be written to a log. The statement ASSERT should not be used for this purpose.
    

Example

Like the previous example, but here the behavior of the statement ASSERT is specified using the checkpoint group DEMO\_CHECKPOINT\_GROUP.

DATA gui\_flag TYPE abap\_bool.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui\_flag.
ASSERT ID demo\_checkpoint\_group
          CONDITION gui\_flag = abap\_true.
CALL SCREEN 100.

Addition 2

... SUBKEY sub

Effect

The addition SUBKEY only takes effect if the statement ASSERT writes entries to a log. If SUBKEY is specified, the content of sub is stored in the log as a subkey. Any existing log entries of the same ASSERT statement are overwritten only if the subkey has the same content. If SUBKEY is not specified, the subkey is initial.

sub is a [character-like expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") of which the first 200 characters are evaluated. An expression or function specified here is evaluated only if the assertion is active and the logical expression is false.

Addition 3

... FIELDS val1 val2 ...

Effect

After the addition FIELDS, a list val1 val2 ... of any values (except reference variables) can be specified. If the statement ASSERT writes entries to a log, the content of the data objects val1 val2 ... is included in the log. If an non-handleable exception is raised, the content of the first eight specified data objects is displayed in the associated [short dump](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshort_dump_glosry.htm "Glossary Entry"). The addition FIELDS is ignored when a jump to ABAP Debugger is performed.

val1 val2 ... are [functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry") in which data objects or functional methods can be specified. The methods are executed only if the assertion is active and the logical expression is false.

If the addition FIELDS is specified, the addition CONDITION must be specified before the log\_exp logical expression.

Notes

-   The log to which assertions write is not the system log to which [breakpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm) write during [background processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_processing_glosry.htm "Glossary Entry"). It is a special log that can be read in transaction SAAB.
    
-   The size of each data object saved in the log with the FIELDS addition is restricted by the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/aab\_log\_field\_size\_limit. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is generated, the content of each data object is truncated when this limit is reached, and full lines are removed from internal tables.
    
-   If functional methods are specified after SUBKEY and FIELDS, code for formatting log entries can be executed only after an assertion is violated.
    

Example

Like the previous example, but here logs are provided with additional information.

DATA gui\_flag TYPE abap\_bool.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui\_flag.
ASSERT ID demo\_checkpoint\_group
          SUBKEY sy-uname
          FIELDS 'Missing GUI'  sy-binpt
          CONDITION gui\_flag = abap\_true.
CALL SCREEN 100.

Addition 4

... CONDITION

Effect

The addition CONDITION triggers the logical expression. It has to be specified before log\_exp if one of the other additions is specified; otherwise, it can be omitted.

Example

Like the first example above, but here the optional CONDITION addition is specified. .

DATA gui\_flag TYPE abap\_bool.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui\_flag.
ASSERT CONDITION gui\_flag = abap\_true.
CALL SCREEN 100.


### abapbreak-point.htm

---
title: "BREAK-POINT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_shortref.htm) Syntax BREAK-POINT  ID group  log_text . Extras: 1. ... ID group(#!ABAP_ADDITION_1@1@) 2. ... log_text(#!ABAP_ADDITION_2@2@) Effect This statement defines a br
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm"
abapFile: "abapbreak-point.htm"
keywords: ["select", "insert", "update", "loop", "do", "if", "case", "try", "data", "types", "abapbreak", "point"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) → 

BREAK-POINT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_shortref.htm)

Syntax

BREAK-POINT *{* *\[*ID group*\]*
            *|* *\[*log\_text*\]* *}*.

Extras:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... log\_text](#!ABAP_ADDITION_2@2@)

Effect

This statement defines a [breakpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbreakpoint_glosry.htm "Glossary Entry"). The addition ID controls the activation. Without the addition ID, the breakpoint is always active.

Breakpoints in Dialog Processing

If the program reaches an active breakpoint in [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the execution of the program is interrupted and ABAP Debugger is opened. An inactive breakpoint is ignored and the program execution continues with the statement after BREAK-POINT.

Breakpoints in Background Processing

In [background processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), program execution is not interrupted. When the program reaches a (permanently) active breakpoint (the addition ID is not used), the entry "Breakpoint reached" is written to the system log along with the program name and the location of the breakpoint in the program. Activatable breakpoints (where the addition ID is used) are ignored. The program execution continues in both cases with the statement after BREAK-POINT.

Breakpoints in Updates

During [synchronous](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasynchronous_update_glosry.htm "Glossary Entry") in an [update session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry"), the behavior depends on the setting of the ABAP Debugger:

-   If ABAP Debugger is not set to update debugging, a breakpoint behaves as in background processing.
    
-   If ABAP Debugger is set to update debugging, a breakpoint behaves as in dialog processing. The update is executed in a dialog work process on the current application server.
    

In [local updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm "Glossary Entry"), a breakpoint behaves as in dialog processing.

Breakpoints in RFC Processing

In [RFC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI whenever an [RFC dialog interaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_dialog.htm) is possible. The ABAP Debugger in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") can also be displayed if no dialog interaction is possible.

Breakpoints in ICF Processing and APC Processing

In [ICF processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_processing_glosry.htm "Glossary Entry") and [APC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI only when external debugging is enabled. When programs or procedures are called in ICF processing and APC processing, they are executed in the context of the service context and their breakpoints behave accordingly.

External debugging can be switched on for a limited time period (by default two hours) using transaction SICF or by setting an external breakpoint in ABAP Editor. If external debugging is not switched on, the breakpoints behave as in background processing. The ABAP Debugger in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") can also be displayed if external debugging is not enabled.

Breakpoints in ABAP Daemon Processing

In [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI only when external debugging is enabled. This also applies to non-dialog users and in callback routines.

Breakpoints in System Programs

In system programs, system modules, system subroutines, and system function modules whose name begins with %\_ , the statement BREAK-POINT is only respected if system debugging is switched on in ABAP Debugger (this is done in the Settings menu or by entering "/hs" in the command field of the [system toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry")). Otherwise, breakpoints are ignored.

Notes

-   A breakpoint in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) loops can raise an exception due to the loss of the [database cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). This is because a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") may be triggered during debugging.
    
-   Breakpoints that are always active are used solely for test purposes and are not permitted in production programs. The statement BREAK-POINT without the addition ID therefore causes an error in the extended program check.
    
-   BREAK followed by a user name is not a statement, but a predefined [macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry").
    
-   The statement BREAK-POINT defines a [checkpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_glosry.htm "Glossary Entry") that is part of an ABAP program. In the ABAP Editor and ABAP Debugger, you can set and manage the following breakpoints without changing the source code:
    

-   Session breakpoints
    are set in ABAP Editor. Session breakpoints are valid in all [ABAP sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") of the current user session.

-   External breakpoints
    are set in ABAP Editor or in transaction SICF. External breakpoints have the same validity as session breakpoints, but remain valid for other user sessions when the current session is ended. This makes them particularly well suited for debugging [RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_processing_glosry.htm "Glossary Entry") processing, [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_processing_glosry.htm "Glossary Entry") processing, and [APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm "Glossary Entry") processing.

-   Debugger breakpoints
    are set in the ABAP Debugger window. They are valid for the current debugging session and for all [internal sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") and [ABAP sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") of the debuggee. Debugger breakpoints can be saved as external breakpoints.
    

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

-   In dialog processing, activation from outside the program is controlled by a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group or an [activation variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). The rules that apply to the statement [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm) also apply when the checkpoint group is specified. However, only inactive or break can be chosen as operation mode.
    
-   In [background](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_session_glosry.htm "Glossary Entry") sessions, [update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry") sessions, [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_session_glosry.htm "Glossary Entry") sessions, and [APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_session_glosry.htm "Glossary Entry") sessions without external debugging, the breakpoint is always inactive if the addition ID is used.
    

Example

Specifies a breakpoint whose behavior is specified using the [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

BREAK-POINT ID demo\_checkpoint\_group.

Addition 2

... log\_text

Effect

A supplementary text can be entered for the system log in log\_text. log\_text is ignored in dialog processing. In background processing and during the [update task](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry"), the contents of log\_text in the system log are inserted between the words "Breakpoint" and "reached". log\_text expects a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object with a length of 40 characters. If a data object of type string is specified, it is ignored.

Example

Breakpoint with a text specified for the system log.

TYPES log\_text TYPE c LENGTH 40.
DATA(log\_text) = CONV log\_text( |in program { sy-repid }| ).
BREAK-POINT log\_text.

Continue
[BREAK-POINT - interner Zusatz](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_internal.htm)


### abapbreak-point_internal.htm

---
title: "BREAK-POINT - interner Zusatz"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... AT NEXT APPLICATION STATEMENT Effect This addition can be optionally entered after log_text, but not together with the addition ID. It is only useful in system programs, system modules, system subprog
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_internal.htm"
abapFile: "abapbreak-point_internal.htm"
keywords: ["do", "if", "abapbreak", "point", "internal"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) →  [BREAK-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm) → 

BREAK-POINT - interner Zusatz

This addition is for internal use only.
It must not be used in application programs.

Addition:

... AT NEXT APPLICATION STATEMENT

Effect

This addition can be optionally entered after log\_text, but not together with the addition ID. It is only useful in system programs, system modules, system subprograms, and system function modules that have names beginning with %\_ .

-   If system debugging is not activated, the program does not stop until the next statement that is not located in one of the contexts listed above.
    
-   If system debugging is activated, the program stops at the statement BREAK-POINT.
    

If system debugging is not activated and the addition AT NEXT APPLICATION STATEMENT is not used, BREAK-POINT statements in the contexts listed above are ignored.


### abapbreak-point.htm

---
title: "BREAK-POINT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_shortref.htm) Syntax BREAK-POINT  ID group  log_text . Extras: 1. ... ID group(#!ABAP_ADDITION_1@1@) 2. ... log_text(#!ABAP_ADDITION_2@2@) Effect This statement defines a br
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm"
abapFile: "abapbreak-point.htm"
keywords: ["select", "insert", "update", "loop", "do", "if", "case", "try", "data", "types", "abapbreak", "point"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) → 

BREAK-POINT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_shortref.htm)

Syntax

BREAK-POINT *{* *\[*ID group*\]*
            *|* *\[*log\_text*\]* *}*.

Extras:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... log\_text](#!ABAP_ADDITION_2@2@)

Effect

This statement defines a [breakpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbreakpoint_glosry.htm "Glossary Entry"). The addition ID controls the activation. Without the addition ID, the breakpoint is always active.

Breakpoints in Dialog Processing

If the program reaches an active breakpoint in [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the execution of the program is interrupted and ABAP Debugger is opened. An inactive breakpoint is ignored and the program execution continues with the statement after BREAK-POINT.

Breakpoints in Background Processing

In [background processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), program execution is not interrupted. When the program reaches a (permanently) active breakpoint (the addition ID is not used), the entry "Breakpoint reached" is written to the system log along with the program name and the location of the breakpoint in the program. Activatable breakpoints (where the addition ID is used) are ignored. The program execution continues in both cases with the statement after BREAK-POINT.

Breakpoints in Updates

During [synchronous](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasynchronous_update_glosry.htm "Glossary Entry") in an [update session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry"), the behavior depends on the setting of the ABAP Debugger:

-   If ABAP Debugger is not set to update debugging, a breakpoint behaves as in background processing.
    
-   If ABAP Debugger is set to update debugging, a breakpoint behaves as in dialog processing. The update is executed in a dialog work process on the current application server.
    

In [local updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm "Glossary Entry"), a breakpoint behaves as in dialog processing.

Breakpoints in RFC Processing

In [RFC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI whenever an [RFC dialog interaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_dialog.htm) is possible. The ABAP Debugger in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") can also be displayed if no dialog interaction is possible.

Breakpoints in ICF Processing and APC Processing

In [ICF processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_processing_glosry.htm "Glossary Entry") and [APC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI only when external debugging is enabled. When programs or procedures are called in ICF processing and APC processing, they are executed in the context of the service context and their breakpoints behave accordingly.

External debugging can be switched on for a limited time period (by default two hours) using transaction SICF or by setting an external breakpoint in ABAP Editor. If external debugging is not switched on, the breakpoints behave as in background processing. The ABAP Debugger in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") can also be displayed if external debugging is not enabled.

Breakpoints in ABAP Daemon Processing

In [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), an active breakpoint is applied and the ABAP Debugger displayed in SAP GUI only when external debugging is enabled. This also applies to non-dialog users and in callback routines.

Breakpoints in System Programs

In system programs, system modules, system subroutines, and system function modules whose name begins with %\_ , the statement BREAK-POINT is only respected if system debugging is switched on in ABAP Debugger (this is done in the Settings menu or by entering "/hs" in the command field of the [system toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry")). Otherwise, breakpoints are ignored.

Notes

-   A breakpoint in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) loops can raise an exception due to the loss of the [database cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). This is because a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") may be triggered during debugging.
    
-   Breakpoints that are always active are used solely for test purposes and are not permitted in production programs. The statement BREAK-POINT without the addition ID therefore causes an error in the extended program check.
    
-   BREAK followed by a user name is not a statement, but a predefined [macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry").
    
-   The statement BREAK-POINT defines a [checkpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_glosry.htm "Glossary Entry") that is part of an ABAP program. In the ABAP Editor and ABAP Debugger, you can set and manage the following breakpoints without changing the source code:
    

-   Session breakpoints
    are set in ABAP Editor. Session breakpoints are valid in all [ABAP sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") of the current user session.

-   External breakpoints
    are set in ABAP Editor or in transaction SICF. External breakpoints have the same validity as session breakpoints, but remain valid for other user sessions when the current session is ended. This makes them particularly well suited for debugging [RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_processing_glosry.htm "Glossary Entry") processing, [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_processing_glosry.htm "Glossary Entry") processing, and [APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm "Glossary Entry") processing.

-   Debugger breakpoints
    are set in the ABAP Debugger window. They are valid for the current debugging session and for all [internal sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") and [ABAP sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") of the debuggee. Debugger breakpoints can be saved as external breakpoints.
    

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

-   In dialog processing, activation from outside the program is controlled by a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group or an [activation variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). The rules that apply to the statement [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm) also apply when the checkpoint group is specified. However, only inactive or break can be chosen as operation mode.
    
-   In [background](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_session_glosry.htm "Glossary Entry") sessions, [update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry") sessions, [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_session_glosry.htm "Glossary Entry") sessions, and [APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_session_glosry.htm "Glossary Entry") sessions without external debugging, the breakpoint is always inactive if the addition ID is used.
    

Example

Specifies a breakpoint whose behavior is specified using the [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

BREAK-POINT ID demo\_checkpoint\_group.

Addition 2

... log\_text

Effect

A supplementary text can be entered for the system log in log\_text. log\_text is ignored in dialog processing. In background processing and during the [update task](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry"), the contents of log\_text in the system log are inserted between the words "Breakpoint" and "reached". log\_text expects a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object with a length of 40 characters. If a data object of type string is specified, it is ignored.

Example

Breakpoint with a text specified for the system log.

TYPES log\_text TYPE c LENGTH 40.
DATA(log\_text) = CONV log\_text( |in program { sy-repid }| ).
BREAK-POINT log\_text.

Continue
[BREAK-POINT - interner Zusatz](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point_internal.htm)


### abaplog-point.htm

---
title: "LOG-POINT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point_shortref.htm) Syntax LOG-POINT ID group SUBKEY sub FIELDS val1 val2 .... Extras: 1. ... ID group(#!ABAP_ADDITION_1@1@) 2. ... SUBKEY sub(#!ABAP_ADDITION_2@2@) 3. ... FIELDS val1 val2 ..
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point.htm"
abapFile: "abaplog-point.htm"
keywords: ["do", "if", "try", "method", "data", "internal-table", "abaplog", "point"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) → 

LOG-POINT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point_shortref.htm)

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Extras:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... SUBKEY sub](#!ABAP_ADDITION_2@2@)
[3\. ... FIELDS val1 val2 ...](#!ABAP_ADDITION_3@3@)

Effect

This statement defines a static [logpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogpoint_glosry.htm "Glossary Entry") whose activation is controlled using the addition ID.
Once the program reaches an active logpoint, an entry is created in the log that is also used by the statement [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm) and the program execution proceeds with the statement after LOG-POINT. During this process, any existing entry of the same LOG-POINT statement is overwritten by default. Each time an entry is written, a counter for the entry is incremented. The log can be evaluated using transaction SAAB.

No log entry is written for an inactive logpoint and the program execution proceeds with the statement after LOG-POINT.

Notes

-   Alongside the static logpoints defined using LOG-POINT, dynamic logpoints can be defined using the transaction SDLP or in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry").
    
-   Logpoints are only designed to be used for test purposes in the transaction SAAB. There is no API for importing the logged data, which means that logpoints are not suitable for general logging purposes.
    

Addition 1

... ID group

Effect

The addition ID controls the activation of the logpoint from outside the program using a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group or an [activation variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). The same rules apply when specifying the checkpoint group as for the statement [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm). The possible operation modes for logpoints are active and logging.

Addition 2

... SUBKEY sub

Effect

If SUBKEY is specified, the content of sub is stored in the log as a subkey. Existing log entries of the same LOG-POINT statement are only overwritten if the subkeys have the same content. If SUBKEY is not specified, the subkey is initial.

sub is a [character-like expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") of which the first 200 characters are evaluated. An expression or function specified here is executed only if the logpoint is active.

Addition 3

... FIELDS val1 val2 ...

Effect

After the addition FIELDS, a list of values val1 val2 ... (no reference variables) can be specified that are used in the log.

val1 val2 ... are [functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry") at which data objects or functional methods can be specified. The methods are executed only if the logpoint is active.

Note

The size of each data object saved in the log with the FIELDS addition is restricted by the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/aab\_log\_field\_size\_limit. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is generated, the content of each data object is truncated when this limit is reached, and full lines are removed from internal tables.

Example

Static logpoint with all possible additions.

LOG-POINT ID demo\_checkpoint\_group
             SUBKEY sy-uname
             FIELDS sy-batch sy-cprog.


### abencheckpoint_abexa.htm

---
title: "Checkpoints and checkpoint groups"
description: |
  This example demonstrates the differentcheckpoints(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_glosry.htm 'Glossary Entry') and their connection to a checkpoint group(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm 'Glossar
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_abexa.htm"
abapFile: "abencheckpoint_abexa.htm"
keywords: ["do", "if", "try", "abencheckpoint", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) → 

Checkpoints and checkpoint groups

This example demonstrates the different[checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_glosry.htm "Glossary Entry") and their connection to a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry").

Source Code

Execute

Description

The example includes the following:

-   A [logpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogpoint_glosry.htm "Glossary Entry")

-   A [breakpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbreakpoint_glosry.htm "Glossary Entry")

-   An [assertion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertion_glosry.htm "Glossary Entry")

All of these are linked with the DEMO\_CHECKPOINT\_GROUP[checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry").

For example, you choose the following settings:

-   Break for breakpoints

-   Log for logpoints

-   Abort for assertions

You adopt the default values for the parameters. This has the following results:

-   The LOG-POINT statement writes an entry to a log that you analyze following the execution of the program in transaction SAAB.

-   The program stops at the BREAK-POINT statement in the ABAP Debugger.

-   An ASSERTION\_FAILED runtime error occurs for the ASSERT statement because field2 is initial.

If the activation settings are all inactive, none of the checkpoints has an effect.
