---
title: "RAP - event"
description: |
  Syntax event EventName deep parameter ParamName; Effect Defines a RAP business event(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm 'Glossary Entry') in the root node of a managed(https://help.sap.com/doc/abapdocu_latest_index_htm/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_event.htm"
abapFile: "abenbdl_event.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "abenbdl", "event"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_event_overview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20event%2C%20ABENBDL_EVENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - event

Syntax

event EventName *\[**\[*deep*\]* parameter ParamName*\]*;

Effect

Defines a [RAP business event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") in the root node of a [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") or [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"). A RAP business event is a data record that expresses a significant change in the state of a [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). An interested party that has subscribed to this event can consume and process it.

Currently, RAP business events can be defined only in the root node of a RAP business object.

An [output parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") ParamName can optionally be defined to specify the information that is passed to the event consumers. This information is called the payload of the event.

-   If parameter ParamName is specified, ParamName must be a [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). The parameter is flat in this case. This means that the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for the parameter contains a component for each field of the CDS abstract entity.
-   If deep parameter ParamName is specified, ParamName must be an [abstract BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") [with hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_abstract_header.htm). The parameter is deep in this case. This means that the BDEF derived type for the parameter is a hierarchy that contains all entity fields plus the components for every [CDS composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_glosry.htm "Glossary Entry").

A RAP business event must be raised in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") of the RAP BO in question with the [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") statement [RAISE ENTITY EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_entity_event.htm). It is recommended that RAP business events are raised during the [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_save.htm) or [save\_modified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_saver_meth_save_modified.htm). In managed RAP BOs, it is recommended that a [RAP additional save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_add_save_glosry.htm "Glossary Entry") is specified using the syntax addition [with additional save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) and raise the RAP business event in this additional save implementation.

Availability

-   RAP business events can be defined in [managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and in [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry").
-   They can also be defined in [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry") for managed and unmanaged RAP BOs. This is described in topic [RAP BDL - Adding Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_new_elem_ext.htm).
-   RAP business events can be reused in [RAP interface behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") using the keyword use event. This is described in the topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).
    
    Note: Reusing RAP business events in [RAP projection behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") is not possible.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

Hint

Once a RAP business event has been created and raised, an event binding must be defined to map the event to an event type.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_EVENT. It defines two events:

-   myEvent defines a flat output parameter
-   myEvent1 defines a deep output parameter
    
    managed with additional save
    implementation in class bp\_demo\_rap\_event unique;
    strict ( 2 );
    define behavior for DEMO\_RAP\_EVENT alias Root
    persistent table demo\_dbtab\_root
    lock master
    authorization master ( instance )
    {
      create;
      update;
      delete;
      field ( readonly : update ) key\_field;
      event myEvent parameter demo\_abstract\_root\_1;
      event myEvent1 deep parameter demo\_abstract\_root;
    }
    

The following CDS abstract entity is used as flat parameter:

@EndUserText.label: 'CDS root abstract entity, RAP event demo'
define abstract entity DEMO\_ABSTRACT\_ROOT\_1
{
     col1: abap.int4;
     col2: abap.char(25);    
}

The following abstract BDEF is used as deep parameter:

abstract;
strict;
with hierarchy;
define behavior for DEMO\_ABSTRACT\_ROOT with control
{
  association \_item1;
  association \_item2;
  association \_scalar;
  field ( mandatory :execute ) num1;
}
define behavior for DEMO\_HIER\_ABS\_ITEM1 with control
{
  field ( suppress ) root2\_id;
  association \_root2 with hierarchy;
}
define behavior for DEMO\_HIER\_ABS\_ITEM2 with control
{
}
scalar entity DEMO\_HIER\_ABS\_SCALAR field char1;

The RAP business event is raised in the RAP saver method save\_modified as follows:

METHOD save\_modified.
  IF create-root IS NOT INITIAL.
    RAISE ENTITY EVENT demo\_rap\_event~MyEvent
      FROM VALUE #(
        FOR var IN create-root (
            col1        = var-data\_field
            col2        = var-char\_field
            %param = VALUE #(  ) ) ).
  ENDIF.
  IF update-root IS NOT INITIAL.
    RAISE ENTITY EVENT demo\_rap\_event~MyEvent1
      FROM VALUE #(
        FOR var2 IN create-root (
            char1      = var2-char\_field
            num1       = var2-data\_field
            %param = VALUE #(  ) ) ).
  ENDIF.
ENDMETHOD.

The BDEF derived type of the flat parameter looks as follows:

![Figure](flat_para.jpg)

The BDEF derived type of the deep parameter looks as follows:

![Figure](deep_para2.jpg)