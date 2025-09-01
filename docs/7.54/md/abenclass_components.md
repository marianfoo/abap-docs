  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) → 

Components of Classes

The content of a class is composed of components. The components define the attributes of [objects](javascript:call_link\('abenobject.htm'\)) of a class. Each component is declared in the [definition](javascript:call_link\('abenclass_interface_definition.htm'\)) of the class in one of the four [visibility sections](javascript:call_link\('abenclass_visibility.htm'\)) that the interfaces define externally. Within a class, all its components are visible. All components are in the same namespace, which means that the names of all components in a class must be different.

The individual components are:

-   [Attributes](javascript:call_link\('abenclass_attributes.htm'\))
    

-   [Methods](javascript:call_link\('abenclass_methods.htm'\))
    

-   [Events](javascript:call_link\('abenclass_events.htm'\))
    

-   [Types and constants](javascript:call_link\('abenclass_types_constants.htm'\))

SAP makes a distinction between components of this type that are available on an instance-dependent basis for every object, and instance-independent components that are only available once in a class. The instance-dependent components are called [instance components](javascript:call_link\('abeninstance_component_glosry.htm'\) "Glossary Entry"); the instance-independent components are known as [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry").

In ABAP objects, classes can define the components listed above. Since all components that can be declared in classes can also be declared in interfaces, this description also applies to interfaces.

The components of classes can be [accessed](javascript:call_link\('abenclass_components_addressing.htm'\)) internally, and depending on the visibility, also from outside the class. If they are accessed externally, [component selectors](javascript:call_link\('abencomponent_selector_glosry.htm'\) "Glossary Entry") must be used for addressing.

Continue
[Visibility Sections in Classes](javascript:call_link\('abenclass_visibility.htm'\))
[Attributes of Classes](javascript:call_link\('abenclass_attributes.htm'\))
[Methods of Classes](javascript:call_link\('abenclass_methods.htm'\))
[Constructors of Classes](javascript:call_link\('abenconstructor.htm'\))
[Class Events](javascript:call_link\('abenclass_events.htm'\))
[Data Types and Constants of Classes](javascript:call_link\('abenclass_types_constants.htm'\))