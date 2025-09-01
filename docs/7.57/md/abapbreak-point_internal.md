  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Checkpoints](javascript:call_link\('abencheckpoints.htm'\)) →  [BREAK-POINT](javascript:call_link\('abapbreak-point.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: BREAK-POINT, Internal Addition, ABAPBREAK-POINT_INTERNAL, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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