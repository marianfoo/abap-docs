  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrobust_abap_gdl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_access_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Division%20by%20Zero%2C%20ABENDIVISION_ZERO_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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