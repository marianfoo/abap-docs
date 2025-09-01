  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_header.htm) → 

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

The addition extensible can be used to allow [BDEF extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extension.htm). If it is not specified, then extensions are not allowed. As a prerequisite, [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) must be switched on using the keyword strict.

The keyword extensible must be specified in two places:

-   It must be declared in the [BDEF header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry")
-   It must be declared in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each individual entity that allows BDEF extensions.

In the header declaration, the kinds of [validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm) and [determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm) allowed in the BDEF extensions can be specified. It is required to explicitly allow determinations and validations in BDEF extensions. If not declared explicitly, a BDEF extension is not allowed to define the respective type of determination or validation. The following syntax additions are available:

-   with validations on save
-   with determinations on save
-   with determinations on modify

Currently, the keyword extensible is only available for [managed RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and for [projection BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"). In projection BDEFs, only the keyword extensible is possible, without any further additions. See also topic [CDS BDL - CDS behavior definition header, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_projection_header.htm).

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