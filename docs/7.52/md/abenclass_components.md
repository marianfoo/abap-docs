---
title: "Components of Classes"
description: |
  The content of a class is composed of components. The components define the attributes of objects(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject.htm) of a class. Each component is declared in the definition(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencla
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components.htm"
abapFile: "abenclass_components.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenclass", "components"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses.htm) → 

Components of Classes

The content of a class is composed of components. The components define the attributes of [objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject.htm) of a class. Each component is declared in the [definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_interface_definition.htm) of the class in one of the four [visibility sections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_visibility.htm) that the interfaces define externally. Within a class, all its components are visible. All components are in the same namespace, which means that the names of all components in a class must be different.

The individual components are:

-   [Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_attributes.htm)
    

-   [Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_methods.htm)
    

-   [Events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_events.htm)
    

-   [Types and constants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_types_constants.htm)

SAP makes a distinction between components of this type that are available on an instance-dependent basis for every object, and instance-independent components that are only available once in a class. The instance-dependent components are called [instance components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_component_glosry.htm "Glossary Entry"); the instance-independent components are known as [static components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_component_glosry.htm "Glossary Entry").

In ABAP objects, classes can define the components listed above. Since all components that can be declared in classes can also be declared in interfaces, this description also applies to interfaces.

The components of classes can be [accessed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components_addressing.htm) internally, and depending on the visibility, also from outside the class. If they are accessed externally, [component selectors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_selector_glosry.htm "Glossary Entry") must be used for addressing.

Continue
[Visibility Sections in Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_visibility.htm)
[Class Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_attributes.htm)
[Methods of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_methods.htm)
[Constructors of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor.htm)
[Class Events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_events.htm)
[Data Types and Constants of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_types_constants.htm)