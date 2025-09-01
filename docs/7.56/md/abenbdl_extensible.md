  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - CDS behavior definition header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

CDS BDL - extensible

Syntax

...
extensible *\[*{
  *\[*with validations on save*\]*
  *\[*with determinations on save*\]*
  *\[*with determinations on modify*\]*
}*\]*
...

Effect

The addition extensible can be used to allow [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)). If it is not specified, then extensions are not allowed. As a prerequisite, [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) must be switched on using the keyword strict.

The keyword extensible must be specified in two places:

-   It must be declared in the [BDEF header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry")
-   It must be declared in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") for each individual entity that allows BDEF extensions.

In the header declaration, the kinds of [validations](javascript:call_link\('abenbdl_validations.htm'\)) and [determinations](javascript:call_link\('abenbdl_determinations.htm'\)) allowed in the BDEF extensions can be specified. It is required to explicitly allow determinations and validations in BDEF extensions. If not declared explicitly, a BDEF extension is not allowed to define the respective type of determination or validation. The following syntax additions are available:

-   with validations on save
-   with determinations on save
-   with determinations on modify

Currently, the keyword extensible is only available for [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and for [projection BDEFs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). In projection BDEFs, only the keyword extensible is possible, without any further additions. See also topic [CDS BDL - CDS behavior definition header, projection BDEF](javascript:call_link\('abenbdl_bdef_projection_header.htm'\)).

Example

The CDS behavior definition for DEMO\_RAP\_EXTENSIBLE enables BDEF extensions by specifying the keyword extensible in the BDEF header and in the entity behavior definition for the root node DEMO\_RAP\_EXTENSIBLE.

managed implementation in class bp\_demo\_rap\_extensible unique;
strict;
extensible
{
  with validations on save;
  with determinations on save;
}
define behavior for DEMO\_RAP\_EXTENSIBLE
persistent table demo\_dbtab\_root
lock master
authorization master ( global )
extensible
{
  create;
  update;
  delete;
}