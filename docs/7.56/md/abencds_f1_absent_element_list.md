  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) → 

CDS DDL - DEFINE ABSTRACT ENTITY, element\_list

Syntax

... { [element1](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); [element2](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); ...; } ...

Effect

Defines the elements of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); [element2](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); ...; in curly brackets { }. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by a CDS abstract entity with respect to ABAP or they exposes a CDS association, a CDS composition, or a CDS-to-parent association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](javascript:call_link\('abenddic_builtin_types.htm'\)).

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\))