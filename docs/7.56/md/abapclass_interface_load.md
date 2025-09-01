  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Declaration and Loading](javascript:call_link\('abenaddress_obsolet.htm'\)) → 

CLASS, INTERFACE, LOAD

[Short Reference](javascript:call_link\('abapclass_deferred_load_shortref.htm'\))

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](javascript:call_link\('abapclass.htm'\)) and [INTERFACE](javascript:call_link\('abapinterface.htm'\)) with the addition LOAD are obsolete. The ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed because it contained recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Hint

These variants of the statements CLASS and INTERFACE can also be specified in contexts other than the context described in [CLASS](javascript:call_link\('abapclass.htm'\)) and [INTERFACE](javascript:call_link\('abapinterface.htm'\)).