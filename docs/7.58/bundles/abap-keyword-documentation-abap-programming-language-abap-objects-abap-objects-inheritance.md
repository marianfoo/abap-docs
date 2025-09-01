# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Objects / ABAP Objects - Inheritance

Included pages: 11



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abeninheritance.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm)
- [abeninheritance_redefinition.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_redefinition.htm)
- [abeninheritance_abstract_final.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_abstract_final.htm)
- [abeninheritance_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_references.htm)
- [abeninheritance_interfaces.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_interfaces.htm)
- [abeninheritance_visibility.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_visibility.htm)
- [abeninheritance_name_space.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_name_space.htm)
- [abeninheritance_statical.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_statical.htm)
- [abeninheritance_constructors.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_constructors.htm)
- [abeninheritance_instantiation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_instantiation.htm)
- [abeninheritance_events.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_events.htm)

**Bundle Contains**: 11 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.934Z

---

### abeninheritance.htm

> **📖 Official SAP Documentation**: [abeninheritance.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%2C%20ABENINHERITANCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Inheritance

The concept of inheritance makes it possible to derive new classes from existing classes. This is done using the addition [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) of the statement [CLASS ... DEFINITION](javascript:call_link\('abapclass_definition.htm'\)). The new class adopts or inherits all components of the existing class. The new class is called the subclass and the existing class is called the superclass.

Without further declarations, a subclass contains exactly the components of the superclass. However, only the components of the public, protected, and package [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the superclass are visible in the subclass. Although the private components of the superclass also exist in the subclass, they are not visible. In a subclass, private components with the same name as in the superclass can be declared. Each class works with its private components. As long as a method inherited from the superclass is not redefined, it uses the private attributes of the superclass and not the possible subclass attributes of the same name.

If the superclass does not have a private visibility section, the subclass is an exact copy of the superclass. It is possible, however, to define further components in the subclass. These are used to specialize the subclass with respect to the superclass. If a subclass is used again as the superclass for a new class, it can be specialized further.

Each class can have multiple direct subclasses, but only one direct superclass. ABAP Objects implements [single inheritance](javascript:call_link\('abensingle_inheritance_glosry.htm'\) "Glossary Entry"). If subclasses inherit from superclasses that are subclasses themselves, all classes involved form an inheritance tree whose specialization increases each time a hierarchy level is added. Conversely, the specialization decreases the closer a level is located to the root node of the inheritance tree. The root node of all inheritance trees in ABAP Objects is the predefined empty class object. This class is the most generic class possible because it does not contain attributes or methods. When a new class is defined, it must not be specified explicitly as a superclass because it always exists implicitly. In the inheritance tree, two adjacent nodes are known as the direct superclass and subclass, and all preceding and succeeding nodes are collectively referred to as superclasses and subclasses. The declaration of the components of a subclass is distributed across all superclasses of the inheritance tree.

Programming Guideline

[Avoid using deep inheritance hierarchies](javascript:call_link\('abeninheritance_guidl.htm'\) "Guideline")

Executable Example

[Inheritance](javascript:call_link\('abeninheritance_abexa.htm'\))

Continue
[ABAP Objects - Redefining Methods](javascript:call_link\('abeninheritance_redefinition.htm'\))
[ABAP Objects - Abstract and Final Methods and Classes](javascript:call_link\('abeninheritance_abstract_final.htm'\))
[ABAP Objects - Inheritance and Polymorphism](javascript:call_link\('abeninheritance_references.htm'\))
[ABAP Objects - Inheritance and Interfaces](javascript:call_link\('abeninheritance_interfaces.htm'\))
[ABAP Objects - Inheritance and Visibility](javascript:call_link\('abeninheritance_visibility.htm'\))
[ABAP Objects - Inheritance and the Component Namespace](javascript:call_link\('abeninheritance_name_space.htm'\))
[ABAP Objects - Inheritance and Static Components](javascript:call_link\('abeninheritance_statical.htm'\))
[ABAP Objects - Inheritance and Constructors](javascript:call_link\('abeninheritance_constructors.htm'\))
[ABAP Objects - Inheritance and Instantiation](javascript:call_link\('abeninheritance_instantiation.htm'\))
[ABAP Objects - Inheritance and Events](javascript:call_link\('abeninheritance_events.htm'\))



**📖 Source**: [abeninheritance.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm)

### abeninheritance_redefinition.htm

> **📖 Official SAP Documentation**: [abeninheritance_redefinition.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_redefinition.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_redefinition.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_redefinition.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Redefining%20Methods%2C%20ABENINHERITANCE_REDEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP Objects - Redefining Methods

Each subclass contains the components of all classes that are located between this class and the root node in the inheritance tree. The visibility of a component is always the same and cannot be changed. However, it is possible to redefine the public and protected instance methods of all preceding superclasses using the addition [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)) of the statement [METHODS](javascript:call_link\('abapmethods.htm'\)), to adapt them to the required level of specialization. The interface of a redefined method cannot be changed. The method is merely reimplemented with the same name. Constructors cannot be redefined and [special rules](javascript:call_link\('abeninheritance_constructors.htm'\)) apply.

The method declaration remains in the superclass, and its previous implementation is also retained there. The implementation of the redefinition is also generated for the subclass and hides the implementation of the superclass. A redefined method works with the private attributes of the subclass and not with any private superclass attributes with the same name.

Each reference that points to a subclass object uses the redefined method, even if it was typed with reference to a superclass. In particular, this also applies to the [self-reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me. For example, if a superclass method m1 contains a call *\[*me->*\]*m2( ) and if m2 is redefined in a subclass, the call of m1 in an instance of the superclass causes the original method m2 to be executed and the call of m1 in an instance of the subclass causes the redefined method m2 to be executed.

Within a redefined method, [super->meth](javascript:call_link\('abapcall_method_meth_super.htm'\)) can be used to access the hidden method, for example, to adapt and supplement its functions.



**📖 Source**: [abeninheritance_redefinition.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_redefinition.htm)

### abeninheritance_abstract_final.htm

> **📖 Official SAP Documentation**: [abeninheritance_abstract_final.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_abstract_final.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_abstract_final.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_abstract_final.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Abstract%20and%20Final%20Methods%20and%20Classes%2C%20ABENINHERITANCE_ABSTRACT_FINAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion%20for%20improvement:)

ABAP Objects - Abstract and Final Methods and Classes

Abstract and final methods or classes can be defined using the additions ABSTRACT and FINAL of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS](javascript:call_link\('abapclass.htm'\)).

Abstract methods are declared in abstract classes and cannot be implemented in the same class, only in a subclass of the inheritance tree. Abstract classes cannot, therefore, be instantiated. A non-abstract method is a concrete method. With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.

Final methods can no longer be redefined in subclasses. They cannot have any additional subclasses and close an inheritance tree definitively.

Hints

-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying ABSTRACT and FINAL together is therefore only useful for [static classes](javascript:call_link\('abenstatic_class_glosry.htm'\) "Glossary Entry").
-   Private methods cannot be redefined and therefore cannot be abstract.



**📖 Source**: [abeninheritance_abstract_final.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_abstract_final.htm)

### abeninheritance_references.htm

> **📖 Official SAP Documentation**: [abeninheritance_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_references.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_references.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Polymorphism%2C%20ABENINHERITANCE_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

ABAP Objects - Inheritance and Polymorphism

Since a subclass contains all components of all superclasses along the inheritance tree and the interfaces of methods cannot be changed, a reference variable that is typed with reference to a superclass or with reference to an interface implemented by a superclass may contain references to objects of all subclasses of this superclass. This means that the content of a reference variable typed with reference to a subclass can always be assigned to reference variables typed with reference to one of its superclasses or their interfaces ([upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")). In particular, the target variable can always be typed with reference to the class object.

A static user can use a reference variable to address those components that are visible to it that are already in the superclass to which the reference variable refers. This means that it cannot address any specializations that have been added to the subclasses. In [dynamic accesses](javascript:call_link\('abenclass_components_addressing.htm'\)), however, all components can be addressed.

When an instance method is redefined in one or more subclasses, different implementations of the method can be executed after a method call using the same reference variable, depending on where the class of the referenced object is located in the inheritance tree. This property, that different classes can have the same interface and can therefore be addressed using reference variables of one type is called [polymorphism](javascript:call_link\('abenpolymorphism_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abeninheritance_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_references.htm)

### abeninheritance_interfaces.htm

> **📖 Official SAP Documentation**: [abeninheritance_interfaces.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_interfaces.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_interfaces.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_interfaces.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Interfaces%2C%20ABENINHERITANCE_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

ABAP Objects - Inheritance and Interfaces

[Interfaces](javascript:call_link\('abeninterfac.htm'\)) are standalone constructs in ABAP Objects that support [polymorphism](javascript:call_link\('abenpolymorphism_glosry.htm'\) "Glossary Entry") in classes. The polymorphism of interfaces is based on the fact that each class that implements an interface can implement its methods differently. All interface components look similar externally, which is why [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") can point to objects of all classes that implement the associated interface.

The interface concept exists completely independent of and in addition to the inheritance concept. The classes of an inheritance tree can implement any number of interfaces, but each interface can be implemented only once in each inheritance tree. This ensures that each interface component comp has a unique name across the entire inheritance tree intf~icomp and that it is contained in all subclasses starting with the class that implements it. [Interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") that can point to a class of the inheritance tree can also point to all subclasses. Once they are implemented, interface methods are fully functioning components of a class and can be redefined in subclasses. In the case of interface methods defined as optional using [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)), and without explicit implementation, the default behavior is applied along a path of an inheritance tree until a redefinition with explicit implementation occurs.



**📖 Source**: [abeninheritance_interfaces.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_interfaces.htm)

### abeninheritance_visibility.htm

> **📖 Official SAP Documentation**: [abeninheritance_visibility.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_visibility.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_visibility.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_visibility.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Visibility%2C%20ABENINHERITANCE_VISIBILITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

ABAP Objects - Inheritance and Visibility

It is not possible to change the [visibility section](javascript:call_link\('abenclass_visibility.htm'\)) to which a component is assigned using inheritance. The visibility of components has the following consequences in inheritance:

Public Components   

The public visibility area of a subclass consists of all its own public components plus the public components of all its superclasses. Public components are visible externally without restrictions.

Protected Components   

The protected visibility section of a subclass consists of all its own protected components plus the protected components of all superclasses. The protected section is only visible in the class itself and in all its subclasses. Externally, protected is the same as private.

Private Components   

The private visibility section of a subclass includes only the private components of this class. They are visible only in this class. The private components of superclasses cannot be used in subclasses. Only methods inherited from superclasses use private attributes of the superclass that were not redefined, even if the subclass has private attributes with the same name.

Example of Protected Components   

Within a subnode in the inheritance tree, the protected components of superclasses can always be accessed. The classes involved, such as the static types of reference variables, must however be part of the inheritance tree.

In the following example, the reference variables lrefx and lref2 know the protected components of cx in the context of the subclass c2. The static type of lref1 is c1 and is in another subnode of the inheritance tree. It does not know any protected components of cx, in the context of c2. In a stricter model (C++ or Java), access in the above example would only be possible using lref2. Access using lrefx would not be allowed, since it would involve access from outside. ABAP currently expands the view of lrefx depending on the context. The intention, however, is to introduce a stricter view and to forbid access using lrefx. This option should not be used for this reason and it causes a warning from the extended program check.

CLASS cx DEFINITION.
  PROTECTED SECTION.
    METHODS mx.
ENDCLASS.
CLASS cx IMPLEMENTATION.
  METHOD mx.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS c1 DEFINITION INHERITING FROM cx.
  ...
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM cx.
  PUBLIC SECTION.
    METHODS m2.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    DATA: lrefx TYPE REF TO cx,
          lref2 TYPE REF TO c2,
          lref1 TYPE REF TO c1.
    lrefx->mx( ). <--- Warning!!
    lref2->mx( ).
    lref1->mx( ). <--- Error!!
  ENDMETHOD.
ENDCLASS.



**📖 Source**: [abeninheritance_visibility.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_visibility.htm)

### abeninheritance_name_space.htm

> **📖 Official SAP Documentation**: [abeninheritance_name_space.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_name_space.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_name_space.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_name_space.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20the%20Component%20Namespace%2C%20ABENINHERITANCE_NAME_SPACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

ABAP Objects - Inheritance and the Component Namespace

A subclass contains all components of all its superclasses. Only the public and the protected components are visible. This is why all public and protected components of a path of an inheritance tree are located in a single namespace and must have unique names. Private components, on the other hand, must have unique names within a class.

When methods are [redefined](javascript:call_link\('abeninheritance_redefinition.htm'\)), the newly implemented method hides the identically named method of the superclass. As soon as the method is redefined, it replaces the old method to ensure that the name remains unique. The [pseudo reference](javascript:call_link\('abenpseudo_reference_glosry.htm'\) "Glossary Entry") [super->](javascript:call_link\('abapcall_method_meth_super.htm'\)) can be used in subclasses to access a method of the direct superclass hidden by a redefinition.



**📖 Source**: [abeninheritance_name_space.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_name_space.htm)

### abeninheritance_statical.htm

> **📖 Official SAP Documentation**: [abeninheritance_statical.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_statical.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_statical.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_statical.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Static%20Components%2C%20ABENINHERITANCE_STATICAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

ABAP Objects - Inheritance and Static Components

[Static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry"), like all components, exist only once in each inheritance tree, and can be used as of the declaring class:

-   A subclass can access all non-private static components of its superclasses. The class in which the static component is declared is always addressed.
-   From outside, the class component selector can be used to access all visible static components. Each class can be specified in which the component exists, that is, the declaring class and each subclass. Regardless of the class name used in the class component selector, however, the class in which the component is declared is always addressed.

The class in which the component is declared is always the class addressed, regardless of whether the static component is used internally or externally. This is important in the following cases:

-   Calls of the [static constructors](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry").
    
    Static constructors are called the first time a class is addressed. If a static component is addressed using the class name of a subclass, but is declared in a superclass, only the static constructor of the superclass is called.
    
-   Access to the [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry")
    
    A subclass has access to the content of all non-private static attributes of all superclasses. Conversely, a superclass shares its public and protected static attributes with all subclasses. When inherited, static attributes are therefore not only usable in a single class but can also be used in the subtree of the inheritance tree that consists of all subclasses of the defining class. Changes to the values are visible in all involved classes, regardless of the class used to address an attribute.
    
-   Registrations of [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry").
    
    If an event handler is declared for a static event of a subclass inherited from a superclass, it can only react to this event if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.
    

Hint

A static attribute of a class can be declared as a private attribute to prevent it from being used by all subclasses.

Example

Call of a static method of a superclass using the name of a subclass. Before the method is executed, the static constructor of the superclass is executed, but not the static constructor of the subclass. The method returns the value that is set in the superclass.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA     a1 TYPE string.
    CLASS-METHODS: class\_constructor,
      m1 RETURNING VALUE(r1) LIKE a1.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD class\_constructor.
    a1 = 'c1'.
  ENDMETHOD.
  METHOD m1.
    r1 = a1.
  ENDMETHOD.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    CLASS-METHODS class\_constructor.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD class\_constructor.
    a1 = 'c2'.
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA v1 TYPE string.
    v1 = c2=>m1( ).
  ENDMETHOD.
ENDCLASS.

Example

This example shows how a subclass is used to change a static attribute of a superclass, and how the change is visible in a subclass of a different path in the inheritance tree.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA a1 TYPE string.
ENDCLASS.
CLASS c11 DEFINITION INHERITING FROM c1.
  ...
ENDCLASS.
CLASS c12 DEFINITION INHERITING FROM c1.
  ...
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    c11=>a1 = 'Hello Sister'.
    cl\_demo\_output=>display( c12=>a1 ).
  ENDMETHOD.
ENDCLASS.

Executable Example

[Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))



**📖 Source**: [abeninheritance_statical.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_statical.htm)

### abeninheritance_constructors.htm

> **📖 Official SAP Documentation**: [abeninheritance_constructors.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_constructors.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_constructors.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_constructors.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Constructors%2C%20ABENINHERITANCE_CONSTRUCTORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

ABAP Objects - Inheritance and Constructors

There are special rules governing [constructors](javascript:call_link\('abenconstructor.htm'\)) in inheritance.

Instance Constructors   

Each class has an instance constructor called constructor. This is a derivation from the rule of unique component names along a path of an inheritance tree. The instance constructors of the individual classes of an inheritance tree, however, are fully independent of one another.

-   Instance constructors of superclasses cannot be redefined in subclasses.
-   Instance constructors cannot be called explicitly using constructor( ... ).

This means that no namespace conflicts can occur.

The instance constructor is called when an object is created using the command [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or using the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)). Since during inheritance, a subclass contains all of the visible attributes of its superclasses whose content can also be set by instance constructors, the instance constructor of a subclass must ensure that the instance constructors of all of its superclasses are also called. This requires that the direct superclass be called using [super->constructor](javascript:call_link\('abapcall_method_meth_super.htm'\)) in the instance constructor of each subclass, even if it is not explicitly declared. The only exception to this rule are direct subclasses of the root node OBJECT.

In superclasses that do not have an explicitly defined instance constructor, the instance constructor, which always exists implicitly, is called. This automatically ensures that the instance constructor of the immediate superclass is called.

When instance constructors are called, their non-optional input parameters must be filled as follows:

-   Filling parameters for CREATE OBJECT or NEW
    
    Starting from the class of the created objects, the first explicitly defined instance constructor in the associated path of the inheritance tree is respected. This is the instance constructor of the class itself or the first explicitly defined instance constructor of a superclass.
    
-   Filling for super->constructor( ... )
    
    Starting from the direct superclass, the first explicitly defined instance constructor in the associated path of the inheritance tree is respected.
    

The interface of the first explicitly defined instance constructor is filled in the same way as with a regular method, that is:

-   If no input parameters exist, no parameters are passed.
-   Optional input parameters can be filled using EXPORTING.
-   Non-optional input parameters must be filled using EXPORTING.

If there are no explicitly defined instance constructors in the path of the inheritance tree to the root class object, no parameters are passed.

For CREATE OBJECT or NEW and super->constructor(  ... ), the next possible explicit instance constructor must be considered, and, if it exists, its interface must be filled. The same applies to exception handling for instance constructors. When working with inheritances, a precise knowledge of the entire inheritance tree is required. When an object of a class at the bottom of the inheritance tree is created, it may be necessary to pass parameters to the constructor of a class that is much closer to the root node.

The instance constructor of a subclass is divided into two parts by the call super->constructor( ... ) required by the syntax. In the statements before the call, the constructor behaves like a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"), which means that the self-reference me-> must not be used and it does not have access to the instance components of its class. me-> cannot be used until after the call and instance components can also be addressed. The statements before the call are used to determine the actual parameters for the interface of the instance constructor of the superclass. Only [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") or other visible data can be used for this.

When a subclass is instantiated, there is a nested call of the instance constructors from the subclass to the superclasses, but only at the lowest nesting level, that is, the highest superclass whose instance attributes can be addressed. When the constructors of the lower subclasses are revisited, their instance attributes can be addressed successively.

The methods of subclasses are not visible in constructors. If an instance constructor calls an instance method of the same class using the implicit [self-reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me,the method is called as it is implemented in the class of the instance constructor, and not in any redefined form that may occur in the subclass being instantiated. This is an exception to the rule that when instance methods are called, the implementation is always called in the class to whose instance the reference points.

Static Constructors   

Every class has a [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") called class\_constructor. For the namespace within an inheritance tree, the same applies to static constructors as to instance constructors.

When a subclass is addressed for the first time in a program by creating an instance of the class or by addressing a static component (except for types and constants) using the class component selector, the static constructor is called. However, the preceding static constructors of all of the entire inheritance tree must have been called first. On the other hand, a static constructor may only be called once at program runtime. Therefore, when subclass is first addressed, the system looks for the next highest superclass whose static constructor has not yet been called. It calls the static constructor of this class, followed by those of all classes between this class and the addressed subclass.



**📖 Source**: [abeninheritance_constructors.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_constructors.htm)

### abeninheritance_instantiation.htm

> **📖 Official SAP Documentation**: [abeninheritance_instantiation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_instantiation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_instantiation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_instantiation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Instantiation%2C%20ABENINHERITANCE_INSTANTIATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

ABAP Objects - Inheritance and Instantiation

When a subclass is instantiated, all superclasses are instantiated simultaneously, whereby the initialization of superclass attributes is ensured by calling the superclass constructors, as described in [Inheritance and Constructors](javascript:call_link\('abeninheritance_constructors.htm'\)).

In each individual class, the additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](javascript:call_link\('abapclass.htm'\)) control who can create an instance of the class or, in other words, can call its instance constructor.

This has the following consequences:

If a superclass was defined in a path of the inheritance tree using the addition CREATE PRIVATE, external users cannot instantiate a subclass, and a subclass cannot even instantiate itself because it has no access to the instance constructor of the superclass.

It would therefore be useful to assign the addition FINAL to a class that was defined using the addition CREATE PRIVATE, to prevent subclasses from being derived. Otherwise subclasses of these superclasses have the implicit addition CREATE NONE.

The only exception to this rule is if a superclass that can be privately instantiated offers its [friendship](javascript:call_link\('abenfriends.htm'\)) to its subclasses. The direct path is rarely the case here because the superclass must know its subclasses for it to be possible. However, a superclass can also offer friendship to an interface which, in turn, can be implemented by its subclasses.

Conversely, objects of subclasses cannot be created in their superclass if these are declared using CREATE PROTECTED or CREATE PRIVATE, unless they are [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of its subclasses.

Overview of All Cases   

Superclass with No Addition or CREATE PUBLIC   

Subclasses can have any CREATE addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the property CREATE PUBLIC. The instance constructor of the superclass is visible to everyone. The subclass controls the visibility of its own instance constructor, independently of the superclass.

Superclass with Addition CREATE PROTECTED.   

Subclasses can have any CREATE addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the attribute CREATE PROTECTED. The superclass allows its subclasses unlimited instantiation and therefore also allow its [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") instance constructor to be published.

Superclass with Addition CREATE PRIVATE   

Subclass is Not a Friend of the Superclass

The subclass has the implicit addition CREATE NONE. Nobody other than the superclass itself can call its instance constructor, which means that the subclass cannot be instantiated. None of the CREATE additions are allowed because this would definitely mean unauthorized publishing of the superclass constructor.

Subclass is a Friend of the Superclass

If the subclass has no addition, it inherits the attribute CREATE PRIVATE. However, all CREATE additions are allowed. As a friend, the subclass can publish the private constructor of the superclass in any form.



**📖 Source**: [abeninheritance_instantiation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_instantiation.htm)

### abeninheritance_events.htm

> **📖 Official SAP Documentation**: [abeninheritance_events.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abeninheritance_events.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abeninheritance_events.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_events.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Events%2C%20ABENINHERITANCE_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP Objects - Inheritance and Events

Once declared in a superclass, an event is known in all subclasses of the inheritance tree in which it is visible and can be raised in the methods there.

An event handler can be declared with reference to all classes of the inheritance tree in which the event is visible for the event handler. However, it can only handle events raised in classes that are more specific than or equal to the class for which it is declared. If the event is raised in a method of a superclass of the class for which an event handler is declared, it cannot handle it.

The latter is particularly important when raising static events in static methods, since a static method is always executed in the class in which it was declared (see also [Inheritance and Static Components](javascript:call_link\('abeninheritance_statical.htm'\))).

Hint

In the case of event handlers for events declared in interfaces, the above also applies to the class in which the interface is included.

Executable Example

[Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))
