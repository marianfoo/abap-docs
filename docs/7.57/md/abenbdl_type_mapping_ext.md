  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [CDS BDL - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\)) →  [CDS BDL - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)) →  [CDS BDL - Extending Elements](javascript:call_link\('abenbdl_ext_elem_ext.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extend mapping, ABENBDL_TYPE_MAPPING_EXT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extend mapping

Syntax

... extend mapping for PartnerType    *\[*control ControlType*\]*
                                      *{**\[*corresponding *\[*except Comp1,Comp2, ...*\]**\]**}*
    {
      EntityComp1      = PartnerComp1 *\[*control ControlComp*\]*;
     *\[*EntityComp2      = PartnerComp2 *\[*control ControlComp*\]*;*\]*
     *\[*parameter Param1 = PartnerComp;*\]*
     *\[*... ;*\]*
    }
  *|* mapping for PartnerType           *\[*control ControlComp*\]*
                                       corresponding *\[*except Comp1,Comp2, ...*\]*;
...

Effect

Extends an existing [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") with extension fields. The syntax is similar to the syntax for RAP type mapping RAP BOs, see topic [CDS BDL - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)). As a prerequisite, the respective type mapping must be explicitly defined as extensible as described in topic [CDS BDL - Extensibility Enabling for Managed and Unmanaged BDEFs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).