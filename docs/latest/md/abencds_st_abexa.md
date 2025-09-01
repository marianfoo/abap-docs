  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_type.htm) →  [ABAP CDS - Simple Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_types.htm) →  [CDS TDL - DEFINE TYPE simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20Using%20a%20CDS%20Simple%20Type%20for%20Typing%20in%20ABAP%2C%20ABENCDS_ST_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

CDS TDL - Using a CDS Simple Type for Typing in ABAP

This example demonstrates how to use CDS simple types for declaring data objects in an ABAP class.

The following CDS simple types are used:

-   First name
    
    @EndUserText.heading: 'First name'
    define type demo\_bt\_first\_name: abap.char( 30 );
    
-   Last name
    
    @EndUserText.heading: 'Last name'
    define type DEMO\_BT\_LAST\_NAME: abap.char( 30 );
    
-   Assets
    
    @EndUserText.heading: 'Assets'
    define type demo\_bt\_assets: abap.dec( 10,2 );
    
-   Liabilities
    
    @EndUserText.heading: 'Liabilities'
    define type DEMO\_BT\_LIABILITIES: abap.dec( 10,2 );
    

Source Code   

\* Public class definition
CLASS cl\_demo\_simple\_type\_exec DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: result TYPE demo\_bt\_assets,
          fname  TYPE demo\_bt\_first\_name VALUE 'Lisa',
          lname  TYPE demo\_bt\_last\_name VALUE 'Mustermann',
          activ  TYPE demo\_bt\_assets VALUE '27.5',
          liabs  TYPE demo\_bt\_liabilities VALUE '33'.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_simple\_type\_exec IMPLEMENTATION.
  METHOD main.
    "Request input parameters
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = fname
     )->add\_line(
     )->add\_field( CHANGING field = lname
     )->add\_line(
     )->add\_field( CHANGING field = activ
     )->add\_line(
     )->add\_field( CHANGING field = liabs
     )->request( ).
    "Perform calculation
    result = activ - liabs.
    "Generate screen output
    out->write( |Client:| && | | && fname && | | && lname ).
    out->write( |Finance:| && | | && activ && | | && |-| &&
     | | && liabs && | | && |=| && | | && result ).
  ENDMETHOD.
ENDCLASS.

Description   

In this example, CDS simple types are used to type variables in an ABAP class.

-   First, variables are declared with reference to CDS simple types.
-   Then, actual parameters are requested.
-   A calculation is performed, i.e. a customer's liabilities are subtracted from their assets.
-   A screen output is generated.