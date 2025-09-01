  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm) → 

DATA - BEGIN OF struc

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_begin_of_shortref.htm)

Syntax

DATA BEGIN OF struc [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm).
  ...
   [INCLUDE TYPE*|*STRUCTURE ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm)
  ...
DATA END OF struc.

Effect

Declares a new [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects_structure.htm) struc. This starts with a DATA statement with the addition BEGIN OF and must end with a DATA statement with the addition END OF.

The following can be included between these DATA statements:

-   Any DATA statements, in particular further closed structures.
    
-   The statements [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm) and [INCLUDE STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm)
    

The meaning of these statements is the same as in the definition of structured data types in the section [TYPES - BEGIN OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_struc.htm), but here it is used to create a bound structured data type. No structure can be created without at least one component.

A component of type struc cannot be declared by referencing struc itself. If the name struc is specified after LIKE in the declaration of a component, a search is performed for the next object with this name in a higher [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm), and used if found. If a more global object with this name does not exist, a syntax error occurs.

Notes

-   The addition [READ-ONLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm) can only be used for whole structures and not for individual structure components comp.
    
-   A structure called text cannot have any components with three-character names, since these are reserved for addressing [text symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbols.htm). It is best never to call a structure text and avoid any conflicts with text symbols.
    
-   The addition [BOXED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_boxed.htm) cannot be specified between DATA BEGIN OF and DATA END OF when declaring components. Static boxes in structures can only be defined with [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_boxed.htm).
    
-   The [value operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) can be used to [construct](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_struc.htm) the content of structures.
    
-   In an [obsolete variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenanonymous_components.htm), text field literals or the constant space can be specified as anonymous components between BEGIN OF and END OF.
    
-   The use of the addition [OCCURS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_begin_of_occurs.htm) for defining standard tables with structured row types is obsolete.
    
-   The statements for declaring a structure are usually summarized in a [chained statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_statement_glosry.htm "Glossary Entry") if possible.
    

Example

In this example, a structure spfli\_struc is declared with an elementary component index and a substructure spfli\_wa. The [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) loop shows a possible use of the nested structure.

DATA: BEGIN OF spfli\_struc,
         index  TYPE i,
         spfli\_wa TYPE spfli,
      END OF spfli\_struc.
SELECT \*
       FROM spfli
       INTO @spfli\_struc-spfli\_wa.
  spfli\_struc-index = spfli\_struc-index + 1.
  cl\_demo\_output=>next\_section( |{ spfli\_struc-index }| ).
  cl\_demo\_output=>write\_data( spfli\_struc-spfli\_wa ).
ENDSELECT.
cl\_demo\_output=>display( ).

Executable Examples

-   [Declaration of a simple structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensimple_structure_abexa.htm)

-   [Declaration of a Nested Structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennested_structure_abexa.htm)
    

Continue
![Example](exa.gif "Example") [Declaration of a Simple Structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensimple_structure_abexa.htm)
![Example](exa.gif "Example") [Declaration of a Nested Structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennested_structure_abexa.htm)