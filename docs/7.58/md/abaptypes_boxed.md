---
title: "TYPES, BOXED"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_begin_of_shortref.htm) Syntax TYPES comp TYPE struc_type BOXED. Effect This statement defines a substructure comp of a structure as a static box(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_boxed.htm"
abapFile: "abaptypes_boxed.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abaptypes", "boxed"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm) →  [TYPES, BEGIN OF struct\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_struc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20BOXED%2C%20ABAPTYPES_BOXED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, BOXED

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_begin_of_shortref.htm)

Syntax

TYPES comp TYPE struc\_type BOXED.

Effect

This statement defines a substructure comp of a structure as a [static box](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_boxes.htm). It can only be located within a structure definition with the additions [BEGIN OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_struc.htm) and [END OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_struc.htm) of the statement TYPES, and only on the highest component level and not within nested BEGIN OF ... END OF blocks.

struc\_type expects a structured data type. This can be a program-local structured type, a visible structured type of a global class or of a global interface, or a structure from the ABAP Dictionary, and can also contain static boxes.

Static boxes support [initial value sharing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry"). Here, the structure is not saved in the superordinate context itself. Instead, an internal reference that points to the actual structure is stored instead of the component. This makes a static box a [deep](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeep_glosry.htm "Glossary Entry") component.

Hints

-   A structure with a static box is a [deep structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeep_structure_glosry.htm "Glossary Entry") and the corresponding restrictions apply.
-   The addition BOXED defines the static box in relation to its context (structure or class). A data type declared using a direct TYPE reference or LIKE reference to a static box inherits its data type but is not a static box itself.
-   When a static box is included in one structure from another structure using the statement [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_type.htm), its property as a static box is inherited.
-   If a nested structure whose static boxes already contain static boxes is to be created, this is only possible if each substructure in question exists as a standalone type. It is not possible to specify BOXED for substructures created by nesting using TYPES BEGIN OF ... TYPES END OF.
-   The addition BOXED can also be used in the statement [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_boxed.htm) to declare a structured attribute of a class or an interface.

Example

The following section shows how the addition BOXED can be used with the statement TYPES. In a structured type t\_struc2, a substructure t\_struc2-comp2 of type t\_struc1 is declared as a static box.

TYPES: BEGIN OF t\_struc1,
         comp1 TYPE c LENGTH 100,
         comp2 TYPE n LENGTH 100,
       END OF t\_struc1.
TYPES: BEGIN OF t\_struc2,
         comp1 TYPE string,
         comp2 TYPE t\_struc1 BOXED,
       END OF t\_struc2.