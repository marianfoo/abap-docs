  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Checkpoints](javascript:call_link\('abencheckpoints.htm'\)) → 

LOG-POINT

[Short Reference](javascript:call_link\('abaplog-point_shortref.htm'\))

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Additions:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... SUBKEY sub](#!ABAP_ADDITION_2@2@)
[3\. ... FIELDS val1 val2 ...](#!ABAP_ADDITION_3@3@)

Effect

This statement defines a static [logpoint](javascript:call_link\('abenlogpoint_glosry.htm'\) "Glossary Entry") whose activation is controlled by the addition ID.
Once the program reaches an active logpoint, an entry is created in the log that is also used by the statement [ASSERT](javascript:call_link\('abapassert.htm'\)) and the program execution continues with the statement after LOG-POINT. During this process, any existing entry of the same LOG-POINT statement is overwritten by default. Each time an entry is written, a counter for the entry is increased. The log can be evaluated using transaction SAAB .

No log entry is written for an inactive logpoint and the program execution continues with the statement after LOG-POINT.

Hints

-   In addition to the static logpoints defined using LOG-POINT, dynamic logpoints can be defined using the transaction SDLP or in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").
-   Logpoints are only intended to be used for test purposes using transaction SAAB. There is no API for importing the logged data, which means that logpoints are not suitable for general logging purposes.

Addition 1   

... ID group

Effect

The addition ID controls the activation of the logpoint from outside the program using a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group or an [activation variant](javascript:call_link\('abenactivation_variant_glosry.htm'\) "Glossary Entry"). The same rules apply when specifying the checkpoint group as to the statement [ASSERT](javascript:call_link\('abapassert.htm'\)). The possible operation modes for logpoints are inactive and logging.

Addition 2   

... SUBKEY sub

Effect

If SUBKEY is specified, the content of sub is stored in the log as a subkey. Existing log entries of the same LOG-POINT statement are only overwritten if the subkeys have the same content. If SUBKEY is not specified, the subkey is initial.

sub is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") of which the first 200 characters are evaluated. An expression or function specified here is executed only if the logpoint is active.

Addition 3   

... FIELDS val1 val2 ...

Effect

After the addition FIELDS, a list of values val1 val2 ..., except for reference variables, can be specified that are included in the log.

val1 val2 ... are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry") in which data objects or functional methods can be specified. The methods are executed only if the logpoint is active.

Hint

The size of each data object stored in the log with the FIELDS addition is restricted by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/aab\_log\_field\_size\_limit. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is created, the content of each data object is truncated when this limit is reached, and complete lines are removed from internal tables.

Example

Static logpoint with all possible additions.

LOG-POINT ID demo\_checkpoint\_group
             SUBKEY sy-uname
             FIELDS sy-batch sy-cprog.