  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Inheritance and the Component Namespace

A subclass contains all components of all its superclasses. Only the public and the protected components are visible. This is why all public and protected components of an inheritance tree are located in a single namespace and must have unique names. Private components, on the other hand, must only be named uniquely within a class.

When methods are [redefined](javascript:call_link\('abeninheritance_redefinition.htm'\)), the newly implemented method obscures the identically named method of the superclass. As soon as the method is redefined, it replaces the old method to ensure that the name remains unique. The [pseudo reference](javascript:call_link\('abenpseudo_reference_glosry.htm'\) "Glossary Entry") [super->](javascript:call_link\('abapcall_method_meth_super.htm'\)) can be used in subclasses to access a method of the direct superclass obscured by a redefinition.