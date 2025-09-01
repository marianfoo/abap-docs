  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Type%20Mapping%2C%20ABENBDL_TYPE_MAPPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Type Mapping

Syntax

... mapping for PartnerType           *\[*control ControlType*\]*
                                      *{**\[*corresponding *\[* [extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm)*\]**\[*except Comp1,Comp2, ...*\]**\]**}*
    {
      EntityComp1      = PartnerComp1 *\[*control ControlComp*\]*;
     *\[*EntityComp2      = PartnerComp2 *\[*control ControlComp*\]*;*\]*
     *\[*parameter Param1 = PartnerComp;*\]*
     *\[*... ;*\]*
    }
  *|* mapping for PartnerType           *\[*control ControlComp*\]*
                                       corresponding *\[*[extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm)*\]**\[*except Comp1,Comp2, ...*\]*;
...

Additions:

[1\. ... control](#!ABAP_ADDITION_1@1@)
[2\. ... corresponding *\[*except*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... corresponding extensible](#!ABAP_ADDITION_3@3@)

Effect

[RAP type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") maps data types of the data model that is defined in CDS for a RAP BO to other data types that do not the match BDEF derived type component pattern. Type mapping is useful for applications whose [business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_object_glosry.htm "Glossary Entry") implements existing types or existing functions. The mapping connects a [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") to an existing [DDIC type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_type_glosry.htm "Glossary Entry") in the behavior definition of a business object.

PartnerType is the name of a [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structure_glosry.htm "Glossary Entry"). Within curly brackets, components that correspond to each other but do not have the same name are mapped to each other.

It is also possible to map the [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm) of actions and functions to existing types. Within the curly brackets, the keyword parameter must be used. Param1 is the name of an input parameter of an action or function.

If the names of the fields of the DDIC structure and in the current data model are exactly the same, no mapping is required. Otherwise, it is mandatory (syntax check warning).

No implementation in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.

The [assignment and conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) for elementary data objects apply to the mapping of components.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")
-   [Abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry")

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic [Using Type and Control Mapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b143178489a4397a0eb5013d4c8b03d?version=sap_cross_product_abap).

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. A type mapping from the fields of the database table to the fields of the BO entities is defined. This is required since the fields of the CDS view entities have alias names and therefore differ from the field names of the database table.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root
persistent table demo\_dbtab\_root
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_ext { create; }
  field ( readonly:update ) KeyFieldRoot;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    DecFieldRoot = dec\_field;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child
persistent table demo\_dbtab\_child
lock dependent by \_parent
{
  update;
  delete;
  association \_parent { }
  field ( readonly:update ) KeyField, KeyFieldChild;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}

Addition 1   

... control

Effect

control maps a type of the RAP business object to a [control structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_structure_glosry.htm "Glossary Entry"). A control structure has the same components as PartnerType with the difference that all components have the [built-in ABAP type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_character.htm) c(1) or x(1). Its function is to indicate which of the fields are accessed by an operation. The control structure works analogous to the [%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) structure in derived types. A mapping can be done simultaneously for a main type PartnerType and for a control type ControlType.

In a standard use case, the field names of the main and the control types should be identical. If this is not the case, fields can be mapped to each other using the addition control.

If a component of the main structure is missing in the control structure, this is tolerated and leads to two independently executable mappings.

Addition 2   

... corresponding *\[*except*\]*

Effect

The optional addition corresponding defines that components with the same name are automatically mapped to each other. The addition except can be specified together with corresponding to exclude components with identical names from the automatic mapping.

Example: mapping for PartnerType corresponding;.

Addition 3   

... corresponding extensible

Effect

The optional addition extensible enables [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry") for the type mapping in question. That means that [RAP BO consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") are allowed to add extension fields to that particular type mapping. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.

Example: mapping for PartnerType corresponding extensible;.

For details on extensibility enabling, see topic [RAP - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm).