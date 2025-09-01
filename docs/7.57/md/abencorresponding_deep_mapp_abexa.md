  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Component Operator, Nested Mapping Rule, ABENCORRESPONDING_DEEP_MAPP_ABEXA, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Component Operator, Nested Mapping Rule

This example demonstrates the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) with a nested mapping rule.

Source Code   

REPORT demo\_corresponding\_deep\_mapp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      BEGIN OF struct1,
        a1 TYPE string VALUE \`a1\_XX\`,
        a2 TYPE string VALUE \`a2\_XX\`,
        BEGIN OF istruct,
          a1 TYPE string VALUE \`a1\_YY\`,
          a2 TYPE string VALUE \`a2\_YY\`,
        END OF istruct,
        itab LIKE STANDARD TABLE OF struct1-istruct WITH EMPTY KEY,
      END OF struct1,
      BEGIN OF struct2,
        b1 TYPE string,
        a2 TYPE string,
        BEGIN OF istruct,
          b1 TYPE string,
          a2 TYPE string,
        END OF istruct,
        jtab LIKE STANDARD TABLE OF struct2-istruct WITH EMPTY KEY,
      END OF struct2.
    TYPES:
      BEGIN OF out1,
        a1 LIKE struct1-a1,
        a2 LIKE struct1-a2,
      END OF out1,
      BEGIN OF out2,
        a1 LIKE struct2-b1,
        a2 LIKE struct2-a2,
      END OF out2.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`struct1\`
      )->write( CORRESPONDING out1( struct1 )
      )->write( struct1-istruct
      )->write( struct1-itab ).
    struct2 = CORRESPONDING #( struct1 ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1 )\`
      )->write( CORRESPONDING out2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    struct2 = CORRESPONDING #( struct1 MAPPING jtab = itab ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING jtab = itab )\`
      )->write( CORRESPONDING out2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    struct2 = CORRESPONDING #( struct1 MAPPING
               ( istruct = istruct MAPPING b1 = a1 EXCEPT a2 )
               ( jtab = itab MAPPING b1 = a1 ) ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1  MAPPING ( ... ) )\`
      )->write( CORRESPONDING out2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    struct1-itab = VALUE #(
      ( a1 = \`a1\_xx\` a2 = \`a2\_xx\` )
      ( a1 = \`a1\_yy\` a2 = \`a2\_yy\` ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example assigns the [basic form](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) of the result of a constructor expression with the component operator CORRESPONDING with the parameter struct1 to a compatible structure struct2. Various [mapping rules](javascript:call_link\('abencorresponding_constr_mapping.htm'\)) are demonstrated. The structures contain a substructure and a tabular component.

-   If there is not mapping rule, the identically named components a2 and istruct are assigned at the top level. The substructure istruct is resolved and the component a2 is assigned here. The tabular components are not identically named and are not assigned.
-   The mapping rule MAPPING jtab = itab is also used to assign the tabular component, whereby only the identically named column a2 is considered.
-   The nested mapping rule
    
    MAPPING ( istruct = istruct MAPPING b1 = a1 EXCEPT a2 )
            ( jtab = itab MAPPING b1 = a1 )
    
    is used to
    
    -   specify a mapping relationship for the components of the substructure istruct. Here, istruct = istruct must be specified at the top level.
    -   define a mapping for the tabular components. Here, a mapping is also nested for their columns.
    
    In the result, all components are filled except the component a2 of the substructure that was excluded using EXCEPT.