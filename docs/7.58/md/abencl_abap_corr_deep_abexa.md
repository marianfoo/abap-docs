  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_CORRESPONDING%20for%20Tabular%20Components%2C%20ABENCL_ABAP_CORR_DEEP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CL\_ABAP\_CORRESPONDING for Tabular Components

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) for tabular components of structures.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_class\_strtb DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_class\_strtb IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line1,
             col1 TYPE i,
             col2 TYPE i,
           END OF line1,
           BEGIN OF line2,
             col2 TYPE i,
             col3 TYPE i,
           END OF line2.
    DATA: BEGIN OF struc1,
            itab TYPE TABLE OF line1 WITH EMPTY KEY,
          END OF struc1.
    DATA: BEGIN OF struc2,
            itab TYPE TABLE OF line2 WITH EMPTY KEY,
          END OF struc2.
    struc1-itab = VALUE #(
      ( col1 = 11 col2 = 12 )
      ( col1 = 21 col2 = 22 ) ).
    out->write( struc1 ).
    MOVE-CORRESPONDING struc1 TO struc2.
    out->write( struc2 ).
    CLEAR struc2-itab.
    MOVE-CORRESPONDING struc1 TO struc2 EXPANDING NESTED TABLES.
    out->write( struc2 ).
    CLEAR struc2-itab.
    struc2 = CORRESPONDING #( struc1 ).
    out->write( struc2 ).
    CLEAR struc2-itab.
    struc2 = CORRESPONDING #( DEEP struc1 ).
    out->write( struc2 ).
    CLEAR struc2-itab.
    cl\_abap\_corresponding=>create(
      source            = struc1
      destination       = struc2
      mapping           = VALUE cl\_abap\_corresponding=>mapping\_table(  )
      )->execute( EXPORTING source      = struc1
                  CHANGING  destination = struc2 ).
    out->write( struc2 ).
  ENDMETHOD.
ENDCLASS.

Description   

The example compares the options for component-by-component assignments of structures with tabular components.

-   The statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) can be executed with and without the addition EXPANDING NESTED TABLES. Depending on this, the tabular component is assigned as a whole or by component using identical names.
-   The operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) can be executed with and without the addition DEEP. Depending on this, the tabular component is assigned as a whole or by component using identical names.
-   The class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) always resolves tabular components.