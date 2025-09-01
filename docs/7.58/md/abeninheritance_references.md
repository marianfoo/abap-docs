---
title: "ABAP Objects - Inheritance and Polymorphism"
description: |
  Since a subclass contains all components of all superclasses along the inheritance tree and the interfaces of methods cannot be changed, a reference variable that is typed with reference to a superclass or with reference to an interface implemented by a superclass may contain references to objects o
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_references.htm"
abapFile: "abeninheritance_references.htm"
keywords: ["do", "if", "try", "method", "class", "abeninheritance", "references"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Polymorphism%2C%20ABENINHERITANCE_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

ABAP Objects - Inheritance and Polymorphism

Since a subclass contains all components of all superclasses along the inheritance tree and the interfaces of methods cannot be changed, a reference variable that is typed with reference to a superclass or with reference to an interface implemented by a superclass may contain references to objects of all subclasses of this superclass. This means that the content of a reference variable typed with reference to a subclass can always be assigned to reference variables typed with reference to one of its superclasses or their interfaces ([upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry")). In particular, the target variable can always be typed with reference to the class object.

A static user can use a reference variable to address those components that are visible to it that are already in the superclass to which the reference variable refers. This means that it cannot address any specializations that have been added to the subclasses. In [dynamic accesses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_components_addressing.htm), however, all components can be addressed.

When an instance method is redefined in one or more subclasses, different implementations of the method can be executed after a method call using the same reference variable, depending on where the class of the referenced object is located in the inheritance tree. This property, that different classes can have the same interface and can therefore be addressed using reference variables of one type is called [polymorphism](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpolymorphism_glosry.htm "Glossary Entry").