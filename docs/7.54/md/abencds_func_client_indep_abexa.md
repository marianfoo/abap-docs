---
title: "Cross-Client CDS Table Functions"
description: |
  This example demonstrates cross-client CDS table functions. Source Code REPORT demo_cds_functions_no_client. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. IF NOT cl_abap_dbfeatures=>use_features( EXPORTING requested_features = VA
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_indep_abexa.htm"
abapFile: "abencds_func_client_indep_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abencds", "func", "client", "indep", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_table_functions.htm) →  [ABAP CDS - Client Handling in CDS Table Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm) → 

Cross-Client CDS Table Functions

This example demonstrates cross-client CDS table functions.

Source Code

REPORT demo\_cds\_functions\_no\_client.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>amdp\_table\_function ) ) ).
      cl\_demo\_output=>display(
        \`System does not support CDS table functions\` ).
      RETURN.
    ENDIF.
    DATA carrid TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_nocl( clnt   = @sy-mandt,
                                               carrid = @carrid )
           INTO TABLE @DATA(result1)
           ##db\_feature\_mode\[amdp\_table\_function\].
    cl\_demo\_output=>write( result1 ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_clnt( clnt   = @sy-mandt,
                                               carrid = @carrid )
           INTO TABLE @DATA(result2)
           ##db\_feature\_mode\[amdp\_table\_function\].
    cl\_demo\_output=>display( result2 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example program accesses two [cross-client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm) [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry").

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

Both CDS table functions have an input parameter clnt of the type CLNT without the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The client ID of the current client is passed explicitly to this parameter by the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm). The implementations in the AMDP method GET\_SCARR\_SPFLI\_FOR\_CDS of the associated AMDP classes CL\_DEMO\_AMDP\_FUNCTIONS\_NOCL or CL\_DEMO\_AMDP\_FUNCTIONS\_CLNT use this input parameter in their WHERE conditions to read the data of the current client only. Both results sets have the same number of rows and are distinguished only by the extra client column of the function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT.

Note

In both table functions, the input field for the client ID could also be annotated with the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) using the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) to stop the client ID from being passed explicitly by SELECTs.