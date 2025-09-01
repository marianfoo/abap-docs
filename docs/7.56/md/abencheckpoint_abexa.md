  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoints.htm) → 

Checkpoints and Checkpoint Groups

This example demonstrates the various [checkpoints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_glosry.htm "Glossary Entry") and their binding to a [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry").

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

-   A [logpoint](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogpoint_glosry.htm "Glossary Entry")
-   A [breakpoint](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbreakpoint_glosry.htm "Glossary Entry")
-   An [assertion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertion_glosry.htm "Glossary Entry")

All of these are linked with the [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

The Activation function in transaction SAAB can be used to individually set the activation functions of this checkpoint group for the three checkpoints.

For example, if the following settings are made:

-   Break for breakpoints
-   Log for logpoints
-   Abort for assertions

and the default values for the parameters are applied,

-   the statement LOG-POINT writes an entry to a log that can be analyzed after the program is executed in transaction SAAB,
-   the program stops at the statement BREAK-POINT in the ABAP Debugger,
-   an ASSERTION\_FAILED runtime error occurs for the statement ASSERT because field2 is initial.

If the activation settings are all inactive, all checkpoints are ignored.