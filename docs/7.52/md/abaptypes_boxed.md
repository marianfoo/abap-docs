  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES - BEGIN OF struct\_type](javascript:call_link\('abaptypes_struc.htm'\)) → 

TYPES - BOXED

[Quick Reference](javascript:call_link\('abaptypes_begin_of_shortref.htm'\))

Syntax

TYPES comp TYPE struc\_type BOXED.

Effect

This statement defines a substructure comp of a structure as a [static box](javascript:call_link\('abenstatic_boxes.htm'\)). It can only be located within a structure definition with the additions [BEGIN OF](javascript:call_link\('abaptypes_struc.htm'\)) and [END OF](javascript:call_link\('abaptypes_struc.htm'\)) of the statement TYPES, and only at the top component level and not within nested BEGIN OF ... END OF blocks.

struc\_type expects a structured data type. This can be a program-local structure, a visible structured type of a class or of a global interface, or a structure from ABAP Dictionary, and can contain boxed components.

Static boxes support [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry"). Here, the structure is not saved in the higher level context itself. Instead, an internal reference that points to the actual structure is saved in place of the component. This makes a static box a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component.

Notes

-   A structure with a static box is a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") and the relevant restrictions apply.
    
-   The addition BOXED defines the static box with reference to its context (structure or class). A data type declared using a direct TYPE reference or LIKE reference to a static box is assigned its data type but is not a static box itself.
    
-   When a static box is applied from one structure to another structure using the statement [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\)), its static attribute is also applied.
    
-   If a nested structure whose static boxes already contain static boxes needs to be created, this is only possible if each substructure in question exists as a standalone type. You cannot specify BOXED for substructures that exist as a result of nesting of TYPES BEGIN OF ... TYPES END OF.
    
-   The addition BOXED can also be used in the statement [DATA](javascript:call_link\('abapdata_boxed.htm'\)) to declare a structured attribute of a class or an interface.
    

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