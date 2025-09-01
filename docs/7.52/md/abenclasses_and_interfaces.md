---
title: "Classes and Interfaces"
description: |
  This section describes the definition of classes(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) and interfaces(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm) and of their components(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/e
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm"
abapFile: "abenclasses_and_interfaces.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenclasses", "and", "interfaces"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) → 

Classes and Interfaces

This section describes the definition of [classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) and [interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm) and of their [components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm). Classes and interfaces form the basis for [ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm), the object-oriented part of the ABAP language. Classes and interfaces can be defined in ABAP programs of the following [program types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_glosry.htm "Glossary Entry"):

-   In a [class pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") it is possible to define precisely one global class in the class library that can be used in all other ABAP programs. In the global declaration part of a class pool, it is possible to define local data types, classes, and interfaces to be used in the class pool and to make [type groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") known.

-   In an [interface pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_pool_glosry.htm "Glossary Entry"), precisely one global interface from the class library can be defined for use in all other ABAP programs. In the global declaration part of an interface pool, it is not possible to define local data types, classes, and interfaces. Type groups can be made known. In interface pools, no other statements are allowed outside of the global interfaces.

-   In all other ABAP programs, except type groups, it is possible to define local classes and interfaces to be used in the program itself.

Continue
[ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm)
[CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm)
[INTERFACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm)
[Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm)