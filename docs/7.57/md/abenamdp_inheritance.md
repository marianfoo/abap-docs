  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Inheritance, ABENAMDP_INHERITANCE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

AMDP - Inheritance

Both interface methods and redefined methods inherited from superclasses can become [AMDP methods](javascript:call_link\('abenamdp_methods.htm'\)) in the implementation, provided that their prerequisites are met and the class contains the corresponding tag interface. If a subclass contains a tag interface, this also applies to its subclasses. If an interface contains a tag interface, this also applies to classes that implement this interface.