  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [CDS BDL - CDS abstract behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm) →  [CDS BDL - entity behavior definition, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_abstract.htm) →  [CDS BDL - entity behavior body, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body_abstract.htm) → 

CDS BDL - field characteristics, abstract BDEF

Syntax

... field(suppress) Field1, Field2, ...;

Effect

In an [abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"), there's only one field characteristic available: field(suppress). It can be used to remove a field from all [derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") generated for the BDEF. In particular, the redundancy is avoided in the [TYPE TABLE FOR HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) / [TYPE STRUCTURE FOR HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm) types.

Commas can be used to classify multiple fields in the same way. Example: field(suppress) Field1, Field2, Field3;

Hint

A typical use case for field(suppress) was to exclude foreign-key fields used in the ON condition of the [to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_absent_to_parent_assoc.htm) to appear redundantly in the hierarchical type. This was particularly useful when it was still mandatory to define an ON condition in to-parent associations of CDS abstract entities. However, since release 7.56, the ON condition can be left out.

Example

The following abstract BDEF suppresses one field from its derived type.

CDS source code was not found