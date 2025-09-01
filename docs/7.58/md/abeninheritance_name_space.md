  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20the%20Component%20Namespace%2C%20ABENINHERITANCE_NAME_SPACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

ABAP Objects - Inheritance and the Component Namespace

A subclass contains all components of all its superclasses. Only the public and the protected components are visible. This is why all public and protected components of a path of an inheritance tree are located in a single namespace and must have unique names. Private components, on the other hand, must have unique names within a class.

When methods are [redefined](javascript:call_link\('abeninheritance_redefinition.htm'\)), the newly implemented method hides the identically named method of the superclass. As soon as the method is redefined, it replaces the old method to ensure that the name remains unique. The [pseudo reference](javascript:call_link\('abenpseudo_reference_glosry.htm'\) "Glossary Entry") [super->](javascript:call_link\('abapcall_method_meth_super.htm'\)) can be used in subclasses to access a method of the direct superclass hidden by a redefinition.