  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Interfaces%2C%20ABENINTERFAC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Interfaces

The components of a class use their [visibility sections](javascript:call_link\('abenclass_visibility.htm'\)) to define the class-specific [interfaces](javascript:call_link\('abenintf_gen_glosry.htm'\) "Glossary Entry") of the class to the outside. For example, the public components form the public interface of the class, since all of its attributes and method parameters can be addressed by all users. The protected components form an interface between the class and its subclasses during inheritance.

[Interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") of ABAP Objects are independent constructs that enable the class-specific [interfaces](javascript:call_link\('abenintf_gen_glosry.htm'\) "Glossary Entry") to be enhanced by implementing them in classes. Different classes that implement the same interface can all be addressed using identical interfaces. In addition to [inheritance](javascript:call_link\('abeninheritance.htm'\)), Interfaces are a basis for the [polymorphism](javascript:call_link\('abenpolymorphism_glosry.htm'\) "Glossary Entry") of classes, since a method of an interface can behave differently in different classes. [Interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") allow users to address different classes in the same way. Interfaces can also be [nested](javascript:call_link\('abeninterface_composition.htm'\)).

-   [Defining Interfaces](#@@ITOC@@ABENINTERFAC_1)
-   [Interface Components](#@@ITOC@@ABENINTERFAC_2)
-   [Implementing Interfaces](#@@ITOC@@ABENINTERFAC_3)
-   [Interface Reference Variables](#@@ITOC@@ABENINTERFAC_4)
-   [Accessing Objects Using Interface References](#@@ITOC@@ABENINTERFAC_5)
-   [Accessing the Static Components of Interfaces](#@@ITOC@@ABENINTERFAC_6)

Defining Interfaces   

Like classes, interfaces can be [defined](javascript:call_link\('abenclass_interface_definition.htm'\)) either [globally](javascript:call_link\('abenglobal_interface_glosry.htm'\) "Glossary Entry") in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") or [locally](javascript:call_link\('abenlocal_interface_glosry.htm'\) "Glossary Entry") in an ABAP program.

Interface Components   

Exactly the same [components](javascript:call_link\('abenclass_components.htm'\)) can be defined in an interface as in a class.

Implementing Interfaces   

Unlike classes, interfaces do not have instances. Instead, they are implemented by classes. The statement [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) in the declaration part of a class is used to implement these interfaces in a class. This statement may only be specified in the public visibility section of the class, that is, after PUBLIC SECTION. Here, some interface components can be adapted to the requirements of the class. For example, methods can be flagged as abstract or final, or [initial values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") can be assigned to attributes.

When an interface is implemented in a class, the components of this interface are added to the other components of the public visibility section. A component comp of an implemented interface intf becomes a fully-fledged component of the class and is addressed with the name intf~comp. For use outside and inside the classes, [ALIASES](javascript:call_link\('abapaliases.htm'\)) can be used to define alias names for these components.

The class must implement the methods of all implemented interfaces in it. The implementation part of the class must therefore contain a method implementation for each non-abstract and non-optional interface method meth:

[METHOD intf~meth.](javascript:call_link\('abapmethod.htm'\))
  ...
[ENDMETHOD.](javascript:call_link\('abapendmethod.htm'\))

Interface methods defined as optional using the addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)) do not need to be implemented explicitly and react with default behavior when they are called.

Interfaces can be implemented by different classes. Each of these classes is extended by the same set of components. However, the methods of the interface can be implemented differently in each class.

Interfaces enable different classes to be used in a uniform way using [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") (known as polymorphism). Interfaces that are implemented in different classes expand the public interfaces of each class by the same set of components. If a class does not have any class-specific public components, the interfaces define the entire public interface of the class.

Interface Reference Variables   

Object references are used in object reference variables to address [objects](javascript:call_link\('abenobject.htm'\)). Instead of creating object reference variables with reference to a [class](javascript:call_link\('abenclasses.htm'\)), they can also be created with reference to an interface. This kind of reference variable can contain references to objects of classes that implement the corresponding interface. A reference variable obj with reference to an interface intf is declared using the statement [DATA obj TYPE REF TO intf](javascript:call_link\('abapdata_references.htm'\)). This reference variable allows programs access to exactly those components defined in the interface, that is, the components of an object that are added to the class-specific components by implementing the interface.

Accessing Objects Using Interface References   

To create an object of a class class that implements an interface intf to which an interface reference variable iref points initially, the name of the class must be specified:

FINAL(iref) = NEW class(  ).

or

CREATE OBJECT iref TYPE class.

Also, a reference variable cref with reference to the class class that points to an object of the class can be used. A class reference variable cref of a class that implements an interface intf can be assigned to the interface reference variable iref:

iref = cref.

The reference in iref now points to the same object as the reference in cref.

If the interface intf contains an instance attribute attr and an instance method meth, the interface components can be addressed as follows:

Using the class reference variable (not recommended)

-   Access to an attribute attr: cref->intf~attr
-   Call of a method meth: cref->intf~meth

Using the interface reference variable (recommended):

-   Access to an attribute attr: iref->attr
-   Call of a method meth: iref->meth( )

Accessing the Static Components of Interfaces   

In the case of [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") of interfaces, the name of the interface can only be used to access constants.

-   Accessing a constant const: intf=>const

All other static components of an interface, apart from object references, can be accessed using classes class that implement the interface.

-   Access to a static attribute attr:class=>intf~attr
-   Call of a static method meth: class=>intf~meth( )

Executable Example

[Interfaces](javascript:call_link\('abeninterface_abexa.htm'\))

Continue
[ABAP Objects - Nesting Interfaces](javascript:call_link\('abeninterface_composition.htm'\))