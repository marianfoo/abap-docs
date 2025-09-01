---
title: "Checkpoints"
description: |
  Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional and unconditional. Conditional checkpoints are defined by assertions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassertion_glosry.h
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoints.htm"
abapFile: "abencheckpoints.htm"
keywords: ["do", "if", "try", "abencheckpoints"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_tests.htm) → 

Checkpoints

Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional and unconditional. Conditional checkpoints are defined by [assertions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassertion_glosry.htm "Glossary Entry"), unconditional checkpoints by [breakpoints](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbreakpoint_glosry.htm "Glossary Entry") or [logpoints](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogpoint_glosry.htm "Glossary Entry"). Checkpoints, and breakpoints from outside the program, can be activated and deactivated by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") using the transaction SAAB.

-   [ASSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassert.htm)

-   [BREAK-POINT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapbreak-point.htm)

-   [LOG-POINT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplog-point.htm)

More information about activatable checkpoints can be found in the Activatable Checkpoints documentation in SAP Help Portal.

Executable Example

[Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoint_abexa.htm).

Continue
[ASSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassert.htm)
[BREAK-POINT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapbreak-point.htm)
[LOG-POINT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplog-point.htm)
![Example](exa.gif "Example") [Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheckpoint_abexa.htm)