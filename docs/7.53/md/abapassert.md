  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Checkpoints](javascript:call_link\('abencheckpoints.htm'\)) → 

ASSERT

[Quick Reference](javascript:call_link\('abapassert_shortref.htm'\))

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Extras:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... SUBKEY sub](#!ABAP_ADDITION_2@2@)
[3\. ... FIELDS val1 val2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... CONDITION](#!ABAP_ADDITION_4@4@)

Effect

This statement defines an [assertion](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry"). Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)). An assertion is either active or inactive.

-   Without the addition ID, the assertion is always active.
    
-   When using addition ID, the activation and the behavior of the statement are controlled from outside the program by means of a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry").
    

When the program reaches an active assertion, the logical expression is evaluated and the program execution continues from the statement after ASSERT only if the result of log\_exp is true. After an inactive assertion, the logical expression log\_exp is not evaluated and the program execution continues at the statement after ASSERT.

-   If the result of log\_exp is false, a non-handleable exception is raised for an assertion that is always active (without the addition ID) and the program terminates with the runtime error ASSERTION\_FAILED.
    
-   For an assertion activated externally (with the addition ID specified), the operation mode specified for a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") or the current [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") determines how the program execution is continued.
    

Programming Guideline

[Using Assertions](javascript:call_link\('abenassertions_guidl.htm'\) "Guideline")

Notes

-   Assertions help verify particular assumptions about the state of a program in a particular location and ensure that these assumptions are maintained. Compared with the implementation with an IF statement and a [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) statement or a conditional expression with [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)), the ASSERT statement is shorter, its meaning is immediately recognizable, and it can be activated externally.
    
-   If [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") are specified as operands of a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") in the logical expression log\_exp, they must be free of side effects. This must especially be the case for assertions that can be activated externally, since the program behavior is otherwise dependent on activation.
    

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

The addition ID defines how the statement ASSERT is activated and behaves outside of the program using the [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group. If the addition ID is specified, the addition CONDITION must be specified before the log\_exp logical expression.

The name of the checkpoint group must be specified directly and the group must exist in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry"). A checkpoint group is managed using the transaction SAAB. In a checkpoint group, activation settings can be made for the assigned checkpoints either directly or using [activation variants](javascript:call_link\('abenactivation_variant_glosry.htm'\) "Glossary Entry").

All checkpoint statements associated with the checkpoint group (ASSERT, BREAK-POINT, LOG-POINT) can be activated or deactivated from the checkpoint group. An activation setting consists of the following components:

-   Validity area - Checkpoints specified in the checkpoint group or [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry")
    
-   Context - User and/or AS Instance specified
    
-   Operation mode - System behavior of the various checkpoint types (assertions, breakpoints, or logpoints)
    The following settings are possible:
    

-   Inactive
    The assertion is inactive.

-   Log
    Creates an entry in a special log and continues program execution with the statement after ASSERT. The log entries are collected in the shared memory and are written periodically in a database table by a background job. By default, any existing entries of the same ASSERT statement are overwritten. Each time an entry is written, a counter for the entry is incremented. The log can be evaluated using transaction SAAB .

-   stop / log or stop / cancel
    Go to the ABAP Debugger. In [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry"), the statement ASSERT behaves like the statement [BREAK-POINT](javascript:call_link\('abapbreak-point.htm'\)). The setting specified as alternative is used for the cases in which the statement BREAK-POINT writes an entry in the system log, namely for [background sessions](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry"), [update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry"), [ICF](javascript:call_link\('abenicf_session_glosry.htm'\) "Glossary Entry") sessions, and [APC](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") sessions without external debugging.

-   Cancel
    Raise an unhandleable exception and terminate the program with runtime error ASSERTION\_FAILED.

If the checkpoint statements are activated from the compilation unit, then the association with a specific checkpoint group no longer has any meaning.

Notes

-   If the checkpoint statements are activated from the compilation unit, it is necessary to specify a checkpoint group, since a checkpoint statement without the addition ID is always active.
    
-   The validity period of activation settings with active operation modes is limited.
    
-   The statement [LOG-POINT](javascript:call_link\('abaplog-point.htm'\)) can be used to define a [logpoint](javascript:call_link\('abenlogpoint_glosry.htm'\) "Glossary Entry") if entries are to be written to a log. The statement ASSERT should not be used for this purpose.
    

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

sub is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") of which the first 200 characters are evaluated. An expression or function specified here is evaluated only if the assertion is active and the logical expression is false.

Addition 3

... FIELDS val1 val2 ...

Effect

After the addition FIELDS, a list val1 val2 ... of any values (except reference variables) can be specified. If the statement ASSERT writes entries to a log, the content of the data objects val1 val2 ... is included in the log. If an non-handleable exception is raised, the content of the first eight specified data objects is displayed in the associated [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry"). The addition FIELDS is ignored when a jump to ABAP Debugger is performed.

val1 val2 ... are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry") in which data objects or functional methods can be specified. The methods are executed only if the assertion is active and the logical expression is false.

If the addition FIELDS is specified, the addition CONDITION must be specified before the log\_exp logical expression.

Notes

-   The log to which assertions write is not the system log to which [breakpoints](javascript:call_link\('abapbreak-point.htm'\)) write during [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"). It is a special log that can be read in transaction SAAB .
    
-   The size of each data object saved in the log with the FIELDS addition is restricted by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/aab\_log\_field\_size\_limit. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is generated, the content of each data object is truncated when this limit is reached, and full lines are removed from internal tables.
    
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