  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](javascript:call_link\('abencds_f1_custom_element.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20To-Parent%20Association%2C%20ABENCDS_F1_CUSTOM_TP_ASSOCIATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, To-Parent Association

Syntax

... ASSOCIATION TO PARENT target ON $projection.[cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

Defines a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of a [CDS custom entity](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)).

The CDS to-parent association associates the current CDS entity, as a [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"), with the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and the same rules apply as described in topic [CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\)). The only difference is that the addition AS\_assoc is not used. The name of the to-parent association is declared using the name \_to\_parent in the [element list](javascript:call_link\('abencds_f1_custom_element.htm'\)) of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity that defines a CDS to-parent association to another CDS custom entity:

@EndUserText.label: 'Child custom entity'
define custom entity DEMO\_SALES\_CUSTOM\_CHILD
  {
    key id          : abap.char(20);
        parent\_id   : abap.char(20);
        item\_number : abap.char(20);
        type\_code   : abap.char(5);
        \_items      :  
          association to parent demo\_sales\_custom\_composition
          on \_items.id = $projection.id;
  }