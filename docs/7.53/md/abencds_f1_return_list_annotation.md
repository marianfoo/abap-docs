  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) →  [ABAP CDS - DEFINE TABLE FUNCTION, element\_list](javascript:call_link\('abencds_f1_return_list.htm'\)) →  [ABAP CDS - DEFINE TABLE FUNCTION, element](javascript:call_link\('abencds_f1_return_list_element.htm'\)) → 

ABAP CDS - DEFINE TABLE FUNCTION, element\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of an [element](javascript:call_link\('abencds_f1_return_list_element.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as element notation. Element annotations can be specified before and after the element.

-   In front of the element, the character @ must be placed before the name annotation of the annotation.

-   Following the element, the characters @< must be placed before the name annotation of the annotation.

The elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](javascript:call_link\('abencds_f1_element_annotation.htm'\)).