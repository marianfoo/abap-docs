---
title: "Checkpoints"
description: |
  Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional or unconditional. Conditional checkpoints are defined by assertions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassertion_glosry.ht
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheckpoints.htm"
abapFile: "abencheckpoints.htm"
keywords: ["do", "if", "try", "abencheckpoints"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_tests.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Checkpoints, ABENCHECKPOINTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

Checkpoints

Checkpoints define points in a program at which the state of the program can be tested during program execution. Checkpoints are either conditional or unconditional. Conditional checkpoints are defined by [assertions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassertion_glosry.htm "Glossary Entry"), unconditional checkpoints by [breakpoints](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbreakpoint_glosry.htm "Glossary Entry") or [logpoints](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogpoint_glosry.htm "Glossary Entry"). Checkpoints, and breakpoints from outside the program, can be activated and deactivated by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") using the transaction SAAB.

-   [ASSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm)
-   [BREAK-POINT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapbreak-point.htm)
-   [LOG-POINT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplog-point.htm)

For more information about activatable checkpoints, see the documentation Activatable Checkpoints in SAP Help Portal.

Executable Example

[Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheckpoint_abexa.htm).

Continue
[ASSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm)
[BREAK-POINT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapbreak-point.htm)
[LOG-POINT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplog-point.htm)
![Example](exa.gif "Example") [Checkpoints and Checkpoint Groups](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheckpoint_abexa.htm)