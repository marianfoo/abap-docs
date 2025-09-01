  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm) → 

TYPES - BEGIN OF struct\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_begin_of_shortref.htm)

Syntax

TYPES BEGIN OF struc\_type.
  ...
  TYPES comp ...
  TYPES comp TYPE struc\_type [BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_boxed.htm).
  [INCLUDE TYPE*|*STRUCTURE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm)
  ...
TYPES END OF struc\_type.

Effect

Defines a structured type struc\_type. This is introduced using a TYPES statement with the addition BEGIN OF and must finish with a TYPES statement with the addition END OF.

The following can be included between these TYPES statements:

-   Any TYPES statements, in particular further closed structure definitions.
    
-   The definition of [static boxes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_box_glosry.htm "Glossary Entry") using [BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_boxed.htm).
    
-   The statements [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm) and [INCLUDE STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm) for including components from other structures.
    

No structured types can be created that do not have at least one component.

The TYPES statements within the statements BEGIN OF and END OF define the components of the structured type struc\_type. If a component is a structured type or if a new structured type is defined within a structure using BEGIN OF and END OF, substructures are created. A structure with substructures is known as a nested structure.

A component of struc\_type cannot be declared with reference to struc\_type itself. If the name struc\_type is specified after TYPE in the declaration of a component, a search is performed for the next type with this name in a higher [visibility section](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlifetime_and_visibility.htm), and used if found. If a more global type of this name does not exist, a syntax error occurs.

If a component is created as a [table type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm), this type cannot be generic. The name of a component cannot be the reserved name of the [pseudo component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line.

The statement [INCLUDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_prog.htm) defines components of the structured type struc\_type by using the components of a differently structured type or an existing structure at the same level.

The components of a structured type are divided using the name struc\_type and the name of the component, and addressed using the structure component selector (\-).

Notes

-   The [value operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm) can be used to [construct](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_struc.htm) the content of structures.
    
-   A structure type is always fully specified. There is no generic structure type.
    
-   The statements for defining a structure type are usually summarized in a [chained statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_statement_glosry.htm "Glossary Entry") if possible.
    

Example

This example defines two structured types, street\_type and address\_type. address\_typecontains structured types as components. The definition of zipcode\_type shows the access to substructures.

TYPES: BEGIN OF street\_type,
         name TYPE c LENGTH 40,
         no   TYPE c LENGTH 4,
       END OF street\_type.
TYPES: BEGIN OF address\_type,
         name TYPE c LENGTH 30,
         street TYPE street\_type,
         BEGIN OF city,
           zipcode TYPE n LENGTH 5,
           name TYPE c LENGTH 40,
         END OF city,
       END OF address\_type.
TYPES zipcode\_type TYPE address\_type-city-zipcode.

Continue
[TYPES - BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_boxed.htm)
[INCLUDE - TYPE, STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm)