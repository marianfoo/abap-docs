  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninheritance.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Inheritance and Polymorphism, ABENINHERITANCE_REFERENCES, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Inheritance and Polymorphism

Since a subclass contains all components of all superclasses along the inheritance tree and the interfaces of methods cannot be changed, a reference variable that is typed with reference to a superclass or with reference to an interface implemented by a superclass may contain references to objects of all subclasses of this superclass. This means that the content of a reference variable typed with reference to a subclass can always be assigned to reference variables typed with reference to one of its superclasses or their interfaces ([upcast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry")). In particular, the target variable can always be typed with reference to the class object.

A static user can use a reference variable to address those components that are visible to it that are already in the superclass to which the reference variable refers. This means that it cannot address any specializations that have been added to the subclasses. In [dynamic accesses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components_addressing.htm), however, all components can be addressed.

When an instance method is redefined in one or more subclasses, different implementations of the method can be executed after a method call using the same reference variable, depending on where the class of the referenced object is located in the inheritance tree. This property, that different classes can have the same interface and can therefore be addressed using reference variables of one type is called [polymorphism](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpolymorphism_glosry.htm "Glossary Entry").