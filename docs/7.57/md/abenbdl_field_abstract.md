  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [CDS BDL - Entity Behavior Definition, Abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) →  [CDS BDL - Entity Behavior Body, Abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Field Characteristics, Abstract BDEF, ABENBDL_FIELD_ABSTRACT, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Field Characteristics, Abstract BDEF

Syntax

... field(suppress) Field1, Field2, ...;

Effect

In an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry"), there is only one field characteristic available: field(suppress). It can be used to remove a field from all [derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") generated for the BDEF. In particular, the redundancy is avoided in the [TYPE TABLE FOR HIERARCHY](javascript:call_link\('abaptype_table_for.htm'\)) / [TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abaptype_structure_for.htm'\)) types.

Commas can be used to classify multiple fields in the same way. Example: field(suppress) Field1, Field2, Field3;

Hint

A typical use case for field(suppress) was to exclude foreign-key fields used in the ON condition of the [to-parent association](javascript:call_link\('abencds_absent_to_parent_assoc.htm'\)) to appear redundantly in the hierarchical type. This was particularly useful when it was still mandatory to define an ON condition in to-parent associations of CDS abstract entities. However, since release 7.56, the ON condition can be left out.

Example

The following abstract BDEF suppresses one field from its derived type.

abstract;
strict(2);
define behavior for DEMO\_CDS\_SCALAR\_ROOT\_3 alias Root
{
  field ( suppress ) field2;
}

Executable Example

An executable example is available in topic [Using TYPE TABLE /TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abenderived_type_hierarchy_abexa.htm'\)).