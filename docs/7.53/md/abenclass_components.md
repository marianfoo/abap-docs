  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses.htm) → 

Components of classes

The content of a class is composed of components. The components define the attributes of the [objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject.htm) in a class. Each component is declared in the [definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_interface_definition.htm) of the class in one of the four [visibility sections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_visibility.htm) that the interfaces define externally. Within a class, all its components are visible. All components are in the same namespace, which means that the names of all components in the class must be different.

The individual components are:

-   [Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_attributes.htm)
    

-   [Methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_methods.htm)
    

-   [Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_events.htm)
    

-   [Types and constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_types_constants.htm)

There is a distinction between components of this type that exist on an instance-dependent basis for every object and non-instance-dependent components that exist only once in each class. The instance-dependent components are known as [instance components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_component_glosry.htm "Glossary Entry") and the non-instance-dependent components are known as [static components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_component_glosry.htm "Glossary Entry").

In ABAP Objects, classes can define the components specified above. This description also applies to interfaces, since all components that can be declared in classes can also be declared in interfaces.

The components of classes can be [accessed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_components_addressing.htm) internally and, depending on the visibility, also from outside the class. If accessed externally, [component selectors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomponent_selector_glosry.htm "Glossary Entry") must be used for addressing the components.

Continue
[Visibility Sections in Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_visibility.htm)
[Attributes of Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_attributes.htm)
[Methods of Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_methods.htm)
[Constructors of Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor.htm)
[Class Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_events.htm)
[Data Types and Constants of Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_types_constants.htm)