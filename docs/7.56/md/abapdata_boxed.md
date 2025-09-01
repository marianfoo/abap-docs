  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) → 

DATA, BOXED

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_shortref.htm)

Syntax

DATA struc TYPE struc\_type BOXED.

Effect

This statement defines a structured attribute of a class or an interface as a [static box](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_boxes.htm). It can only be in the declaration section of a class or an interface and only at the highest level.

struc\_type expects a structured data type. This can be a program-local structured type, a visible structured type of a global class or of a global interface, or a structure from the ABAP Dictionary, and can also contain static boxes.

Static boxes support [initial value sharing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry"). Here, the structure is not saved in the superordinate context itself. Instead, an internal reference that points to the actual structure is stored instead of the component. This makes a static box a [deep](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeep_glosry.htm "Glossary Entry") component.

Hints

-   A structure with a static box is a [deep structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeep_structure_glosry.htm "Glossary Entry") and the corresponding restrictions apply.
-   The addition BOXED defines the static box in relation to its context (structure or class). A data type declared using a direct TYPE reference or LIKE reference to a static box inherits its data type but is not a static box itself.
-   When a static box is inherited by one structure from another structure using the statement [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type.htm), its property as a static attribute is inherited.
-   The addition BOXED can also be used in the statement [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_boxed.htm) to declare a substructure of a nested structured data type.

Example

The following section shows the allowed use of the addition BOXED with the statement *\[*CLASS-*\]*DATA. In a class, a static structure struc1 and a structured instance attribute struc2 are declared as static boxes.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF t\_struc,
             comp1 TYPE c LENGTH 100,
             comp2 TYPE n LENGTH 100,
           END OF t\_struc.
  PRIVATE SECTION.
    CLASS-DATA struc1 TYPE t\_struc BOXED.
    DATA       struc2 TYPE t100    BOXED.
ENDCLASS.