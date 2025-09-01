  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - CDS Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) →  [CDS BDL - BDEF Strict Mode](javascript:call_link\('abenbdl_strict.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - strict, ABENBDL_STRICT_1, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

CDS BDL - strict

Syntax

...
strict;
...

Effect

The addition strict enables [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry"), version 1.

strict must always appear as the second line in a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

A complete list of additional syntax requirements in BDEF strict mode is provided in the development guide for the ABAP RESTful Application Programming Model, section Strict Mode - Implementation Requirements.

Related information:

[CDS BDL - BDEF Strict Mode](javascript:call_link\('abenbdl_strict.htm'\))

[CDS BDL - strict(2)](javascript:call_link\('abenbdl_strict_2.htm'\))

Example - Managed

The following CDS behavior definition demonstrates the syntax for enabling strict mode. It is mandatory that the keyword strict is the second statement of the behavior definition.

In this example, strict mode enforces [authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry").

managed implementation in class bp\_demo\_rap\_strict unique;
strict;
define behavior for DEMO\_RAP\_STRICT
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( global )
{
  create;
  update;
  delete;
}

Example - Unmanaged

The following CDS behavior definition shows an unmanaged BDEF with strict mode. It is mandatory that the keyword strict is the second statement of the behavior definition.

In this example, strict mode enforces the following:

-   Each entity must be defined as lock master or lock dependent
-   Each entity must be defined as authorization master or authorization dependent
-   The child entity must explicitly specify the to-parent association
-   The field key\_field, which is used in the ON condition of the to-parent association \_parent, must be specified as readonly.
    
    unmanaged implementation in class bp\_demo\_unmanaged\_root\_strict unique;
    strict;
    define behavior for DEMO\_UNMANAGED\_ROOT\_STRICT
    lock master
    authorization master ( instance )
    {
      create;
      update;
      delete;
      association \_child { create; }
    }
    define behavior for DEMO\_UNMANAGED\_CHILD\_STRICT
    lock dependent by \_parent
    authorization dependent by \_parent
    {
      update;
      delete;
      association \_parent;
      field ( readonly ) key\_field;
    }