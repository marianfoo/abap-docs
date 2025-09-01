  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Implementing or Including Interfaces](javascript:call_link\('abeninterfaces.htm'\)) → 

INTERFACES

[Short Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax Forms

[Implementing Interfaces in Classes](javascript:call_link\('abapinterfaces_class.htm'\))
1\. INTERFACES intf
    *\[*[PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))*\]*
    *{* *{**\[*ABSTRACT METHODS meth1 meth2 ... *\]*
       *\[*FINAL METHODS meth1 meth2 ... *\]**}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
    *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.
[Including Interfaces in Interfaces](javascript:call_link\('abapinterfaces_ifac.htm'\))
2\. INTERFACES intf.

Effect

This statement implements interfaces in classes or includes interfaces in other interfaces. It can be used in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of classes and in [interface declarations](javascript:call_link\('abapinterface_definition.htm'\)).

Continue
[INTERFACES, implementation](javascript:call_link\('abapinterfaces_class.htm'\))
[INTERFACES, composition](javascript:call_link\('abapinterfaces_ifac.htm'\))