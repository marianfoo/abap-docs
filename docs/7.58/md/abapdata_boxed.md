  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20BOXED%2C%20ABAPDATA_BOXED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, BOXED

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA struc TYPE struc\_type BOXED.

Effect

This statement defines a structured attribute of a class or an interface as a [static box](javascript:call_link\('abenstatic_boxes.htm'\)). It can only be in the declaration section of a class or an interface and only at the highest level.

struc\_type expects a structured data type. This can be a program-local structured type, a visible structured type of a global class or of a global interface, or a structure from the ABAP Dictionary, and can also contain static boxes.

Static boxes support [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry"). Here, the structure is not saved in the superordinate context itself. Instead, an internal reference that points to the actual structure is stored instead of the component. This makes a static box a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component.

Hints

-   A structure with a static box is a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") and the corresponding restrictions apply.
-   The addition BOXED defines the static box in relation to its context (structure or class). A data type declared using a direct TYPE reference or LIKE reference to a static box inherits its data type but is not a static box itself.
-   When a static box is included in one structure from another structure using the statement [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\)), its property as a static box is inherited.
-   The addition BOXED can also be used in the statement [TYPES](javascript:call_link\('abaptypes_boxed.htm'\)) to declare a substructure of a nested structured data type.

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