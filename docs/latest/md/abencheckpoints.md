---
title: "Checkpoints"
description: |
  Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional or unconditional. Conditional checkpoints are defined by assertions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassertion_glos
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoints.htm"
abapFile: "abencheckpoints.htm"
keywords: ["do", "if", "try", "abencheckpoints"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tests.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checkpoints%2C%20ABENCHECKPOINTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Checkpoints

Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional or unconditional. Conditional checkpoints are defined by [assertions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassertion_glosry.htm "Glossary Entry"), unconditional checkpoints by [breakpoints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbreakpoint_glosry.htm "Glossary Entry") or [logpoints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogpoint_glosry.htm "Glossary Entry"). Checkpoints, and breakpoints from outside the program, can be activated and deactivated by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") using the transaction SAAB.

-   [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm)
-   [BREAK-POINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapbreak-point.htm)
-   [LOG-POINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplog-point.htm)

For more information about activatable checkpoints, see the documentation [Activatable Checkpoints](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/491c002326bc14cde10000000a42189b) in SAP Help Portal.

Executable Example

[Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_abexa.htm).

Continue
[ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm)
[BREAK-POINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapbreak-point.htm)
[LOG-POINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplog-point.htm)
![Example](exa.gif "Example") [Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_abexa.htm)