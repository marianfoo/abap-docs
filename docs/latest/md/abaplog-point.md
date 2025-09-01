  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoints.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOG-POINT%2C%20ABAPLOG-POINT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOG-POINT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplog-point_shortref.htm)

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Additions:

[1\. ... ID group](#!ABAP_ADDITION_1@1@)
[2\. ... SUBKEY sub](#!ABAP_ADDITION_2@2@)
[3\. ... FIELDS val1 val2 ...](#!ABAP_ADDITION_3@3@)

Effect

This statement defines a static [logpoint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogpoint_glosry.htm "Glossary Entry") whose activation is controlled by the addition ID.

Once the program reaches an active logpoint, an entry is created in the log that is also used by the statement [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm) and the program execution continues with the statement after LOG-POINT. During this process, any existing entry of the same LOG-POINT statement is overwritten by default. Each time an entry is written, a counter for the entry is increased. The log can be evaluated using transaction SAAB.

No log entry is written for an inactive logpoint and the program execution continues with the statement after LOG-POINT.

Hints

-   In addition to the static logpoints defined using LOG-POINT, dynamic logpoints can be defined using the transaction SDLP or in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").
-   Logpoints are only intended to be used for test purposes using transaction SAAB. There is no API for importing the logged data, which means that logpoints are not suitable for general logging purposes.

Addition 1   

... ID group

Effect

The addition ID controls the activation of the logpoint from outside the program using a [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group or an [activation variant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). The same rules apply when specifying the checkpoint group as to the statement [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm). The possible operation modes for logpoints are inactive and logging.

Addition 2   

... SUBKEY sub

Effect

If SUBKEY is specified, the content of sub is stored in the log as a subkey. Existing log entries of the same LOG-POINT statement are only overwritten if the subkeys have the same content. If SUBKEY is not specified, the subkey is initial.

sub is a [character-like expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") of which the first 200 characters are evaluated. An expression or function specified here is executed only if the logpoint is active.

Addition 3   

... FIELDS val1 val2 ...

Effect

After the addition FIELDS, a list of values val1 val2 ..., except for reference variables, can be specified that are included in the log.

val1 val2 ... are [functional operand positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry") in which data objects or functional methods can be specified. The methods are executed only if the logpoint is active.

Hint

The size of each data object stored in the log with the FIELDS addition is restricted by the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/aab\_log\_field\_size\_limit. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is created, the content of each data object is truncated when this limit is reached, and complete lines are removed from internal tables.

Example

Static logpoint with all possible additions.

LOG-POINT ID demo\_checkpoint\_group
             SUBKEY sy-uname
             FIELDS sy-batch sy-cprog.