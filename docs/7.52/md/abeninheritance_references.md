  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Inheritance](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance.htm) → 

Inheritance and Polymorphism

Since a subclass contains all components of all superclasses along the inheritance tree and the interfaces of methods cannot be changed, a reference variable typed with reference to a superclass or to an interface implemented by a superclass may contain references to objects of all subclasses of this superclass. This means that the content of a reference variable typed with reference to a subclass can always be assigned to reference variables typed with reference to one of its superclasses or the interfaces of these superclasses ([Up Cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry")). In particular, the target variable can always be typed with reference to the class object.

A static user can use a reference variable to address the components visible to it, which are contained in the superclass to which the reference variable refers. This means that it cannot address any specializations that have been added to the subclasses. With [dynamic accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components_addressing.htm), however, all components can be addressed.

When an instance method is redefined in one or more subclasses, different implementations of the method can be executed after a method call using the same reference variable, depending on where the class of the referenced object is located in the inheritance tree. The feature that different classes have the same interface and can therefore be addressed using reference variables of one type is called [polymorphism](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpolymorphism_glosry.htm "Glossary Entry").