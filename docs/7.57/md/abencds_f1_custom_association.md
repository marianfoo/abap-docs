---
title: "CDS DDL - DEFINE CUSTOM ENTITY, association"
description: |
  Syntax ... ASSOCIATION  min..max  TO target ON cds_cond  WITH DEFAULT FILTER cds_cond(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm)  ... Additions: 1. ... min..max(#!ABAP_ADDITION_1@1@) 2. ... ON cds_cond(#!ABAP_A
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_association.htm"
abapFile: "abencds_f1_custom_association.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "custom", "association"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element_list.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE CUSTOM ENTITY, association, ABENCDS_F1_CUSTOM_ASSOCIATION, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, association

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target ON cds\_cond
                *\[* WITH DEFAULT FILTER [cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm) *\]* ...

Additions:

[1\. ... \[min..max\]](#!ABAP_ADDITION_1@1@)
[2\. ... ON cds\_cond](#!ABAP_ADDITION_2@2@)
[3\. ... WITH DEFAULT FILTER cds\_cond](#!ABAP_ADDITION_3@3@)

Effect

Defines a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element_list.htm) of a [CDS custom entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"). The CDS association uses an ON condition to associate the current CDS entity with the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") target. The association target can be a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS table function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry"), a [CDS hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), another CDS custom entity, a [CDS abstract entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), a [DDIC database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), or a [DDIC database view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_view_glosry.htm "Glossary Entry").

The syntax is similar to the syntax of the addition [ASSOCIATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_association_v2.htm) in the SELECT statement of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") with the following differences:

-   The addition AS \_assoc is not used. The CDS association is declared using the name \_assoc in the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element.htm) of the CDS custom entity, after which the addition ASSOCIATION is specified in the element list.
-   There are further restrictions regarding the syntax of the ON condition (see below).

A CDS association defined using the addition ASSOCIATION in the element list of a CDS custom entity is always exposed. It cannot, however, be used in any [SQL path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_path_expression_glosry.htm "Glossary Entry"), either in ABAP CDS or in ABAP SQL.

Hints

-   A CDS association of a CDS custom entity cannot be used anywhere where it could produce instances of join expressions.
-   For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_matrix.htm).

Example

The following DDL source code shows a CDS custom entity that exposes a CDS association with another CDS custom entity:

@EndUserText.label: 'CDS custom entity, association'
define custom entity DEMO\_CDS\_CUSTOM\_SO
  {
    key id               : abap.char(20);
        seller\_id        : abap.char(20);
        buyer\_id         : abap.char(20);
        act\_indicator    : abap.char( 1 );
        type\_code        : abap.char( 5 );
        \_type\_code\_texts : association \[0..\*\]  
          to demo\_sales\_so\_custom\_analytics
          on \_type\_code\_texts.TypeCode = DEMO\_CDS\_CUSTOM\_SO.type\_code;
  }

Addition 1   

... \[min..max\]

Effect

The same rules apply as described in topic [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_association_v2.htm).

Addition 2   

... ON cds\_cond

Effect

When specifying the ON condition, the following rules apply:

-   Fields of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") must be prefixed by the name of the data source.
-   The fields of the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") must be prefixed by the name of the CDS association (prefix \_assoc. separated by a period).
-   Fields that are listed in the SELECT list of the current view entity must be prefixed with $projection.

The following rules apply to the operands and syntax of the ON condition:

-   As relational operators, comparison operators are allowed as well as BETWEEN, LIKE, IS NULL, IS INITIAL.
-   The Boolean operators NOT, AND and OR are allowed.
-   lhs can be a [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of one of the two data sources [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the CDS association. If a comparison operator is used as operator, then lhs can also be an [untyped literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_untyped_literal_v2.htm).
    
    Note: [Typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typed_literal_v2.htm) are currently not supported at this position.
    
-   rhs can be a [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of both data sources [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the CDS association, an untyped literal, or a [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm). Exception: if the operator LIKE is used, then rhs must be an untyped character literal.
-   Path expressions are not allowed.
-   CDS DDL expressions are not allowed.

Note: Stricter rules exist for CDS custom entities that are used as queries in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry"). See the development guide for the ABAP RESTful Application Programming Model, section Query.

Addition 3   

... WITH DEFAULT FILTER cds\_cond

Effect

The same rules apply as described in topic [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_association_v2.htm).