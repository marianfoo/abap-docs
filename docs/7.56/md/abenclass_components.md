  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses.htm) → 

ABAP Objects - Components of Classes

The content of a class is composed of components. The components define the properties of the [objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject.htm) of a class. Each component is declared in the [definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_interface_definition.htm) of the class in one of the four [visibility sections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_visibility.htm) that the interfaces define externally. Within a class, all its components are visible. All components are in the same namespace, which means that the names of all components in the class must be different.

The individual components are:

-   [Attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_attributes.htm)
-   [Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_methods.htm)
-   [Events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_events.htm)
-   [Types and constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_types_constants.htm)

There is a distinction between those components that exist on an instance-dependent basis for every object, and those that exist only once in each class, independent of the instance. The instance-dependent components are known as [instance components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_component_glosry.htm "Glossary Entry") and the instance-independent components are referred to as [static components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_component_glosry.htm "Glossary Entry").

In ABAP Objects, classes can define the components listed above. This description also applies to interfaces, since all components that can be declared in classes can also be declared in interfaces.

The components of classes can be [accessed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_components_addressing.htm) internally and, depending on the visibility, also from outside the class. If accessed externally, [component selectors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_selector_glosry.htm "Glossary Entry") must be used to address the components.

Continue
[ABAP Objects - Visibility Sections in Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_visibility.htm)
[ABAP Objects - Attributes of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_attributes.htm)
[ABAP Objects - Methods of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_methods.htm)
[ABAP Objects - Constructors of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor.htm)
[ABAP Objects - Class Events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_events.htm)
[ABAP Objects - Data Types and Constants of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_types_constants.htm)