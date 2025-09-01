  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Declaration and Loading](javascript:call_link\('abenaddress_obsolet.htm'\)) → 

CLASS, INTERFACE - LOAD

[Quick Reference](javascript:call_link\('abapclass_deferred_load_shortref.htm'\))

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](javascript:call_link\('abapclass.htm'\)) and [INTERFACE](javascript:call_link\('abapinterface.htm'\)) with the addition LOAD are obsolete. ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed to contain recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Note

These variants of the statements CLASS and INTERFACE can also be used in contexts other than the context described in [CLASS](javascript:call_link\('abapclass.htm'\)) and [INTERFACE](javascript:call_link\('abapinterface.htm'\)).