  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Information Processing](javascript:call_link\('abapderived_types_info.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %foreign, ABAPDERIVED_TYPES_FOREIGN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

%foreign

%foreign is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). The component group is contained in the [reported](javascript:call_link\('abaptype_response_for.htm'\)) response parameter in the context of the [map\_messages](javascript:call_link\('abensaver_map_messages.htm'\)) saver method and summarizes all available [foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") defined in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Type

The subcomponents of %foreign are internal tables of type [TYPE TABLE FOR REPORTED LATE](javascript:call_link\('abaptype_table_for.htm'\)).

Where used

-   [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\))

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Message Mapping.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_UNMANAGED\_MAP\_MESSAGES demonstrates the component group %foreign in the context of a map\_messages method implementation that is responsible for processing the responses of a foreign entity. See the executable program for this example further down.

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
  CLEAR reported-%foreign-demo\_unmanaged\_foreign\_entity.
ENDMETHOD.

Executable Example

The example [Example for RAP Saver Method map\_messages](javascript:call_link\('abenabp_map_messages_abexa.htm'\)) demonstrates the use of %foreign in the context of the implementation of a map\_messages saver method within a RAP saver class using unmanaged RAP BOs.