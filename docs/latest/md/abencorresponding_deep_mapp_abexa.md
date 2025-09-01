  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Component%20Operator%2C%20Nested%20Mapping%20Rule%2C%20ABENCORRESPONDING_DEEP_MAPP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Component Operator, Nested Mapping Rule

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm) with a nested mapping rule.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_deep\_mapp DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      BEGIN OF struct1,
        a1   TYPE string VALUE \`a1\_XX\`,
        a2   TYPE string VALUE \`a2\_XX\`,
        BEGIN OF istruct,
          a1 TYPE string VALUE \`a1\_YY\`,
          a2 TYPE string VALUE \`a2\_YY\`,
        END OF istruct,
        itab LIKE STANDARD TABLE OF struct1-istruct WITH EMPTY KEY,
      END OF struct1,
      BEGIN OF struct2,
        b1   TYPE string,
        a2   TYPE string,
        BEGIN OF istruct,
          b1 TYPE string,
          a2 TYPE string,
        END OF istruct,
        jtab LIKE STANDARD TABLE OF struct2-istruct WITH EMPTY KEY,
      END OF struct2.
    TYPES:
      BEGIN OF o1,
        a1 LIKE struct1-a1,
        a2 LIKE struct1-a2,
      END OF o1,
      BEGIN OF o2,
        a1 LIKE struct2-b1,
        a2 LIKE struct2-a2,
      END OF o2.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_deep\_mapp IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`struct1\`
      )->write( CORRESPONDING o1( struct1 )
      )->write( struct1-istruct
      )->write( struct1-itab ).
    struct2 = CORRESPONDING #( struct1 ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1 )\`
      )->write( CORRESPONDING o2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    struct2 = CORRESPONDING #( struct1 MAPPING jtab = itab ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING jtab = itab )\`
      )->write( CORRESPONDING o2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    struct2 = CORRESPONDING #( struct1 MAPPING
               ( istruct = istruct MAPPING b1 = a1 EXCEPT a2 )
               ( jtab = itab MAPPING b1 = a1 ) ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1  MAPPING ( ... ) )\`
      )->write( CORRESPONDING o2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    struct1-itab = VALUE #(
          ( a1 = \`a1\_xx\` a2 = \`a2\_xx\` )
          ( a1 = \`a1\_yy\` a2 = \`a2\_yy\` ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The example assigns the [basic form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_constr_arg_type.htm) of the result of a constructor expression with the component operator CORRESPONDING with the parameter struct1 to a compatible structure struct2. Various [mapping rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_constr_mapping.htm) are demonstrated. The structures contain a substructure and a tabular component.

-   If there is not mapping rule, the identically named components a2 and istruct are assigned at the top level. The substructure istruct is resolved and the component a2 is assigned here. The tabular components are not identically named and are not assigned.
-   The mapping rule MAPPING jtab = itab is also used to assign the tabular component, whereby only the identically named column a2 is considered.
-   The nested mapping rule
    
    MAPPING ( istruct = istruct MAPPING b1 = a1 EXCEPT a2 )
            ( jtab = itab MAPPING b1 = a1 )
    
    is used to
    
    -   specify a mapping relationship for the components of the substructure istruct. Here, istruct = istruct must be specified at the top level.
    -   define a mapping for the tabular components. Here, a mapping is also nested for their columns.
    
    In the result, all components are filled except the component a2 of the substructure that was excluded using EXCEPT.