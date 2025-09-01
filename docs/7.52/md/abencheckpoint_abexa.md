  

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