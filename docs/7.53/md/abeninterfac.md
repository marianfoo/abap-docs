  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

Interfaces

The components of a class have [visibility sections](javascript:call_link\('abenclass_visibility.htm'\)), which define the external point of contact between the class and its consumer. For example, the public components of a class define its public scope, since all of its attributes and method parameters can be addressed by all consumers. The protected components are an interface between the class and those classes that inherit from it (the subclasses).

Interfaces are independent structures that enable the class-specific public points of contact to be enhanced by implementing them in classes. Different classes that implement the same interface can all be addressed in the same way. Alongside [inheritance](javascript:call_link\('abeninheritance.htm'\)), interfaces are one of the pillars of [polymorphism](javascript:call_link\('abenpolymorphism_glosry.htm'\) "Glossary Entry"), since they allow a single method within an interface to behave differently in different classes. [Interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") allow consumers to address different classes in the same manner. Interfaces can also be [nested](javascript:call_link\('abeninterface_composition.htm'\)).

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

Unlike classes, interfaces do not have instances. Instead, interfaces are implemented by classes. The statement [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) in the declaration part of a class is used to implement interfaces in a class. This statement may only appear in the public section of the class, namely after PUBLIC SECTION. Some interface components can be modified to meet the requirements of the class. For example, methods can be identified as abstract or final, or [initial values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") can be assigned to attributes.

When an interface is implemented in a class, the components of the interface are added to the other components in the public section. A component comp of an interface intf can be addressed as though it were a member of the class under the name intf~comp. For use outside and inside the classes, [ALIASES](javascript:call_link\('abapaliases.htm'\)) can be used to define alias names for these components.

The class must implement the methods of all interfaces implemented in it. The implementation part of the class must contain a method implementation for each non-abstract and non-optional interface method meth:

[METHOD intf~meth.](javascript:call_link\('abapmethod.htm'\))
  ...
[ENDMETHOD.](javascript:call_link\('abapendmethod.htm'\))

Interface methods defined as optional using the addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)) do not need to be implemented explicitly and demonstrate default behavior when called.

Interfaces can be implemented by different classes. Each of these classes is enhanced using the same set of components. However, the methods of the interface can be implemented differently in each class.

Interfaces enable different classes to be used in a uniform way using [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") (known as polymorphism). Interfaces that are implemented in different classes add the same components to the public interfaces of these classes. If a class does not have any class-specific public components, the interfaces define the entire public face of the class.

Interface Reference Variables

Object references are used in object reference variables to address [objects](javascript:call_link\('abenobject.htm'\)). Instead of creating reference variables with reference to a [class](javascript:call_link\('abenclasses.htm'\)), they can also be created with reference to an interface. This kind of reference variable can contain references to objects of classes that implement the corresponding interface. A reference variable obj with reference to an interface intf is declared using the statement [DATA obj TYPE REF TO intf](javascript:call_link\('abapdata_references.htm'\)). This reference variable allows programs access to precisely those components defined in the interface, namely the components of an object that were added to the class-specific components by implementing the interface.

Accessing Objects Using Interface References

To create an object of the class class, a reference variable cref must first be declared with reference to the class. If the class class implements an interface intf, the class reference variable cref can be assigned to the interface reference variable iref as follows:

iref = cref.

The reference in iref now points to the same object as the reference in cref.

It is also possible to create an object directly to which the interface reference variable points initially. In this case, the TYPE addition of the statement CREATE OBJECT must be used to specify a class that implements the interface.

CREATE OBJECT iref TYPE class.

If the interface intf contains an instance attribute attr and an instance method meth, the interface components can be addressed as follows:

Using the class reference variable (not recommended)

-   Accessing an attribute attr: cref->intf~attr

-   Calling a method meth: cref->intf~meth

Using the interface reference variable (recommended):

-   Accessing an attribute attr: iref->attr

-   Calling a method meth: iref->meth( )

Accessing the Static Components of Interfaces

As far as the [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") of interfaces are concerned, the interface name can only be used to access constants.

-   Accessing a constant const: intf=>const

For all other static components of an interface, only object references or the class class that implements the interface can be used.

-   Accessing a static attribute attr:class=>intf~attr

-   Calling a static method meth: class=>intf~meth( )
    

Executable Example

[Interfaces](javascript:call_link\('abeninterface_abexa.htm'\))

Continue
[Nesting Interfaces](javascript:call_link\('abeninterface_composition.htm'\))