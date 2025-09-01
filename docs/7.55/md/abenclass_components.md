  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) → 

ABAP Objects - Components of Classes

The content of a class is composed of components. The components define the properties of the [objects](javascript:call_link\('abenobject.htm'\)) of a class. Each component is declared in the [definition](javascript:call_link\('abenclass_interface_definition.htm'\)) of the class in one of the four [visibility sections](javascript:call_link\('abenclass_visibility.htm'\)) that the interfaces define externally. Within a class, all its components are visible. All components are in the same namespace, which means that the names of all components in the class must be different.

The individual components are:

-   [Attributes](javascript:call_link\('abenclass_attributes.htm'\))
    

-   [Methods](javascript:call_link\('abenclass_methods.htm'\))
    

-   [Events](javascript:call_link\('abenclass_events.htm'\))
    

-   [Types and constants](javascript:call_link\('abenclass_types_constants.htm'\))

There is a distinction between such components that exist on an instance-dependent basis for every object, and those that exist only once in each class, independent of the instance. The instance-dependent components are known as [instance components](javascript:call_link\('abeninstance_component_glosry.htm'\) "Glossary Entry") and the instance-independent components are referred to as [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry").

In ABAP Objects, classes can define the components listed above. This description also applies to interfaces, since all components that can be declared in classes can also be declared in interfaces.

The components of classes can be [accessed](javascript:call_link\('abenclass_components_addressing.htm'\)) internally and, depending on the visibility, also from outside the class. If accessed externally, [component selectors](javascript:call_link\('abencomponent_selector_glosry.htm'\) "Glossary Entry") must be used for addressing.

Continue
[ABAP Objects - Visibility Sections in Classes](javascript:call_link\('abenclass_visibility.htm'\))
[ABAP Objects - Attributes of Classes](javascript:call_link\('abenclass_attributes.htm'\))
[ABAP Objects - Methods of Classes](javascript:call_link\('abenclass_methods.htm'\))
[ABAP Objects - Constructors of Classes](javascript:call_link\('abenconstructor.htm'\))
[ABAP Objects - Class Events](javascript:call_link\('abenclass_events.htm'\))
[ABAP Objects - Data Types and Constants of Classes](javascript:call_link\('abenclass_types_constants.htm'\))