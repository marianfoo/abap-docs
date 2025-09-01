  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exception Handling in Release 7.55, ABENNEWS-755-EXCEPTIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exception Handling in Release 7.55

Modification

Declaration of CX\_NO\_CHECK Exceptions

Exceptions of category CX\_NO\_CHECK are always declared implicitly in interfaces of procedures and can always be propagated.

Now it is also possible to declare exceptions of category CX\_NO\_CHECK with RAISING in procedure interfaces, for example for [methods](javascript:call_link\('abapmethods_general.htm'\)). This allows it to document the possible occurrence of such exceptions and to change the category of existing exceptions into CX\_NO\_CHECK without leading to syntax errors in procedure interfaces.