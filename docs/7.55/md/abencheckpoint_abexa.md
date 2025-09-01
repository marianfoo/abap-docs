  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Checkpoints](javascript:call_link\('abencheckpoints.htm'\)) → 

Checkpoints and Checkpoint Groups

This example demonstrates the various [checkpoints](javascript:call_link\('abencheckpoint_glosry.htm'\) "Glossary Entry") and their binding to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_checkpoints.
PARAMETERS: subkey TYPE c LENGTH 30 LOWER CASE DEFAULT sy-uname,
            field1 TYPE c LENGTH 10 LOWER CASE DEFAULT 'Field1',
            field2 TYPE i DEFAULT 0.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    LOG-POINT ID demo\_checkpoint\_group
                 SUBKEY subkey
                 FIELDS field1 field2.
    BREAK-POINT ID demo\_checkpoint\_group.
    ASSERT ID demo\_checkpoint\_group
              CONDITION field2 IS NOT INITIAL.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example includes the following:

-   A [logpoint](javascript:call_link\('abenlogpoint_glosry.htm'\) "Glossary Entry")

-   A [breakpoint](javascript:call_link\('abenbreakpoint_glosry.htm'\) "Glossary Entry")

-   An [assertion](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry")

All of these are associated with the [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

The Activation function in transaction SAAB can be used to individually set the activation functions of this checkpoint group for the three checkpoints.

For example, if the following settings are made:

-   Break for breakpoints

-   Log for logpoints

-   Abort for assertions

and the default values for the parameters are applied,

-   the statement LOG-POINT writes an entry to a log that can be analyzed after the program is executed in transaction SAAB,

-   the program stops at the statement BREAK-POINT in ABAP Debugger,

-   an ASSERTION\_FAILED runtime error occurs for the statement ASSERT because field2 is initial.

If the activation settings are all inactive, all of the checkpoints are ignored.