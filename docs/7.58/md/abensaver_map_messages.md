  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20map_messages%2C%20RAP%20Saver%20Method%2C%20ABENSAVER_MAP_MESSAGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

map\_messages, RAP Saver Method

Syntax

Declaration part:

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) [INHERITING FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) base\_class ...
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) map\_messages [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm).

Implementation part:

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).
      ...
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) map\_messages.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm)
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).

Effect

[RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") that is declared as part of a [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It has the following implicit, predefined [CHANGING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_general.htm) parameter:
    -   [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).
-   It is available in [behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for those [RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") whose [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") includes BOs that are defined as [foreign entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry").
-   Its purpose is to handle messages of foreign entities, i. e. entities that are not directly exposed, within one [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry"). Depending on your business requirements, these messages might be available for the exposed RAP BO and mapped to the business context or just ignored and deleted.
-   If a RAP BO is defined as foreign entity in a BDEF, the responses in the [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm) parameter of the exposed RAP BO also contain this foreign entity as a component allowing the messages returned by the foreign entity to be mapped to the business context of the exposed RAP BO.
-   It is called if the RAP BOs that are defined as foreign entities return messages in their respective saver class.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Message Mapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/741dfc88293d4ac99186815b9fc35e31?version=sap_cross_product_abap).

Executable Example

The example [Example for RAP Saver Method map\_messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_map_messages_abexa.htm) demonstrates this RAP saver method within a RAP saver class using unmanaged RAP BOs.