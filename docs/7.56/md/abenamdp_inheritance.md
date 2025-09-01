  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - Inheritance

Both interface methods and redefined methods inherited from superclasses can become [AMDP methods](javascript:call_link\('abenamdp_methods.htm'\)) in the implementation, provided that their prerequisites are met and the class contains the corresponding tag interface. If a subclass contains a tag interface, this also applies to its subclasses. If an interface contains a tag interface, this also applies to classes that implement this interface.