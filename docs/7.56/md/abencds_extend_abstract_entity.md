  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS entity extension](javascript:call_link\('abencds_view_extension.htm'\)) → 

CDS DDL - EXTEND ABSTRACT ENTITY

Syntax

EXTEND ABSTRACT ENTITY cds\_abstract\_entity
       WITH
            { element\_list\_extension }

Effect

Extends an existing [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") cds\_abstract\_entity using a [CDS abstract entity extension](javascript:call_link\('abencds_abs_entity_extend_glosry.htm'\) "Glossary Entry") in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). An existing CDS abstract entity can have one or more CDS abstract entity extensions.

Prerequisite

As a prerequisite for the enhancement of the CDS abstract entity with the statement EXTEND ABSTRACT ENTITY, the base entity must allow extensions. Extensions are allowed per default or can be explicitly allowed with the annotation [AbapCatalog.extensibility.extensible](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) with the value true. If the value false is specified, extensions are not allowed.

Components of an abstract entity extension

Abstract entity extensions can make additions to the original entity, but they can't modify, overwrite, or delete elements from the original entity. An abstract entity extension can specify only features that are possible within abstract entities, but with some limitations. The following can be specified in an abstract entity extension:

-   New elements. These new elements are defined as described in topic [DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)). Those elements can have [element annotations](javascript:call_link\('abencds_f1_absent_list_annotation.htm'\)). New key elements are not possible.
-   New associations \_assoc1, \_assoc2 can be defined in the CDS abstract entity extension. The same rules apply that are described in topic [DEFINE ABSTRACT ENTITY, association](javascript:call_link\('abencds_f1_absent_association.htm'\)).
    
    Note: It is not allowed to define new [CDS to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in an abstract entity extension. New [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") associations are allowed under the condition that the composition target is also defined as composition child and has the required to-parent association. The composition target is the extended abstract entity, not the extension itself.
    
-   Each appended element must have a unique name.

Restrictions

-   CDS abstract entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) in an abstract entity extension.
-   No addition ROOT can be specified in the statement EXTEND ABSTRACT ENTITY to transform a regular entity to a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").
-   An appended element cannot be defined as a KEY element.
-   In an abstract entity extension, [header annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) are not supported. That means that no annotations are allowed in front of the statement EXTEND ABSTRACT ENTITY.

Example

The following CDS abstract entity extension

extend abstract entity DEMO\_CDS\_ORIGINAL\_ABSTRACT with
{
  col4   : abap.char( 1 );
  \_assoc : association to demo\_cds\_abstract\_entity  
             on $projection.col1 = \_assoc.col1;
}

adds a new element and a new association to the existing CDS abstract entity

@EndUserText.label: 'CDS abstract entity with extension'
@AbapCatalog.extensibility.extensible: true
define abstract entity DEMO\_CDS\_ORIGINAL\_ABSTRACT
  with parameters
    param1 : abap.int4
{
  col1 : abap.char( 5 );
  col2 : abap.int4;
  col3 : abap.int4;
} .

The program DEMO\_CDS\_ABSTRACT\_EXTEND evaluates the structure of the enhanced CDS abstract entity using [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") methods.