  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, element\_list

Syntax

... { [element1](javascript:call_link\('abencds_f1_custom_element.htm'\)); [element2](javascript:call_link\('abencds_f1_custom_element.htm'\)); ...; } ...

Effect

Defines the elements of a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](javascript:call_link\('abencds_f1_custom_element.htm'\)); [element2](javascript:call_link\('abencds_f1_custom_element.htm'\)); ...; in curly brackets { }. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by the CDS custom entity with respect to ABAP, or they define and expose a [CDS association](javascript:call_link\('abencds_f1_custom_association.htm'\)), a [CDS composition](javascript:call_link\('abencds_f1_custom_composition.htm'\)), or a [CDS to-parent association](javascript:call_link\('abencds_f1_custom_tp_association.htm'\)).

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](javascript:call_link\('abenddic_builtin_types.htm'\)).

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, element](javascript:call_link\('abencds_f1_custom_element.htm'\))