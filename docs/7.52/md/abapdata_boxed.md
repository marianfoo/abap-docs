---
title: "DATA - BOXED"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_shortref.htm) Syntax DATA struc TYPE struc_type BOXED. Effect This statement defines a structured attribute of a class or an interface as a static box(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/a
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_boxed.htm"
abapFile: "abapdata_boxed.htm"
keywords: ["do", "try", "class", "data", "types", "abapdata", "boxed"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm) → 

DATA - BOXED

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_shortref.htm)

Syntax

DATA struc TYPE struc\_type BOXED.

Effect

This statement defines a structured attribute of a class or an interface as a [static box](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_boxes.htm). It can only be located in the declaration part of a class or an interface and only at the highest level.

struc\_type expects a structured data type. This can be a program-local structure, a visible structured type of a class or of a global interface, or a structure from ABAP Dictionary, and can contain boxed components.

Static boxes support [initial value sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry"). Here, the structure is not saved in the higher level context itself. Instead, an internal reference that points to the actual structure is saved in place of the component. This makes a static box a [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") component.

Notes

-   A structure with a static box is a [deep structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_structure_glosry.htm "Glossary Entry") and the relevant restrictions apply.
    
-   The addition BOXED defines the static box with reference to its context (structure or class). A data type declared using a direct TYPE reference or LIKE reference to a static box is assigned its data type but is not a static box itself.
    
-   When a static box is applied from one structure to another structure using the statement [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm), its static attribute is also applied.
    
-   The addition BOXED can also be used in the statement [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_boxed.htm) to declare a substructure of a nested structured data type.
    

Example

The following section shows how the addition BOXED is allowed to be used with the statement *\[*CLASS-*\]*DATA. In a class, it declares a static structure struc1 and a structured instance attribute struc2 as a static box.

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