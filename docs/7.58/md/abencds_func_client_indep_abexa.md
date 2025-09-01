  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_functions.htm) →  [ABAP CDS - Client Handling in CDS Table Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_func_client_handling.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Client-Independent%20CDS%20Table%20Functions%2C%20ABENCDS_FUNC_CLIENT_INDEP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Client-Independent CDS Table Functions

This example demonstrates client-independent CDS table functions.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_functions\_no\_clnt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_functions\_no\_clnt IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>amdp\_table\_function ) ) ).
      out->write(
        \`System does not support CDS table functions\` ).
      RETURN.
    ENDIF.
    DATA carrid TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_nocl( clnt   = @sy-mandt,
                                               carrid = @carrid )
           INTO TABLE @FINAL(result1)
           ##db\_feature\_mode\[amdp\_table\_function\].
    out->write( result1 ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_clnt( clnt   = @sy-mandt,
                                               carrid = @carrid )
           INTO TABLE @FINAL(result2)
           ##db\_feature\_mode\[amdp\_table\_function\].
    out->write( result2 ).
  ENDMETHOD.
ENDCLASS.

Description   

This example class accesses two [client-independent](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_func_client_handling.htm) [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_NOCL does not have any elements of the type CLNT.
    
    @ClientHandling.type: #CLIENT\_INDEPENDENT  
    define table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_NOCL
      with parameters
        clnt   :abap.clnt,
        carrid :s\_carr\_id
      returns
      {
        carrname :s\_carrname;
        connid   :s\_conn\_id;
        cityfrom :s\_from\_cit;
        cityto   :s\_to\_city;
      }
      implemented by method
        CL\_DEMO\_AMDP\_FUNCTIONS\_NOCL=>GET\_SCARR\_SPFLI\_FOR\_CDS;
    
-   The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT has one element client of the type CLNT.
    
    @ClientHandling.type: #CLIENT\_INDEPENDENT
    define table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT
      with parameters
        clnt   :abap.clnt,
        carrid :s\_carr\_id
      returns
      {
        client   :s\_mandt;
        carrname :s\_carrname;
        connid   :s\_conn\_id;
        cityfrom :s\_from\_cit;
        cityto   :s\_to\_city;
      }
      implemented by method
        CL\_DEMO\_AMDP\_FUNCTIONS\_CLNT=>GET\_SCARR\_SPFLI\_FOR\_CDS;
    

Both CDS table functions have an input parameter clnt of the type CLNT without the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm). The client ID of the current client is passed explicitly to this parameter by the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm). The implementations in the AMDP method GET\_SCARR\_SPFLI\_FOR\_CDS of the associated AMDP classes CL\_DEMO\_AMDP\_FUNCTIONS\_NOCL or CL\_DEMO\_AMDP\_FUNCTIONS\_CLNT use this input parameter in their WHERE conditions to read the data of the current client only. Both result sets have the same number of rows and are distinguished only by the extra client column of the function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT.

Hint

In both table functions, the input field for the client ID could also be annotated with the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm) using the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm) to stop the client ID from being passed explicitly by SELECT statements.