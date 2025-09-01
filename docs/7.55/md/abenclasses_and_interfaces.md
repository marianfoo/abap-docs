  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) → 

Classes and Interfaces (ABAP Objects)

This section describes the definition of [classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass.htm) and [interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface.htm) and of their [components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_ifac_components.htm). Classes and interfaces are the basis of [ABAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm), the object-oriented part of the ABAP language. Classes and interfaces can be defined in ABAP programs of the following [program types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_glosry.htm "Glossary Entry"):

-   In a [class pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry"), exactly one global class of the class library can be defined that can be used in all other ABAP programs. In the global declaration part of a class pool, it is possible to define local data types, classes, and interfaces for use in the class pool itself.

-   In an [interface pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_pool_glosry.htm "Glossary Entry"), exactly one global interface of the class library can be defined for use in all other ABAP programs. In the global declaration section of an interface pool, it is forbidden to define local data types, classes and interfaces. Type pools can be declared. In interface pools, no other statements are allowed outside of the global interfaces.

-   In all other ABAP programs except type pools, local classes and interfaces can be defined for use in the program.

Continue
[ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm)
[CLASS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass.htm)
[INTERFACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface.htm)
[ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_ifac_components.htm)