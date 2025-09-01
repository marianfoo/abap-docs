  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, element\_list

Syntax

... { [element1](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); [element2](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); ...; } ...

Effect

Defines the elements of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); [element2](javascript:call_link\('abencds_f1_absent_list_element.htm'\)); ...; in curly brackets { }. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by an abstract CDS entity with respect to ABAP or they publish an association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](javascript:call_link\('abenddic_builtin_types.htm'\)).

Continue
[ABAP CDS - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\))