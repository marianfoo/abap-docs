  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoints.htm) → 

ASSERT

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert_shortref.htm)

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm).

Additions:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... SUBKEY sub](#!ABAP_ADDITION_2@2@)
[3\. ... FIELDS val1 val2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... CONDITION](#!ABAP_ADDITION_4@4@)

Effect

This statement defines an [assertion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertion_glosry.htm "Glossary Entry"). Any [logical expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm). An assertion is either active or inactive.

-   Without the addition ID, the assertion is always active.
-   When using addition ID, the activation and the behavior of the statement are controlled from outside the program by a [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry").

When the program reaches an active assertion, the logical expression is evaluated, and the program execution continues with the statement after ASSERT only if the result of log\_exp is true. After an inactive assertion, the logical expression log\_exp is not evaluated and the program execution continues with the statement following ASSERT.

-   If the result of log\_exp is false, an uncatchable exception is raised for an assertion that is always active, if the addition ID is not specified, and the program terminates with the runtime error ASSERTION\_FAILED.
-   For an assertion activated externally, if the addition ID is specified, the operation mode specified for a [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") or the current [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry") determines how the program execution is continued.

Programming Guideline

[Using Assertions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertions_guidl.htm "Guideline")

Hints

-   Assertions help verify certain assumptions about the state of a program in a particular location and ensure that these assumptions are met. Compared with the implementation with an IF statement and a [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_shortdump.htm) statement or a conditional expression with [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm), the ASSERT statement is shorter, its meaning is immediately recognizable, and it can be activated externally.
-   If [functional methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified as operands of a [relational expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelational_expression_glosry.htm "Glossary Entry") in the logical expression log\_exp, they must not have any side effects. This must especially apply to assertions that can be activated externally, since the program behavior otherwise depends on the activation.

Example

Before a dynpro is called, the statement ASSERT ensures that an SAP GUI exists. If this is not the case, the program terminates with the runtime error ASSERTION\_FAILED.

DATA gui\_flag TYPE abap\_bool.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui\_flag.
ASSERT gui\_flag = abap\_true.
CALL SCREEN 100.

Addition 1   

... ID group

Effect

The addition ID defines that the activation of the statement ASSERT is controlled from outside of the program using the [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group. If the addition ID is specified, the addition CONDITION must be specified before the log\_exp logical expression.

The name of the checkpoint group must be specified directly, and the group must exist in the [repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_glosry.htm "Glossary Entry"). A checkpoint group is managed using the transaction SAAB. For a checkpoint group, activation settings can be specified for the assigned checkpoints either directly or using [activation variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenactivation_variant_glosry.htm "Glossary Entry").

All checkpoint statements linked with the checkpoint group (ASSERT, BREAK-POINT, LOG-POINT) can be activated or deactivated using the checkpoint group. An activation setting consists of three components:

-   Validity area - Checkpoints specified in the checkpoint group or [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry")
-   Context - User and/or AS instance specified
-   Operation mode - System behavior of the different checkpoint types (assertions, breakpoints, or logpoints)
    
    The following settings are possible:
    
    -   Inactive
        
        The assertion is inactive.
        
    -   Log
        
        Creates an entry in a special log and continues program execution with the statement following ASSERT. The log entries are collected in the shared memory and are written to a DDIC database table by a periodical background job. By default, any existing entries of the same ASSERT statement are overwritten. Each time an entry is written, a counter for the entry is increased. The log can be evaluated using transaction SAAB.
        
    -   stop / log or stop / cancel
        
        Branch to the ABAP Debugger. In [dialog processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the statement ASSERT behaves like the statement [BREAK-POINT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapbreak-point.htm). The specified alternative setting is used for the cases in which the statement BREAK-POINT writes an entry to the system log, namely for [background sessions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_session_glosry.htm "Glossary Entry"), [update sessions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_session_glosry.htm "Glossary Entry"), [ICF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_session_glosry.htm "Glossary Entry") sessions, and [APC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc_session_glosry.htm "Glossary Entry") sessions without external debugging.
        
    -   Cancel
        
        Raising of an uncatchable exception and terminating the program with the runtime error ASSERTION\_FAILED.
        

If the checkpoint statements are activated using the compilation unit, then the association with a specific checkpoint group no longer has any meaning.

Hints

-   If the checkpoint statements are activated using the compilation unit, a checkpoint group must still be specified, since a checkpoint statement without the addition ID is always active.
-   The validity period of activation settings with active operation modes is limited.
-   The statement [LOG-POINT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplog-point.htm) can be used to define a [logpoint](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogpoint_glosry.htm "Glossary Entry") if entries are to be written to a log. The statement ASSERT should not be used for this purpose.

Example

Like the previous example, but here the behavior of the statement ASSERT is controlled using the checkpoint group DEMO\_CHECKPOINT\_GROUP.

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

The addition SUBKEY only has an effect if the statement ASSERT writes entries to a log. If SUBKEY is specified, the content of sub is stored in the log as a subkey. Any existing log entries of the same ASSERT statement are overwritten only if the subkey has the same content. If SUBKEY is not specified, the subkey is initial.

sub is a [character-like expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") of which the first 200 characters are evaluated. An expression or function specified here is evaluated only if the assertion is active and the logical expression is false.

Addition 3   

... FIELDS val1 val2 ...

Effect

After the addition FIELDS, a list val1 val2 ... of any values, except for reference variables, can be specified. If the statement ASSERT writes entries to a log, the specified values val1 val2 ... are also included in the log. If an uncatchable exception is raised, the content of the first eight specified data objects is displayed in the associated [short dump](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshort_dump_glosry.htm "Glossary Entry"). The addition FIELDS is ignored when a branch to the ABAP Debugger is performed.

val1 val2 ... are [functional operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry") in which data objects or functional methods can be specified. The methods are executed only if the assertion is active and the logical expression is false.

If the addition FIELDS is specified, the addition CONDITION must be specified before the log\_exp logical expression.

Hints

-   The log to which assertions write is not the system log to which [breakpoints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapbreak-point.htm) write during [background processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbackround_processing_glosry.htm "Glossary Entry"). It is a special log that can be read in transaction SAAB .
-   The size of each data object stored in the log with the FIELDS addition is restricted by the [profile parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/aab\_log\_field\_size\_limit. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is created, the content of each data object is truncated when this limit is reached, and complete lines are removed from internal tables.
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

The addition CONDITION introduces the logical expression. It must be specified in front of log\_exp if one of the other additions is specified; otherwise, it can be omitted.

Example

Like the first example above, but here the optional CONDITION addition is specified.

DATA gui\_flag TYPE abap\_bool.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui\_flag.
ASSERT CONDITION gui\_flag = abap\_true.
CALL SCREEN 100.