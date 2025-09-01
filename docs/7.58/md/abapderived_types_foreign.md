  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Components Related to Information Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_info.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25foreign%2C%20ABAPDERIVED_TYPES_FOREIGN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%foreign

%foreign is a [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). The component group is contained in the REPORTED [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") in the context of the [map\_messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_map_messages.htm) saver method and summarizes all available [foreign entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") defined in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Type

The subcomponents of %foreign are internal tables of type [TYPE TABLE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm).

Where used

-   [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm)

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Message Mapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/741dfc88293d4ac99186815b9fc35e31?version=sap_cross_product_abap).

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_UNMANAGED\_MAP\_MESSAGES demonstrates the component group %foreign in the context of a map\_messages method implementation that is responsible for processing the responses of a foreign entity. See the executable program for this example further down.

METHOD map\_messages.
  LOOP AT reported-%foreign-demo\_unmanaged\_foreign\_entity
    ASSIGNING FIELD-SYMBOL(<src>).
    "Adapt message from foreign entity.
    <src>-%msg = new\_message\_with\_text(
             severity  = if\_abap\_behv\_message=>severity-information
             text      = |Foreign entity: Instance with | &&
                         |key { <src>-key\_field } was saved.| ).
    "Insert changed messages into REPORTED table of the exposed BO.
    INSERT VALUE #( key\_field = <src>-%key-key\_field
                    %msg = <src>-%msg
                  ) INTO TABLE reported-demo\_unmanaged\_map\_messages.
  ENDLOOP.
  "You can delete the original messages to remove them from the external result.
  CLEAR reported-%foreign-demo\_unmanaged\_foreign\_entity.
ENDMETHOD.

Executable Example

The example [Example for RAP Saver Method map\_messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_map_messages_abexa.htm) demonstrates the use of %foreign in the context of the implementation of a map\_messages saver method within a RAP saver class using unmanaged RAP BOs.