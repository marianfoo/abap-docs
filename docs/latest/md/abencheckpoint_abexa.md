---
title: "Checkpoints and Checkpoint Groups"
description: |
  This example demonstrates the various checkpoints(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_glosry.htm 'Glossary Entry') and their binding to a checkpoint group(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm 'G
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_abexa.htm"
abapFile: "abencheckpoint_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "abencheckpoint", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoints.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checkpoints%20and%20Checkpoint%20Groups%2C%20ABENCHECKPOINT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Checkpoints and Checkpoint Groups

This example demonstrates the various [checkpoints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_glosry.htm "Glossary Entry") and their binding to a [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry").

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

-   A [logpoint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogpoint_glosry.htm "Glossary Entry")
-   A [breakpoint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbreakpoint_glosry.htm "Glossary Entry")
-   An [assertion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassertion_glosry.htm "Glossary Entry")

All of these are linked with the [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") DEMO\_CHECKPOINT\_GROUP.

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