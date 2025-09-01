  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Type Mapping, ABENBDL_TYPE_MAPPING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

CDS BDL - Type Mapping

Syntax

... mapping for PartnerType           *\[*control ControlType*\]*
                                      *{**\[*corresponding *\[* [extensible](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))*\]**\[*except Comp1,Comp2, ...*\]**\]**}*
    {
      EntityComp1      = PartnerComp1 *\[*control ControlComp*\]*;
     *\[*EntityComp2      = PartnerComp2 *\[*control ControlComp*\]*;*\]*
     *\[*parameter Param1 = PartnerComp;*\]*
     *\[*... ;*\]*
    }
  *|* mapping for PartnerType           *\[*control ControlComp*\]*
                                       corresponding *\[*[extensible](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))*\]**\[*except Comp1,Comp2, ...*\]*;
...

Additions:

[1\. ... control](#!ABAP_ADDITION_1@1@)
[2\. ... corresponding *\[*except*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... corresponding extensible](#!ABAP_ADDITION_3@3@)

Effect

[RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") maps data types of the data model that is defined in CDS for a RAP BO to other data types that do not the match BDEF derived type component pattern. Type mapping is useful for applications whose [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") implements existing types or existing functions. The mapping connects a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") to an existing [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry") in the behavior definition of a business object.

PartnerType is the name of a [DDIC structure](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry"). Within curly brackets, components that correspond to each other but do not have the same name are mapped to each other.

It is also possible to map the [input parameters](javascript:call_link\('abenbdl_action_input_param.htm'\)) of actions and functions to existing types. Within the curly brackets, the keyword parameter must be used. Param1 is the name of an input parameter of an action or function.

If the names of the fields of the DDIC structure and in the current data model are exactly the same, no mapping is required. Otherwise, it is mandatory (syntax check warning).

No implementation in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

Availability

-   [Managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BOs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry")
-   [Abstract BDEFs](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry")

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic Using Type and Control Mapping.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. A type mapping from the fields of the database table to the fields of the BO entities is defined. This is required since the fields of the CDS view entities have alias names and therefore differ from the field names of the database table.

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
  field ( readonly:update ) KeyField;
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

control maps a type of the RAP business object to a [control structure](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry"). A control structure has the same components as PartnerType with the difference that all components have the [built-in ABAP type](javascript:call_link\('abenbuiltin_types_character.htm'\)) c(1) or x(1). Its function is to indicate which of the fields are accessed by an operation. The control structure works analogous to the [%control](javascript:call_link\('abapderived_types_comp.htm'\)) structure in derived types. A mapping can be done simultaneously for a main type PartnerType and for a control type ControlType.

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

The optional addition extensible enables [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") for the type mapping in question. That means that [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") are allowed to add extension fields to that particular type mapping. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.

Example: mapping for PartnerType corresponding extensible;.

For details on extensibility enabling, see topic [Extensibility Enabling](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).