---
title: "Assignments Between Different Types"
description: |
  Background ABAP allows a direct assignment between data objects with different data types. There must be a suitable conversion rule and the content of the source field must be a meaningful value for the data type of the target field. If a suitable conversion rule is not found or the content of the s
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassignemnt_diff_types_guidl.htm"
abapFile: "abenassignemnt_diff_types_guidl.htm"
keywords: ["do", "if", "data", "types", "abenassignemnt", "diff", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassignment_access_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments Between Different Types, ABENASSIGNEMNT_DIFF_TYPES_GUIDL, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments Between Different Types

Background   

ABAP allows a direct assignment between data objects with different data types. There must be a suitable conversion rule and the content of the source field must be a meaningful value for the data type of the target field. If a suitable conversion rule is not found or the content of the source field is not suitable, an exception is raised.

Such conversions take place not only in direct assignments, but also in many operand positions and in particular in arithmetic calculations, if the specified operand does not have the data type expected at the position.

Rule   

Avoid conversions

Where possible, assignments should be performed between compatible data objects with the same data type.

Details   

Type conversions incur additional runtime and may not always have the result intended by the developer. Therefore, conversions should only be performed between data objects with different data types if there is no other choice. In particular, conversions should be avoided where the [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_conversion_rules_guidl.htm "Guideline") produce unexpected results.

Bad Example

The following source code shows an arithmetic calculation involving two unnecessary conversions. First the text field literal '1' has to be converted to the calculation type i, then the result of the calculation has to be converted from type i to data type n. Such conversions produce significant increases in runtime.

DATA index TYPE n LENGTH 4.
...
DO ... TIMES.
  index = sy-index - '1'.
  ...
ENDDO.

Good Example

The following source code shows how code can be improved compared to the previous example, so that no conversions are necessary.

DATA index TYPE i.
...
DO ... TIMES.
  index = sy-index - 1.
  ...
ENDDO.