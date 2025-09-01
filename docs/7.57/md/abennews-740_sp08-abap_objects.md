  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 7.40, SP08, ABENNEWS-740_SP08-ABAP_OBJECTS, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 7.40, SP08

Modification

Optional Interface Methods

The new addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)) of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) can be used to make general methods, functional methods, plus event handlers of [interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") optional. An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, a default behavior is specified for calls of non-implemented methods in the definition. DEFAULT IGNORE calls an empty method and DEFAULT FAIL raises an exception.