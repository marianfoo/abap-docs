  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Released RAP BO, Design and Consumption, ABENC0_DEMO_RAP_BO, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Released RAP BO, Design and Consumption

This topic provides an example for the design of a C0 released RAP BO. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry").

CDS behavior definition of type managed as C0 released API

The following CDS behavior definition DEMO\_RAP\_BASE\_DET\_VAL is based on the CDS view entity DEMO\_RAP\_BASE\_DET\_VAL and it fulfills all requirements for C0 release:

-   It uses [strict mode 2](javascript:call_link\('abenbdl_strict_2.htm'\)).
-   It is declared as extensible.

Note: This CDS behavior definition demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_DET\_VAL
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
}

BDEF extension to a C0 released API

The following BDEF extension DEMO\_RAP\_EXT\_DET\_VAL extends the RAP BO displayed above and it obeys the naming rules.

extension implementation in class bp\_demo\_rap\_ext\_det\_val unique;
extend behavior for DEMO\_RAP\_BASE\_DET\_VAL
{
  determination setStatus on save { create; }
}