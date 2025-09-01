  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Information Processing](javascript:call_link\('abapderived_types_info.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25fail%2C%20ABAPDERIVED_TYPES_FAIL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%fail

Use

%fail is a component of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It is used as a component of the FAILED [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry").

%fail itself is a structure that stores the symptom of a failed [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") instance in the component cause). The values of the failure cause (for example, NOT\_FOUND for untraceable entries) are defined in the interface IF\_ABAP\_BEHV: IF\_ABAP\_BEHV=>T\_FAIL\_CAUSE.

Type

%fail-cause has the following type: Type T\_FAILINFO of interface IF\_ABAP\_BEHV.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   FAILED \[EARLY*|*LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_FAILED demonstrates the component %fail in the context of an implementation for the get\_instance\_features method. See the executable program for this example further down.

METHOD get\_instance\_features.
READ ENTITIES OF demo\_managed\_root\_failed IN LOCAL MODE
      ENTITY demo\_managed\_root\_failed FIELDS ( field2 )
        WITH CORRESPONDING #( keys )
      RESULT DATA(lt\_inst\_features)
      FAILED failed.
  IF lt\_inst\_features IS INITIAL.
    APPEND VALUE #(
       %msg = new\_message\_with\_text(
         severity = if\_abap\_behv\_message=>severity-information
         text = 'get\_instance\_features: Not relevant!' )
             ) TO reported-demo\_managed\_root\_failed.
  ELSE.
    LOOP AT lt\_inst\_features ASSIGNING FIELD-SYMBOL(<fs>).
      CASE <fs>-field2.
       WHEN 'ZZZ'.
        APPEND VALUE #( %tky = <fs>-%tky
                        %update = if\_abap\_behv=>fc-f-read\_only
                      ) TO result.
        APPEND VALUE #( %tky = <fs>-%tky
                        %fail-cause = if\_abap\_behv=>cause-readonly
                      ) TO failed-demo\_managed\_root\_failed.
        APPEND VALUE #(
          %msg = new\_message\_with\_text(
            severity = if\_abap\_behv\_message=>severity-error
            text = 'get\_instance\_features: field3 is read-only!' )
          key\_field = <fs>-key\_field
                      ) TO reported-demo\_managed\_root\_failed.
      WHEN OTHERS.
        APPEND VALUE #(
          %msg = new\_message\_with\_text(
            severity = if\_abap\_behv\_message=>severity-information
            text = 'get\_instance\_features: field3 is unrestricted!' )
          key\_field = <fs>-key\_field
                      ) TO reported-demo\_managed\_root\_failed.
        ENDCASE.
    ENDLOOP.
ENDIF.
ENDMETHOD.

Executable Example

The example [Using %fail](javascript:call_link\('abenderived_types_fail_abexa.htm'\)) demonstrates the use of %fail with a managed RAP BO.