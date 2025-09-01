---
title: "Division by Zero"
description: |
  Background Division by zero is forbidden in all recognized programming languages and raises an exception. This is also the case in ABAP, but with the difference that the exception cx_sy_zerodivide is not raised if the dividend is also zero when divided by zero. In this case, the division in ABAP p
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendivision_zero_guidl.htm"
abapFile: "abendivision_zero_guidl.htm"
keywords: ["do", "if", "case", "data", "types", "abendivision", "zero", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassignment_access_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Division by Zero, ABENDIVISION_ZERO_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Division by Zero

Background   

Division by zero is forbidden in all recognized programming languages and raises an exception. This is also the case in ABAP, but with the difference that the exception cx\_sy\_zerodivide is not raised if the dividend is also zero when divided by zero. In this case, the division in ABAP produces the result 0.

Rule   

Prevent division by zero

Do not exploit the fact that ABAP allows division by zero if the dividend itself is zero.

Details   

This ABAP behavior is arbitrary and does not produce the result expected by the user. Therefore, it should not be exploited. Instead, set preconditions that avoid division by zero or the corresponding exception is to be triggered explicitly for the case 0/0.

Example

The following source code always raises an exception when the divisor has the value 0.

IF divisor <> 0.
   result = dividend / divisor.
ELSE.
   RAISE EXCEPTION TYPE cx\_sy\_zerodivide.
ENDIF.