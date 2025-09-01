---
title: "Classes and Interfaces"
description: |
  This section describes the definition of classes(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm 'Glossary Entry') and interfaces(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoo_intf_glosry.htm 'Glossary Entry') and of their components. Classes a
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm"
abapFile: "abenclasses_and_interfaces.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenclasses", "and", "interfaces"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Classes%20and%20Interfaces%2C%20ABENCLASSES_AND_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Classes and Interfaces

This section describes the definition of [classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry") and [interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoo_intf_glosry.htm "Glossary Entry") and of their components. Classes and interfaces are the basis of [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm), the object-oriented part of the ABAP language. Classes and interfaces can be defined in ABAP programs of the following [program types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_glosry.htm "Glossary Entry"):

-   In a [class pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_pool_glosry.htm "Glossary Entry"), exactly one global class of the class library can be defined that can be used in all other ABAP programs. In the global declaration part of a class pool, it is possible to define local data types, classes, and interfaces for use in the class pool itself.
-   In an [interface pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_pool_glosry.htm "Glossary Entry"), exactly one global interface of the class library can be defined for use in all other ABAP programs. In the global declaration section of an interface pool, it is forbidden to define local data types, classes and interfaces. Type pools can be declared. In interface pools, no other statements are allowed outside of the global interfaces.

In all other ABAP programs except type pools, local classes and interfaces can be defined for use in the program.

-   [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm)
-   [INTERFACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface.htm)
-   [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm)

Continue
[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm)
[INTERFACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface.htm)
[ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm)