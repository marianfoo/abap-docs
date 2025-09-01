  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_abstract_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20ABSTRACT%20ENTITY%2C%20element_list%2C%20ABENCDS_F1_ABSENT_ELEMENT_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, element\_list

Syntax

... { [element1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm); ...; } ...

Effect

Defines the elements of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm); ...; in curly brackets { }. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by a CDS abstract entity with respect to ABAP or they exposes a CDS association, a CDS to-child association, or a CDS-to-parent association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm)