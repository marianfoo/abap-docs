  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [RAP - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\)) →  [RAP - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)) →  [RAP - Extending Elements](javascript:call_link\('abenbdl_ext_elem_ext.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extend%20mapping%2C%20ABENBDL_TYPE_MAPPING_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - extend mapping

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

Extends an existing [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") with extension fields. The syntax is similar to the syntax for RAP type mapping RAP BOs, see topic [RAP - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)). As a prerequisite, the respective type mapping must be explicitly defined as extensible as described in topic [RAP - Extensibility Enabling for Base BOs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).