---
title: "BREAK-POINT, Internal Addition"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... AT NEXT APPLICATION STATEMENT Effect This addition can be specified optionally after log_text, but not together with the addition ID. It is only useful in system programs, system modules, system subro
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapbreak-point_internal.htm"
abapFile: "abapbreak-point_internal.htm"
keywords: ["do", "if", "abapbreak", "point", "internal"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheckpoints.htm) →  [BREAK-POINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapbreak-point.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BREAK-POINT%2C%20Internal%20Addition%2C%20ABAPBREAK-POINT_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BREAK-POINT, Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... AT NEXT APPLICATION STATEMENT

Effect

This addition can be specified optionally after log\_text, but not together with the addition ID. It is only useful in system programs, system modules, system subroutines, and system function modules whose names begin with %\_.

-   If system debugging is not activated, the program does not stop until the next statement that is not located in one of the contexts listed above.
-   If system debugging is activated, the program stops at the statement BREAK-POINT.

If system debugging is not activated and the addition AT NEXT APPLICATION STATEMENT is not used, BREAK-POINT statements in the contexts listed above are ignored.