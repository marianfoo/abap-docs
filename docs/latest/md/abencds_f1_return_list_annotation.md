  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_functions.htm) →  [CDS DDL - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_table_function.htm) →  [CDS DDL - DEFINE TABLE FUNCTION, element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list.htm) →  [CDS DDL - DEFINE TABLE FUNCTION, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20TABLE%20FUNCTION%2C%20element_annot%2C%20ABENCDS_F1_RETURN_LIST_ANNOTATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

CDS DDL - DEFINE TABLE FUNCTION, element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) in the definition of an [element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_element.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") as element notation. Element annotations can be specified before and after the element.

-   In front of the element, the character @ must be placed before the name annotation of the annotation.
-   Following the element, the characters @< must be placed before the name annotation of the annotation.

The elements of [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm).