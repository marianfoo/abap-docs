  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Inheritance and Polymorphism

Since a subclass contains all components of all superclasses along the inheritance tree and the interfaces of methods cannot be changed, a reference variable typed with reference to a superclass or to an interface implemented by a superclass may contain references to objects of all subclasses of this superclass. This means that the content of a reference variable typed with reference to a subclass can always be assigned to reference variables typed with reference to one of its superclasses or the interfaces of these superclasses ([Up Cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")). In particular, the target variable can always be typed with reference to the class object.

A static user can use a reference variable to address the components visible to it, which are contained in the superclass to which the reference variable refers. This means that it cannot address any specializations that have been added to the subclasses. With [dynamic accesses](javascript:call_link\('abenclass_components_addressing.htm'\)), however, all components can be addressed.

When an instance method is redefined in one or more subclasses, different implementations of the method can be executed after a method call using the same reference variable, depending on where the class of the referenced object is located in the inheritance tree. The feature that different classes have the same interface and can therefore be addressed using reference variables of one type is called [polymorphism](javascript:call_link\('abenpolymorphism_glosry.htm'\) "Glossary Entry").