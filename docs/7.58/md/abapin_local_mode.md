  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20IN%20LOCAL%20MODE%2C%20ABAPIN_LOCAL_MODE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - IN LOCAL MODE

Syntax

... IN LOCAL MODE ...

Effect

The addition is used to exclude feature controls and authorization checks. It can be added to the following EML statements:

-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm)
-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm)

It can currently only be used in RAP BO implementations for the particular RAP BO itself, i. e. not for other RAP BOs. That means IN LOCAL MODE can only be used for this RAP BO's implementation classes in the behavior pool or other classes that are called from those implementation classes (for example, legacy code or other reused logic contained elsewhere). The reused logic contained elsewhere cannot be referred to by RAP statically. In that case, a warning is displayed in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). Yet, at runtime, there will not be an issue if this logic is called via the implementation classes of this RAP BO. If the reused logic is not called from the implementation classes of this RAP BO or it is called indirectly, a short dump is the consequence. For example, if the logic is called from a report (the implementation class of the RAP BO is not called at all) or if, at runtime, another RAP BO is meanwhile involved.

Example use case: A field to display the booking status of a trip on an SAP Fiori UI is specified as readonly in a [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Hence, it cannot be modified by a user on the UI directly. For example, the status of a trip is set to and displayed as not booked. A button on the UI triggers an action to book the trip. With clicking the button, the status gets changed and booked is displayed. To enable this, the underlying modify operation with the action to be executed in the ABP has the addition IN LOCAL MODE that ignores the feature control.

Hints

-   ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) and [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) statements using the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm) are not allowed in [BAdIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_glosry.htm "Glossary Entry") and should only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
-   When specifying the REPORTED response parameter for an ABAP EML READ request, the related [RAP state messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") of the instances and child entities of a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the REPORTED response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and an entity instance contains a state message, the component [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm) of the REPORTED response contains %STATE as an indicator for state messages. When using ABAP EML READ statements with the addition IN LOCAL MODE in behavior implementations, the original value of %state\_area can be retrieved. See the example [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_messages_abexa.htm).

Example

The following source code section is taken from the CCIMP include of a behavior pool (the global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3). It is used in the context of the get\_instance\_features method of the executable example CL\_DEMO\_RAP\_EML\_GET\_PERMISSION.

READ ENTITIES OF demo\_managed\_root\_3 IN LOCAL MODE
  ENTITY demo\_managed\_root\_3
  FIELDS ( data\_field3\_root data\_field4\_root )
  WITH CORRESPONDING #( keys )
  RESULT DATA(lt\_numbers)
  FAILED DATA(failed).